import DS from 'ember-data';

var Task = DS.Model.extend({
    title: DS.attr('string'),
    time: DS.attr('number')
});

export default Task
