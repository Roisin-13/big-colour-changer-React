import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
 heady1 : {
    display: 'block',
    backgroundColor: 'white',
    textAlign: 'center',
    fontFamily: '"American Typewriter", serif',
    fontSize: 25,
    color: 'grey',
    width: '100%',
    height: 200,
    paddingTop: 50,
},
navBtn : {
    display: 'inline',
    listStyle: 'none',
    margin: '20px 0px 20px 0px',
    height: 'auto',
    fontFamily: '"American Typewriter", serif',
    fontWeight: 'bolder',
    fontSize: 15,
    padding: 10,
    border: '1px solid lightgrey',
    "& a ": {
        color: 'grey',
        textDecoration: 'none',
    },
},

});

function Header() {
    const classes = useStyles();
    return (
        <header class={classes.heady1}>
            <h1>Colour Changer</h1>
            <ul>
                <li class={classes.navBtn}><Link to='/'>HTML colours</Link></li>
                <li class={classes.navBtn}><Link to='body(rgb)'>RGB colours</Link></li>
                <li class={classes.navBtn}><Link to='/body(hex)'>HEX colours</Link></li>
            </ul>
        </header>
    );
}

export default Header;