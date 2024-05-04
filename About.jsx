import React from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Css/About.module.css'
function About() {
  return (
    <div className=" main m-4 ">
      <div className="gmap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497622.948908154!2d77.32206350748469!3d12.992352954194056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e2b83fc8e91%3A0xf3c7f3198087d5c1!2sMyntra%20BSK%20DC!5e0!3m2!1sen!2sin!4v1708417255465!5m2!1sen!2sin"
          width="100%"
          height="300vh"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <form className="row g-3 m-2">
          <div className="col-md-4">
            <label for="validationServer01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control is-valid"
              id="validationServer01"
              value="Mark"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label for="validationServer02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control is-valid"
              id="validationServer02"
              value="Otto"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label for="validationServerUsername" className="form-label">
              Username
            </label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend3">
                @
              </span>
              <input
                type="text"
                className="form-control is-invalid"
                id="validationServerUsername"
                aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                required
              />
              <div
                id="validationServerUsernameFeedback"
                className="invalid-feedback"
              >
                Please choose a username.
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <label for="validationServer03" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control is-invalid"
              id="validationServer03"
              aria-describedby="validationServer03Feedback"
              required
            />
            <div id="validationServer03Feedback" className="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div className="col-md-3">
            <label for="validationServer04" className="form-label">
              State
            </label>
            <select
              className="form-select is-invalid"
              id="validationServer04"
              aria-describedby="validationServer04Feedback"
              required
            >
              <option selected disabled value="">
                Choose...
              </option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
              <option>Chickmangalore</option>
              <option>mangalore</option>
            </select>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please select a valid state.
            </div>
          </div>
          <div className="col-md-3">
            <label for="validationServer05" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control is-invalid"
              id="validationServer05"
              aria-describedby="validationServer05Feedback"
              required
            />
            <div id="validationServer05Feedback" className="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input is-invalid"
                type="checkbox"
                value=""
                id="invalidCheck3"
                aria-describedby="invalidCheck3Feedback"
                required
              />
              <label className="form-check-label" for="invalidCheck3">
                Agree to terms and conditions
              </label>
              <div id="invalidCheck3Feedback" className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default About