'use strict';

import dom from 'metal-dom';

/**
 * The `Attribute` class provides features for configuring
 * state and listening to its changes. It's very useful to
 * extend from it.
 */
import Attribute from 'metal-attribute';

/**
 * This class just tracks the mouse position and stores it
 * on the "position" attribute.
 */
class MousePosition extends Attribute {
	handleMouseMove_(event) {
		this.position = [event.clientX, event.clientY];
	}

	start() {
		dom.on(document, 'mousemove', this.handleMouseMove_.bind(this));
	}
}

/**
 * Attributes should be defined in the `ATTRS` static variable.
 * @type {!Object}
 */
MousePosition.ATTRS = {
	position: {
		validator: Array.isArray,
		value: [0, 0]
	}
};

export default MousePosition;
