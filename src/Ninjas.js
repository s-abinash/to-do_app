import React from 'react';

const Ninjas = ({ ninjas }) => { //Destructure Props to Ninjas
    const ninjalist = ninjas.map(ninja => {
        return (

            <div className="ninja" key={ninja.id}>
                <center><div className="ui card">
                    <div>Name : {ninja.name}</div>
                    <div>Age : {ninja.age}</div>
                    <div>Place : {ninja.place}</div>
                    <br />
                </div>
                </center>
            </div>
        );
    })
    return (
        <div className="ninja-list">
            {ninjalist}
        </div>
    )
}

export default Ninjas;