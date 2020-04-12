(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.EmigaSelector = factory());
}(this, (function () { 'use strict';

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
		 * @param query
		 * @returns {*}
		 * @constructor
		 */
		Submit(query){
			return query.requestSubmit();
		}

		/**
		 *
		 * @param query
		 * @returns {*}
		 * @constructor
		 */
		Value(query){
			return query.value;
		}

		/**
		 *
		 * @param query
		 * @returns {string}
		 * @constructor
		 */
		Text(query){
			return query.textContent;
		}
	}

	return EmigaSelector;

})));
