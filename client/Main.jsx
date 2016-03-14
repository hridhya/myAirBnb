Meteor.startup(function(){

});

Main = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData(){
    return {
      currentUser: Meteor.user()
    };
  },

  render(){
    return (
      <div className="page-content">
        <title>MyAirBNB</title>
        <header>
          <nav className="cyan darken-3">
            <div className="nav-wrapper container">
              <a href="/" className="brand-logo">
                <i className="mdi-image-camera left"></i>MyAirBNB
              </a>
              <a href="" data-activates="mobile-demo" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
              <ul className="right hide-on-med-and-down">
                {this.data.currentUser ? <li><a href="/parking">ADD PARKING SPOT</a></li>: ""}
                <li><a href={this.data.currentUser ? "" : "/signin"} onClick={this.data.currentUser ? this.signOut : ""}>{this.data.currentUser ? "SIGN OUT" : "Sign In" }</a></li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                {this.data.currentUser ? <li><a href="/services">Services</a></li>: ""}
                <li><a href={this.data.currentUser ? "" : "/signin"} onClick={this.data.currentUser ? this.signOut : ""}>{this.data.currentUser ? "SIGN OUT" : "Sign In" }</a></li>
              </ul>
            </div>
          </nav>
        </header>
        <main>
          <div className="container">
            <div className="row">
              <div className="col s12 m12 l12">
                <div className="section">
                  {this.props.content}
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="page-footer cyan darken-3">
          <div className="footer-copyright">
            <div className="container">
              © 2016 SNAPSHARE
              <a id="demo" className="grey-text text-lighten-4 right" href="">Support</a>
            </div>
          </div>
        </footer>
      </div>
    )
  },

  //method to sign out users and redirect them to sign in page with nice popup
  signOut(event){
    event.preventDefault();
    Meteor.logout();
    Materialize.toast('You have been signed out!', 4000);
    FlowRouter.go('/signin');
  }

});