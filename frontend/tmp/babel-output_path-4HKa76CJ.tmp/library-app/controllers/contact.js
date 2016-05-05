define('library-app/controllers/contact', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({

		emailAddress: '',

		isValid: _ember['default'].computed.and('emailIsValid', 'messageIsValid'),

		emailIsValid: _ember['default'].computed.match('emailAddress', /^.+@.+\..+$/),

		messageIsValid: _ember['default'].computed.gte('message.length', 5),

		isDisabled: _ember['default'].computed.not('isValid'),

		actions: {

			sendMessage: function sendMessage() {
				alert(this.get('emailAddress') + '<br>' + this.get('message'));
				this.set("responseMessage", 'We got your message and will get in touch soon');
				this.set('emailAddress', '');
			}
		}

	});
});