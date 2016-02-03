import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tasks/show-page', 'Integration | Component | tasks/show page', {
    integration: true
});

test('it renders', function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +
    assert.expect(3);

    var title = 'currentTitle';
    var time = '11';
    this.set('title', title);
    this.set('time',time);

    this.render(hbs`{{tasks/show-page title=title time=time isRunning=true}}`);

    var htmlText = this.$().text().trim();
    assert.notEqual(htmlText, '');

    assert.ok(htmlText.indexOf(title) !== -1);
    assert.ok(htmlText.indexOf(time) !== -1);
});

test('active class works', function(assert) {
    assert.expect(2);
    this.set('running',true);
    this.render(hbs`{{tasks/show-page isRunning=running}}`);
    assert.ok(this.$('div').hasClass('active'));
    this.set('running',false);
    assert.ok(!this.$('div').hasClass('active'));
});
