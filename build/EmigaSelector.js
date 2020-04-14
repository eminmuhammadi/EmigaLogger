(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.EmigaSelector = factory());
}(this, (function () { 'use strict';

	/***
	 *  EmigaSelector
	 *  @author Emin Muhammadi (https://github.com/eminmuhammadi)
	 */
	class EmigaSelector extends EmigaLogger {
		constructor () {
			super();
		}

		/**
		 *
		 * @param query
		 * @returns {any}
		 * @constructor
		 */
		Select(query) {
			return document.querySelector(query);
		}

		/**
		 *
		 * @param element
		 * @returns {*}
		 * @constructor
		 */
		Submit(element){
			return element.requestSubmit();
		}

		/**
		 *
		 * @param element
		 * @returns {*}
		 * @constructor
		 */
		Value(element){
			return element.value;
		}

		/**
		 *
		 * @param element
		 * @returns {string}
		 * @constructor
		 */
		Text(element){
			return element.textContent;
		}
	}

	return EmigaSelector;

})));
