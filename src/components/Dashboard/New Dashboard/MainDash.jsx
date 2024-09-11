import React, { useState, useCallback, useEffect, useContext, useRef } from "react";
import "./MainDash.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import createDoc from "../../../assets/createDoc.svg";
import LeftPaneLogo from "../../../assets/leftpane-logo.svg";
import upload from "../../../assets/upload.svg";
import myOysterActive from "../../../assets/oyster-home.svg";
import myAccountActive from "../../../assets/oyster-home.svg";
import support from "../../../assets/support-dash.svg";
import myOyster from "../../../assets/myOyster.svg";
import LeftPaneMobileLogo from "../../../assets/Leftpane/final 1.png"
import myAccount from "../../../assets/MyAccount.svg";
import trash from "../../../assets/Trash.svg";
import { UserContext, UserDispatchContext, useUpgradeModal } from "../../context/user";
import Delete from "../Delete";
import { Img } from "@chakra-ui/react";
import deleteOutline from "../../../assets/Dashboard/Main/trashOutline.svg";
import axios from "../../../libs/axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

const MainDash = ({ id, title, text, createdAt, suggestionCount, setUserData }) => {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState(location.pathname);
  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  const navigate = useNavigate();
  const user = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [documentIdToDelete, setDocumentIdToDelete] = useState(null);
  const setUser = useContext(UserDispatchContext);
  const [email, setEmail] = useState(null);
  // eslint-disable-next-line
  const [username, setUsername] = useState(null);
  const [documents, setDocuments] = useState([]);
  // eslint-disable-next-line
  const [loadingDocuments, setLoadingDocuments] = useState(true);
  const { setshowupgrade } = useUpgradeModal();
  const deleteRef = useRef();
  const docRef = useRef();
  const { setIsAuthenticated } = useAuth();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (deleteRef.current && deleteRef.current.contains(e.target)) {
        setShow(true);
        setDocumentIdToDelete(id);
      } else if (docRef.current && docRef.current.contains(e.target)) {
        navigate(`/editor/658e7a9638f9e4df73321aa5`);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [id, navigate]);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setUsername(user.name);
    }
  }, [user]);

  const newDocument = async () => {
    try {
      const newDocRes = await axios.post("/api/document");
      if (newDocRes?.data?.notSubscribed) {
        return;
      }

      setDocuments(
        documents.length > 0
          ? [...documents, newDocRes.data.data]
          : [newDocRes.data.data]
      );
      navigate(`/editor/${newDocRes.data.data._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDocuments = useCallback(async () => {
    const id = toast.loading("Loading documents...");
    try {
      startLoading();
      const docsRes = await axios.get("/api/document");
      setDocuments(docsRes.data.data);
      toast.dismiss(id);
      stopLoading();
    } catch (error) {
      console.log(error);
      toast.dismiss(id);
      stopLoading();
    }
  }, []);

  const deleteDocument = async (id) => {
    try {
      const deleteDocRes = await axios.delete(`/api/document/${id}`);

      if (deleteDocRes?.data?.notSubscribed) {
        setshowupgrade(true);
        return;
      }

      setDocuments(documents.filter((doc) => doc._id !== id));
      setShow(false);
      setDocumentIdToDelete(null);
    } catch (error) {
      console.log(error);
    }
  };

  const startLoading = () => setLoadingDocuments(true);
  const stopLoading = () => setTimeout(() => setLoadingDocuments(false), 200);

  useEffect(() => {
    fetchDocuments();
  }, [fetchDocuments]);

  return (
    <div className="main-dash">
      <div className="leftpane-dash">
      <img className="leftpane-mobile-logo" src={LeftPaneMobileLogo} alt="" />

        <img className="leftpane-logo" src={LeftPaneLogo} alt="" />
        <div className="leftpane-menu-cont">
          <Link to="/new-dashboard">
            <div className="leftpane-menu">
              <img
                src={
                  currentLocation === "/new-dashboard"
                    ? myOysterActive
                    : myOyster
                }
                alt=""
              />
              <h2
                className={`leftpane-content ${
                  currentLocation === "/new-dashboard" ? "active" : ""
                }`}
              >
                My Oyster
              </h2>
            </div>
          </Link>

          <Link to="/my-account">
            <div className="leftpane-menu">
              <img
                src={
                  currentLocation === "/my-account"
                    ? myAccountActive
                    : myAccount
                }
                alt=""
              />
              <h2
                className={`leftpane-content ${
                  currentLocation === "/my-account" ? "active" : ""
                }`}
              >
                My Account
              </h2>
            </div>
          </Link>

          <Link to="">
            <div className="leftpane-menu">
              <img className="menu-icons" src={trash} alt="" />
              <h2
                className={`leftpane-content ${
                  currentLocation === "" ? "active" : ""
                }`}
              >
                Trash
              </h2>
            </div>
          </Link>
        </div>
        <div className="support-menu-cont">
          <Link to="/support-center">
            <div className="support-menu-box">
              <img className="dash-sup" src={support} alt="" />{" "}
              <h2 className="leftpane-content-support">Support</h2>
            </div>
          </Link>
          <hr className="menu-divider"></hr>

          <div className="support-menu">
            <h2 className="leftpane-content-email">
              {email ?? "anon@appoyster.com"}
            </h2>
          </div>
          <div className="support-menu">
            <button
              onClick={() => {
                localStorage.removeItem("token");
                console.log("logged out");
                setUser(null);
                navigate("/auth");
                setIsAuthenticated(false)
              }}
              className="leftpane-content-support pt-4"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
      <div className="rightpane-dash">
        <div onClick={newDocument} className="dash-card">
          <img className="upload-file-img" src={createDoc} alt="" />
          <div className="cursor-pointer ">
            <div className="d-flex w-[100%] flex-col justify-center items-center">
              <div className="new-doc-text">Create A new Document</div>
              <hr className="line-doc"></hr>

              <div className="upload">
                <span>
                  <img src={upload} alt="" />
                </span>
                <span>upload</span>
              </div>
            </div>
          </div>
        </div>
        {documents?.length > 0 &&
          documents?.map((doc, index) => (
            <>
            <div ref={docRef} className="dash-card-content" key={doc._id}>
              <div className="doc-content-cont">
                <div className="doc-title">{doc?.title}</div>
                <div className="doc-text">
                  {doc?.text != null && doc?.text?.length > 0
                    ? doc?.text?.substr(0, 95) + "..."
                    : ""}
                </div>
              </div>
              <div>
                <hr className="line-doc"></hr>
                <div className="suggestion">
                  <div className="error-delete">
                    {doc?.suggestionCount + 1 ?? 0}
                  </div>
                  <div>
                    <button
                      ref={deleteRef}
                      onClick={() => {
                        setShow(true);
                        setDocumentIdToDelete(doc._id);
                      }}
                    >
                      <Img src={deleteOutline} />
                    </button>
                    <Delete
                      id={doc._id}
                      show={show && documentIdToDelete === doc._id}
                      setShow={setShow}
                      deleteDocument={deleteDocument}
                      fetchDocuments={fetchDocuments}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
          ))
          }
      </div>
    </div>
  );
};

export default MainDash;
