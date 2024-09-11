import React from "react";
import { Pie } from "react-chartjs-2";
import { useMediaQuery } from "@chakra-ui/react";
import "./Chart.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = ({ plagResult }) => {
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  let identicalWords = plagResult?.results?.score?.identicalWords;
  let minorChangedWords = plagResult?.results?.score?.minorChangedWords;
  let relatedMeaningWords = plagResult?.results?.score?.relatedMeaningWords;

  const chartData = [identicalWords, minorChangedWords, relatedMeaningWords];

  return (
    <div className={`${!isMobile? "flex" : "block"} plag_board `}>
      <div className={`m-auto plag_chart`} >
        <Pie
          data={{
            datasets: [
              {
                label: "",
                data: chartData,
                backgroundColor: [
                  "#f78000",
                  "#2A9D8F",
                  "#E9C46A",
                  "#FF222233",
                ],
              },
            ],
          }}
        />
      </div>

      <div className="plag_content">
        <p>
          <svg width="20" height="20" viewBox="0 0 30 30" fill="none">
            <circle cx="15" cy="15" r="15" fill="#f78000" />
          </svg>
          Identical{" "}
          <span className="ml-10">
            {plagResult?.results?.score?.identicalWords }
          </span>
        </p>

        <p>
          {" "}
          <svg width="20" height="20" viewBox="0 0 30 30" fill="none">
            <circle cx="15" cy="15" r="15" fill="#2A9D8F" />
          </svg>
          Minor Chages{" "}
          <span className="ml-10">
            {plagResult?.results?.score?.minorChangedWords}
          </span>
        </p>
        <p>
          {" "}
          <svg width="20" height="20" viewBox="0 0 30 30" fill="none">
            <circle cx="15" cy="15" r="15" fill="#E9C46A" />
          </svg>
          Paraphrased{" "}
          <span className="ml-10">
            {plagResult?.results?.score?.relatedMeaningWords}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Charts;

// <p>
//   {" "}
//   <svg width="20" height="20" viewBox="0 0 30 30" fill="none">
//     <circle cx="15" cy="15" r="15" fill="#FF222233"  />
//   </svg>
//   Omitted Words <span>40.0%</span>
// </p>

