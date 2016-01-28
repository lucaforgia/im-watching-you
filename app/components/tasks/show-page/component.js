import Ember from 'ember';

export default Ember.Component.extend({
	classNames:['showTaskTemplate'],
	classNameBindings:['active'],
	active:Ember.computed('isRunning',{
		get(){
			if(this.get('isRunning')){
				return true;
			}
			return false;
		}
	}),

	actions:{
		showTime(){
			this.sendAction('showTime');
		},
		chronoClick(){
			this.sendAction('chronoClick');
		},
		resetTime(){
			this.sendAction('resetTime');
		},
		removeTask(){
			this.sendAction('removeTask');
		}
	}
});
