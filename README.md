[![Code Climate](https://codeclimate.com/github/oliverbarnes/participate/badges/gpa.svg)](https://codeclimate.com/github/oliverbarnes/participate) [![Build Status](https://travis-ci.org/oliverbarnes/participate.svg?branch=master)](https://travis-ci.org/oliverbarnes/participate)

[We're looking for contributors!](#want-to-get-involved)

# Participate 

An app for democratic proposal-making.

It aims to facilitate citizen participation in public issues, with a laser-focus on proposals rather than noisy and many times endless debate. Debate is done *through* proposals - for example, dissenters have to make a counter-proposal to be heard. Other participants have to support a proposal in principle in order to suggest changes.

Representation is ensured for less involved participants through fluid delegation of support, in a [liquid democracy](https://en.wikipedia.org/wiki/Delegative_democracy).

Participate is in early stages of development, moving towards a functional prototype to be deployed within the next few months, when a pilot will be run with a select group of proposal-makers, initially urban planners and water management specialists in São Paulo, Brazil. 

Current features:
----------------------

* Facebook sign up and sign in
* Very simple proposal creation
* Listing proposals
* Supporting proposals

Next features on the roadmap:

* Creating counter-proposals
* Delegating support


Stack:
---------------

Participate consists of a front-end [Emberjs](http://emberjs.com) app (this repo), and a separate [backend Rails API app](http://github.com/oliverbarnes/participate-api).

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

### Want to get involved?

We'll pair with you so you can get up to speed quickly, and we pair on features as well. 

[Shoot us an email](mailto:oliverbwork@gmail.com/), we'll add you to our Slack channel to join the discussion and talk about next steps.

See the complete guide to contributing [here](CONTRIBUTING.md).

---

Participate was inspired by [LiquidFeedback](http://liquidfeedback.org), and the book published by its authors: [Principles of Liquid Feedback](http://principles.liquidfeedback.org)

