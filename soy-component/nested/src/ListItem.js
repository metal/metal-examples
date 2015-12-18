'use strict';

/**
 * At the end of `ListItem.soy.js`, a component was
 * automatically generated and exported. This is being
 * imported here as `ListItemBase`.
 */
import ListItemBase from './ListItem.soy';

/**
 * The `ListItem` class is extending from the class exported
 * from its soy file to add more behavior to it. `ListItemBase`
 * could be used directly if no customization was needed
 * though.
 */
class ListItem extends ListItemBase {
	/**
	 * This function is used as a listener by the soy file.
	 * @param  {!Event} event
	 */
	select(event) {
		console.log('Item selected', event.delegateTarget);
	}
}

export default ListItem;
