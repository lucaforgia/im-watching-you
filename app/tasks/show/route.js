import Ember from 'ember';

export default Ember.Route.extend({
	isRunning:false,
	timer:null,
	time:0,

	afterModel(task){
		// start the timer as soon as the user enter the task page
		this.set('time', task.get('time'));
		this.set('isRunning',true);
	},
	runningObs: Ember.observer('isRunning',function () {
		var _t = this;
		if(this.get('isRunning')){
			let timer = setInterval(()=>{
				// changed to increment an internal var, to avoid heavy writting on model
				// _t.incrementProperty('currentModel.time', 100);
				_t.incrementProperty('time');
			},1000);
			this.set('timer',timer);
		}else{
			clearInterval(this.get('timer'));
			this.set('currentModel.time',this.get('time'));
			this.get('currentModel').save();
		}
	}),


	actions:{
		willTransition() {
			this.set('isRunning',false);
		},
		startTimer(){
			this.toggleProperty('isRunning');
		},
		resetTime(model){
			model.set('time',0);
			model.save();
		},
		showTime(){
			this.set('currentModel.time',this.get('time'));
		}
	}
});
