/**
 * getRepoFileDetails
 *
 * Get details for a repository file.
 *
 * @param {object} commitDetails An object containing the owner, repo, and path of the repository.
 * 
 * @returns {object} An object containing the file details.
 */
const getRepoFileDetails = async (commitDetails: CommitDetails) => {
    let file = null;

    try {
        file = await octokit.request(
            `GET /repos/${commitDetails.owner}/${commitDetails.repo}/contents/${commitDetails.path}`,
            {
                owner: commitDetails.owner,
                repo: commitDetails.repo,
                path: commitDetails.path,
            });
    } catch (err: any) {
        // Todo: Log error
        file = null;
    }

    return file;
};
/**
 * saveRepoFileContent
 *
 * Save details to a repository file.
 *
 * @param {object} commitDetails An object containing the owner, repo, and path of the repository.
 * @param {object} committerDetails An object containing commiter information.
 * @param {string} committerDetails A base64 string of file content to be saved.
 * @param {string} sha Unique string for file to be updated.
 * @param {string} message Commit message.
 * 
 * @returns {object} An object containing the file details.
 */
const saveRepoFileContent = async (
    commitDetails: CommitDetails,
    committerDetails: CommitterDetails,
    content: string,
    sha: string,
    message: string
) => {
    let results = null;

    try {
        results = await octokit.request(`PUT /repos/${commitDetails.owner}/${commitDetails.repo}/contents/${commitDetails.path}`, {
            ...commitDetails,
            committer: {
                name: committerDetails.name,
                email: committerDetails.email,
                date: committerDetails.date
            },
            content: content,
            sha: sha,
            message: message,
        });
    } catch (err: any) {
        // Todo: Log error
        results = err;
    }

    return results;
};
