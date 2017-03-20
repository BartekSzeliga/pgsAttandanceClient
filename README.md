# sheduleTimeClient

## Installation

You need [Node.js][node] and [npm][npm] installed on your system (the Node.js installation should include npm by default)

##### Install required tools:
```
npm install -g gulp bower bower-npm-resolver yo generator-gulp-angular
```

##### Install the required dependencies:
```
npm install & bower install
```

## Use Gulp tasks

* `gulp` or `gulp build` or `gulp build --env=develop` to build an optimized version of your application in `/dist`
* `gulp serve` or `gulp serve --env=develop` to launch a browser sync server on your source files (develop config)
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files

More information on the gulp tasks in the [User Guide][User Guide].

[node]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[User Guide]: https://github.com/Swiip/generator-gulp-angular/blob/master/docs/user-guide.md
