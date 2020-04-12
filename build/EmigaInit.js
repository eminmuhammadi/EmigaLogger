(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.EmigaInit = factory());
}(this, (function () { 'use strict';

  (function(exports, d) {
    /**
     *
     * @param fn
     * @param context
     * @constructor
     */
    function EmigaInit(fn, context) {

      /**
       *
       * @param event
       */
      function onReady(event) {
        d.removeEventListener("DOMContentLoaded", onReady);
        fn.call(context || exports, event);
      }

      /**
       *
       * @param event
       */
      function onReadyIe(event) {
        if (d.readyState === "complete") {
          d.detachEvent("onreadystatechange", onReadyIe);
          fn.call(context || exports, event);
        }
      }

      d.addEventListener && d.addEventListener("DOMContentLoaded", onReady) ||
      d.attachEvent      && d.attachEvent("onreadystatechange", onReadyIe);
    }

    exports.EmigaInit = EmigaInit;
  })(window, document);

  return EmigaInit;

})));
