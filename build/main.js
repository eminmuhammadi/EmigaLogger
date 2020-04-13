(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.EmigaLogger = factory());
}(this, (function () { 'use strict';

	/***
	 *  EmigaLogger
	 *  @author Emin Muhammadi (https://github.com/eminmuhammadi)
	 *  @url https://github.com/eminmuhammadi/EmigaLogger
	 *  @licence MIT (https://github.com/eminmuhammadi/EmigaLogger/blob/master/LICENSE)
	 */
	class EmigaLogger {

		constructor() {
		}

		/**
		 *
		 * @param query
		 * @param state
		 * @param callback
		 * @returns {*}
		 * @constructor
		 */
		Log(query,state,callback) {
			return query.addEventListener(state, callback);
		}

		/**
		 *
		 * @param callback
		 * @returns {Function}
		 * @constructor
		 */
		Call(callback) {
			return window.onload = (()=>{ callback(); })
		}

	}

	return EmigaLogger;

})));
