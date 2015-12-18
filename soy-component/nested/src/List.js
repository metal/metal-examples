'use strict';

/**
 * At the end of `List.soy.js`, a component was automatically
 * generated and exported. This is being imported here
 * as `ListBase`.
 */
import ListBase from './List.soy';

// This is importing `ListItem` to mark that this component
// depends on it, to guarantee that the `ListItem` file will
// be loaded whenever `List` is.
import './ListItem';

/**
 * The `List` class is extending from the class exported
 * from its soy file to add more behavior to it. `ListBase`
 * could be used directly if no customization was needed
 * though.
 */
class List extends ListBase {

}

/**
 * This is adding more configuration to this class'
 * attributes.
 * @type {!Object}
 */
List.ATTRS = {
	/**
	 * The `items` attribute's default value will be an
	 * empty list.
	 * @type {!Array}
	 */
	items: {
		valueFn: () => []
	}
};

export default List;
