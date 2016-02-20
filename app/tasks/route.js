import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.findAll('task');
	},
	actions:{
		goToTask(model){
			this.transitionTo('tasks.show',model);
		},
		resetAll(){
			this.get('currentModel').forEach((model)=>{
				model.set('time',0);
				model.save();
			})
		}
	}
});
