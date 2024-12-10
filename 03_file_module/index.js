import { readFile, writeFile, appendFile, mkdir, readdir } from 'fs/promises';

//  * This line imports the readFile function from the fs/promises module, which is part of Node.js.
//  * The fs/promises module provides promises-based methods for working with the file system.
//  * The readFile function is used to read the contents of a file.

// console.log(readFile, "read");        // [AsyncFunction: readFile]

// 1. to read file in sample.txt
const readContent = async (filePath) => {
    //  This line defines an asynchronous function readContent that accepts filePath as an argument.
    //  This function will be used to read the content of a file at the given filePath.

    try {
        //  This begins a try block, which is used to catch errors in the code inside it.
        //  If anything goes wrong within this block (like an issue reading the file), the code will jump to the catch block.

        const data = await readFile(filePath, 'utf-8');
        console.log(data, "...data");
        // Here, await is used to wait for the readFile promise to resolve. 
        // The readFile function is called with two arguments: filePath (the path to the file) and 'utf-8' 
        // (the encoding for reading the file as a string). The result is assigned to the data variable.
        // Since readFile is asynchronous, await ensures that the code will pause here until the file is read successfully,
        // returning the content of the file.

    } catch (error) {
        console.log(error, "...error");
    }
}

await readContent('sample.txt');
// The await keyword ensures that this call is handled asynchronously


// Summary:
//  This script defines an asynchronous function readContent to read the content
//  of a file (sample.txt) using fs.promises.readFile with utf-8 encoding.
//  It handles the operation asynchronously using await and catches errors if any arise.
//  Finally, it calls the readContent function with the specified file path.

// What Happens If You Don't Pass 'utf-8'::
// * If you omit the 'utf-8' encoding, readFile will return 
//   the raw data as a Buffer object (which is a representation of binary data).
// * A Buffer contains raw binary data, so if you try to print it directly, you might see garbled or unreadable output.
// * For example, instead of seeing "Hello, world!",
// you might see something like this: <Buffer 48 65 6c 6c 6f 2c 20 77 6f 72 6c 64 21>, which represents the raw bytes of the text.

// --------------------------------------------------------------------------------

// 2. Create/ write file ::

const createFile = async (filePath, content) => {
    await writeFile(filePath, content);
    console.log("file Created successfully !!");
}

// await createFile('createfile.js', 'console.log("This file created by createFile function using file_module.");');
// --------------------------------------------------------------------------------

// 3. Apprend data in createfile.js file ::

const appendToFile = async (filePath, contents) => {
    await appendFile(filePath, contents);
    console.log("Append data in file createfile.txt successfully !! ");
}
// await appendToFile('sample.txt', ' Append data in file createfile.txt successfully !! ');
// --------------------------------------------------------------------------------

// 4. create Directory ::

const createDirectory = async (directoryPath) => {
    // await mkdir(directoryPath);                           // to create single folder
    await mkdir(directoryPath, { recursive: true })         // to create nested folder
}

// createDirectory('js-createMkdir')           // single folder
// createDirectory('js-mkdir/js1/js2')           // to create nested folder
// --------------------------------------------------------------------------------

// 5. Read Directory ::

const readDirectory = async (dirPath) => {
    const files = await readdir(dirPath);
    console.log(files, "...readfile");
}

await readDirectory('js-mkdir');
// --------------------------------------------------------------------------------





