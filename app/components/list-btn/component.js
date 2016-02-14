import Ember from 'ember';

export default Ember.Component.extend({
	tagName:'span',
	classNames:['list-btn'],
	click(){
		this.sendAction('action');
	}
});
