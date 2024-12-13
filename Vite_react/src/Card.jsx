const Card = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1>OUR FEATURE TOUR</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            perspiciatis quia, quisquam, quam eligendi accusamus voluptate, illo
            excepturi iure maiores itaque dignissimos deleniti dolores iusto
            molestias debitis maxime culpa? Laudantium voluptatem nulla eaque
            possimus, error eos culpa recusandae suscipit esse ullam. Deleniti
            nesciunt laborum quis neque doloribus nemo perspiciatis eligendi.
          </p>

         
            <div className="card" style={{ width: "18rem" }} >
              <img src="./bird.jpg" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="btn">
                  <h1>$856</h1>
                  <a href="#" className="btn btn-primary">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src="./bird.jpg" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="btn">
                  <h1>$876</h1>

                  <a href="#" className="btn btn-primary">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src="./bird.jpg" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="btn">
                  <h1>$876</h1>

                  <a href="#" className="btn btn-primary">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};
export default Card;
