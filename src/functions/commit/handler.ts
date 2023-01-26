/**
 * Module: addNewCommit.ts
 *
 * This module contains a function for adding a new commit to a GitHub repository.
 */
import emojis from 'src/utils/emojis';
import { formatJSONResponse } from '@libs/api-gateway';
import config from 'src/config/config'

import { getRepoFileDetails, saveRepoFileContent } from 'src/logic/commits';
import { base64ToStr, getFileLineCount, strToBase64 } from 'src/utils/fileUtil'

const commitInfo = {
    owner: config.repoFile.owner,
    repo: config.repoFile.repo,
    path: config.repoFile.path,
};


/**
 * addNewCommit
 *
 * Adds a new commit to a GitHub repository with the addition of an emoji.
 * 
 * @returns {object} An object containing the message and repo file details.
 */
const addNewCommit = async () => {
    let repoFileDetails = await getRepoFileDetails(commitInfo);

    if (repoFileDetails === null) {
    }

    console.log(repoFileDetails);

    const fileContent = base64ToStr(repoFileDetails.data.content);
    const fileSHA = repoFileDetails.data.sha;
    const emojiCode = emojis[getFileLineCount(fileContent)];

    const newFileContent = strToBase64(`${fileContent}\n\n:${emojiCode}: - ${emojiCode.split('_').join(' ')}`);

    repoFileDetails = await saveRepoFileContent(
        config.repoFile, {
        name: config.committer.name,
        email: config.committer.email,
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
