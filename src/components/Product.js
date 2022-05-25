import React from "react";
function Product(props){
    return (
    <tr>
        <th>{props.name}</th>
        <th>{props.position}</th>
        <th>{props.office}</th>
        <th>{props.age}</th>
        <th>{props.startdate}</th>
        <th>{props.salary}</th>
    </tr>        

    );
}
export default Product;