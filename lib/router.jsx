var insecure = FlowRouter.group({});

insecure.route("/", {
  name: 'Home',
  subscriptions: function() {},
  action: function() {
    ReactLayout.render(Main, {});
  }
});