import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | slides/.0', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:slides/.0');
    assert.ok(route);
  });
});
