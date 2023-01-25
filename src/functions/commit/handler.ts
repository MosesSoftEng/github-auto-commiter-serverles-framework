/**
 * addNewCommit
 *
 * Adds a new commit to a GitHub repository with the addition of an emoji.
 * 
 * @returns {object} An object containing the message and repo file details.
 */
const addNewCommit = async () => {
    let repoFileDetails = await getRepoFileDetails(committerDetails);

    if (repoFileDetails === null) {
    }

    const fileContent = base64ToStr(repoFileDetails.data.content);
    const fileSHA = repoFileDetails.data.sha;
    const emojiCode = emojis[getFileLineCount(fileContent)];

    const newFileContent = strToBase64(`${fileContent}\n\n:${emojiCode}: - ${emojiCode.split('_').join(' ')}`);

    repoFileDetails = await saveRepoFileContent(
        committerDetails, {
        name: 'MosesSoftEng',
        email: 'moses.soft.eng@gmail.com',
        date: new Date().toJSON()
    },
        newFileContent,
        fileSHA,
        `Add emoji ${emojiCode.split('_').join(' ')}`
    );

    return formatJSONResponse({
        message: 'my function here',
        repoFileDetails,
    });
};

export { addNewCommit };
