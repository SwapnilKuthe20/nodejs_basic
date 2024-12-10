import path from 'path';

// console.log(path, "...path");


// 1. join two or more path ::

const fullPath = path.join('/path', 'file.js')
// console.log(fullPath, "...Join path");
// ------------------------------------------------------------

// 2. Absolute path ::

const absolutePath = path.resolve('folder', 'file.txt');
// add path in current directory
// console.log(absolutePath, "..absPath");  
// ------------------------------------------------------------

// 3. file directory ::

const dirName = path.dirname('path/path2/file.js');     // return directory/file
// console.log(dirName, '...dirName');             // path/path2 ...dirName
// ------------------------------------------------------------

// 4. base path ::

const basepath = path.basename('path/js/calci.js'); // return file
console.log(basepath, "..basepath");                // calci.js
// ------------------------------------------------------------

// 5. extension ::

const extensionType = path.extname('Swapnil.mp3');      // return extension
console.log(extensionType, "...extensionType");         // .mp3






