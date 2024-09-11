import React, { useCallback, useEffect, useState } from "react";
import iden from "../../assets/Plagiarism/Ellipse 44.svg";
import minor from "../../assets/Plagiarism/Ellipse 45.svg";
import para from "../../assets/Plagiarism/Ellipse 46.svg";
import omit from "../../assets/Plagiarism/Ellipse 47.png";

const PlagResults = ({ finding }) => {
  const [data, setData] = useState({
    text: finding.introduction,
    url: finding.url,
  });

  const setLevel = useCallback(() => {
    if (finding == null) return;
    // console.log("2");
    // highest matchedWords has color red, lower ones have faded version of red
    if (finding.matchedWords > 80) {
      setData({
        category: "Identical",
        description: "Text is copied and pasted exactly as it is",
        text: finding.introduction,
        image: iden,
        color: "#f78000",
        url: finding.url,
      });
    } else if (finding.matchedWords > 50) {
      setData({
        category: "Minor Changes",
        description: `Text is copied and pasted with minor changes`,
        text: finding.introduction,
        image: minor,
        color: "#2A9D8F",
        url: finding.url,
      });
    } else if (finding.matchedWords > 30) {
      setData({
        category: "Paraphrased",
        description: "Text is copied, parapharsed and then pasted",
        text: finding.introduction,
        image: para,
        color: "#E9C46A",
        url: finding.url,
      });
    } else {
      setData({
        category: "Omitted Words",
        description: "Text is copied and pasted without few words",
        text: finding.introduction,
        image: omit,
        color: "#FFD7D5",
        url: finding.url,
      });
    }
  }, [finding]);

  useEffect(() => {
    // console.log("finding", finding);
    if (finding == null) return;
    setLevel();
  }, [finding, setLevel]);

  if (data == null) return <div></div>;

  return (
    <div className="font-inter">
      <div className="my-4">
        <div className="flex text-base font-[600]">
          <img className="mr-3 h-6" src={data.image} alt="bullet" />
          {data.category}
        </div>
        <div className="ml-9 my-2 text-[0.7rem] text-[#6E6E70] font-[600]">
          {data.description}
        </div>
        <p
          className={`ml-9 inline-flex text-sm text-justify font-inter `}
          style={{ background: data.color, lineHeight: "1.5rem" }}
        >
          {data.text}
        </p>
        <br />
        <a
          className="ml-9 text-blue-300 text-[0.7rem] font-[600]"
          href={data.url}
          target="_blank"
          rel="noreferrer"
        >
          visit source
        </a>
      </div>
    </div>
  );
};

export default PlagResults;
