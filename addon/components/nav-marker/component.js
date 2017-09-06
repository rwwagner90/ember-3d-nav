import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  navService: service('ember-3d-nav'),
  tagName: 'span',
  classNames: ['nav-marker'],
  classNameBindings: ['colorNumber'],
  colorNumber: computed('multiColor', 'navService.selectedIndex', function() {
    let color = 'color-';

    if (get(this, 'multiColor')) {
      color += (get(this, 'navService.selectedIndex') + 1);
    } else {
      color += 1;
    }
    return color;
  })
});
