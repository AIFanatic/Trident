export enum FileType {
    MATERIAL,
    MESH,
    COMPONENT,
    TEXTURE
};

export interface IFile {
    type: FileType;
    fileId: string;
}