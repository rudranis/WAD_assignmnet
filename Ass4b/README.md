# Assignment 4b - AWS Elastic Beanstalk Deployment

## Aim

Deploy or host a web application on AWS Elastic Beanstalk.

## Local Run

```bash
npm start
```

Open `http://localhost:8080`.

## Elastic Beanstalk Steps

1. Sign in to the AWS Console.
2. Open Elastic Beanstalk and create a new application.
3. Select the Node.js platform.
4. Upload this `Ass4b` folder as a zip file.
5. Create the environment.
6. Open the environment URL after deployment finishes.

## Files

- `server.js` - Node.js web server
- `public/index.html` - Web page shown after deployment
- `Procfile` - Starts the web process on AWS
- `.ebextensions/node.config` - Elastic Beanstalk Node command

## Conclusion

Elastic Beanstalk provides managed deployment for web applications by handling provisioning, load balancing, health checks and application startup.
