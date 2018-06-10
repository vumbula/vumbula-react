class Application extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'John',
          age: 20
        },
      ]
    }
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

          <div className="row">
            {
              this.state.data.map((info, index) => <Card key={index} info={info}/>)
            }
          </div>

        </div>
    )
  }
}

const Card = props =>
    <div className="col-md-6 col-lg-3">
      <div className="card mb-3">
        <div className="card-body">
          <p className="card-title"><span>Name: </span>{props.info.name}</p>
          <p className="card-text">
            <span>Age: </span>{props.info.age}
          </p>
        </div>
      </div>
    </div>;

ReactDOM.render(
    <Application/>,
    document.getElementById('root')
);