import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { mode } from "../../../../../../webpack-build-utils/webpack.development";
import { ProductDef } from "../../../../commonTypes";
import product from "../../../../store/modules/product";
import { fetchProductUpdateAction } from "../../../../store/modules/product/actions";
import { RootState } from "../../../../store/modules/types";
import { reusableMakeCall } from "../../../../utilities/helpers/api";
import "./index.css";

interface AttributesDef {
    trl:
        | Array<{
              id: string | number;
              name: string;
              description: string | null;
          }>
        | undefined;
    product: ProductDef | undefined;
    handleTlr: (id: string | number) => void;
    trlValue: string | undefined;
    PRODUCT_ID: number;
}

interface BasicDef {
    id: string | number;
    name: string;
}

export const AttributesTab = (props: AttributesDef) => {
    const productSelector = useSelector(
        (state: RootState) => state.fetchProductReducer
    );

    const [productCategories, setProductCategories] = React.useState(
        props.product?.categories
    );

    const [buisnessModel, setBuinessModel] = React.useState<
        BasicDef[] | undefined
    >(undefined);

    const dispatch = useDispatch();

    React.useEffect(() => {
        if (!buisnessModel) {
            const all: BasicDef[] = [];
            props.product?.businessModels?.map((model) => {
                all.push({ id: model.id, name: model.name });
            });

            setBuinessModel(all);
        }
    }, [props.product?.businessModels.length]);

    const handleCategoryChange = (id: string | number, value: string) => {
        const theCategory = productCategories?.find(
            (category) => category.id === id
        );

        const theIndex = productCategories?.findIndex(
            (category) => category.id === id
        );

        if (theCategory) {
            const newCategories = productCategories;
            // console.log("the index", theIndex);
            if (
                productCategories &&
                newCategories &&
                typeof theIndex === "number" &&
                theIndex >= 0
            ) {
                // setProductCategories([])
                newCategories[theIndex] = { name: value, id: Number(id) };

                reusableMakeCall({
                    dispatch,
                    requestFunc: fetchProductUpdateAction,
                    method: "PUT",
                    payload: { newCategories },
                    params: {},
                    path: `/product/${props.PRODUCT_ID}/`,
                });

                setProductCategories(newCategories);
            }
        }
    };

    const handleModelChange = (id: string | number, value: string) => {
        const theModel = buisnessModel?.find((model) => model.id === id);

        const theIndex = buisnessModel?.findIndex((model) => model.id === id);

        if (theModel) {
            const newModels = buisnessModel;
            // console.log("the index", theIndex);
            if (newModels && typeof theIndex === "number" && theIndex >= 0) {
                // setProductCategories([])
                newModels[theIndex] = { name: value, id: Number(id) };
                reusableMakeCall({
                    dispatch,
                    requestFunc: fetchProductUpdateAction,
                    method: "PUT",
                    payload: { newModels },
                    params: {},
                    path: `/product/${props.PRODUCT_ID}/`,
                });
                setBuinessModel(newModels);
            }
        }
    };
    return (
        <div className="">
            {/* {JSON.stringify(props.product?.categories)} */}
            <div className="">
                <p className="gdp-att">Categories</p>
                <div className="gdp-editables-one">
                    {productCategories?.map((category) => (
                        <>
                            <input
                                key={category.id}
                                type="text"
                                name="category"
                                id={String(category.id)}
                                className="gdp-input"
                                value={category.name}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                    handleCategoryChange(
                                        category.id,
                                        e.target?.value
                                    )
                                }
                            />
                            {/* {category.id} */}
                        </>
                    ))}
                    <input type="text" name="" id="" className="gdp-input" />
                </div>
            </div>
            <div className="">
                <p className="gdp-att">Business Models</p>
                <div className="gdp-editables-one">
                    {buisnessModel?.map((model) => (
                        <>
                            <input
                                key={model.id}
                                type="text"
                                name="category"
                                id={String(model.id)}
                                className="gdp-input"
                                value={model.name}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                    handleModelChange(model.id, e.target?.value)
                                }
                            />
                            {/* {category.id} */}
                        </>
                    ))}
                    <input type="text" name="" id="" className="gdp-input" />
                </div>
            </div>

            <div className="gdp-editables-two">
                {props.trl &&
                    props.trl?.map((option) => (
                        <div className="gdp-radio" key={option.id}>
                            <input
                                type="radio"
                                name="trl"
                                className="gdp-input--radio"
                                id={String(option.id)}
                                value={option.id}
                                onChange={() => props.handleTlr(option.id)}
                                checked={props.trlValue === option.id}
                            />
                            <label
                                htmlFor={String(option.id)}
                                className="gdp-input-radio--label"
                            >
                                {option.name}
                            </label>
                        </div>
                    ))}
            </div>
            <div className="gdp-editables-three">
                {/* <button className="gdp-editables-control gdp-control-button">
                    Edit
                </button> */}
            </div>
        </div>
    );
};
