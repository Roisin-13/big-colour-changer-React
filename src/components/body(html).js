//import { createUseStyles } from 'react-jss';
import {useState} from 'react';

function BodyHTML() {
    //const classes = useStyles();
    const [colour, setColour] = useState("white");
    document.body.style.background = colour;

    function colourChange() {
        let randNum = Math.floor(Math.random() * 6);
         let newPage = "";
         let newClr = "";
        if (randNum === 0) {
            newPage = "red";
            newClr = "Red";
        } else if (randNum === 1) {
            newPage = "blue";
            newClr = "Blue";
        } else if (randNum === 2) {
            newPage = "pink";
            newClr = "Pink";
        } else if (randNum === 3) {
            newPage = "yellow";
            newClr = "Yellow";
        } else if (randNum === 4) {
            newPage = "aqua";
            newClr = "Aqua";
        } else if (randNum === 5) {
            newPage = "coral";
            newClr = "Coral";
        } 
        let page = document.getElementById("body1");
        page.style.backgroundColor = newPage;
        let text = document.getElementById("clr");
        text.innerHTML = newClr
        
    };



    const handleClick = () => {
        setColour(colourChange);
    }

    return (
        <div id="body1">
            <h1>colour is:</h1>
            <h2>{colour}</h2>
            <div id="clr"></div>
            <button onClick={handleClick}>plz click</button>
        </div>

    );
}

export default BodyHTML;