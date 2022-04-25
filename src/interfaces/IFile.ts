import { BufferGeometry, Material } from "three";
import { Component } from "../components";

export enum FileType {
    MATERIAL,
    MESH,
    COMPONENT
};

export interface IFile {
    type: FileType;
    fileId: string;
}