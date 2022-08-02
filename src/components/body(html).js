import { createUseStyles } from 'react-jss';
import {useState} from 'react';
import data from './htmlcolour.json';

const useStyles = createUseStyles({
    body : {
        textAlign: 'center',
        height: '100vh',
        width: '100%',
},
btn : {
    display: 'block',
    alignSelf: 'center',
    marginTop: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Arial, sans - serif',
    fontSize: '20px',
    padding: '10px',
    color: 'Gainsboro',
    backgroundColor: 'DimGray',
    borderRadius: 5,
    border: 'none',
},
});

const BodyHTML = () => {
    const classes = useStyles();
    const [colour, setColour] = useState("white");
    document.body.style.background = colour;

    function colourChange() {
        let randNum = Math.floor(Math.random() * 141);
        console.log(data[randNum].name);
        let page = document.getElementById("body1");
        page.style.backgroundColor = data[randNum].name;
        let text = document.getElementById("clr");
        text.innerHTML = data[randNum].name.toLowerCase();

    };

    const handleClick = () => {
        setColour(colourChange);
    }

    return (
        <div id="body1" className={classes.body}>
            <h1 className={classes.h1}>colour is:</h1>
            <h2 id="clr" className={classes.h2}>{colour}</h2>
            <button onClick={handleClick} className={classes.btn}>plz click</button>
        </div>

    );
}

export default BodyHTML;