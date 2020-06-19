import React from 'react';

const Ninjas = ({ ninjas, deleteNinja }) => { //Destructure Props to Ninjas
    let c = 1;
    const ninjalist = ninjas.map(ninja => {
        return (
            <div className="ninja" key={ninja.id}>
                <center><div className="ui card">
                    <div className="ui center header">
                        Person {c++}
                        <span className="ui right aligned text">
                            <button id={ninja.id} onClick={() => deleteNinja(ninja.id)}><i className="trash icon"></i></button>
                        </span></div>
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