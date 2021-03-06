var React        = require("react");

var PageHeader = React.createClass({

  getInitialState(){
      return({

      })
  },

	render(){
    const myStyle = {
      backgroundImage: this.props.backgroundImage
    };
		return(
      <div>
        <header className="intro-header" style={myStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div className="site-heading">
                            <h1>{this.props.siteHeading}</h1>
                            <hr className="small" />
                            <span className="subheading">{this.props.subHeading}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
      </div>
		)
	}
})

module.exports = PageHeader;
