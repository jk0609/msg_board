import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      question: this.store.findRecord('question', params.question_id),
    });
  },

  actions: {
    deleteQuestion: function(question){
      var deleteAnswers = question.get('answers').map(function(answer){
        return answer.destroyRecord();
      });
      Ember.RSVP.all(deleteAnswers).then(function(){
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },
    updateQuestion: function(question, params){
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
    },
  }
});
