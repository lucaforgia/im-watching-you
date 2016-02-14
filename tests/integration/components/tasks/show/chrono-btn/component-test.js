import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tasks/show/chrono-btn', 'Integration | Component | tasks/show/chrono btn', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{tasks/show/chrono-btn}}`);

  assert.equal(this.$('svg').length, 1);

  // Template block usage:" + EOL +
});
