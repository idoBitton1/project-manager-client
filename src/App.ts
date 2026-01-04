import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    appContainer: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100vh',
        flexDirection: 'column',
        backgroundColor: '#FFFF',
        flexGrow: 1,
        fontFamily: 'Heebo'
    },
});

export default useStyles;
