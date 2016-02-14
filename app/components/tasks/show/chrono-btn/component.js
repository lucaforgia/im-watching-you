import Ember from 'ember';

export default Ember.Component.extend({
	classNames:['chrono-btn'],
	click(){
		return this.sendAction('chronoClick');
	}
});
