import DS from 'ember-data';

var Task = DS.Model.extend({
    title: DS.attr('string'),
    time: DS.attr('number'),
    isRunning: DS.attr('boolean')
});

export default Task
