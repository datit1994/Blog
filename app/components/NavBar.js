var React        = require("react");

var NavBar = React.createClass({

  getInitialState(){
      return({
        goPage:"#"
      })
  },

  getDefaultProps: function () {
        return {

        }
  },
  homeClick:function(){
    this.setState({
      goPage:"./"
    })
  },

  aboutClick:function(){
    this.setState({
      goPage:"./about"
    })
  },

	render(){
		return(
      <div>
        <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        Menu <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand" href="#" onClick={this.props.homeClick}>Start Bootstrap</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#" onClick={this.props.homeClick}>Home</a>
                        </li>
                        <li>
                            <a href="#" onClick={this.props.aboutClick}>About</a>
                        </li>
                        <li>
                            <a href="#" onClick={this.props.samplepostClick}>Sample Post</a>
                        </li>
                        <li>
                            <a href="#" onClick={this.props.contactClick}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
		)
	}
})

module.exports = NavBar;
