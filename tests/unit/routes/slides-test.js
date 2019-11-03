import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | slides', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:slides');
    assert.ok(route);
  });
});
