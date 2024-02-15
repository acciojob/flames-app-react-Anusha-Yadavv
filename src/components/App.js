import React, { Component, useState } from "react";
import '../styles/App.css';
function App() {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [relationship, setRelationship] = useState("");
    const getNameOne = (event) => {
        setName1(event.target.value);
        // console.log("name one",name1);
    };

    const getNameTwo = (event) => {
        setName2(event.target.value);
        // console.log("name2",name2)
    };

    //calculateRelationship handler function
    const calculateRelationship = () => {
        const name1Lower = name1.toLocaleLowerCase().replaceAll(" ", "");
        const name2Lower = name2.toLocaleLowerCase().replaceAll(" ", "");

        const remainingname1 = name1Lower.split("");
        const remainingname1_arr = remainingname1.filter((char) => {
            //   console.log(char);
            return !name2Lower.includes(char);
        });
        console.log("REMAINING NAME ARR", remainingname1_arr);
        const remainingname2 = name2Lower.split("");
        const remainingname2_arr = remainingname2.filter((char) => {
            return !name1Lower.includes(char);
        });
        // console.log("REMAINING NAME 2 ARRAY", remainingname2_arr);

        const relation_number =
            (remainingname1_arr.length + remainingname2_arr.length) % 6;
        // console.log(relation_number);

        switch (relation_number) {
            case 1:
                setRelationship("Friends");
                break;
            case 2:
                setRelationship("Love");
                break;
            case 3:
                setRelationship("Affection");
                break;
            case 4:
                setRelationship("Marriage");
                break;
            case 5:
                setRelationship("Enemy");
                break;
            case 0:
                setRelationship("Siblings");
                break;
            default:
                setRelationship("Please enter valid input");
                break;
        }


    };

    const clearInputs = () => {
        setName1('');
        setName2('');
        setRelationship('');
    }

    return (
        <div id="main">
            <input onChange={getNameOne} type="text" name="name1" value={name1} data-testid="input1" />
            <input onChange={getNameTwo} name="name2" type="text" value={name2} data-testid="input2" />
            <button
                data-testid="calculate_relationship"
                onClick={calculateRelationship}
            >
                Calculate Relationship Future
            </button>
            <button data-testid="clear" onClick={clearInputs}>Clear</button>
            <h3 data-testid="answer">{relationship}</h3>
        </div>
    )
}

export default App;



