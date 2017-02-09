var React        = require("react");
var NavBar       = require("./NavBar.js")
var PageHeader   = require("./PageHeader.js")
var MainContent  = require("./MainContent.js")
var Footer       = require("./Footer.js")
var AboutPage    = require("./AboutPage.js")
var HomePage     = require("./HomePage.js")
var SamplePostPage     = require("./SamplePostPage.js")
var ContactPage     = require("./ContactPage.js")


var App = React.createClass({

  getInitialState(){
      return({
        page:"home",
        siteHeading:"PhungDat's Blog",
        subHeading:"A Blog Theme by Start Bootstrap",
        backgroundImage: "url('img/home-bg.jpg')",
        mainContent:<HomePage />
      })
  },

  handleHomeClick:function() {
      this.setState({
        page:"home",
        siteHeading:"PhungDat's Blog",
        subHeading:"A Blog Theme by Start Bootstrap",
        backgroundImage: "url('img/home-bg.jpg')",
        mainContent:<HomePage />
      })
  },

  handleAboutClick:function() {
      this.setState({
        page:"about",
        siteHeading:"About Me",
        subHeading:"This is what I do.",
        backgroundImage: "url('img/about-bg.jpg')",
        mainContent:<AboutPage />
      })
  },

  handleSamplePostClick:function() {
      this.setState({
        page:"sample-post",
        siteHeading:"Man must explore, and this is exploration at its greatest",
        subHeading:"Problems look mighty small from 150 miles up",
        backgroundImage: "url('img/post-bg.jpg')"
      })
  },

  handleContactClick:function() {
      this.setState({
        page:"contact",
        siteHeading:"Man must explore, and this is exploration at its greatest",
        subHeading:"Problems look mighty small from 150 miles up",
        backgroundImage: "url('img/contact-bg.jpg')"
      })
  },

	render(){
    if(this.state.page == "home") {
      var page = <HomePage />
    } else if(this.state.page == "about") {
      var page = <AboutPage />
    } else if(this.state.page == "sample-post") {
      var page = <SamplePostPage />
    } else if(this.state.page == "contact") {
      var page = <ContactPage />
    }
		return(
      <div>

        <NavBar
          homeClick       = {this.handleHomeClick}
          aboutClick      = {this.handleAboutClick}
          samplepostClick = {this.handleSamplePostClick}
          contactClick    = {this.handleContactClick}
        />

        <PageHeader
          siteHeading     = {this.state.siteHeading}
          subHeading      = {this.state.subHeading}
          backgroundImage = {this.state.backgroundImage}
          page            = {this.state.page}
        />

        {page}

        <Footer />

      </div>
		)
	}
})

module.exports = App;
