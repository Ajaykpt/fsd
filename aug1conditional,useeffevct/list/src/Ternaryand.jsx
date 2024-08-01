import React from 'react';

const TernaryAnd = () => {
    let branches = ['CS', 'ME', 'AT', 'CE', 'EC', 'EE', 'CH'];
    // branches=[]

    return (
        <div>
            <h2>List from Map</h2>
            {
                (branches.length === 0) ? <h3>List is empty</h3> : null
            }
            {
                (branches.length===0) && <h3>list is &&&&&&&&&& op</h3>
            }
            {
                branches.map( (item) => (
                    <ul>
                        <li key={item}>{item}</li>
                    </ul>
                ))
            }
        </div>
    );
}

export default TernaryAnd;
