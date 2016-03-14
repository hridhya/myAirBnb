Meteor.startup(function(){

});

Main = React.createClass({

  render(){
    return (
      <div className="page-content">
        <title>MYAIRBNB</title>
        <header>
          <nav className="cyan darken-3">
            <div className="nav-wrapper container">
              <a href="/" className="brand-logo">
                <i className="mdi-image-camera left"></i>MYAIRBNB
              </a>
              <a href="" data-activates="mobile-demo" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
              <ul className="right hide-on-med-and-down">
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
              © 2016 MYAIRBNB
              <a id="demo" className="grey-text text-lighten-4 right" href="">Support</a>
            </div>
          </div>
        </footer>
      </div>
    )
  }

});