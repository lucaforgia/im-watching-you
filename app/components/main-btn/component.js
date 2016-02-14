import Ember from 'ember';

export default Ember.Component.extend({
	classNameBindings:['main-btn'],
	'main-btn':Ember.computed('small',{
		get(){
			if(this.get('small')){
				return 'main-btn small';
			}
			return 'main-btn';
		}
	}),

	click(){
		this.sendAction('action');
	}
});
