import Ember from 'ember';

export default Ember.Route.extend({
	isRunning:false,
	timer:null,

	afterModel(){
		// start the timer as soon as the user enter the task page
		this.set('isRunning',true);
	},
	runningObs: Ember.observer('isRunning',function () {
		var _t = this;

		if(this.get('isRunning')){
			let timer = setInterval(()=>{
				_t.incrementProperty('currentModel.time', 0.1);
			},100);
			this.set('timer',timer);
		}else{
			clearInterval(this.get('timer'));
		}
	}),


	actions:{
		willTransition() {
			this.set('isRunning',false);
			this.get('currentModel').save();
		},
		startTimer(){
			this.toggleProperty('isRunning');
		},
		resetTime(model){
			model.set('time',0);
		}

	}
});
