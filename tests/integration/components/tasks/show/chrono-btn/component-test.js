import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tasks/show/chrono-btn', 'Integration | Component | tasks/show/chrono btn', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{tasks/show/chrono-btn}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#tasks/show/chrono-btn}}
      template block text
    {{/tasks/show/chrono-btn}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
