import Ember from 'ember';

export default Ember.Component.extend({
	init(){
		Ember.run.scheduleOnce('afterRender', this, function() {
			this.$('input.new-task').focus();
        });
		return this._super(...arguments);
	},
	keyDown(event){
		this.sendAction('action',event.keyCode);
	}
});
