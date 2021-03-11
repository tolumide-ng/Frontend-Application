import * as React from "react";
import "./index.css";
import innoLogo from "../../../../assets/images/innoLogo.svg";

export const AppHeader = () => {
    return (
        <section className="appheader">
            <section className="appheader-inner">
                <section className="appheader-left">
                    <img
                        src={innoLogo}
                        alt="image displaying innoloft's logo"
                        className="appheader-logo"
                    />
                </section>
            </section>
        </section>
    );
};
