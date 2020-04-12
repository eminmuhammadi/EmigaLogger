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

export default EmigaInit;