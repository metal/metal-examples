'use strict';

import dom from 'metal-dom';

/**
 * The `State` class provides features for configuring state and listening to
 * its changes. It's very useful to extend from it.
 */
import State from 'metal-state';

/**
 * This class just tracks the mouse position and stores it on the "position"
 * state.
 */
class MousePosition extends State {
	handleMouseMove_(event) {
		this.position = [event.clientX, event.clientY];
	}

	start() {
		dom.on(document, 'mousemove', this.handleMouseMove_.bind(this));
	}
}

/**
 * State should be defined in the `STATE` static variable.
 * @type {!Object}
 */
MousePosition.STATE = {
	position: {
		validator: Array.isArray,
		value: [0, 0]
	}
};

export default MousePosition;
