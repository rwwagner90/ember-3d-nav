import Ember from 'ember';
import DebouncedResponse from './debounced-response';

function noop() { }

// Debounces browser event, triggers 'scroll' event and calls 'scroll' handler.
export default Ember.Mixin.create(
  Ember.Evented,
  DebouncedResponse,
  {

    scroll: noop,

    didInsertElement: function() {
      this._super(...arguments);

      this.scrollHandler = this.debounce((...args) => {
        this.trigger('scroll', ...args);
        this.scroll(...args);
      });

      window.addEventListener('scroll', this.scrollHandler);
    },

    willDestroyElement: function() {
      this._super(...arguments);

      window.removeEventListener('scroll', this.scrollHandler);
    }
  });
