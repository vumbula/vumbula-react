class Application extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="container">
          <h1>React State</h1>

          <hr/>

          <div className="row">
            <form className="form-inline">
              <input
                  type="text"
                  className="form-control mb-2 mr-sm-2 mb-sm-0"
                  placeholder="Name"
                  />
              <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Age"
                    />
              </div>
              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          </div>
          <hr/>
        </div>
    )
  }
}
ReactDOM.render(
    <Application/>,
    document.getElementById('root')
);