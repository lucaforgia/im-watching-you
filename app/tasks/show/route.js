import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
		startTimer(model){
			var isRunning = !model.get('isRunning');
			model.set('isRunning', isRunning)
		}
	}
});
