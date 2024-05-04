import React from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
function Carousel() {
  return (
    <div>
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://entrackr.com/storage/2021/01/myntra-1.jpg"
            className="d-block w-100"
            alt="img3"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.financialexpress.com/wp-content/uploads/2023/02/BeFunky-design-2023-02-15T122756.912.jpg"
            alt="img2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.businessinsider.in/photo/84975988/myntra-signs-up-hrithik-roshan-vijay-deverakonda-and-dulquer-salmaan-asits-newest-brand-ambassadors.jpg?imgsize=812194"
            className="d-block w-100"
            alt="img1"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
);
}

export default Carousel