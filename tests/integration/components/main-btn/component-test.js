import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('main-btn', 'Integration | Component | main btn', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{main-btn}}`);

  assert.equal(this.$('svg').length, 1);

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#main-btn}}
      template block text
    {{/main-btn}}
  `);

  assert.equal(this.$('.text').text().trim(), 'template block text');
});
