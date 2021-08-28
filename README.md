# Trident

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

[Live example](./dist-examples/Mesh.Cube.html)

- Typescript
```javascript
import { Scene, GameObject, Components } from 'trident';

const rendererConfig = {
    containerId: "canvasContainer",
    targetFrameRate: 60,
};
const physicsConfig = {
    physxWasmURL: "./dist/trident-physx-js-webidl/dist/trident-physx-js-webidl.wasm.wasm",
};

const scene = new Scene(rendererConfig, physicsConfig);

scene.OnLoaded = () => {
    const cubeGameobject = new GameObject(scene);
    const cubeComponent = cubeGameobject.AddComponent(Components.Cube) as Components.Cube;
    cubeComponent.transform.position.set(0, -2, -10);

    scene.Start();
};
```

- Browser
```html
<html>
    <body>
        <canvas id="canvasContainer"></canvas>

        <script type="module">
            import { Scene, GameObject, Components } from './dist/esm/trident-esm-bundle.js';

            const rendererConfig = {
                containerId: "canvasContainer",
                targetFrameRate: 60,
            };
            const physicsConfig = {
                physxWasmURL: "./dist/trident-physx-js-webidl/dist/trident-physx-js-webidl.wasm.wasm",
            };

            const scene = new Scene(rendererConfig, physicsConfig);

            scene.OnLoaded = () => {
                const cubeGameobject = new GameObject(scene);
                const cubeComponent = cubeGameobject.AddComponent(Components.Cube);
                cubeComponent.transform.position.set(0, -2, -10);

                scene.Start();
            };
            
        </script>
    </body>
</html>
```

### Custom component
Creates a new scene, adds a CustomComponent which in turn adds a Cube to itself and rotates it every frame.

[Live example](./dist-examples/Components.Custom.html)

- Typescript
```javascript
import { Scene, GameObject, Components } from 'trident';

class CustomComponent extends Components.Component {
    private cube: Components.Cube;

    public Start() {
        this.cube = this.gameObject.AddComponent(Components.Cube);
    }

    public Update() {
        this.cube.transform.eulerAngles.x += 1;
    }
}

const rendererConfig = {
    containerId: "canvasContainer",
    targetFrameRate: 60,
}

const physicsConfig = {
    physxWasmURL: "./dist/trident-physx-js-webidl/dist/trident-physx-js-webidl.wasm.wasm",
}

const scene = new Scene(rendererConfig, physicsConfig);
scene.OnLoaded = () => {
    const cubeGameobject = new GameObject(scene);
    const cubeComponent = cubeGameobject.AddComponent(CustomComponent) as CustomComponent;
    cubeComponent.transform.position.set(0, -2, -10);
    
    scene.Start()
};
```
---
## TODO
- [ ] Collider
  - [ ] OnCollisionEnter
  - [ ] OnCollisionExit
  - [ ] OnTriggerEnter
  - [ ] OnTriggerExit
- [ ] Physics
  - [ ] Raycast (partially implemented)
- [ ] Joints
  - [ ] ArticulatedBody