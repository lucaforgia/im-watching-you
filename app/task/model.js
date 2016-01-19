import Ember from 'ember';
import DS from 'ember-data';
import {getTime} from '../utils/time-util';


var Task = DS.Model.extend({
    title: DS.attr('string'),
    time: DS.attr('number'),
    chronoTime:	Ember.computed('time',{
        get(){
            return getTime(this.get('time'));
        }
    }),
    isRunning:DS.attr('boolean')
});

export default Task
