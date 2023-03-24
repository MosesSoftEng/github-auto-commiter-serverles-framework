![Automatic Gear](https://images.unsplash.com/photo-1534675206212-b6bc629ca261?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)
# :book: Github Auto Commiter.
## Project Description.
A AWS cloud project to automatically add commits to a repo file at set interval using Serverless Framework.

### Features lists.
1. Specify repository and file to add commits.
2. Specify information to commit to file.
3. Set interval of commits.

## Technologies.
1. AWS Cloud, popular, well documented and affordable. Alternatives: Azure, Google Cloud.
2. Serverless Framework, support micorservices, Infrastructure as Code IaC, and popular. Alternatives: CloudFormation
3. Node.js with TypeScript, versatile, and strongly typed. Alternatives: Python, Go.

### :computer: More Technologies used.
CloudWatch Events, AWS Lambda and AWS GateWay, Github API.

### :office: Development environment, Tools and IDEs.
Ubuntu 20.04, Visual Studio Code, Github.

## Table of Contents.

## Project Installation.
1. Clone the project locally.
2. Set up an AWS acoount. and create a user with programmatic access note access credentials.
3. Create a Github access token.
4. Edit project configuration in src/config/config.ts for repository details and schedule interval.
4. Install node locally and AWS CLI.
5. Install Serverless Framework.

```bash
# Install serverless framework using node.js
npm install  -g serverless

# Create a serverles project.
sls create --template aws-nodejs-typescript --path .

# Configure serveless to use credentials created in step 1.
sls config credentials --provider aws --key <ACCESS_KEY> --secret <ACCESS_SECREAT> --profile <PROFILE_NAME>

# Export Github access token.
export GITHUB_TOKEN="<ACCESS_TOKEN>"

# Deploy the application.
sls deploy
```

## How to use the project.
The project will run automatically as scheduled. If you want to run the app, make an API call to the endpoints provide after deploying the project.

## Credits.
1. [Serverless CLI Reference for AWS](https://www.serverless.com/framework/docs/providers/aws/cli-reference)

## License.
[See license file](LICENSE.txt)

# :sunglasses: Author.
This project was done by [SE. Moses Mwangi](https://github.com/MosesSoftEng). Feel free to get intouch with me;

:iphone: WhatsApp [+254115227963](https://wa.me/254115227963)

:email: Email [moses.soft.eng@gmail.com](mailto:moses.soft.eng@gmail.com)

:iphone: LinkedIn [MosesSoftEng](https://www.linkedin.com/in/mosessofteng/)