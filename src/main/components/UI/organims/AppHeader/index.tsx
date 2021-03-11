import * as React from "react";
import "./index.css";
import innoLogo from "../../../../assets/images/innoLogo.svg";
import hamburger from "../../../../assets/images/hamburger.png";
import { LoadImg } from "../../atoms/LoadImg";

export const AppHeader = () => {
    return (
        <section className="appheader">
            <section className="appheader-inner">
                <section className="appheader-left">
                    {/* <img
                        src={innoLogo}
                        alt="image displaying innoloft's logo"
                    /> */}
                    <LoadImg
                        loadImg={innoLogo}
                        loadAlt="image displaying innoloft's logo"
                        loadClass="appheader-logo"
                        loadImgMob={hamburger}
                    />
                </section>
            </section>
        </section>
    );
};
