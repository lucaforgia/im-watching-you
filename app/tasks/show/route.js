import Ember from 'ember';

export default Ember.Route.extend({
	timer:null,
	time:0,
	delete:false,

	// model(param){
	// 	this.modelFor('tasks');
	// 	return this._super(param);
	// },

	afterModel(task, transition){
		// start the timer as soon as the user enter the task page
		this.set('time', task.get('time'));
		this.set('delete',false);

		var observerCallback = this.chroneRun.bind(this);
		task.addObserver('isRunning',observerCallback);
		this.set('deleteRunningObs',()=>{
			task.removeObserver('isRunning',observerCallback);
		});

		task.set('isRunning',true);
		return this._super(task, transition);
	},

	chroneRun(task){
		// this is the route, binded, see this.chroneRun.bind in afterModel method;
		var _t = this;
		if(task.get('isRunning')){
			let timer = setInterval(()=>{
				// changed to increment an internal var, to avoid heavy writting on model
				// _t.incrementProperty('currentModel.time', 100);
				_t.incrementProperty('time');
			},1000);
			_t.set('timer',timer);
		}else{
			clearInterval(_t.get('timer'));
			if(this.get('delete')){
				task.deleteRecord();
			}
			else{
				task.set('time',_t.get('time'));
			}
			task.save();
		}
	},

	actions:{
		willTransition() {
			this.set('currentModel.isRunning',false);
			this.get('deleteRunningObs')();
		},
		chronoClick(){
			this.toggleProperty('currentModel.isRunning');
		},
		resetTime(model){
			this.set('time',0);
			model.set('time',0);
		},
		showTime(){
			this.set('currentModel.time',this.get('time'));
		},
		removeTask(model){
			this.set('delete',true);
			this.transitionTo('tasks');
		}
	}
});
