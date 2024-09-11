import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChatBot from "./chatBot/ChatBot";
import GrammerEditor from "./GrammarEditor/GrammarEditorNew";

const drawerWidth = 760;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    /**
     * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
     * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
     * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
     * proper interaction with the underlying content.
     */
    position: "relative",
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const AIWritingAssistant = ({
  toolbarRef,
  document,
  setDocument,
  checkGrammar,
  updateDocumentContent,
  updatedocumentTitle,
  errorWordsWithColor,
  setErrorWordsWithColor,
  setIsDocUpdateAPI,
  isDocUpdateAPI,
  results,
}) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    window.location.reload(true);
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Main open={open} style={{ height: "100%", width: "100%" }}>
        <GrammerEditor
          toolbarRef={toolbarRef}
          document={document}
          setDocument={setDocument}
          checkGrammar={checkGrammar}
          updateDocumentContent={updateDocumentContent}
          updatedocumentTitle={updatedocumentTitle}
          errorWordsWithColor={errorWordsWithColor}
          results={results}
          setErrorWordsWithColor={setErrorWordsWithColor}
          setIsDocUpdateAPI={setIsDocUpdateAPI}
          isDocUpdateAPI={isDocUpdateAPI}
          open={open}
        />
      </Main>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
          height: "100%",
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon  sx={{ fontSize: 40 }} />
            ) : (
              <ChevronRightIcon sx={{ fontSize: 40 }} />
            )}
          </IconButton>
        </DrawerHeader>

        <ChatBot />
      </Drawer>

      <div className="d-flex justify-center items-center">
        <IconButton
          style={{
            alignItems: "center",
            transform: "rotate(270deg)",
            height: "25px",
            background: "#3b82f6",
            borderRadius: "10px",
            padding: "18px",
            color: "white"
          }}
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: "none" }) }}
          disableFocusRipple={false}
        >
          AI Writer
        </IconButton>
      </div>
    </Box>
  );
};

export default AIWritingAssistant;
