import { handlerPath } from '@libs/handler-resolver';

/*
 * Define AWS Lambda function properties here.
 */
export default {
    // Hander property - Points to the file and module containing the code you want to run in your function.
    handler: `${handlerPath(__dirname)}/handler.addNewCommit`, // Reference to file handler.ts & exported function 'main'

    // Event property - References Lambda events that trigger pointed AWS Lambda function.
    events: [
        {
            // HTTP Event
            http: {
                method: 'post', // Method type
                path: 'commit', // Resource name
            },
            
            // Schedule Event
            schedule: {
                name: 'github-auto-committer-shedule',
                description: 'Run github-auto-committer after given time',
                rate: 'rate(12 hours)',
                enabled: true,
            }
        }
    ],
};