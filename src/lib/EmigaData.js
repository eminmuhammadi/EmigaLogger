class EmigaData extends EmigaLogger {
	constructor () {
		super();
	}

	/**
	 *
	 * @param form
	 * @returns {string}
	 * @constructor
	 */
	Serialize (form) {
		var serialized = [];

		for (var i = 0; i < form.elements.length; i++) {

			var field = form.elements[i];
			if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;
			if (field.type === 'select-multiple') {
				for (var n = 0; n < field.options.length; n++) {
					if (!field.options[n].selected) continue;
					serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
				}
			}
			else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
				serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
			}
		}

		return serialized.join('&');
	}

	/**
	 *
	 * @param url
	 * @param options
	 * @constructor
	 */
	Send(url, options={}) {
		const Provider = options || null;
		fetch(url, {  
		    cache: 'no-cache',  
			...options
		})
		.then(function (data) {
		  console.info(`[EmigaData.Send(): Success => \n${JSON.stringify(Provider)}]\n`, data);
		})  
		.catch(function (error) {  
		  console.warn(`[EmigaData.Send(): Failed => \n${JSON.stringify(Provider)}]\n`, error);
		});
	}
}

export default EmigaData;