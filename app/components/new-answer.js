import Ember from 'ember';

export default Ember.Component.extend({
  showQuestionForm: false,
  actions: {
    showForm: function(){
      this.set('showQuestionForm', true);
    },
    newAnswer: function(){
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        question: this.get('question')
      }
      this.set('showQuestionForm', false);
      this.sendAction('newAnswer', params)
    }
  }
});
