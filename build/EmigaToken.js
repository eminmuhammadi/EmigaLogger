(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.EmigaToken = factory());
}(this, (function () { 'use strict';

	/***
	 *  EmigaToken
	 *  @author Emin Muhammadi (https://github.com/eminmuhammadi)
	 */
	class EmigaToken extends EmigaLogger{
		constructor () {
			super();
		}

		/**
		 *
		 * @returns {void | string}
		 */
		uuid() {
		  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
		    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
		  );
		}
	}

	return EmigaToken;

})));
