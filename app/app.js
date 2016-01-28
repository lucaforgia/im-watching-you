import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
    // LOG_TRANSITIONS: true,
    // LOG_TRANSITIONS_INTERNAL: true,
    // LOG_VIEW_LOOKUPS: true,
    // LOG_ACTIVE_GENERATION: true,
    rootElement:'#im-watching-you',
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
    Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
