import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./ComparisonMain.css";
import compareRight from "../../../../assets/compareRight.png";
import SectionTwo from "../SectionTwo";
import { comparision } from "../../Utils/comparision";
import ComparisonTable from "./ComparisonTable";
import { useState } from "react";

const ComparisonMain = () => {
  const [showTable, setShowTable] = useState(false);
  const [table, setTable] = useState(null);

  const handleTableComponent = (table) => {
    setTable(table);
    setShowTable(true);
  
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Header />

      {showTable ? (
        <div className="comparison-container">
          <ComparisonTable table={table} setShowTable={setShowTable} />
        </div>
      ) : (
        <div className="comparison-container">
          <div className="compare-cont-1">
            <div className="compare-left">
              <h1 className="compare-head">
                A superior, all-encompassing, and more user-friendly alternative
                for xyz.
              </h1>
            </div>
            <div className="compare-right">
              <img src={compareRight} alt="" />
              <div className="overlay-text">
                <p className="compare-para">
                  The best solution for anyone who wants to work a flexible
                  schedule but still earn a full-time income.
                </p>
              </div>
            </div>
          </div>
          <div className="innerHome-container-bg">
            <SectionTwo />
          </div>
          <div className="compare-cont-2">
            <h2 className="compare-heading">Comparisons</h2>
            <p className="compare-sub-head">
              Comparisons of various AI writing tools to help you decide the
              best AI writer and copywriting software for your need.
            </p>
            <div>
              {comparision.map((item, index) => {
                return (
                  <div key={index} className="compare-card">
                    <h1 className="val-1">{item.title}</h1>
                    <h3 className="val-2">{item.para}</h3>
                    <button
                      className="val-3"
                      onClick={() => handleTableComponent(item.table)}
                    >
                      {item.button}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ComparisonMain;
