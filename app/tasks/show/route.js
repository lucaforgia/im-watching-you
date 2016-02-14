import Ember from 'ember';

export default Ember.Route.extend({
	timer:null,
	time:0,

	model(param){
		if(!this.store.hasRecordForId('task',param.task_id)){
			return this.transitionTo('tasks');
		}
		return this._super(param);
	},

	afterModel(model, transition){
		// start the timer as soon as the user enter the task page
		this.set('time', model.get('time'));
		var observerCallback = this.chroneRun.bind(this);
		model.addObserver('isRunning',observerCallback);
		model.set('deleteRunningObs',()=>{
			model.removeObserver('isRunning',observerCallback);
		});

		model.set('isRunning',true);
		return this._super(model, transition);
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
			task.set('time',_t.get('time'));
		}
	},

	actions:{
		willTransition() {
			var model = this.get('currentModel');
			if(!model.get('isDeleted')){
				model.set('isRunning',false);
			}
			model.get('deleteRunningObs')();
			model.save();
		},
		chronoClick(){
			this.toggleProperty('currentModel.isRunning');
		},
		resetTime(){
			this.set('time',0);
			this.set('currentModel.time',0);
		},
		showTime(){
			this.set('currentModel.time',this.get('time'));
		},
		removeTask(){
			// this.set('delete',true);
			var model = this.get('currentModel');
			model.set('isRunning',false);
			model.deleteRecord();
			this.transitionTo('tasks');
		}
	}
});
