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
	Value(query){
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

export default EmigaSelector;