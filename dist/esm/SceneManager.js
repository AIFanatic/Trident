import { Scene } from "./Scene";
import { SceneDeserializer } from "./serializer/SceneDeserializer";
export class SceneManager {
    constructor() {
        this.activeScene = null;
    }
    CreateScene(name) {
        return new Scene(name);
    }
    async LoadSceneAsync(sceneSerialized) {
        const scene = SceneDeserializer.Deserialize(sceneSerialized);
        return scene;
    }
    SetActiveScene(scene) {
        this.activeScene = scene;
    }
    GetActiveScene() {
        return this.activeScene;
    }
}
//# sourceMappingURL=SceneManager.js.map