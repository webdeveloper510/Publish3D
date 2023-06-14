import React, { Fragment } from "react";
import "../../App.css";
const AboutPage = () => {
  return (
    <div id="Content" role="main">
      <div className="container">
        <div
          class="column_attr mfn-inline-editor clearfix align_center"
          style={{ padding: "20" }}
        >
          <h3>About 3D Art Gallery</h3>
          <div
            style={{
              width: "45%",
              height: "5px",
              background: "rgb(185 113 28)",
              display: "inline-block",
            }}
          ></div>
        </div>

        <div class="image_wrapper">
          <img
            class="scale-with-grid"
            src="http://www.3dtrickart.co.nz/wp-content/uploads/2016/04/about_img3.jpg"
            alt="about_img3"
            title=""
            width="780"
            height="370"
            srcset="https://www.3dtrickart.co.nz/wp-content/uploads/2016/04/about_img3.jpg 780w, https://www.3dtrickart.co.nz/wp-content/uploads/2016/04/about_img3-600x467.jpg 600w, https://www.3dtrickart.co.nz/wp-content/uploads/2016/04/about_img3-300x233.jpg 300w, https://www.3dtrickart.co.nz/wp-content/uploads/2016/04/about_img3-768x598.jpg 768w, https://www.3dtrickart.co.nz/wp-content/uploads/2016/04/about_img3-188x146.jpg 188w, https://www.3dtrickart.co.nz/wp-content/uploads/2016/04/about_img3-50x39.jpg 50w, https://www.3dtrickart.co.nz/wp-content/uploads/2016/04/about_img3-96x75.jpg 96w"
          />

          <div class="column_attr mfn-inline-editor clearfix">
            <h5>
              3D Trick Art Gallery was proudly opened in Rotorua in April 2017
            </h5>
            <p>
              3D Trick Art Gallery is a New Zealand owned business. Located in
              Rotorua of New Zealand, the heart of Maori culture. It is the
              first ‘Trick Art’ gallery with unique New Zealand themed Trick
              Art. Throughout the 1250 square metre indoor space, more than 50
              trick artworks are displayed in 5 themes including Classic Art,
              Kiwi Life, Challenge, Fantasy, Grand Nature. These works were
              created by 10 professional 3D painters invited from overseas. In
              their field - they are some of the best in the world. The audience
              are not just looking at the works, but can jump into the
              paintings, be immersed and enjoy the pleasure of the optical
              illusion. As it is an indoor gallery, you can enjoy throughout the
              year - rain, hail or shine.
            </p>

            <h5>Hot location for one-stop tour</h5>
            <p>
              3D Trick Art Gallery is located in the main spot of Rotorua
              tourism. There are plenty of tourist attractions in the
              neighbourhood. If you want to enjoy the luge, OGO and Maori
              culture of Mitai Maori village, you can find easily within 5
              minutes distance from 3D Trick Art Gallery. Moreover, 3D Trick Art
              Gallery is located in the Heritage Farm, a 14 hectare farm site
              having various tourist attractions. When visiting the gallery, you
              can also enjoy the variety of sights and food such as Farmside
              Buffet Restaurant, The Farm Tour, Deer Museum(opening soon)
              alongside 3D Trick Art Gallery.
            </p>
          </div>
        </div>

        {/* Completed */}

        <div class="section_wrapper mcb-section-inner mcb-section-inner-250fc08da mt-5">
          <div class="column_attr mfn-inline-editor clearfix align_center">
            <h3>3D Art Gallery attractions</h3>
            <div
              style={{
                width: "45%",
                height: "5px",
                background: "rgb(185 113 28)",
                display: "inline-block",
              }}
            ></div>
          </div>

          <div class="mcb-wrap-inner mcb-wrap-inner-fcd5a3d6c">
            <div class="image_wrapper d-flex flex-column">
              <img
                class="scale-with-grid image"
                src="http://www.3dtrickart.co.nz/wp-content/uploads/2016/04/moa1.jpg"
                alt="moa1"
                title=""
                width="320"
                height="400"
                srcset="https://www.3dtrickart.co.nz/wp-content/uploads/2016/04/moa1.jpg 320w, https://www.3dtrickart.co.nz/wp-content/uploads/2016/04/moa1-240x300.jpg 240w, https://www.3dtrickart.co.nz/wp-content/uploads/2016/04/moa1-117x146.jpg 117w, https://www.3dtrickart.co.nz/wp-content/uploads/2016/04/moa1-40x50.jpg 40w, https://www.3dtrickart.co.nz/wp-content/uploads/2016/04/moa1-60x75.jpg 60w"
              />

              <h5 className="img_head mt-4">Unique Experience</h5>
              <p className="me-5" style={{ textAlign: "justify" }}>
                3D Trick Art Gallery is open in Rotorua with Unique and first
                Trick Art that is themed by New Zealand. Do you love New Zealand
                Life Style? Are you impressed by nature of New Zealand? Here we
                offer you a chance to enjoy the unique and special moment of
                being a part of New Zealand at 3D Trick Art Gallery. Enjoy being
                a part of the art, Kiwi, All Blacks and NZ Grand Nature and take
                great memory from your Rotorua Trip.
              </p>
            </div>

            <div class="image_wrapper d-flex flex-column">
              <img
                class="scale-with-grid image"
                src="http://www.3dtrickart.co.nz/wp-content/uploads/2016/04/tr_02.jpg"
                alt="tr_02"
                title=""
                width="320"
                height="400"
                srcset="https://www.3dtrickart.co.nz/wp-content/uploads/2016/04/tr_02.jpg 320w, https://www.3dtrickart.co.nz/wp-content/uploads/2016/04/tr_02-240x300.jpg 240w, https://www.3dtrickart.co.nz/wp-content/uploads/2016/04/tr_02-117x146.jpg 117w, https://www.3dtrickart.co.nz/wp-content/uploads/2016/04/tr_02-40x50.jpg 40w, https://www.3dtrickart.co.nz/wp-content/uploads/2016/04/tr_02-60x75.jpg 60w"
              />

              <h5 className="img_head mt-4">Accessibility</h5>
              <p className="me-5" style={{ textAlign: "justify" }}>
                Free from weather and time during your journey. Are you
                concerning bad weather, tricky time schedule for your Rotorua
                Trip? 3D Trick Art Gallery is the one you must visit. 3D Trick
                Art Gallery is an indoor gallery with wide range of magical
                trick art works. You will get never bothered with bad weather.
                In addition to that, we do not require pre booking, you can
                visit any time at your convenience in our opening hours. Contact
                us NOW for more information.
              </p>
            </div>

            <div class="image_wrapper d-flex flex-column">
              <img
                class="scale-with-grid image"
                src="http://www.3dtrickart.co.nz/wp-content/uploads/2016/04/accesbility1.jpg"
                alt="accesbility1"
                title=""
                width="320"
                height="400"
                srcset="https://www.3dtrickart.co.nz/wp-content/uploads/2016/04/accesbility1.jpg 320w, https://www.3dtrickart.co.nz/wp-content/uploads/2016/04/accesbility1-240x300.jpg 240w, https://www.3dtrickart.co.nz/wp-content/uploads/2016/04/accesbility1-117x146.jpg 117w, https://www.3dtrickart.co.nz/wp-content/uploads/2016/04/accesbility1-40x50.jpg 40w, https://www.3dtrickart.co.nz/wp-content/uploads/2016/04/accesbility1-60x75.jpg 60w"
              />

              <h5 className="img_head mt-4">Great Fun</h5>
              <p className="me-5" style={{ textAlign: "justify" }}>
                Have you ever been disappointed with poor quality attraction
                that does not worth for money you paid? 5 themes featuring New
                Zealand Life and extra will never get you bored. Over 50 pieces
                of life-size and hyper realistic murals inspired from New
                Zealand Nature and life style. It stimulate your imagination and
                creativity. Among the diverse themes at 3D trick Art Gallery,
                challenge your creativity to the test and win prizes from our
                regular event. Find our event from facebook page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
