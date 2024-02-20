import React from 'react';

// function  Greet() {
//     return <h1>Hello Camprotect</h1>
// }
 const Greet = (props) => {
console.log(props)
return(
    <dv>
        <h1>
            Hello {props.name} a.k.a {props.heroName}
        </h1>
        {props.children}
    </dv>
)
 }

export default Greet