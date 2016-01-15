import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.findAll('task')
	},
	actions:{
		saveTask(model){
			model.save()
			this.transitionTo('tasks')
		},
		goToTask(model){
			this.transitionTo('tasks.show',model)
		}
	}
});
