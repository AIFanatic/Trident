/**
 * @description A bunch of shapes with physics.
 */
import { SceneHelper } from './assets/SceneHelper.js';
import { Scene, GameObject, Components, PrimitiveType, Resources, THREE } from '../dist/esm/trident-esm-bundle.js';

SceneHelper.CreateRuntime({}).then(runtime => {
    const scene = SceneHelper.CreateScene();

    SceneHelper.CreateCamera(scene, 0, 0, 20);
    SceneHelper.CreateSunlight(scene);
    
    const floorGameObject = new GameObject(scene);
    floorGameObject.CreatePrimitive(PrimitiveType.Cube);
    floorGameObject.transform.localScale.set(50, 1, 50);
    floorGameObject.transform.position.y = -5;
    
    const cubeGameobject = new GameObject(scene);
    cubeGameobject.transform.position.set(2, 2, 0);
    cubeGameobject.CreatePrimitive(PrimitiveType.Cube);
    const cubeRigidbody = cubeGameobject.AddComponent(Components.Rigidbody);
    
    const sphereGameobject = new GameObject(scene);
    sphereGameobject.transform.position.set(4, 2, 0);
    sphereGameobject.CreatePrimitive(PrimitiveType.Sphere);
    const sphereRigidbody = sphereGameobject.AddComponent(Components.Rigidbody);
    
    const capsuleGameobject = new GameObject(scene);
    capsuleGameobject.transform.position.set(-2, 2, 0);
    capsuleGameobject.CreatePrimitive(PrimitiveType.Capsule);
    const capsuleRigidbody = capsuleGameobject.AddComponent(Components.Rigidbody);
    
    const cylinderGameobject = new GameObject(scene);
    cylinderGameobject.transform.position.set(-4, 2, 0);
    cylinderGameobject.CreatePrimitive(PrimitiveType.Cylinder);
    const cylinderRigidbody = cylinderGameobject.AddComponent(Components.Rigidbody);
    
    const teapotGameobject = new GameObject(scene);
    teapotGameobject.transform.position.y = 10;
    teapotGameobject.transform.localScale.set(0.5,0.5,0.5);
    const teapotMeshRenderer = teapotGameobject.AddComponent(Components.MeshRenderer)
    const teapotMeshFilter = teapotGameobject.AddComponent(Components.MeshFilter);
    const teapotMeshCollider = teapotGameobject.AddComponent(Components.MeshCollider);
    const teapotRigidBody = teapotGameobject.AddComponent(Components.Rigidbody);
    
    Resources.LoadAsync("./assets/teapot.obj")
    .then(geometry => {
        if (geometry instanceof THREE.BufferGeometry) {
            teapotMeshFilter.mesh = geometry;
        }
    })
    
    runtime.Load();
    runtime.Play();
});