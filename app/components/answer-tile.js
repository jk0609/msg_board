import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteAnswer: function(answer){
      answer.destroyRecord();
    },
  }
});
