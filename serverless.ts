import type { AWS } from '@serverless/typescript';

import hello from '@functions/hello';
import commit from '@functions/commit';

const serverlessConfiguration: AWS = {
    // Service name.
    service: 'github-auto-commiter',
    frameworkVersion: '3',
    plugins: ['serverless-esbuild'],

    /*
     * Provider
     */
    provider: {
        // AWS CLI profile to use
        profile: 'completecoding.io-serverless',
        name: 'aws',
        runtime: 'nodejs14.x',
        apiGateway: {
            minimumCompressionSize: 1024,
            shouldStartNameWithService: true,
        },
        // Set environment variables.
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
            NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
            GITHUB_TOKEN: `${process.env.GITHUB_TOKEN}`,
        },
    },

    /*
     * Functions
     */
    // import functions via paths from folder /src/functions
    functions: { hello, commit },

    package: { individually: true },
    custom: {
        esbuild: {
            bundle: true,
            minify: false,
            sourcemap: true,
            exclude: ['aws-sdk'],
            target: 'node14',
            define: { 'require.resolve': undefined },
            platform: 'node',
            concurrency: 10,
        },
    },
};

module.exports = serverlessConfiguration;
