import { moduleForModel, test } from 'ember-qunit';
// import {getTime} from '../../../utils/time-util';

moduleForModel('task', 'Unit | Model | task', {
    // Specify the other units that are required for this test.
    needs: []
});

test('it exists', function(assert) {
    let model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
});

// test('chronoTime is working', function(assert) {
//     var time = 3723;
//     let model = this.subject({time:time});
//
//     var chronoTime = model.get('chronoTime');
//     assert.equal(chronoTime, getTime(time));
//
//     assert.ok(chronoTime.indexOf('01') !== -1 && chronoTime.indexOf('02') !== -1 && chronoTime.indexOf('03') !== -1);
//     // let store = this.store();
// });
