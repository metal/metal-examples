'use strict';

import { Disposable } from 'metal';

var parseFn_;

/**
 * The `Disposable` class provides and interface releasing any private variables
 * or event handlers that should be cleaned up when the component is disposed.
 */
class Uri extends Disposable {
	constructor(uriStr) {
		super();
		this.parsedUri = (parseFn_ || URL)(uriStr);
	}

	disposeInternal() {
		this.parsedUri = null;
	}

	static setParseFn(parseFn) {
		parseFn_ = parseFn;
	}

	getHostname() {
		return this.parsedUri.hostname;
	}

	getPathname() {
		return this.parsedUri.pathname;
	}
}

export default Uri;
