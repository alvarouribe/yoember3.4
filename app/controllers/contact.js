import Controller from '@ember/controller';
import { match, not, gte } from '@ember/object/computed';
// import { and } from '@ember/object/computed';

export default Controller.extend({
  isDisabled: true,
  emailAddress: '',
  message: '',
  responseMessage: '',

  isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: gte('message.length', 5),

  isDisabled: not('isValidEmail') && not('isValidMessage'),
  // isBothTrue: and('isValidEmail', 'isValidMessage'), //To compute if 2 vars are true. note: make sure import and.


  actions: {
    sendMessage: function () {
      const email = this.get('emailAddress');
      const message = this.get('message');
      alert(`email: ${email}`);
      alert(`message: ${message}`);

      this.set('responseMessage', `Thank you! We will contact you as soon we have an answer.`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }

});
