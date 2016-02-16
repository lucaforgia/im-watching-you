import Ember from 'ember';

export default Ember.Route.extend({
	timer:null,
	startDate:null,

	model(param){
		if(!this.store.hasRecordForId('task',param.task_id)){
			return this.transitionTo('tasks');
		}
		return this._super(param);
	},

	afterModel(model, transition){
		// start the timer as soon as the user enter the task page
		var observerCallback = this.chroneRun.bind(this);
		model.addObserver('isRunning',observerCallback);
		model.set('deleteRunningObs',()=>{
			model.removeObserver('isRunning',observerCallback);
		});

		model.set('isRunning',true);
		return this._super(model, transition);
	},

// changed, no need setInterval, just check date at start and at the end-stop
	// chroneRun(task){
	// 	// this is the route, binded, see this.chroneRun.bind in afterModel method;
	// 	var _t = this;
	// 	if(task.get('isRunning')){
	// 		let timer = setInterval(()=>{
	// 			// changed to increment an internal var, to avoid heavy writting on model
	// 			// _t.incrementProperty('currentModel.time', 100);
	// 			_t.incrementProperty('time');
	// 		},1000);
	// 		_t.set('timer',timer);
	// 	}else{
	// 		clearInterval(_t.get('timer'));
	// 		task.set('time',_t.get('time'));
	// 	}
	// },

	chroneRun(task){
		if(task.get('isRunning')){
			this.set('startDate', new Date());
		}else{
			this.updateTime(task);
			task.save();
		}
	},

	updateTime(model){
		let newDate = new Date();
		let time = newDate - this.get('startDate');
		this.set('startDate', newDate);
		model.incrementProperty('time',time);
	},

	actions:{
		willTransition() {
			let model = this.get('currentModel');
			if(!model.get('isDeleted')){
				model.set('isRunning',false);
			}
			model.get('deleteRunningObs')();
		},
		chronoClick(){
			this.toggleProperty('currentModel.isRunning');
		},
		resetTime(){
			this.set('currentModel.time',0);
			this.set('startDate', new Date());
		},
		showTime(){
			let model = this.get('currentModel');
			if(model.get('isRunning')){
				this.updateTime(model);
			}
		},
		removeTask(){
			var model = this.get('currentModel');
			model.deleteRecord();
			model.save();
			this.transitionTo('tasks');
		}
	}
});
