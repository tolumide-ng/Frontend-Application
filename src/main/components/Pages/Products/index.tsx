import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductDef, TrlDef } from "../../../commonTypes";
import { fetchProductAction } from "../../../store/modules/product/actions";
import { fetchTrlAction } from "../../../store/modules/trl/actions";
import { RootState } from "../../../store/modules/types";
import { reusableMakeCall } from "../../../utilities/helpers/api";
import { SideNav } from "../../UI/organims/SideNav";
import "./index.css";

const PRODUCT_ID = 6781;

export const ProductsPage = () => {
    const productSelector = useSelector(
        (state: RootState) => state.fetchProductReducer
    );

    const trlSelector = useSelector(
        (state: RootState) => state.fetchTrlReducer
    );

    const [product, setProduct] = React.useState<undefined | ProductDef>(
        undefined
    );
    const [trl, setTrl] = React.useState<
        | undefined
        | Array<{
              id: string | number;
              name: string;
              description: string | null;
          }>
    >(undefined);

    const [trlValue, setTrlValue] = React.useState<undefined | string>(
        undefined
    );

    const [category, setCategory] = React.useState<undefined | string>(
        undefined
    );

    const [display, setDisplay] = React.useState("attribute");

    const dispatch = useDispatch();

    const handleTlr = (id: string | number) => {};

    React.useEffect(() => {
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

        if (productSelector.status === "fetchProductSuccess" && !product) {
            setProduct(productSelector.product);
            setTrlValue(String(productSelector.product.trl.id));
            // setCategory(productSelector.product.categories);
        }
    }, [productSelector.status]);

    React.useEffect(() => {
        if (trlSelector.status === "rest") {
            reusableMakeCall({
                dispatch,
                requestFunc: fetchTrlAction,
                method: "GET",
                payload: {},
                params: {},
                path: "/trl/",
            });
        }

        if (trlSelector.status === "fetchTrlSuccess") {
            setTrl(trlSelector.trl);
        }
    }, [trlSelector.status]);

    return (
        <article className="gdp">
            <aside className="gdp-nav">
                <SideNav />
            </aside>
            <article className="gdp-main">
                <article className="gdp-left">
                    {/* {JSON.stringify(trl)} */}
                    <figure className="gdp-prod">
                        <div className="gdp-imgcont">
                            <img
                                src={product?.picture}
                                alt=""
                                className="gdp-img"
                            />
                        </div>
                        <figcaption className="gdp-info">
                            <div className="gdp-infocont">
                                <h3 className="gdp-info-key">Title:</h3>&nbsp;
                                <p className="gdp-info-value">
                                    {product?.name}
                                </p>
                            </div>
                            <div className="gdp-infocont">
                                <h3 className="gdp-info-key">Type:</h3>&nbsp;
                                <p className="gdp-info-value">
                                    {product?.type.name}
                                </p>
                            </div>
                        </figcaption>
                    </figure>
                    <article className="gdp-cont">
                        <div className="gdp-content-controls">
                            <button
                                className="gdp-control-button app-button"
                                onClick={() => setDisplay("description")}
                            >
                                View Description
                            </button>
                            <button
                                className="gdp-control-button app-button"
                                onClick={() => setDisplay("attribute")}
                            >
                                View Attributes
                            </button>
                        </div>
                        <section className="gdp-tabcont">
                            <div className="gdp-tabcont-left">
                                <div className="gdp-info-value gdp-value-mt">
                                    <h3 className="gdp-info-key">{display}:</h3>
                                    {display === "attribute"
                                        ? ""
                                        : product?.description}
                                </div>
                            </div>
                            <div className="gdp-tabcont-right">
                                <div className="gdp-editables">
                                    {/* <div className="gdp-editables-one">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="gdp-input"
                                        />
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="gdp-input"
                                        />
                                    </div>
                                    <div className="gdp-editables-two">
                                        {trl &&
                                            trl?.map((option) => (
                                                <div
                                                    className="gdp-radio"
                                                    key={option.id}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="trl"
                                                        className="gdp-input--radio"
                                                        id={String(option.id)}
                                                        value={option.id}
                                                        onChange={() =>
                                                            handleTlr(option.id)
                                                        }
                                                        checked={
                                                            trlValue ===
                                                            option.id
                                                        }
                                                    />
                                                    <label
                                                        htmlFor={String(
                                                            option.id
                                                        )}
                                                        className="gdp-input-radio--label"
                                                    >
                                                        {option.name}
                                                    </label>
                                                </div>
                                            ))}
                                    </div>
                                    <div className="gdp-editables-three">
                                        <button className="gdp-editables-control gdp-control-button">
                                            Edit
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        </section>
                        <section className="gdp-content">
                            {/* <div className="gdp-content-controls">
                                <button className="gdp-control-button app-button">
                                    View Description
                                </button>
                                <button className="gdp-control-button app-button">
                                    View Attributes
                                </button>
                            </div> */}

                            {/* <p className="gdp-display">
                                {display === "attribute"
                                    ? product?.description
                                    : ""}
                            </p> */}
                        </section>
                    </article>
                </article>
                <article className="gdp-right">
                    <section className="gdp-top">
                        <div className="gdp-user">
                            <img
                                src={product?.user.profilePicture}
                                alt={`a picture of ${product?.user.firstName}`}
                                className="gdp-user-img"
                            />
                            <div className="gdp-user-name">
                                {product?.user.firstName}{" "}
                                {product?.user.lastName}
                            </div>
                            <div className="gdp-user-company">
                                {product?.company.name}
                            </div>
                        </div>
                    </section>
                    <section className="gdp-bottom"></section>
                </article>
            </article>
        </article>
    );
};
