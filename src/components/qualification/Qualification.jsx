import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex "
            }
            onClick={()=>{toggleTab(1)}}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex "
            }
            onClick={()=>{toggleTab(2)}}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Student</h3>
                <span className="qualification__subtitle">
                  FPT polytechnic - College
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021-present
                </div>
              </div>
              <div>
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"> Student</h3>
                <span className="qualification__subtitle">
                  Thai Nguyen - University
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2016-2020
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Student</h3>
                <span className="qualification__subtitle">
                  Thanh Loc - Highschool
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2013-2016
                </div>
              </div>
              <div>
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div  className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Product Design</h3>
                <span className="qualification__subtitle">
                  Microsoft - spain
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021-present
                </div>
              </div>
              <div>
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"> Ux Designer</h3>
                <span className="qualification__subtitle">Apple -spain</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020-2021
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">Figma - spain</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018-2020
                </div>
              </div>
              <div>
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
