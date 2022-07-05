/**
 * @description Creates a terrain from a heightmap.
 */
import { SceneHelper } from './assets/SceneHelper.js';
import { Scene, GameObject, Components, PrimitiveType, THREE } from '../dist/esm/trident-esm-bundle.js';

SceneHelper.CreateRuntime({}).then(runtime => {
    const scene = SceneHelper.CreateScene();

    const camera = SceneHelper.CreateCamera(scene, -30, 0, -10);
    camera.transform.eulerAngles.set(0, -120, 0);
    SceneHelper.CreateSunlight(scene);
    
    const terrainGameObject = new GameObject(scene);
    terrainGameObject.transform.position.y = -10;
    terrainGameObject.transform.position.x = -5;
    terrainGameObject.transform.position.z = -5;
    const terrainComponent = terrainGameObject.AddComponent(Components.Terrain);

    const sphereGameObject = new GameObject(scene);
    sphereGameObject.transform.position.y = -2;
    sphereGameObject.CreatePrimitive(PrimitiveType.Sphere);
    const sphereRigidBody = sphereGameObject.AddComponent(Components.Rigidbody);
    
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load( './assets/checkered.jpg', ( texture ) => {
        texture.repeat.set(10, 10);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;

        const material = new THREE.MeshStandardMaterial();
        material.map = texture;
        material.needsUpdate = true;
        material.side = THREE.DoubleSide;

        terrainComponent.material = material;

        textureLoader.load( './assets/heightmap.jpg', ( texture ) => {
            terrainComponent.terrainData.heightmapTexture = texture;
            terrainComponent.Flush();
        })
    });

    runtime.Load();
    runtime.Play();

    setTimeout(() => {
        sphereRigidBody.AddForce(new THREE.Vector3(0.2, 1, 0.2).multiplyScalar(800));
    }, 5000);
});