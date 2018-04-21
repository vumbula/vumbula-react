const Application = props =>
    <>
    <Nav/>
    <Jumbotron/>
    <div className="container pt-4">
      <Toys toys={props.toys}/>
      <hr/>
      <Footer/>
    </div>
    </>;


const Nav = () =>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#home">Home
              <span className="sr-only">(current)</span>
            </a>
          </div>
        </div>
      </div>
    </nav>;


const Jumbotron = () =>
    <div className="jumbotron jumbotron-fluid bg-info text-white">
      <div className="container text-sm-center pt-5">
        <h1 className="display-2">Vumbula Toys</h1>
        <p className="lead">Your one stop toys shop</p>
        <div className="btn-group mt-4" role="group" aria-label="Callout Buttons">
          <button type="button" className="btn btn-primary btn-lg">Order Now</button>
        </div>
      </div>
    </div>;

const Toys = props =>
    <>
    <h1 id="toys" className="display-4 my-4 text-center text-muted">Toys</h1>
    <div className="row">
      {
        props.toys.map((toy, index) => <Card key={index} toy={toy}/>)
      }
    </div>
    </>;


const Footer = () =>
    <div className="row py-3">
      <div className="col-md-7">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="col-md text-md-right">
        <small>&copy; Vumbula Kids Shop</small>
      </div>
    </div>;

const Card = props =>
    <div className="col-md-6 col-lg-3">
      <div className="card mb-3">
        <img className="card-img-top" src={`img/${props.toy.image}.png`}/>
        <div className="card-body">
          <h4 className="card-title text-center">{props.toy.name}</h4>
          <p className="card-text">
            {props.toy.description}
          </p>
        </div>
      </div>
    </div>;

const toys = [
  {
    name: 'Toy One',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '1'
  },
  {
    name: 'Toy Two',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '2'
  },
  {
    name: 'Toy Three',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '3'
  },
  {
    name: 'Toy Four',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '4'
  },
  {
    name: 'Toy Five',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '5'
  },
  {
    name: 'Toy Six',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '6'
  },
  {
    name: 'Toy Seven',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '7'
  },
  {
    name: 'Toy Eight',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '8'
  },
];

ReactDOM.render(
    <Application toys={toys}/>,
    document.getElementById('root')
);