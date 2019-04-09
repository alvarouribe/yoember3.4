import Controller from '@ember/controller';
import { computed } from '@ember/object';
// import { match, gte } from '@ember/object/computed';
// import { match, not, gte } from '@ember/object/computed';
// import { and } from '@ember/object/computed';

export default Controller.extend({
  isDisabled: true,
  emailAddress: '',
  message: '',
  responseMessage: '',

  isValidEmail: computed('emailAddress', function() {
    const emailAddress = this.get('emailAddress');
    return emailAddress.match(/^.+@.+\..+$/) ? true : false;
  }),
  
  isValidMessage: computed('message', function() {
    const message = this.get('message');
    return message.length >= 5;
  }),

  isDisabledGlobal: computed('isValidEmail', 'isValidMessage', function() {
    return this.get('isValidEmail') && this.get('isValidMessage') ? false : true;
  }),
  // isDisabledGlobal: not('isValidEmail') && not('isValidMessage'),
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
