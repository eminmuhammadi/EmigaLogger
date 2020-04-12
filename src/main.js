/**
  For Documentation
  Query https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
  Dom Ready https://stackoverflow.com/questions/2304941/what-is-the-non-jquery-equivalent-of-document-ready
  Cookies https://javascript.info/cookie
*/
"use strict";
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

export default EmigaLogger;