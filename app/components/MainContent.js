var React        = require("react");
var Pager        = require("./Pager.js");

var MainContent = React.createClass({

  getInitialState(){
      return({

      })
  },

	render(){
		return(
      <div>
        <div className="container">{this.props.content}</div>
        <hr />
      </div>
		)
	}
})

module.exports = MainContent;
