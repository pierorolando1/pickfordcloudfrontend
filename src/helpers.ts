export const bytesToMb = (bytes: number):number => {
    return bytes/1048576
}

export const isFile = (file:any, type:'image'|'video'|'pdf'|'file') => {
    return file && (file['type'].split('/')[0] === type || file['type'].split('/')[1] === type) 
}