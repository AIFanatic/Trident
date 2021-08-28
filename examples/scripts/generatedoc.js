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

const getStringBetween = (str, start, end) => {
    try {
        return str.split(start)[1].split(end)[0];
    } catch (error) {
        return "";
    }
}

const files = getJSFilesRecursively("./examples", "ts");

let descriptions = [];
for (let example_filename of files) {
    try {
        const example_code = fs.readFileSync(example_filename, {encoding:'utf8', flag:'r'});
    
        let description = "";
        if (example_code.includes("@description")) {
            description = getStringBetween(example_code, "@description", "\n");
        }

        const category = getStringBetween(example_filename, "examples/", ".");
        const example_name = example_filename.replace("examples/", "").replace(".ts", "");

        descriptions.push({
            category: category,
            name: example_name,
            filename: example_filename, 
            description: description
        })
    } catch (error) {
        console.error(example_filename, error);
    }
}

// Create markdown
const gh_page_url = "https://aifanatic.github.io/Trident/dist-examples";

let markdown_template = `
# Trident examples

|Category|Example|Description|
|-|-|-|
`
for (let description of descriptions) {
    const link = `[${description.name}](${gh_page_url}/${description.name}.html)`
    markdown_template += `|${description.category}|${link}|${description.description}|\n`;
}

fs.writeFile(path.join(__dirname, "../../dist-examples/README.md"), markdown_template, function (err) {
    if (err) return console.log(err);
});

console.log("Generated examples README.md");