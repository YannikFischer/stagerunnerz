import React from "react";
import Festival from "../../images/festivalBackground.jpg";
import "./TourDates.css";
import { BiTimeFive } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";

const TourDates = () => {
    return (
        <div className="TourContent" id="tour">
            <div className="TourDatesContent">
                <h1 className="TourDatesHeader">Tour Dates</h1>
                <div className="TourDatesContainer">
                    <div className="TourBox">
                        <h1 className="TourBoxHeader">Steinebach</h1>
                        <div className="LocAndDate">
                            <div className="DateFlex">
                                <IoLocationSharp className="Location" />
                                <p className="TourBoxLocationCity">City: Innsbruck</p>
                            </div>
                            <div className="DateFlex">
                                <IoLocationSharp className="Location" />
                                <p className="TourBoxLocationCountry">Country: Tirol</p>
                            </div>
                            <div className="DateFlex">
                                <BiTimeFive className="Date" />
                                <p className="TourBoxDate">12.06.2022</p>
                            </div>
                            <p className="TourBoxGenre">Hardstyle</p>
                        </div>
                    </div>
                    <div className="TourBox">
                        <h1 className="TourBoxHeader">Electric Love</h1>
                        <div className="LocAndDate">
                            <div className="DateFlex">
                                <IoLocationSharp className="Location" />
                                <p className="TourBoxLocationCity">City: Innsbruck</p>
                            </div>
                            <div className="DateFlex">
                                <IoLocationSharp className="Location" />
                                <p className="TourBoxLocationCountry">Country: Tirol</p>
                            </div>
                            <div className="DateFlex">
                                <BiTimeFive className="Date" />
                                <p className="TourBoxDate">12.06.2022</p>
                            </div>
                            <p className="TourBoxGenre">Dubstep</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="TourDatesImage">
                <img src={Festival} alt="Festival" className="imgTour" />
            </div>
        </div>
    );
};

export default TourDates;