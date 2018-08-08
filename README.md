# DevConf.IN-2018-Nightwatch.js-Demo

Demo for my talk End-to-End testing made easy with Nightwatch.js at [DevConf.IN 2018](https://devconf.info/in).

***
### Resources For Nightwatch.js
#### [Homepage](http://nightwatchjs.org) | [Developer Guide](http://nightwatchjs.org/guide) | [API Reference](http://nightwatchjs.org/api)


Here is the directory tree for the project

```
.
├── bin
│  ├── webdrivers
│  │  ├── chromedriver
│  │  └── geckodriver
│  └── selenium-server-standalone-3.13.0.jar
├── custom-assertions
│  └── elementCount.js
├── custom-commands
│  └── hasOnBeforeUnload.js
├── data
│  └── searchKeywords.js
├── log
├── pages
│  └── myBlog.js
├── reports
├── screenshots
├── tests
│  ├── basicTests
│  │  ├── 01_basicTest.js
│  │  ├── 02_multiStepTest.js
│  │  ├── 03_dataDrivenTest.js
│  │  ├── 04_customAssertionTest.js
│  │  └── 05_customCommandTest.js
│  └── myBlog
│     └── myBlog.js
├── LICENSE
├── README.md
├── nightwatch.js
├── nightwatch.json
└── package.json
```
## Pre-Requisites
- [Node.js](https://nodejs.org/en/download/)
- [Java](https://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html)


## Installation
```bash
$ npm install -g nightwatch
```
Add -g option to make nightwatch runner available globally in your system.

## Run the tests

- Clone this repo and cd into it
```
$ git clone https://github.com/RatanShreshtha/DevConf.IN-2018-Nightwatch.js-Demo.git
$ cd DevConf.IN-2018-Nightwatch.js-Demo
```

- To run the nightwatch tests use following command
```
$ nightwatch -c ./nightwatch.json --env default
$ #                    OR
$ ./node_modules/nightwatch/bin/nightwatch -c ./nightwatch.json --env default # If installed locally
```

## Authors
- **Ratan Kulshreshtha** @RatanShreshtha

## Acknowledgments

- Hat tip to anyone who's code was used
- Stack Overflow
- Coffee
