'use strict';

/**
 * The soy template functions are automatically exported by `ListItem.soy.js`.
 */
import templates from './ListItem.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

class ListItem extends Component {
	/**
	 * This function is used as a listener by the soy file.
	 * @param  {!Event} event
	 */
	select(event) {
		console.log('Item selected', event.delegateTarget);
	}
}

// This line is declaring that `ListItem` will be using the given soy templates
// for rendering itself.
Soy.register(ListItem, templates);

export default ListItem;
