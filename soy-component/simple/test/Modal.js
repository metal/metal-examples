'use strict';

import dom from 'metal-dom';
import Modal from '../src/Modal';

describe('Modal', function() {
	var modal;

	afterEach(function() {
		modal.dispose();
	});

	it('should hide when close button is clicked', function() {
		modal = new Modal();
		assert.ok(modal.visible);

		dom.triggerEvent(modal.element.querySelector('.close'), 'click');
		assert.ok(!modal.visible);
	});
});
