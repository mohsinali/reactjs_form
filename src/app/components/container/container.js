import React from 'react';

export const Container = () => {

  let style = {
    centrlize_image: {
      margin: '0 auto'
    }

  }
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">

        <div className="carousel-item active">
          <img className="d-block img-fluid" style={style.centrlize_image} src="http://lorempixel.com/800/300/sports/" alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
            <h3>Featuring Image</h3>
            <p>Proudly announcing featuring image</p>
          </div>

        </div>
        <div className="carousel-item">
          <img className="d-block img-fluid" style={style.centrlize_image} src="http://lorempixel.com/800/300/sports/" alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h3>Featuring Image</h3>
            <p>Proudly announcing featuring image</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block img-fluid" style={style.centrlize_image} src="http://lorempixel.com/800/300/sports/" alt="Third slide" />
          <div className="carousel-caption d-none d-md-block">
            <h3>Featuring Image</h3>
            <p>Proudly announcing featuring image</p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}