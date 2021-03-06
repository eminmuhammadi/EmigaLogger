/***
 *  EmigaLogger
 *  @author Emin Muhammadi (https://github.com/eminmuhammadi)
 *  @url https://github.com/eminmuhammadi/EmigaLogger
 *  @license MIT (https://github.com/eminmuhammadi/EmigaLogger/blob/master/LICENSE)
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