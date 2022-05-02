import { Scene } from "./Scene";
import { ISceneSerialized } from "./serializer/ISceneSerialized";
import { SceneDeserializer } from "./serializer/SceneDeserializer";

export class SceneManager {
    private activeScene: Scene;

    constructor() {
        this.activeScene = null;
    }

    public CreateScene(name: string): Scene {
        return new Scene(name);
    }

    public async LoadSceneAsync(sceneSerialized: ISceneSerialized): Promise<Scene> {
        const scene = SceneDeserializer.Deserialize(sceneSerialized);
        return scene;
    }
    
    public SetActiveScene(scene: Scene) {
        this.activeScene = scene;
    }

    public GetActiveScene(): Scene {
        return this.activeScene;
    }
}