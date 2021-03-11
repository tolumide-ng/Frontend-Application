import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductDef } from "../../../commonTypes";
import { fetchProductAction } from "../../../store/modules/product/actions";
import { RootState } from "../../../store/modules/types";
import { reusableMakeCall } from "../../../utilities/helpers/api";
import { SideNav } from "../../UI/organims/SideNav";
import "./index.css";

const PRODUCT_ID = 6781;

export const ProductsPage = () => {
    const productSelector = useSelector(
        (state: RootState) => state.fetchProductReducer
    );

    const [product, setProduct] = React.useState<undefined | ProductDef>(
        undefined
    );

    const dispatch = useDispatch();

    React.useEffect(() => {
        console.log(productSelector);
        if (productSelector.status === "rest" && !product) {
            reusableMakeCall({
                dispatch,
                requestFunc: fetchProductAction,
                method: "GET",
                payload: {},
                params: {},
                path: `/product/${PRODUCT_ID}/`,
            });
        }

        if (productSelector.status === "fetchProductSuccess") {
            setProduct(productSelector.product);
        }
    }, [productSelector.status]);

    return (
        <article className="gdp">
            <aside className="gdp-nav">
                <SideNav />
            </aside>
            <article className="gdp-main">
                {/* {JSON.stringify(product)} */}
                <article className="gdp-left">
                    <figure className="gdp-prod">
                        <img
                            src={product?.picture}
                            alt=""
                            className="gdp-img"
                        />
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
