import Ember from 'ember';

export default Ember.Component.extend({
  showQuestionForm: false,
  actions: {
    showForm: function(){
      this.set('showQuestionForm', true);
    },
    newQuestion: function(){
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        notes: this.get('notes')
      }
      this.set('showQuestionForm', false);
      this.sendAction('newQuestion', params)
    }
  }
});
