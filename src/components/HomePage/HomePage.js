import React, { useState } from "react";
import Contact from "./Contact/Contact";
import Content from "./Content/Content";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Testimonial from "./Testimonial/Testimonial";
// import Testimonial1 from "./Testimonial/Testimonial1";
import ModalLogin from "./ModalLogin";
import { useDisclosure } from '@chakra-ui/react'
import ReactModal from "react-modal";
import { useMediaQuery } from "@uidotdev/usehooks";




const HomePage = () => {
  const { onOpen } = useDisclosure()
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)
  const [email, setEmail] = useState("");
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");


  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: isSmallDevice ? "90%" : "auto",
      // marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "20px",
    },
  };


  // {onOpen ? <ModalLogin style={{ zIndex: 999 }} isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> : null}
  return (
    <div className="main-container">

      {isSignUpModalOpen ?
        <ReactModal
          shouldCloseOnOverlayClick={false}
          // shouldCloseOnEsc={false}
          style={customStyles}
          isOpen={isSignUpModalOpen}
          onRequestClose={() => setIsSignUpModalOpen(false)}
        >
          <ModalLogin footerLogin={"footerLogin"} email={email} setEmail={setEmail} />
        </ReactModal>
        : null
      }
      <div>
        <Navbar />
        <Header />
        <Content />
        <Features />
        <Contact />
        <Testimonial />
        <Footer setIsSignUpModalOpen={setIsSignUpModalOpen} onOpen={onOpen} email={email} setEmail={setEmail} />
      </div>

    </div>
  );
};

export default HomePage;

    // <Testimonial1 />
