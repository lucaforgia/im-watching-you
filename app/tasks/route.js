import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.findAll('task');
	},
	actions:{
		goToTask(model){
			this.transitionTo('tasks.show',model);
		}
	}
});
