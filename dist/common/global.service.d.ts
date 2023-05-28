/// <reference types="node" />
export declare class GlobalService {
    constructor();
    getServer: () => {
        SERVER_URL: string;
        SERVER_REDIRECT_URL: string;
    };
    setServer: (value: {
        SERVER_URL?: string;
        SERVER_REDIRECT_URL?: string;
    }) => void;
    getUploadVideo: () => {
        count: number;
        count_converted: number;
    };
    setUploadVideo: (value: {
        count?: number;
        count_converted?: number;
    }) => void;
    setUploadsById: (id: string, values?: {
        bytesReceived?: number;
        updatedAt?: number;
    }) => void;
    deleteUploadsById: (id: any) => void;
    getUploads: () => {
        [id: string]: {
            bytesReceived: number;
            updatedAt: number;
        };
    };
    getRunJobUploadVideo: () => {
        processing?: number;
        processing_converted?: number;
    };
    setRunJobUploadVideo: (value: {
        processing?: number;
        processing_converted?: number;
    }) => void;
    addProcessUploadVideo: (value: {
        processing?: number;
        processing_converted?: number;
    }) => void;
    minusProcessUploadVideo: (value: {
        processing?: number;
        processing_converted?: number;
    }) => void;
    getCreateFolder: () => {
        count: number;
    };
    setCreateFolder: (value: {
        count?: number;
    }) => void;
    getRunJobCreateFolder: () => {
        processing: number;
    };
    setRunJobCreateFolder: (value: {
        processing?: number;
    }) => void;
    addProcessCreateFolder: (value: {
        processing?: number;
    }) => void;
    minusProcessCreateFolder: (value: {
        processing?: number;
    }) => void;
    setSystem: (value: {
        freeMem;
        totalMem;
        freeDisk;
        totalDisk;
    }) => void;
    getSystem: () => any;
    readFileAsSync: (pathFile: string) => Promise<Buffer>;
    createFolderOneDrive: (folder: string, fileName: string, token: string) => Promise<void>;
    uploadSmallFileOneDrive: (pathFolder: string, pathFile: string, token: string) => Promise<any>;
    uploadLargeFileOneDrive: (pathFolder: string, pathFile: string, token: string) => Promise<void>;
    createUploadSessionOneDrive: (pathFolder: string, token: string) => Promise<any>;
    shareLinkOneDrive: (pathFolder: string, token: string) => Promise<any>;
    deleteSessionOneDrive: (url: string, token: string) => Promise<void>;
    deleteFileOneDrive: (pathFolder: string, token: string) => Promise<void>;
    deleteFile: (path?: string, fileNames?: string[]) => Promise<void>;
}
