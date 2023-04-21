import React from "react";
import Bar from "../Bar/Index";
import Product from "./Index";

class Reusable extends React.Component {
    render() {
        return(
            <div>
                <Bar />
                <Product />
            </div>
        )
    }
}

export default Reusable;