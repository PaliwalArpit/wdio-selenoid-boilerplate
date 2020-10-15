# PCM E2E functional tests

This repository contains tests for new solution engine app which is written in webdriver.io. Next-gen WebDriver test framework for Node.js. 
WebdriverIO is a custom implementation for selenium's W3C webdriver API. It is written in Javascript and packaged into 'npm' and runs on Node.js. 
Main Features of WebdriverIO: WebdriverIO is a good automation tool which can automate both web applications and native mobile Apps.

## Getting Started

[Getting started](https://webdriver.io/docs/gettingstarted.html)

## Pre-requisite
Let's suppose you have Node.js already installed. If you don't have Node installed, we recommend installing NVM to assist managing multiple active Node.js versions.

### Create simple test folder or into your project you can follow the steps below 
```
mkdir webdriverio-test && cd webdriverio-test
```
Download the latest version of geckodriver for your environment and unpack it in your project directory:

### Linux
```
$ curl -L https://github.com/mozilla/geckodriver/releases/download/v0.21.0/geckodriver-v0.21.0-linux64.tar.gz | tar xz
```

### Download Webdriver.io : 
```
npm install webdriverio
```

## Setting up solution-engine-e2e-test locally: 

### After cloning the repo install all the dependencies :
```
npm install
```

### Run test

```
npm test
```

### Report 

```
allure generate --clean allure-results/ && allure open
```
### Sample report 










