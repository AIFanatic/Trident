import { Scene } from "./Scene";
import { ISceneSerialized } from "./serializer/ISceneSerialized";
export declare class SceneManager {
    private activeScene;
    constructor();
    CreateScene(name: string): Scene;
    LoadSceneAsync(sceneSerialized: ISceneSerialized): Promise<Scene>;
    SetActiveScene(scene: Scene): void;
    GetActiveScene(): Scene;
}
