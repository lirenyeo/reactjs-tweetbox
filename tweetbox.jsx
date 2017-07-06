class TweetBox extends React.Component {
  render() {
    return (
      <div className="well clearfix">
        <textarea className="form-control"></textarea>
        <br/>
        <span>140</span>
        <button className="btn btn-primary pull-right">Tweet</button>
        <button className="btn btn-default pull-right">Add Photo</button>
      </div>
    )
  }
}

ReactDOM.render(
  <TweetBox />,
  document.getElementById("container")
)
