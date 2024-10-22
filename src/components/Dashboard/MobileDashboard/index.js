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
import MenuIcon from "../../../assets/Dashboard/Main/MenuIcon.png"

import searchImg from "../../../assets/Dashboard/Main/ri_search-line.png";
import DocIcon from "../../../assets/Dashboard/Main/DocIcon.png"
import uploadIcon from "../../../assets/Dashboard/Main/uploadIcon.png"
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

const MobileDashboard = ({ userData, setUserData }) => {
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
  console.log(mobProfile, "mobProfilemobProfilemobProfile")
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {mobProfile ? (
        <MobileProfile setMobProfile={setMobProfile} userData={userData} setUserData={setUserData} />
      ) : (
        <div className="mobile-dashboard-container w-[100%] h-[100%] p-[25px] " style={{display:"flex" , flexDirection:"column" , justifyItems:"center" ,alignItems:"center"}}>
          <div className="mobile-header d-flex w-[100%] justify-between content-center p-[5px]">
            <Img src={oysterLogo} />
            <div
              onClick={() => setMobProfile(true)}
              className="user-profile d-flex justify-center items-center h-[40px] w-[40px] text-[20px] text-white  "
            >
                <Img src={MenuIcon} />
              {/* {user?.name?.substring(0, 1)} */}
            </div>
          </div>
          <div className=" flex-1 flex-col space-y-[30px] ">
            <div className="search-bar d-flex mt-[30px] justify-content-between align-items-center">
              <div className="d-flex w-[100%] border-[2px] border-[#B1CEFB] rounded-lg">
                <textarea
                  className="p-1 px-3 resize-none outline-none text-[#6E6E70] rounded-lg"
                  value={seachQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  rows="1"
                  cols="40"
                  placeholder="Search"
                  style={{ width: "100%" }}
                />
                {/* <InputGroup>
      <Input className="w-[100%] border-[#B1CEFB] " focusBorderColor="#B1CEFB" variant="outline" placeholder="Search" />
      <InputRightElement>
       <Img className="absolute top-1 right-4" src={searchImg} alt="search" />
      </InputRightElement>
     </InputGroup> */}
              </div>
            </div>

            {/* <div className="mt-4 d-flex text-[#767790]">
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
           */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" ,justifyContent:"center",alignItem:"center" }}>
              {/* Create New Document Card */}
              <Grid item xs={6} sm={6} md={4} lg={2}>
                <div style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", borderRadius: "12px", width: "85%", height: "173px" }}>
                  <Card
                    sx={{
                      borderTopLeftRadius: "5px !important",
                      borderTopRightRadius: "5px !important",
                      borderBottomLeftRadius: "0px !important",
                      borderBottomRightRadius: "0px !important",
                      padding: "6%"
                    }}
                  >
                    <CardContent
                      style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
                    >
                      <img className=" h-[40px] w-[31px]" style={{ marginBottom: "10px" }} src={DocIcon} alt="DocIcon" />
                      <Typography sx={{ fontSize: "12px", textAlign: "center", lineHeight: "13px", color: "#090909", fontWeight: 600, marginTop: "8%" }}>
                        Create A New Document
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      borderTopLeftRadius: "0px !important",
                      borderTopRightRadius: "0px !important",
                      borderBottomLeftRadius: "5px !important",
                      borderBottomRightRadius: "5px !important",
                      borderTop: "0.2px solid #000000",
                      padding: "4%",
                      cursor: "pointer",
                    }}
                    onClick={newDocument}
                  >
                    <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "3%" }}>
                      <img className=" h-[17px] w-[14px]" style={{ marginBottom: "4px" }} src={uploadIcon} alt="uploadIcon" />
                      <Typography sx={{ fontSize: "12px", color: "#040404", fontWeight: 600 }}>Upload</Typography>
                    </Box>
                  </Card>
                </div>
              </Grid>

              {/* Document List */}

              {documents?.length > 0 &&
                documents?.map((doc, index) => (
                  <Grid item xs={6} sm={6} md={2} lg={2} key={index}>
                    <Document
                      id={doc?._id}
                      title={doc?.title}
                      text={doc?.text}
                      createdAt={doc?.createdAt}
                      suggestionCount={doc?.suggestionCount}
                      deleteDocument={deleteDocument}
                      fetchDocuments={fetchDocuments}
                      index={index + 1}
                    />
                  </Grid>
                ))}
            </Box>
          </div>

          {/* {loadingDocuments ? (
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
          )} */}
          <ToastContainer position="top-right" newestOnTop />
        </div>
      )}
    </div>

    //         <div className="ml-16 mt-10 flex-1 overflow-hidden flex-col space-y-[100px]" >
    //         <div className="flex justify-content-between align-items-center ">
    //           <div className="relative w-[90%] drop-shadow-lg h-[40px]">
    //             <img
    //               className="absolute left-7 top-1/2 transform -translate-y-1/2 h-[24px] w-[24px] mt-[2px]"
    //               src={searchImg}
    //               alt="search"
    //             />
    //             <input
    //               className="p-1 pl-12 resize-none w-full outline-none text-[#000000] placeholder-[#000000]  h-[40px]"
    //               style={{ textIndent: '67px', borderRadius: '0' }}
    //               value={seachQuery}
    //               onChange={(e) => setSearchQuery(e.target.value)}
    //               rows="1"
    //               cols="40"
    //               placeholder="Search"
    //             />
    //             <button className="absolute  right-0 bg-[#3A3AF4] text-[#FFFFFF] w-[10%] h-[100%]">Search</button>

    //           </div>
    //         </div>

    //         {/* <Box sx={{ display: "flex", gap: "3%" }}>
    //           <Grid item xs={4} sm={6} lg={2} >
    //             <div style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", borderRadius: "12px", width: "140px", height: "173px" }}>
    //               <Card sx={{
    //                 borderTopLeftRadius: "5px !important",
    //                 borderTopRightRadius: "5px !important",
    //                 borderBottomLeftRadius: "0px !important",
    //                 borderBottomRightRadius: "0px !important", padding: "6%"
    //               }}>
    //                 <CardContent style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
    //                   <img className=" h-[40px] w-[31px]" style={{ marginBottom: "10px" }} src={DocIcon} alt="DocIcon" />
    //                   <Typography sx={{ fontSize: "12px", textAlign: "center", lineHeight: "13px", color: "#090909", fontWeight: 600, marginTop: "8%" }}>Create A new Document</Typography>
    //                 </CardContent>
    //               </Card>
    //               <Card sx={{
    //                 borderTopLeftRadius: "0px !important",
    //                 borderTopRightRadius: "0px !important",
    //                 borderBottomLeftRadius: "5px !important",
    //                 borderBottomRightRadius: "5px !important", borderTop: "0.2px solid #000000", padding: "4%", cursor: "pointer"
    //               }} onClick={newDocument}>
    //                 <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "3%" }}>
    //                   <img className=" h-[17px] w-[14px]" style={{ marginBottom: "4px" }} src={uploadIcon} alt="uploadIcon" />
    //                   <Typography sx={{ fontSize: "12px", color: "#040404", fontWeight: 600 }}>Upload</Typography>

    //                 </Box>
    //               </Card>
    //             </div>
    //           </Grid> */}


    // {/* 
    //           {documents?.length > 0 &&
    //             documents?.map((doc, index) => {
    //               return (
    //                 <>
    //                   <Grid item xs={12} sm={12} lg={12} key={index} >
    //                     <Document
    //                       id={doc?._id}
    //                       title={doc?.title}
    //                       text={doc?.text}
    //                       createdAt={doc?.createdAt}
    //                       suggestionCount={doc?.suggestionCount}
    //                       deleteDocument={deleteDocument}
    //                       fetchDocuments={fetchDocuments}
    //                       index={index + 1}
    //                     />
    //                   </Grid> */}


    //                   {/* <Grid item xs={4} sm={6} lg={2}  className={index}>
    //                <Document
    //                   id={doc?._id}
    //                   title={doc?.title}
    //                   text={doc?.text}
    //                   createdAt={doc?.createdAt}
    //                   suggestionCount={doc?.suggestionCount}
    //                   deleteDocument={deleteDocument}
    //                   fetchDocuments={fetchDocuments}
    //                   index={index + 1}
    //                 />
    //               </Grid> */}
    //                 {/* </> */}


    //               {/* )
    //             })} */}
    //         {/* </Box> */}

    //         <Box sx={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
    //   {/* Create New Document Card */}
    //   <Grid item xs={12} sm={6} md={4} lg={2}>
    //     <div style={{  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", borderRadius: "12px", width: "85%", height: "173px" }}>
    //       <Card
    //         sx={{
    //           borderTopLeftRadius: "5px !important",
    //           borderTopRightRadius: "5px !important",
    //           borderBottomLeftRadius: "0px !important",
    //           borderBottomRightRadius: "0px !important",
    //           padding: "6%"
    //         }}
    //       >
    //         <CardContent
    //           style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
    //         >
    //           <img className=" h-[40px] w-[31px]" style={{ marginBottom: "10px" }} src={DocIcon} alt="DocIcon" />
    //           <Typography sx={{ fontSize: "12px", textAlign: "center", lineHeight: "13px", color: "#090909", fontWeight: 600, marginTop: "8%" }}>
    //             Create A New Document
    //           </Typography>
    //         </CardContent>
    //       </Card>
    //       <Card
    //         sx={{
    //           borderTopLeftRadius: "0px !important",
    //           borderTopRightRadius: "0px !important",
    //           borderBottomLeftRadius: "5px !important",
    //           borderBottomRightRadius: "5px !important",
    //           borderTop: "0.2px solid #000000",
    //           padding: "4%",
    //           cursor: "pointer",
    //         }}
    //         onClick={newDocument}
    //       >
    //         <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "3%" }}>
    //           <img className=" h-[17px] w-[14px]" style={{ marginBottom: "4px" }} src={uploadIcon} alt="uploadIcon" />
    //           <Typography sx={{ fontSize: "12px", color: "#040404", fontWeight: 600 }}>Upload</Typography>
    //         </Box>
    //       </Card>
    //     </div>
    //   </Grid>

    //   {/* Document List */}

    //   {documents?.length > 0 &&
    //     documents?.map((doc, index) => (
    //       <Grid item xs={12} sm={6} md={2} lg={2} key={index}>
    //         <Document
    //           id={doc?._id}
    //           title={doc?.title}
    //           text={doc?.text}
    //           createdAt={doc?.createdAt}
    //           suggestionCount={doc?.suggestionCount}
    //           deleteDocument={deleteDocument}
    //           fetchDocuments={fetchDocuments}
    //           index={index + 1}
    //         />
    //       </Grid>
    //     ))}

    // </Box>

    //       </div>


  );
};

export default MobileDashboard;
