export declare enum FileType {
    MATERIAL = 0,
    MESH = 1,
    COMPONENT = 2
}
export interface IFile {
    type: FileType;
    fileId: string;
}
