if (Meteor.isClient) {
  // This code is executed on the client only

  Meteor.startup(function () {

    React.render(<Home />, document.getElementById("render-target"));
  });
}