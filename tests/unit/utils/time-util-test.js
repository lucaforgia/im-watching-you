import {getTime} from '../../../utils/time-util';
import { module, test } from 'qunit';

module('Unit | Utility | time util');

// Replace this with your real tests.
test('it works', function(assert) {
    var time = 3723;
    var chronoTime = getTime(time);
    assert.ok(chronoTime.indexOf('01') !== -1 && chronoTime.indexOf('02') !== -1 && chronoTime.indexOf('03') !== -1);
});
