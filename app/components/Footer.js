var React        = require("react");

var Footer = React.createClass({

  getInitialState(){
      return({

      })
  },
  getDefaultProps: function () {
				return {
					author      : "Phung Tien Dat",
					copy_year   : 2017,
          facebookLink: "https://www.facebook.com/profile.php?id=100006489138339",
          githubLink  : "https://github.com/datit1994"
				}
	},

	render(){
		return(
      <div>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <ul className="list-inline text-center">
                            <li>
                                <a href="#">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href={this.props.facebookLink}>
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href={this.props.githubLink}>
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <p className="copyright text-muted">Copyright &copy; {this.props.author} {this.props.copy_year}</p>
                    </div>
                </div>
            </div>
        </footer>
      </div>
		)
	}
})

module.exports = Footer;
