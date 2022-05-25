import React from "react";
function ProductInfo(props){
    return (
    <tr>
        <td>{props.name}</td>
        <td>{props.position}</td>
        <td>{props.office}</td>
        <td>{props.age}</td>
        <td>{props.startdate}</td>
        <td>{props.salary}</td>
    </tr>        

    );
}
export default ProductInfo;