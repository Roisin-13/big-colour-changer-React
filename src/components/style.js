import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    body: {
        textAlign: 'center',
        height: '100vh',
        width: '100%',
    },
    btn: {
        display: 'block',
        alignSelf: 'center',
        marginTop: '15px',
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
