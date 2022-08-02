import { useState } from 'react';
//import { createUseStyles } from 'react-jss';
import { useStyles } from './style';

const BodyRGB = () => {
    const classes = useStyles();
    const [colour, setColour] = useState("rgb(255, 255, 255)");
    document.body.style.background = colour;

    function randNum() {
        return Math.round(Math.random() * 255);
    };

    function getColour() {
        let rgb = "rgb(" + randNum() + "," + randNum() + "," + randNum() + ")";
        return rgb;
    };


    const handleClick = () => {
        setColour(getColour);
    }

    return (
        <div className={classes.body}>
            <h1 className={classes.h1}>colour is:</h1>
            <h2 className={classes.h2}>{colour}</h2>
            <button onClick={handleClick} className={classes.btn}>Click Me</button>
        </div>
    );
};

export default BodyRGB;