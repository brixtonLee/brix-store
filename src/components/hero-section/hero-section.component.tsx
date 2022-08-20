import React from "react";
import './hero-section.styles.scss';

// icons
import { BsPerson } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
const HeroSection:React.FC = () => {
    return (
        <div className="homepage">

            <header className="hero-section">
                <div className="hero-section__navigation-container">
                    <nav className="navigation--1">
                        <a href="#" className="home-logo">
                            <svg width="32" height="32" viewBox="0 0 58 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M33.2797 17.4522C33.2797 19.1723 33.9583 20.7546 35.2402 22.0313C37.043 23.8237 39.0176 24.0686 40.3608 23.9611C41.959 23.8307 43.5664 23.1038 44.6642 22.0147L44.9454 21.7346C45.7521 20.931 46.2467 20.4383 46.7284 19.9731L50.0385 23.1838L52.3626 20.8599L52.3941 20.8026L49.133 17.5532L51.4525 15.2408L49.0277 12.8259L46.7078 15.1406C46.7078 15.1406 39.9293 8.37288 39.0883 7.52677C38.6365 7.06986 38.3595 6.58897 38.3595 5.82527C38.3595 5.01591 38.7262 4.47583 39.0381 4.16748C39.4915 3.71445 40.1592 3.4328 40.7703 3.4328C41.7022 3.4328 42.2771 3.92452 42.4737 4.13305L42.5242 4.18334L42.5747 4.13537L43.9525 2.76775L44.9035 1.82066L44.9442 1.77308L44.8798 1.7015C44.2563 1.06624 42.8862 0 40.7621 0C39.1434 0 37.6444 0.642996 36.5454 1.80906C35.5156 2.89813 34.9283 4.35744 34.9283 5.81405C34.9283 8.23322 36.3108 9.72 37.2885 10.6253L35.2258 12.6359C34.0259 13.8294 33.2797 15.6776 33.2797 17.4522ZM37.6587 15.0644L39.7071 13.0228L44.2924 17.5462C44.083 17.7609 43.195 18.6535 42.2173 19.6187C41.0364 20.7751 39.0805 21.0181 37.6587 19.6044C37.0384 18.9827 36.7109 18.212 36.7109 17.3698C36.7109 16.5214 37.0667 15.6571 37.6587 15.0644ZM52.603 31.8444C49.4691 28.7343 45.2996 27.0231 40.866 27.0231C36.4327 27.0231 32.2628 28.7343 29.1282 31.8444C25.9943 34.9576 24.2677 39.0915 24.2677 43.4897C24.2677 47.8886 25.9943 52.0199 29.1282 55.13C32.2628 58.242 36.4327 59.9535 40.866 59.9535C45.2996 59.9535 49.4691 58.242 52.603 55.13C55.7384 52.0199 57.4658 47.8886 57.4658 43.4897C57.4658 39.0915 55.7384 34.9576 52.603 31.8444ZM40.866 55.7176C37.5724 55.7176 34.4751 54.4442 32.1475 52.1346C29.8187 49.8254 28.5322 46.7532 28.5322 43.4897C28.5322 40.2196 29.8187 37.1501 32.1475 34.8409C34.4751 32.5271 37.5724 31.2556 40.866 31.2556C44.1595 31.2556 47.2556 32.5271 49.5859 34.8409C51.9116 37.1501 53.1966 40.2196 53.1966 43.4897C53.1966 50.2315 47.6661 55.7176 40.866 55.7176ZM24.2944 19.7394C24.2944 26.7462 20.431 33.1364 14.1999 36.4393C15.9799 37.5605 17.4783 39.1086 18.5151 40.9294C19.6108 42.8384 20.1907 45.015 20.1907 47.2234C20.1907 50.6333 18.8466 53.8423 16.4126 56.2585C13.9838 58.6705 10.7463 59.9999 7.30587 59.9999H0.997629L0.988281 0.814872H5.22052C10.3151 0.814872 15.1071 2.78216 18.713 6.36051C22.3181 9.93501 24.2944 14.6875 24.2944 19.7394ZM15.6921 9.35278C12.9107 6.59541 9.21011 5.07011 5.28051 5.05195V34.4291C9.21011 34.4109 12.9107 32.8853 15.6921 30.129C18.4921 27.3562 20.0252 23.6654 20.0252 19.7394C20.0252 15.8179 18.4921 12.1299 15.6921 9.35278ZM5.28051 55.7652H7.3012C12.0495 55.7652 15.9129 51.9334 15.9129 47.2234C15.9129 44.9412 15.0194 42.7978 13.3941 41.1805C11.766 39.5698 9.58597 38.6843 7.28328 38.6843C7.28328 38.6843 5.63027 38.6751 5.28051 38.6751V55.7652Z" fill="white"/>
                            </svg>
                        </a>
                        {/* <div className="speaker-section-container"> */}
                        <a href="#" className="navigation--1-buttons speaker-button">SPEAKERS</a>
                            {/* <div className="speaker-section-content">
                                <ul>
                                    <a href="#" className="navigation--1-drop-down-buttons"><li>All Speakers</li></a>
                                    <a href="#" className="navigation--1-drop-down-buttons"><li>Portables</li></a>
                                    <a href="#" className="navigation--1-drop-down-buttons"><li>Home Audio</li></a>
                                    <a href="#" className="navigation--1-drop-down-buttons"><li>Speaker sets</li></a>
                                    <a href="#" className="navigation--1-drop-down-buttons"><li>Speaker Accessories</li></a>

                                </ul>
                            </div> */}
                        {/* </div> */}
                        
                        <a href="#" className="navigation--1-buttons">HEADPHONES</a>
                        <a href="#" className="navigation--1-buttons">TELEVISIONS</a>
                        <a href="#" className="navigation--1-buttons">EXPLORE</a>
                        <a href="#" className="navigation--1-buttons">ABOUT</a>
                    </nav>
                    <nav className="navigation--2">
                        <a href="#" className="navigation--2-buttons">
                            <BsPerson/>
                        </a>
                        <a href="#" className="navigation--2-buttons">
                            <IoLocationSharp/>
                        </a>
                        <a href="#" className="navigation--2-buttons">
                            <FiShoppingBag/>
                        </a>
                    </nav>
                </div>

                <div className="hero-section__text-button">
                    <div className="hero-section__text">
                        <h1 className="hero-section__text--1">Like nothing you've heard before</h1>
                        <p className="hero-section__text--2">Depth, detail and delight. Dialed up beyond expectation. This is, quite simply, our finest headphone experience</p>
                    </div>

                    <div className="hero-section__buttons">
                        <button className="hero-section__buttons--1">
                            Discover Beoplay H95
                        </button>
                    </div>
                </div>
            </header>

            <div className="card-container">
                <div className="card--1">
                    {/* In order to create a style that the image zoom in, you must place the image in the separate container */}
                    <div className="card--1-image"></div>
                    <div className="card-text">Speakers</div>
                </div>
                <div className="card--2">
                    <div className="card-text">Headphones</div>
                </div>
                <div className="card--3">
                    <div className="card-text">Televisions</div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;