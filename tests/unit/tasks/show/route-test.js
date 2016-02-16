import { moduleFor, test } from 'ember-qunit';
// import Ember from 'ember';

moduleFor('route:tasks/show', 'Unit | Route | tasks/show', {
	// Specify the other units that are required for this test.
	needs: ['model:Task'],
	beforeEach(){
	}
});

test('it exists', function(assert) {
	let route = this.subject();
	assert.ok(route);
});
//
// test('timer is working', function(assert) {
// 	assert.expect(3);
//
// 	var route = this.subject();
// 	assert.equal(route.get('time'),0);
//
// 	var store = route.store;
// 	var record;
//
// 	Ember.run(()=>{
// 		record = store.createRecord('task',{title:'testing route',id:666});
// 		record.set('time',1000);
// 		route.set('currentModel',record);
// 		route.afterModel(record,{});
// 		record.get('deleteRunningObs')();
// 	});
//
//
// 	assert.equal(route.get('time'),1000);
//
// 	// alert(this.subject().store);
//
// 	assert.ok(route);
// });
