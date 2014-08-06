Contributing
============

So far this is a one-man (and-two-[Rails-Girls](http://railsgirlssummerofcode.org/)) project, and new contributions will be greatly appreciated. You're welcome to submit [pull requests](https://github.com/oliverbarnes/participate-frontend/pulls), [propose features and discuss issues](https://github.com/oliverbarnes/participate-frontend/issues). When in doubt, ask a question in the [Participate App Google Group](https://groups.google.com/forum/#!forum/participate-app).

#### Fork the Project

Fork the [project on Github](https://github.com/oliverbarnes/participate-frontend) and check out your copy.

```
git clone https://github.com/contributor/participate-frontend.git
cd participate-frontend
git remote add upstream https://github.com/oliverbarnes/participate-frontend.git
```

#### Create a Topic Branch

Make sure your fork is up-to-date and create a topic branch for your feature or bug fix.

```
git checkout master
git pull upstream master
git checkout -b my-feature-branch
```

#### Bower install, Ember build, and Ember Test

Ensure that you can build the project and run tests.

```
bower install
ember build
ember test
```

#### Write Tests

Try to write a test that reproduces the problem you're trying to fix or describes a feature that you want to build. Add to [tests/](tests/).

I also appreciate pull requests that highlight or reproduce a problem, even without a fix.

#### Write Code

Implement your feature or bug fix. Please be sure to submit clean, well refactored code.

#### Write Documentation

Document any external behavior in the [README](README.md).

#### Update Changelog

Add a line to [CHANGELOG](CHANGELOG.md). Make it look like every other line, including your name and link to your Github account.

#### Commit Changes

Make sure git knows your name and email address:

```
git config --global user.name "Your Name"
git config --global user.email "contributor@example.com"
```

Writing good commit logs is important. A commit log should describe what changed and why.

```
git add ...
git commit
```

#### Push

```
git push origin my-feature-branch
```

#### Make a Pull Request

Go to https://github.com/contributor/participate-frontend and select your feature branch. Click the 'Pull Request' button and fill out the form. Pull requests are usually reviewed daily on weekdays.

If you're new to Pull Requests, check out the [Github docs](https://help.github.com/articles/using-pull-requests)

#### Rebase

If you've been working on a change for a while, rebase with upstream/master.

```
git fetch upstream
git rebase upstream/master
git push origin my-feature-branch -f
```

#### Update CHANGELOG Again

Update the [CHANGELOG](CHANGELOG.md) with the pull request number. A typical entry looks as follows (fake entry).

```
* [#123](https://github.com/oliverbarnes/participate-frontend/pull/123): Add vote notifications - [@contributor](https://github.com/contributor).
```

Amend your previous commit and force push the changes.

```
git commit --amend
git push origin my-feature-branch -f
```

#### Be Patient

It's likely that your change will not be merged and that I will ask you to do more, or fix seemingly benign problems. Hang in there!

#### Thank You

Again, any contribution small or big is greatly appreciated. Thank you.
