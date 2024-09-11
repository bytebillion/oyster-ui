import React, { useState } from "react"
import { Collapse, Button } from '@chakra-ui/react'
import Suggestions from "../../Suggestions Pane/Suggestions";
import PlagReport from "../../Plagiarism/PlagReport";
import arrowcircleup from "../../../../src/assets/arrowcircleup.svg";

const MobleAccordion = ({plagResult ,results, setDocument, document, updateDocumentContent, checkGrammar, setErrorWordsWithColor, icon, setIcon, report, checkPlag   }) => {
    const [show, setShow] = useState(false)
    const handleToggle = () => setShow(!show)

    return (
        <>
            <div className={`absolute bottom-0 border-2 rounded-lg bg-white m-auto w-[98%] left-1 font-inter overflow-scroll scrollbar-thin max-h-[calc(44vh)] `}>
                <Button size='sm' onClick={handleToggle} mt='1rem' className={`justify-center flex items-center w-full transition duration-700 ease-in-out  `} >
                <img src={arrowcircleup} alt="" className={`${show? "z-[1001]" : "z-index: auto" }  fixed mt-[-38px] ${show? "rotate-0" : "rotate-180" }  `} /> 
                </Button>
                <Collapse startingHeight={20} in={show}>

                <Suggestions
                results={results}
                setDocument={setDocument}
                document={document}
                updateDocumentContent={updateDocumentContent}
                checkGrammar={checkGrammar}
                setErrorWordsWithColor={setErrorWordsWithColor}
                icon={icon}
                setIcon={setIcon}
              />
              <PlagReport
                report={report}
                checkPlag={checkPlag}
                plagResult={plagResult}
                setShow={setShow}

              />

                </Collapse>
            </div>
        </>
    )
}

export default MobleAccordion