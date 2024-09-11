import React from "react";
import "./Features.css";
import image1 from "../../../assets/file_oyster.png";
import image2 from "../../../assets/f2.png";
import image3 from "../../../assets/f3.png";
import image4 from "../../../assets/Component 4.png";
const Features = () => {
  return (
    <div className="features_container container">


      <div className="row feature_card_one">
        <div className="col-lg-6 col-md-12 col-sm-12 feature_text_content" >
          <h5>Real Time Grammar Check</h5>
          <p>
            People who do not use punctuation deserve a long sentence. Just
            kidding! Proofread like a pro! Oyster saves you from a smack in the
            face by checking your grammar and spelling, thereby increasing the
            credibility and readability of your content.
          </p>

        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 feature_image" >
          <img src={image1} alt="feature_image1" />
        </div>
      </div>

      <div className="row feature_card_one" >

        <div className="col-lg-6 col-md-12 col-sm-12 order-lg-2  feature_text_content">
          <h5>Plagiarism Check & Report</h5>
          <p>
            Google is the most seasoned detective of the writing industry that
            has a powerful algorithm to identify plagiarized text. Escape the
            inevitable with your intelligent writing companion. Oyster will
            provide a detailed plagiarism report in a jiffy.
          </p>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 order-lg-1 feature_image">
          <img

            src={image2}
            alt="feature_image2"
          />
        </div>{" "}
      </div>


      <div className="row feature_card_one">
        <div className="col-lg-6 col-md-12 col-sm-12 feature_text_content" >
          <h5>
            Content Scheduler <br />
            (Coming Soon)
          </h5>
          <p>
            Its all about the timing. Isn’t it? Juggling between multiple
            clients with several deadlines approaching can be baffling. Let your
            intelligent companion share the load. Schedule your content and
            publish on all social media platforms conveniently using Oyster.
          </p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 feature_image">
          <img src={image3} alt="feature_image1" />
        </div>
      </div>

      <div className="row feature_card_one">

        <div className="col-lg-6 col-md-12 col-sm-12 order-lg-2  feature_text_content">
          <h5>
            Keywords are the key! <br />
            (Coming Soon)
          </h5>
          <p>
            The best place to hide a dead body is page 2 of Google search
            results. Nobody cares what is beyond page 1. Please the SEO Gods
            with thorough keyword research. Select primary/ secondary keywords
            with Oyster and rank your pages on Google.
          </p>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 order-lg-1  feature_image">
          <img
            src={image4}
            alt="feature_image2"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
