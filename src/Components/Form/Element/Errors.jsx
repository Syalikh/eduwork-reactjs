import React from "react";

export const ShowErrors = ({errors}) => {
    return(
        <ul style={{color: 'red', marginLeft: '-20px'}}>
            {errors.map((error, i) => <li key={i}>{error}</li> )
            }
        </ul>
    )
}