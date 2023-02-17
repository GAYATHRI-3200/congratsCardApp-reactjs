const element = (
  // Write your code here.
  <div className="container">
    <h1 className="heading">Congratulations</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="img"
      />
      <h1 className="title">Male</h1>
      <p className="caption">Bangalore University, Bangalore</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="img"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
