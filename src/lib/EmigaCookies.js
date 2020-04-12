class EmigaCookies extends EmigaLogger {
	constructor() {
		super();
	}

	/**
	 *
	 * @param name
	 * @returns {any}
	 * @constructor
	 */
	Get(name){ 
	  let matches = document.cookie.match(new RegExp(
	    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	  ));
	  return matches ? decodeURIComponent(matches[1]) : undefined;
	}

	/**
	 *
	 * @param name
	 * @param value
	 * @param options
	 * @constructor
	 */
	Set(name, value, options = {}) {
		options = {
			path: '/',
			...options
  		};

		if (options.expires instanceof Date) {
			options.expires = options.expires.toUTCString();
		}

	  	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

		for (let optionKey in options) {
	    	updatedCookie += "; " + optionKey;
	    	let optionValue = options[optionKey];

	    	if (optionValue !== true) {
	      		updatedCookie += "=" + optionValue;
	   	 	}
	  	}

	  	return document.cookie = updatedCookie;
	}

	/**
	 *
	 * @param name
	 * @constructor
	 */
	Delete(name) {
	  return (new EmigaCookies()).Set(name, "", {
	    'max-age': -1
	  })
	}

	/**
	 *
	 * @param name
	 * @param value
	 * @param days
	 * @returns {string}
	 * @constructor
	 */
	Cookie (name='X-UUID', value, days=1) {
		(new EmigaCookies()).Set(name, value, { 'max-age': days*3600 , 'path': '/'});
		return document.cookie;
	}
}

export default EmigaCookies;