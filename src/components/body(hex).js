import { useState } from 'react';
//import { createUseStyles } from 'react-jss';
import { useStyles } from './style';

const BodyHEX = () => {
    const classes = useStyles();
    const [colour, setColour] = useState("#ffffff");
    document.body.style.background = colour;

    const randNum = () => {
        let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
        return hexArray[Math.floor(Math.random() * hexArray.length)];
    };

    const getColour = () => {
        let hex = "#" + randNum() + randNum() + randNum() + randNum() + randNum() + randNum();
        return hex;

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


export default BodyHEX;