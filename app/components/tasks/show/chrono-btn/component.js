import Ember from 'ember';

export default Ember.Component.extend({
	tagName:'button',
	classNames:['chronoBtn'],
	classNameBindings:['isRunning'],
	// sparkle:Ember.computed('isRunning',{
	// 	get(){
	// 		if(this.get('isRunning')){
	// 			return true;
	// 		}
	// 	}
	// }),

	text:Ember.computed('isRunning',{
		get(){
			if(this.get('isRunning')){
				return 'STOP';
			}
			else{
				return 'START';
			}
		}
	}),

	click(){
		this.sendAction('chronoClick');
	}
});
