import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tasks/show-page', 'Integration | Component | tasks/show page', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{tasks/show-page}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#tasks/show-page}}
      template block text
    {{/tasks/show-page}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
