import React, { useCallback, useContext, useEffect, useState } from "react";
import { Img } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
import { Spinner } from "@chakra-ui/spinner";
import axios from "../../../libs/axios";
import Document from "../Document";
import {
  UserContext,
  //  UserDispatchContext,
  useUpgradeModal,
} from "../../context/user";
import oysterLogo from "../../../assets/Dashboard/Mobile/oysterLogo.svg";
import fileIcon from "../../../assets/Dashboard/Main/file.svg";
import MobileProfile from "./MobileProfile/MobileProfile";

const MobileDashboard = ({userData, setUserData}) => {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  //  const setUser = useContext(UserDispatchContext);
  const { setshowupgrade } = useUpgradeModal();
  const [seachQuery, setSearchQuery] = useState("");
  const [documents, setDocuments] = useState([]);
  // const { logout } = useAuth();
  const [loadingDocuments, setLoadingDocuments] = useState(true);

  const [mobProfile, setMobProfile] = useState(false);

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

  const searchDocuments = useCallback(
    async (toastRef) => {
      try {
        startLoading();
        if (seachQuery === "") {
          toast.dismiss(toastRef);
          return;
        }
        const docsRes = await axios.get(
          `/api/document/search?query=${seachQuery}`
        );
        setDocuments(docsRes.data.data);
        toastRef && toast.dismiss(toastRef);
        stopLoading();
      } catch (error) {
        console.log(error);
        toastRef && toast.dismiss(toastRef);
        stopLoading();
      }
    },
    [seachQuery]
  );

  useEffect(() => {
    if (user) setUserData(user);
      // eslint-disable-next-line
  }, [user]);

  // search when user stops typing
  useEffect(() => {
    startLoading();
    const timer = setTimeout(() => {
      if (seachQuery === "") fetchDocuments();
      else {
        // const id = toast.loading("Searching documents...");
        // searchDocuments(id);
        searchDocuments();
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [seachQuery, fetchDocuments, searchDocuments]);

  const startLoading = () => setLoadingDocuments(true);
  const stopLoading = () => setTimeout(() => setLoadingDocuments(false), 200);

  const sortDocumentsOnChange = async (sort) => {
    await fetchDocuments();
    startLoading();
    switch (sort) {
      case "last-modified":
        setDocuments(
          documents.sort((a, b) => {
            return new Date(b.updatedAt) - new Date(a.updatedAt);
          })
        );
        stopLoading();
        break;

      case "last-opened":
        setDocuments(
          documents.sort((a, b) => {
            return new Date(b.lastOpened) - new Date(a.lastOpened);
          })
        );
        stopLoading();
        break;

      case "title":
        setDocuments(
          documents.sort((a, b) => {
            return a.title.localeCompare(b.title);
          })
        );
        stopLoading();
        break;

      default:
        // console.log("error: invalid sort " + sort);
        break;
    }
  };

  const newDocument = async () => {
    try {
      const newDocRes = await axios.post("/api/document");
      if (newDocRes?.data?.notSubscribed) {
        setshowupgrade(true);
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

  const deleteDocument = async (id) => {
    try {
      const deleteDocRes = await axios.delete(`/api/document/${id}`);

      if (deleteDocRes?.data?.notSubscribed) {
        setshowupgrade(true);
        return;
      }

      setDocuments(documents.filter((doc) => doc._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, [fetchDocuments]);
  return (
    <>
      {mobProfile ? (
        <MobileProfile setMobProfile={setMobProfile} userData={userData} setUserData={setUserData} />
      ) : (
        <div className="mobile-dashboard-container w-[100%] h-[100%] p-[25px]">
          <div className="mobile-header d-flex w-[100%] justify-between content-center p-[5px]">
            <Img src={oysterLogo} />
            <div
              onClick={() => setMobProfile(true)}
              className="user-profile d-flex justify-center items-center h-[50px] w-[50px] text-[20px] text-white rounded-full bg-[#B1CEFB]"
            >
              {user?.name?.substring(0, 1)}
            </div>
          </div>

          <div className="search-bar d-flex mt-[30px] justify-content-between align-items-center">
            <div className="d-flex w-[100%] border-[2px] border-[#B1CEFB] rounded-lg">
              <textarea
                className="p-1 px-3 resize-none outline-none text-[#6E6E70] rounded-lg"
                value={seachQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                rows="1"
                cols="40"
                placeholder="Search"
              />
              {/* <InputGroup>
      <Input className="w-[100%] border-[#B1CEFB] " focusBorderColor="#B1CEFB" variant="outline" placeholder="Search" />
      <InputRightElement>
       <Img className="absolute top-1 right-4" src={searchImg} alt="search" />
      </InputRightElement>
     </InputGroup> */}
            </div>
          </div>

          <div className="mt-4 d-flex text-[#767790]">
            <span className="mr-4 text-[1rem] text-[#3b82f6] my-auto">
              Sort:
            </span>
            <Select
              className="w-[11rem]"
              styles={{
                control: (provided) => ({
                  ...provided,
                  border: "none",
                  borderRadius: "0",
                  boxShadow: "none",
                  backgroundColor: "transparent",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "#616161",
                }),
                option: (provided) => ({
                  ...provided,
                  color: "#616161",
                  backgroundColor: "#F5F5F5",
                  borderBottom: "1px solid #E0E0E0",
                }),
                menuList: (provided) => ({
                  ...provided,
                  padding: "0",
                }),
                value: (provided) => ({
                  ...provided,
                  color: "#646464",
                }),
                dropdownIndicator: (provided) => ({
                  ...provided,
                  color: "#616161",
                }),
              }}
              options={[
                { label: "Last Modified", value: "last-modified" },
                { label: "Last Opened", value: "last-opened" },
                { label: "Title", value: "title" },
              ]}
              onChange={(e) => {
                sortDocumentsOnChange(e.value);
              }}
              placeholder="Select an option"
            />
          </div>

          {loadingDocuments ? (
            <div
              style={{
                height: "80%",
                width: "100%",
                display: "grid",
                placeContent: "center",
              }}
            >
              <div
                style={{
                  margin: "auto",
                  display: "grid",
                }}
              >
                <Spinner size="6xl" w="30px" h="30px" mx="auto" mb="10px" />
                <p textAlign="center">
                  Loading... Please don't refresh the page.
                </p>
              </div>
            </div>
          ) : (
            <div
              className={`my-4 pt-4 grid grid-cols-2 md:grid-cols-3 gap-4 w-[100%]
									h-[${user?.phoneNumber != null ? "70vh" : "40vh"}] 
									overflow-scroll scrollbar-thin justify-start `}
            >
              {seachQuery === "" && (
                <div
                  onClick={newDocument}
                  className="cursor-pointer m-1 mr-5 p-10 block w-[100%] h-[12rem] text-center rounded-lg shadow-md"
                >
                  <div className="d-flex w-[100%] flex-col justify-center items-center">
                    <Img className="w-[90px]" src={fileIcon} />
                    <div className="my-3 text-[#717171] text-2xl font-[600]">
                      New
                    </div>
                  </div>
                </div>
              )}

              {documents?.length > 0 &&
                documents?.map((doc) => (
                  <Document
                    id={doc?._id}
                    title={doc?.title}
                    text={doc?.text}
                    createdAt={doc?.createdAt}
                    suggestionCount={doc?.suggestionCount}
                    deleteDocument={deleteDocument}
                    fetchDocuments={fetchDocuments}
                  />
                ))}
            </div>
          )}
          <ToastContainer position="top-right" newestOnTop />
        </div>
      )}
    </>
  );
};

export default MobileDashboard;
