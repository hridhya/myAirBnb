var insecure = FlowRouter.group({});

var authenticated = FlowRouter.group({
  triggersEnter: [function(){
    if(!Meteor.loggingIn() && !Meteor.userId()){
      Session.set('redirectAfterLogin', FlowRouter.current().path);
      FlowRouter.go('signin');
    }
  }]
});

authenticated.route("/", {
  name: 'home',
  subscriptions: function() {
      this.register('userData', Meteor.subscribe('userData'));
  },
  action: function() {
    ReactLayout.render(Main, {
      content: <Home />
    });
  }
});

authenticated.route("/parking", {
  name: 'parking',
  subscriptions: function() {
    //var selector = {category: {$ne: "private"}};
    this.register('userData', Meteor.subscribe('userData'));
  },
  action: function() {
    ReactLayout.render(Main, {
      content: <Parking />
    });
  }
});

insecure.route("/signin", {
  name: 'signin',
  subscriptions: function() {},
  action: function() {
    ReactLayout.render(Main, {
      content: <Signin />
    });
  }
});

insecure.route("/signup", {
  name: 'signup',
  subscriptions: function() {},
  action: function() {
    ReactLayout.render(Main, {
      content: <Signup />
    });
  }
});

