import { moduleFor, test } from 'ember-qunit';

moduleFor('component:nav-marker', 'Unit | nav marker', {
  needs: ['service:ember-3d-nav'],
  unit: true
});

test('calculate colorNumber: not multiColor', function(assert) {
  assert.expect(1);
  let navMarker = this.subject();

  navMarker.set('multiColor', false);
  assert.equal(navMarker.get('colorNumber'), 'color-1');
});

test('calculate colorNumber: multiColor', function(assert) {
  assert.expect(1);
  let navMarker = this.subject();

  navMarker.set('multiColor', true);
  assert.equal(navMarker.get('colorNumber'), 'color-1');
});
