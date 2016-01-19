import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		var newTask = this.store.createRecord('task');
		newTask.set('time',0);
		newTask.set('isRunning',false);
		return newTask;
	},

	isValid(model){
		var title = model.get('title');
		if(typeof title === 'string' && Ember.$.trim(title) !== ''){
			return true;
		}
		else{
			return false;
		}
	},

	showAlert(){
		alert('Set a proper title');
	},

	actions:{
		willTransition(){
			var model = this.get('currentModel');
			if(!this.isValid(model)){
				model.deleteRecord();
			}
			model.save();
		},
		saveTask(model){
			if(!this.isValid(model)){
				this.showAlert();
			}
			else{
				model.save();
				this.transitionTo('tasks');
			}
		},
	}
});
