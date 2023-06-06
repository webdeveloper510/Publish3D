import React, { Fragment } from "react";
import exibitionImg from "../../assets/img/EventsAndExibitionImage.jpg";
import colaborationAndPartenershipImg from "../../assets/img/colaborationAndPartenership.jpg";
import contactAndInquiryImg from "../../assets/img/contactAndIquiry.jpg";

function ResourcesPage() {
  return (
    <Fragment>
      <div className="resource">
        <div className="container">
          <div
            className="main w-100"
            style={{
              // backgroundImage: "url(" + require("assets/img/resourcesBGImage.jpg") + ")",
              // backgroundSize: "cover",
              // backgroundPosition: "center",
              // backgroundRepeat: "no-repeat",
              // height: "100vh",
              paddingTop: "40px",
            }}
          >
            <div className="column_attr mfn-inline-editor clearfix align_center">
              <h1 className="text-center">Resources</h1>
              <div
                style={{
                  width: "45%",
                  height: "5px",
                  background: "rgb(185 113 28)",
                  display: "inline-block",
                }}
              ></div>

              <p className="paraRes">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis ipsam quod ratione facere quisquam eveniet repudiandae
                sequi neque, voluptatum est numquam deleniti repellat vel,
                delectus nisi aperiam ipsum earum molestias dolorum reiciendis
                temporibus ab similique. Illo labore, obcaecati, quos ipsum,
                necessitatibus enim mollitia tempora optio soluta amet delectus
                nam quod!
              </p>
            </div>
            <div
              className="d-flex align-item-center justify-content-around"
              style={{ height: "350px", marginBottom: "90px" }}
            >
              <div
                class="card  d-flex flex-column"
                style={{
                  width: "18rem",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <div>
                  <img
                    src={colaborationAndPartenershipImg}
                    class="card-img-top  img-fluid w-100"
                    alt="..."
                    style={{ height: "8.4rem" }}
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="boxPara">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>

              <div
                class="card  d-flex flex-column"
                style={{
                  width: "18rem",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <div>
                  <img
                    src={exibitionImg}
                    class="card-img-top  img-fluid w-100"
                    alt="..."
                    style={{ height: "8.4rem" }}
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="boxPara">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>

              <div
                class="card  d-flex flex-column"
                style={{
                  width: "18rem",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <div>
                  <img
                    src={contactAndInquiryImg}
                    class="card-img-top  img-fluid w-100"
                    alt="..."
                    style={{ height: "8.4rem" }}
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="boxPara">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ResourcesPage;
