import * as React from "react";
import { SideNav } from "../../UI/organims/SideNav";
import "./index.css";

export const ProductsPage = () => {
    return (
        <article className="gdp">
            <aside className="gdp-nav">
                <SideNav />
            </aside>
            <article className="gdp-main">
                <article className="gdp-left">
                    <figure className="gdp-prod">
                        <img src="" alt="" className="gdp-img" />
                        <figcaption className="gdp-info"></figcaption>
                    </figure>
                    <article className="gdp-cont">
                        <section className="gdp-tabcont">
                            <div className="gdp-tabcont-left"></div>
                            <div className="gdp-tabcont-right"></div>
                        </section>
                        <section className="gdp-content"></section>
                    </article>
                </article>
                <article className="gdp-right">
                    <section className="gdp-top"></section>
                    <section className="gdp-bottom"></section>
                </article>
            </article>
        </article>
    );
};
