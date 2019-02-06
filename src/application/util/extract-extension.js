const extractExtension = fileName => fileName.slice((fileName.lastIndexOf(".") - 1 >>> 0) + 2);

export {extractExtension};