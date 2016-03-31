'use strict';

/**
 * The soy template functions are automatically exported by `List.soy.js`.
 */
import templates from './List.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

// This is importing `ListItem` to mark that this component
// depends on it, to guarantee that the `ListItem` file will
// be loaded whenever `List` is.
import './ListItem';

class List extends Component {
}

// This line is declaring that `List` will be using the given soy templates for
// rendering itself.
Soy.register(List, templates);

/**
 * This is adding more configuration to this class' state.
 * @type {!Object}
 */
List.STATE = {
	/**
	 * The `items` state's default value will be an empty list.
	 * @type {!Array}
	 */
	items: {
		valueFn: () => []
	}
};

export default List;
