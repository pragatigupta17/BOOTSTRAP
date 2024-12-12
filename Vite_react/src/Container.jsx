const Container = ()=>{
    return(
        <>
        <div  className="Container">
    <div className="row">
        <div className="col-lg-6  col-md-8 col-12 bg-primary">
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nulla?</h1>
        </div>
        <div className="col-lg-6 col-md-8 col-12 bg-success"><h1>HELLO EVERYONE FROM BOOTSTRAP</h1></div>
        <div className="col-lg-3 col-md-8 col-12 bg-danger"><h1>hello</h1></div>
        <div className="col-lg-3 col-md-8 col-12 bg-success "><h1>hello</h1></div>
        <div className="col-lg-3 col-md-8 col-12 bg-primary "><h1>hello</h1></div>
        <div className="col-lg-3 col-md-8 col-12 bg-light"><h1>hello</h1></div>

    </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <img src="./bird.jpg" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </>
    )
}
export default Container
