import React from "react";
import "./SectionFive.css"; // Import your CSS file for styling
import { FEATURES } from "../Utils/feature";

const SectionFive = () => {
  return (
    <>
      <div className="section-five">
        {/* <div className="cont-five">
          
          <h2 className="section-heading-five">Advantages of using Oyster</h2>
          <p className="section-des-five">
            With our integrated CRM, project management, collaboration and
            invoicing capabilities, you can manage every aspect of your business
            in one secure platform.
          </p>
        </div> */}
        <div className="use-case-section">
          {FEATURES.map((feature, index) => {
            return (
              <div key={index} className={`feature-section-${index}`}>
                <div className="left-use-case">
                  <img src={feature.featureImages} alt={`img-${index}`} />
                </div>
                <div className="right-use-case">
                  <div className="right-usecase-content"> <div className="testimonial-buttons">
                    {/* <button className="slide-button">
                      {feature.featureButton}
                    </button> */}
                  </div>
                  <div className="useCaseTitles">{feature.title}</div>
                  <div className="useCaseDesc"> {feature.description}</div></div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

// function SectionFive() {
//   return (
//     <div className="section-five">
//       <div className="section-heading">
//         <h2>Advantage of Oyster App</h2>
//         <p>
//           With our integrated CRM, project management, collaboration and
//           invoicing capabilities, you can manage every aspect of your business
//           in one secure platform.
//         </p>
//       </div>

//       <div className="feature-section">
//         <div className="feature-container">
//           <img src={boxOneImg} alt="Placeholder" className="image" />
//           <div className="feature-title">Write Humanised Content with AI</div>
//           <div className="feature-description">
//             Whether it's kickstarting a new article or adding flair to existing
//             content, our AI writer is trained on millions of data points to
//             generate creative content for you just like you would yourself!
//           </div>
//         </div>

//         <div className="feature-container">
//           <img src={boxTwoImg} alt="Placeholder" className="image" />
//           <div className="feature-title">Absolute Originality</div>
//           <div className="feature-description">
//             Confidently present your work, knowing our tool has cross-referenced
//             it against billions of documents, certifying its uniqueness
//           </div>
//         </div>

//         <div className="feature-container">
//           <img src={boxThreeImg} alt="Placeholder" className="image" />
//           <div className="feature-title">Flawless Grammar</div>
//           <div className="feature-description">
//             Utilize sophisticated algorithms that delve deep into language
//             nuances, ensuring each sentence you write radiates professionalism
//             and precision
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default SectionFive;
