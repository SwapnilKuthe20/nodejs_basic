import path from 'path';

// console.log(path, "...path");

// Here are some commonly used methods in the path module ::::

// 1. join two or more path ::

// Joins multiple path segments into a single path. It normalizes the path by resolving .. and . segments.

const fullPath = path.join('/path', 'file.js')
// console.log(fullPath, "...Join path");
// ------------------------------------------------------------

// 2. Absolute path ::

//  path.resolve([...paths])
//  Resolves a sequence of paths or path segments into an absolute path.
//  If no absolute path is provided, it resolves from the current working directory.

const absolutePath = path.resolve('folder', 'file.txt');
// add path in current directory
// console.log(absolutePath, "..absPath");  
// ------------------------------------------------------------

// 3. file directory ::

// Returns the directory name of a path, similar to the Unix command dirname.

const dirName = path.dirname('path/path2/file.js');     // return directory/file
// console.log(dirName, '...dirName');             // path/path2 ...dirName
// ------------------------------------------------------------

// 4. base path ::

//  path.basename(path[, ext])
//  Returns the last portion of a path, similar to the Unix command basename.
//  Optionally, you can pass an extension to remove it from the result.

const basepath = path.basename('path/js/calci.js'); // return file
console.log(basepath, "..basepath");                // calci.js
// ------------------------------------------------------------

// 5. extension ::
// Returns the extension of the path, including the dot (.). If there’s no extension, it returns an empty string.

const extensionType = path.extname('Swapnil.mp3');      // return extension
console.log(extensionType, "...extensionType");         // .mp3






