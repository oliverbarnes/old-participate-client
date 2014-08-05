    App.SupportInitiativeComponent = Ember.Component.extend({
     	click: function() {
     		console.log('button clicked')
    // 		this.sendAction();
  		 },

  		 actions: {
    		updateSupport: function() {
      		this.toggleProperty('isSupported'); 
      		console.log('in here')
     		}
     	}
    });