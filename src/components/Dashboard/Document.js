// Document.js
import React, { useEffect, useRef, useState } from "react";
import Delete from "./Delete";
import { countWords } from "../../libs/utility";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Img, useMediaQuery } from "@chakra-ui/react";
import deleteOutline from "../../assets/Dashboard/Main/trashOutline.svg";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles'

const Document = ({
  id,
  title,
  text,
  createdAt,
  deleteDocument,
  fetchDocuments,
  suggestionCount,
  index
}) => {
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery("(max-width: 800px)");

  const [show, setShow] = useState(false);

  const deleteRef = useRef();
  const docRef = useRef();

  const date = new Date(createdAt);
  const thatDate = new Date(date).getTime();
  const nowDate = new Date().getTime();
  const m = moment(thatDate);
  const theme = useTheme()
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (deleteRef.current && deleteRef.current.contains(e.target)) {
        setShow(true);
      } else if (docRef.current && docRef.current.contains(e.target)) {
        // navigate(`/editor/${id}`);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [id, navigate]);

  return (
    <>
      {/* <div
      style={{ hyphens: "auto"  }}
      className={`d-flex flex-col cursor-pointer mr-0 p-3 w-[${isMobile ? "100%" : "14rem"}] h-[12rem] text-center rounded-sm shadow-md relative hyphens-auto`}
    >
      <div ref={docRef} key={id} className="w-[100%] h-[100%] bg-white">
        <div
          className="absolute rounded-tr-lg top-0 right-0
                        px-2.5 py-0.5
                        bg-[#3b82f6] 
                        text-[#FFFFFF] text-sm font-[400]"
        >
          {suggestionCount + 1 ?? 0}
        </div>
        <div className="mb-2 text-[#000000] text-md font-[600] text-left">
          {title}
        </div>
        <div className="text-[#767790] text-[0.9rem] text-left max-h-[20px] w-[100%]">
          {text != null && text?.length > 0 ? text?.substr(0, 50) + "..." : ""}
        </div>
        <div className="mt-20 absolute left-4 text-[#949494] text-[0.8rem] font-[600]">
          {countWords(text)} words
        </div>
        <div className="absolute bottom-4 text-[#767790] text-[0.6rem]">
          Recent :{" "}
          {(nowDate - thatDate) / 1000 > 86400 ? m.format("L") : m.fromNow()}
        </div>
        <button
          ref={deleteRef}
          className="absolute bottom-4 right-1"
          style={{backgroundColor:"red"}}
          onClick={() => navigate(`/editor/${id}`)} // Added click event to navigate
        >
          <Img src={deleteOutline}   />
        </button>
      </div>
      <Delete
  
        id={id}
        show={show}
        setShow={setShow}
        deleteDocument={deleteDocument}
        fetchDocuments={fetchDocuments}
      />
    </div> */}




      <Grid item xs={4} sm={6} lg={2}  ref={docRef} sx={{ mr: 3,cursor:"pointer"  }}>
        <div style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", borderRadius: "12px", width: "140px", height: "173px" }} >
          <Card sx={{
            borderTopLeftRadius: "5px !important",
            borderTopRightRadius: "5px !important",
            borderBottomLeftRadius: "0px !important",
            borderBottomRightRadius: "0px !important", width: "140px", height: "142px"
          }}>
            <CardContent >
            <Typography sx={{ fontSize: "14px", lineHeight: "13px", color: "#090909", fontWeight: 600, }}>
          {title ? title :"-"}
        </Typography>
              <Typography sx={{ fontSize: "10px", lineHeight: "13px", color: "#090909", fontWeight: 400, }}> {text != null && text?.length > 0 ? text?.substr(0, 140) + "..." : ""}</Typography>
            </CardContent>
          </Card>
          <Card sx={{
            borderTopLeftRadius: "0px !important",
            borderTopRightRadius: "0px !important",
            borderBottomLeftRadius: "5px !important",
            borderBottomRightRadius: "5px !important", borderTop: "0.2px solid #000000", paddingLeft: "10%", cursor: "pointer"
          }} >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontSize: "20px", color: "#3A3AF4", fontWeight: 600, textAlign: "left" }}>{index}</Typography>
              <button
               style={{ width:"20px" , marginRight:"10px"}}
                ref={deleteRef}
                className=""
                // onClick={() => navigate(`/editor/${id}`)} // Added click event to navigate
              >
                <Img src={deleteOutline}/>
              </button>
              <Delete
                id={id}
                show={show}
                setShow={setShow}
                deleteDocument={deleteDocument}
                fetchDocuments={fetchDocuments}
              />

            </Box>

          </Card>
        </div>
      </Grid>


    </>
  );
};

export default Document;
