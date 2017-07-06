class TweetBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: "",
      photoAdded: false
    }  
    this.handleTextInput = this.handleTextInput.bind(this)
    this.togglePhoto = this.togglePhoto.bind(this)
  }

  handleTextInput(event) {
    this.setState({text: event.target.value})
  }

  togglePhoto() {
    this.setState({photoAdded: !this.state.photoAdded})
  }

  remainingChars() {
    let count = this.state.photoAdded ? 140 - 23 : 140
    return count - this.state.text.length
  }

  overflowAlert() {
    let beforeOverflowText = this.state.text.substring(130, 140)
    let afterOverflowText = this.state.text.substring(140)
    if (this.state.photoAdded) {
      beforeOverflowText = this.state.text.substring(130 - 23, 140 - 23)
      afterOverflowText = this.state.text.substring(140 - 23)
    }

    if (this.remainingChars() < 0) {
      return(
        <div className="alert alert-warning" style={{wordBreak: 'break-all'}}>
          You typed too much! ...&nbsp;
          {beforeOverflowText}
          <strong className="bg-danger">{afterOverflowText}</strong>
        </div>
      )
    } else {
      return ""
    }
  }


  render() {
    let addPhotoButtonText = this.state.photoAdded? "✓ Photo Added" : "Add Photo"

    return (
      <div className="well clearfix">
        { this.overflowAlert() }
        <textarea className="form-control" onChange={ this.handleTextInput }></textarea>
        <br/>
        <span>{ this.remainingChars() }</span>
        <button className="btn btn-primary pull-right" disabled={ this.remainingChars() < 0 || this.remainingChars() == 140 }>Tweet</button>
        <button className="btn btn-default pull-right" onClick={ this.togglePhoto } >{addPhotoButtonText}</button>
      </div>
    )
  }
}

ReactDOM.render(
  <TweetBox />,
  document.getElementById("container")
)
