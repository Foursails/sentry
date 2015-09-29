# Sentry
Sentry is an Aurelia template that solves a few common authentication issues. It has a special login app shell for creating an authentication app that keeps your main app secure, and an authentication manager class for tracking the state of a logged in user across the application, from session to session.

Sentry is free. If you've successfully used it and it has saved you an hour of your life, consider [leaving me a tip](https://cash.me/$davismj) so I can continue building templates. 

## Running The App

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g jspm
  ```
  > **Note:** jspm queries GitHub to install semver packages, but GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing `jspm registry config github` and following the prompts.
5. Install the client-side dependencies with jspm:

  ```shell
  jspm install -y
  ```
  >**Note:** Windows users, if you experience an error of "unknown command unzip" you can solve this problem by doing `npm install -g unzip` and then re-running `jspm install`.
6. To run the app, execute the following command:

  ```shell
  gulp watch
  ```
7. Browse to [http://localhost:9000](http://localhost:9000) to see the app. You can make changes in the code found under `src` and the browser should auto-refresh itself as you save files.

> Note: At present there is a bug in the HTMLImports polyfill which only occurs on IE. We have submitted a pull request to the team with the fix. In the mean time, if you want to test on IE, you can work around the issue by explicitly adding a script tag before you load system.js. The script tag should look something like this (be sure to confirm the version number):

```html
<script src="jspm_packages/github/webcomponents/webcomponentsjs@0.5.2/HTMLImports.js"></script>
```
## Bundling
To build the app, follow these steps.

1. To make sure the files are all properly built, execute the following command:

  ```shell
  gulp build
  ```

2. To run the bundler, execute the following command:

  ```shell
  jspm bundle '*' + aurelia-binding + aurelia-bootstrapper + aurelia-dependency-injection + aurelia-event-aggregator + aurelia-fetch-client + aurelia-framework + aurelia-history + aurelia-history-browser + aurelia-http-client + aurelia-loader + aurelia-loader-default + aurelia-logging + aurelia-metadata + aurelia-path + aurelia-route-recognizer + aurelia-router + aurelia-task-queue + aurelia-templating + aurelia-templating-binding + aurelia-templating-resources + aurelia-templating-router + bootstrap + clean-css + core-js + css + fetch + font-awesome dist/app-bundle.js --inject --minify
  ```
  
Now, using any HTTP server that can serve static files, your app will be served as a bundle with a significant first-load speed improvement over your development environment.
