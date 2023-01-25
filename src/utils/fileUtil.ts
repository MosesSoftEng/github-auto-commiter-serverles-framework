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

/**
 * strToBase64
 *
 * Encodes a given string to base64.
 *
 * @param {string} str The string to be encoded.
 * 
 * @returns {string} The base64 encoded string.
 */
const strToBase64 = str => {
    return Buffer.from(str, 'utf8').toString('base64');
};

