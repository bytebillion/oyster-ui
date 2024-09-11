import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../../libs/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUpgradeModal } from "../..//context/user";
import MobleAccordion from "../MobleAccordion/index";
import GrammerEditor from "../../GrammarEditor/GrammarEditorNew";

const Home = () => {
 const { setshowupgrade } = useUpgradeModal();
 const navigate = useNavigate();
 const { id } = useParams();
 const [doc, setDoc] = useState(null);
 const [suggestionResult, setSuggestionResult] = useState(null);
 const [plagResult, setPlagResult] = useState(null);
 // eslint-disable-next-line
 const [picky, setPicky] = useState(false);
 const [errorWordsWithColor, setErrorWordsWithColor] = useState([]);
 const [isDocUpdateAPI, setIsDocUpdateAPI] = useState(false)
 const [icon, setIcon] = useState(false);

 const fetchDocument = useCallback(async () => {
  try {
    if (id == null) return;
    const docRes = await axios.get(`/api/document/${id}`);
    axios
      .patch(`/api/document/${id}/opened`)
      .then((_) => console.log("last opened updated"));
    const { scan, suggestions, ...data } = docRes.data.data;
    setDoc(data);
    if (scan) {
      if (scan.status === "error") {
        setPlagResult(null);
      } else {
        setPlagResult(scan.results);
      }
    }
    if (suggestions) {
      setSuggestionResult(suggestions);
    }
  } catch (error) {
    console.log(error);
    toast.error("Document not found");
    setTimeout(navigate("/dashboard"), 2000);
  }
}, [id, navigate]);

 const checkGrammar = async () => {
  try {
   if (id == null) return;
   const res = await axios.post(
    `/api/document/${id}/grammer?picky=${picky ? "true" : "false"}`
   );

   if (res?.data?.notSubscribed) {
    setshowupgrade(true);
    return;
   }

   if (res.status === 200) {
    setSuggestionResult(res.data.results?.matches);
    updateDocumentSuggestions(res?.data?.results?.matches ?? []);
   }
  } catch (error) {
   console.log(error);
  }
 };

 // const checkGrammarWithPicky = async (p) => {
 //   try {
 //     if (doc?._id == null) return;
 //     setPicky(p);
 //     const res = await axios.post(
 //       `/api/document/${id}/grammer?picky=${p ? "true" : "false"}`
 //     );

 //     if (res?.data?.notSubscribed) {
 //       setshowupgrade(true);
 //       return;
 //     }

 //     if (res.status === 200) {
 //       setSuggestionResult(res.data.results.matches);
 //       updateDocumentSuggestions(res?.data?.results?.matches ?? []);
 //     }
 //   } catch (error) {
 //     console.log(error);
 //   }
 // };

 const updateDocumentSuggestions = async (suggestions) => {
  try {
   if (doc?._id == null) return;
   const res = await axios.patch(`/api/document/${doc?._id}/suggestions`, {
    suggestions,
   });

   if (res?.data?.notSubscribed) {
    setshowupgrade(true);
    return;
   }

   if (res.status === 200) {
    console.log("Document's suggestions updated successfully");
   }
  } catch (error) {
   console.log(error);
  }
 };

 const updateDocumentContent = async (str) => {
  try {
   console.log("Updating document content");
   if (doc?._id == null) return;
   if (str) {
    doc.text = str;
    setDoc({ ...doc, text: str });
    const res = await axios.put(`/api/document/${doc?._id}`, {
     text: str,
    });
    if (res.status === 200) {
     console.log("Document content updated successfully");
    }
   } else {
    const res = await axios.put(`/api/document/${doc?._id}`, {
     text: doc.text,
    });
    if (res.status === 200) {
     console.log("Document content updated successfully");
    }
   }
  } catch (error) {
   console.log(error);
  }
 };

 const updatedocumentTitle = async () => {
  try {
   if (doc?._id == null) return;
   const res = await axios.patch(`/api/document/${doc?._id}/title`, {
    title: doc.title,
   });
   if (res?.data?.notSubscribed) {
    setshowupgrade(true);
    return;
   }

   if (res.status === 200) {
    console.log("Document title updated successfully");
   }
  } catch (error) {
   console.log(error);
  }
 };

 // not sure yet when to use this.
 const getPlagReport = async () => {
  try {
   if (doc?._id == null) return;
   const loadingToast = toast(
    "Plagiarism check ongoing, please be patient...",
    {
     type: "info",
     isLoading: true,
    }
   );
   const interval = setInterval(async () => {
    const res = await axios.get(`/api/document/${id}/plagiarism/scan`);

    if (res?.data?.notSubscribed) {
     setshowupgrade(true);
     return;
    }

    if (res.status === 200 && res.data.success === true) {
     if (res.data.data.status === "pending") {
      console.log("pending");
     } else if (res.data.data != null && res.data.data.status === "error") {
      toast(res?.data?.results, {
       type: "info",
      });
      clearInterval(interval);
      toast.dismiss(loadingToast);
     } else {
      setPlagResult(res.data.data.results);
      toast("Plagiarism check completed", {
       type: "success",
      });
      clearInterval(interval);
      toast.dismiss(loadingToast);
     }
    }
   }, 5000);
  } catch (error) {
   console.log(error);
  }
 };

 const checkPlag = async () => {
  try {
   if (doc?._id == null) return;

   const res = await axios.post(`/api/document/${id}/plagiarism/scan`);

   if (res?.data?.notSubscribed) {
    setshowupgrade(true);
    return;
   }

   if (res.status === 200) {
    // setTimeout(() => {
    getPlagReport();
    // }, 5000);
    toast("Plagiarism check started, please wait for a while", {
     type: "info",
    });
   }
  } catch (error) {
   console.log(error);
  }
 };
 useEffect(() => {
  fetchDocument();
 }, [id, fetchDocument]);

 return (
  <>
   <div className="block  w-[100%] h-[100%]">
    <GrammerEditor
    //  toolbarRef={toolbarRef}
     document={doc}
     setDocument={setDoc}
     checkGrammar={checkGrammar}
     updateDocumentContent={updateDocumentContent}
     updatedocumentTitle={updatedocumentTitle}
     errorWordsWithColor={errorWordsWithColor}
     results={suggestionResult}
     setErrorWordsWithColor={setErrorWordsWithColor}
     setIsDocUpdateAPI={setIsDocUpdateAPI}
     isDocUpdateAPI={isDocUpdateAPI}
    />
    {/* <Main
          document={doc}
          setDocument={setDoc}
          checkGrammar={checkGrammar}
          updateDocumentContent={updateDocumentContent}
          updatedocumentTitle={updatedocumentTitle}
          errorWordsWithColor={errorWordsWithColor}
          results={suggestionResult}
        /> */}
   </div>

   <MobleAccordion
    results={suggestionResult}
    setDocument={setDoc}
    document={doc}
    updateDocumentContent={updateDocumentContent}
    checkGrammar={checkGrammar}
    setErrorWordsWithColor={setErrorWordsWithColor}
    icon={icon}
    setIcon={setIcon}
    report={plagResult?.results ?? null}
    plagResult={plagResult}
    checkPlag={checkPlag}
   />
  </>
 );
};

export default Home;
