Contributing
============

You're welcome to submit [pull requests](https://github.com/oliverbarnes/participate/pulls), propose features and post issues on [Github issues](https://github.com/oliverbarnes/participate/issues), and on our recently created [Slack channel](https://participateapp.slack.com) (ping me for an invite [by email](http://mailto:oliverbwork@gmail.com) or on [twitter](http://twitter/digiberber)). 

Here are the steps for contributing code:

#### Fork the Project

Fork the [project on Github](https://github.com/oliverbarnes/participate) and check out your copy.

```
git clone https://github.com/contributor/participate.git
cd participate
git remote add upstream https://github.com/oliverbarnes/participate.git
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

#### Rebase

If you've been working on a change for a while, rebase with upstream/master.

#### Push

```
git push origin my-feature-branch
```

#### Make a Pull Request

Go to https://github.com/contributor/participate and select your feature branch. Click the 'Pull Request' button and fill out the form. Pull requests are usually reviewed daily on weekdays.

If you're new to Pull Requests, check out the [Github docs](https://help.github.com/articles/using-pull-requests)


```
git fetch upstream
git rebase upstream/master
git push origin my-feature-branch -f
```


Amend your previous commit and force push the changes.

```
git commit --amend
git push origin my-feature-branch -f
```

### For extra credit

Not required, but [squashing your commits](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html) would be very nice. Keeps the history of commits very clear, and hey, makes your feature or bug fix stand out from the noise :)

#### Be Patient

It's likely that your change will not be merged and that I will ask you to do more, or fix seemingly benign problems. Hang in there!

#### Thank You

Again, any contribution small or big is greatly appreciated. Thank you.
