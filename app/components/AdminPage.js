var React        = require("react");
// import TinyMCE from 'react-tinymce';
var TinyMCE = require('react-tinymce');

var AdminPage = React.createClass({

  getInitialState:function(){
      return({
        post: {
          title:"",
          content:"",
          date:"",
        }
      })
  },
  getCurrentDate:function() {
    let currentDate = new Date();
    let result = currentDate.getDate()+"/"+(currentDate.getMonth()+1)+"/"+currentDate.getFullYear();
    return result;
  },

  handleEditorChange:function(e){


    this.setState({
      post: {
        title: this.refs.title.value,
        content:e.target.getContent(),
        date: this.getCurrentDate()
      }
    })
   },

   handleNewPost:function(){
     let {post} = this.state;
    socket.emit("new-post", post);
   },

	render(){
		return(
      <div className="container">
        <label><strong><h3>Title</h3></strong></label><br/>
        <input type="text" ref="title" /><br/>
        <label><strong><h3>Content</h3></strong></label><br/>
        <TinyMCE
         content="<p>This is the initial content of the editor</p>"
         config={{
           plugins: 'link image code',
           toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
         }}
         onChange={this.handleEditorChange}
       /><br/>
       <button onClick={this.handleNewPost} >Post</button>
      </div>
		)
	}
})

module.exports = AdminPage;
