// Convert examples js code to a single html file

const HTML_TEMPLATE =
`<html>
    <head></head>

    <body style="margin: 0">
        <canvas id="canvasContainer"></canvas>

        <script type="module">
%example_code%
        </script>
    </body>
</html>`;

const fs = require("fs");
const path = require("path");

const getJSFilesRecursively = (directory, extension) => {
    let files = [];
    const getFilesFromFolder = (directory) => {
        const filesInDirectory = fs.readdirSync(directory);
        for (const file of filesInDirectory) {
            const absolute = path.join(directory, file);
            if (fs.statSync(absolute).isDirectory()) {
                getFilesFromFolder(absolute);
            } else {
                if (absolute.substr(absolute.length-3, absolute.length) == "." + extension) {
                    files.push(absolute);
                }
            }
        }
    }
    getFilesFromFolder(directory);
    return files;
};

const parseCode = (template, code) => {
    const formattedCode = 
        code.replace(/\n/g, "\n            ") // Add indentation to code
        .replace("", "            ") // Add indentation to first line
    
    return template .replace("%example_code%", formattedCode);
}

const files = getJSFilesRecursively("./dist-examples", "js")

for (let example_filename of files) {
    fs.readFile(example_filename, 'utf8' , (err, example_code) => {
        if (err) return console.error(err);

        console.log("Processing:", example_filename)
        const html_filename = example_filename.replace(".js", ".html");
        const html = parseCode(HTML_TEMPLATE, example_code)

        fs.writeFile(html_filename, html, function (err) {
            if (err) return console.log(err);

            fs.unlinkSync(example_filename)
        });
    })
}