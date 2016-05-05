define('library-app/controllers/index', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({

		emailAddress: '',

		isValid: _ember['default'].computed.match('emailAddress', /^.+@.+\..+$/),

		isDisabled: _ember['default'].computed.not('isValid'),

		actions: {

			saveInvitation: function saveInvitation() {

				var email = this.get('emailAddress');

				var newInvitation = this.store.createRecord('invitation', { email: email });
				newInvitation.save();

				this.set('responseMessage', 'Thank you! We just saved your email address: ' + this.get('emailAddress'));
				this.set('emailAddress', '');

				// alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
				// this.set("responseMessage", `Thank you! We just saved your email address: ${this.get('emailAddress')}`);
				// this.set('emailAddress', '');
			}
		}

		// actualEmailAddress: Ember.computed('emailAddress', function() {
		// 	console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
		// }),

		// emailAddressChanged: Ember.observer('emailAddress', function() {
		// 	console.log('observer is called', this.get('emailAddress'));
		// })
	});
});