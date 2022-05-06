<p align="center">
  <img src="./screenshots/logo.png">
</p>

---

A game engine for the web.

The goal of Trident is to provide a fully featured game engine for the web without the learning curve.
Therefore it implements an entity-component-system that closely resembles Unity.

[Documentation](./docs/) — [Examples](./dist-examples/)

---

## Features
* Rendering engine (THREE)
* Physics engine, with debugger (PhysX)
* Entity component system
* Typescript
---
## Installation
```javascript
yarn add https://github.com/AIFanatic/trident 
```
---
## Usage
### Basic scene
Creates a new scene, adds a Cube and changes its position.

[Live example](https://aifanatic.github.io/Trident/dist-examples/Mesh.Cube.html)

- Typescript
```javascript
import { Runtime, GameObject, PrimitiveType } from 'trident';

const config = {
    renderer: {
        containerId: "canvasContainer",
    },
    physics: {
        physxWasmURL: "./dist/trident-physx-js-webidl/dist/trident-physx-js-webidl.wasm.wasm"
    },
};

const runtime = new Runtime(config);
runtime.OnLoaded = () => {
    const scene = Runtime.SceneManager.CreateScene("New Scene");
    Runtime.SceneManager.SetActiveScene(scene);

    const cubeGameobject = new GameObject(scene);
    cubeGameobject.CreatePrimitive(PrimitiveType.Cube);
    cubeComponent.transform.position.set(0, -2, -10);

    scene.Load();
    scene.Start();
}
```

- Browser
```html
<html>
    <body>
        <canvas id="canvasContainer"></canvas>

        <script type="module">
            import { Scene, GameObject, PrimitiveType } from './dist/esm/trident-esm-bundle.js';

            const config = {
                renderer: {
                    containerId: "canvasContainer",
                },
                physics: {
                    physxWasmURL: "./dist/trident-physx-js-webidl/dist/trident-physx-js-webidl.wasm.wasm"
                },
            };

            const runtime = new Runtime(config);
            runtime.OnLoaded = () => {
                const scene = Runtime.SceneManager.CreateScene("New Scene");
                Runtime.SceneManager.SetActiveScene(scene);

                const cubeGameobject = new GameObject(scene);
                cubeGameobject.CreatePrimitive(PrimitiveType.Cube);
                cubeComponent.transform.position.set(0, -2, -10);

                scene.Load();
                scene.Start();
            }
        </script>
    </body>
</html>
```

### Custom component
Creates a new scene, adds a CustomComponent which in turn adds a Cube to itself and rotates it every frame.

[Live example](https://aifanatic.github.io/Trident/dist-examples/Components.Custom.html)

- Typescript
```javascript
import { Scene, GameObject, Components, PrimitiveType } from 'trident';

class CustomComponent extends Components.Component {
    public Start() {
        this.gameObject.CreatePrimitive(PrimitiveType.Cube);
    }

    public Update() {
        this.transform.eulerAngles.x += 1;
    }
}

const config = {
    renderer: {
        containerId: "canvasContainer",
    },
    physics: {
        physxWasmURL: "./dist/trident-physx-js-webidl/dist/trident-physx-js-webidl.wasm.wasm"
    },
};

const runtime = new Runtime(config);
runtime.OnLoaded = () => {
    const scene = Runtime.SceneManager.CreateScene("New Scene");
    Runtime.SceneManager.SetActiveScene(scene);

    const cubeGameobject = new GameObject(scene);
    const cubeComponent = cubeGameobject.AddComponent(CustomComponent)

    scene.Load();
    scene.Start();
}
```