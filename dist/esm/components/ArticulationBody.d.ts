import PhysX from "trident-physx-js-webidl";
import { Component } from "./Component";
export declare class ArticulationBody extends Component {
    articulation: PhysX.PxArticulationReducedCoordinate;
    link: PhysX.PxArticulationLink;
    joint: PhysX.PxArticulationJointReducedCoordinate;
    private physics;
    private physicsScene;
    get immovable(): boolean;
    set immovable(immovable: boolean);
    OnEnable(): void;
    FixedUpdate(): void;
}
