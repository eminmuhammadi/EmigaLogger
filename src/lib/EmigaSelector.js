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

export default EmigaSelector;