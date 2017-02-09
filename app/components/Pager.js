var React        = require("react");

var Pager = React.createClass({

  getInitialState(){
      return({

      })
  },

	render(){
		return(
      <div>
                    <ul className="pager">
                        <li className="next">
                            <a href="#">Older Posts &rarr;</a>
                        </li>
                    </ul>
      </div>
		)
	}
})

module.exports = Pager;
