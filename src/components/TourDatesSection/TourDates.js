import React from "react";
import { useState, useEffect } from "react";
import Festival from "../../images/festivalBackground.jpg";
import "./TourDates.css";
import { BiTimeFive } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";

const TourDates = () => {
    const [mobile, setMobile] = useState(window.innerWidth <= 1600);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 1600) setMobile(false);
            else if (window.innerWidth < 1600) setMobile(true);
        });

        return () => {
            window.removeEventListener("resize", () => { });
        };
    }, []);

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
                                <p className="TourBoxLocationCity">City: Dornbirn</p>
                            </div>
                            <div className="DateFlex">
                                <IoLocationSharp className="Location" />
                                <p className="TourBoxLocationCountry">Country: Vorarlberg</p>
                            </div>
                            <div className="DateFlex">
                                <BiTimeFive className="Date" />
                                <p className="TourBoxDate">12.06.2022</p>
                            </div>
                            <p className="TourBoxGenre">Hardstyle</p>
                        </div>
                        <button
                            className="slide_button"
                            style={mobile ? { marginBottom: "20px" } : { marginTop: "25px" }}
                            onClick={() =>
                            (window.location =
                                "mailto:stagerunnerz@gmail.com?subject=Buy Tickets&body=I would like to buy a Ticket for your Steinebach Act. quantity: ---fill in quantity---")
                            }
                        >
                            Buy Tickets
                        </button>
                    </div>
                    <div className="TourBox">
                        <h1 className="TourBoxHeader">Mayer Kayer</h1>
                        <div className="LocAndDate">
                            <div className="DateFlex">
                                <IoLocationSharp className="Location" />
                                <p className="TourBoxLocationCity">City: Koblach</p>
                            </div>
                            <div className="DateFlex">
                                <IoLocationSharp className="Location" />
                                <p className="TourBoxLocationCountry">Country: Vorarlberg</p>
                            </div>
                            <div className="DateFlex">
                                <BiTimeFive className="Date" />
                                <p className="TourBoxDate">25.08.2022</p>
                            </div>
                            <p className="TourBoxGenre">Dubstep</p>
                        </div>
                        <button
                            className="slide_button"
                            style={mobile ? { marginBottom: "20px" } : { marginTop: "25px" }}
                            onClick={() =>
                            (window.location =
                                "mailto:stagerunnerz@gmail.com?subject=Buy Tickets&body=I would like to buy a Ticket for your Mayer Kayer Act. quantity: ---fill in quantity---")
                            }
                        >
                            Buy Tickets
                        </button>
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