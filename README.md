# I'wy! - I'm watching you!

## The application right here to smack you. In. The. Face.

This _stuff_ is not intended to be really a community-driven project. Please don't do pull requests.

**This's just a frigging emberjs demo.** So, don't nag me.

What it does.  
You create tasks, like in a to-do list. You can delete them. And you can start-stop the chronometer relative to that task. So at the end of the day you have a slight idea how the fuck you have spent your precious life.

The app is develop keeping in mind that it has to be as light as possible since it's a background app. So, no model-render changes inside the _chrono_ _setInteval()_ loop. The **view** (the time) is updated only with an **explicit user action**, clicking on the time, stopping the chrono, or exiting the route (in that case the model is updated and saved). Also, no animations.

The choice to don't constantly update the time is also to remove the potential distraction (a running timer draws your eyes).


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
