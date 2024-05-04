import React from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Css/Cards.module.css'
function Cards() {
  return (
    <div className="m-3">
      <div className="row row-cols-1 row-cols-md-3 g-5 ">
        <div className="col">
          <div className="card h-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-EZVOW02TwzoNmVUD_Q8Ic39cNuxYnpYtw&usqp=CAU"
              className="card-img-top"
              alt="img1"
            />
            <div className="card-body">
              <h5 className="card-title">Angel</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://aniyuki.com/wp-content/uploads/2022/03/aniyuki-cute-anime-avatar-profile-picture-42.jpg"
              className="card-img-top"
              alt="img2"
            />
            <div className="card-body">
              <h5 className="card-title">Barbie</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYgTBAaP9ISwg04kWC37SO2oSS1Dcpca0W8A&usqp=CAU"
              className="card-img-top"
              alt="img3"
            />
            <div className="card-body">
              <h5 className="card-title">Shashi</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards