import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		var newTask = this.store.createRecord('task')
		newTask.set('time',0)
		newTask.set('isRunning',false)
		return newTask
	}
});
