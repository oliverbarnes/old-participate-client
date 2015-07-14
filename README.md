[![Build Status](https://travis-ci.org/oliverbarnes/participate.svg?branch=master)](https://travis-ci.org/oliverbarnes/participate) 

A democratic participation platform based on [LiquidFeedback](http://liquidfeedback.org), in early stages of development. It consists of a front-end [Ember](http://emberjs.com) app (this repo), and a backend API app, which you can find on [this separate repo](http://github.com/oliverbarnes/participate-api).

Installation:
-------------

```
brew install watchman
npm install
bower install
```

Finally, run the test suite, if everything is ok the build should go smoothly and tests should pass:

```
ember test
```

Running:
-------

You'll need to startup the API app first, so the Ember client can talk to it. [Follow the instructions](https://github.com/oliverbarnes/participate-api#bootstrapping-the-project) to install  and start it up, then come back here and run

```
ember server
```

Visit your app at [http://localhost:4200](http://localhost:4200). 

Contributing:
-------------

See the complete guide on the [CONTRIBUTING](CONTRIBUTING.md) file.

Contributors
------------
Present and past:

- [William Jeffreys](https://github.com/williamcodes)
- [Qian Zhou](https://github.com/qianfinland)
- [Cathy Nangini](https://github.com/KatiRG)
