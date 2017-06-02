import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
    });
  },

  actions: {
    newQuestion: function(params){
      var newQuest = this.store.createRecord('question', params);
      newQuest.save();
      this.transitionTo('index');
    }
  }
});
