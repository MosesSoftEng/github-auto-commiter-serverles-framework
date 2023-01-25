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
