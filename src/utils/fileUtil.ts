/**
 * getFileLineCount
 *
 * Counts the number of lines in a given file.
 *
 * @param {string} fileContent The content of the file to be counted.
 * 
 * @returns {number} The number of lines in the file.
 */
const getFileLineCount = fileContent => {
    return fileContent.split("\n\n").length;
};

