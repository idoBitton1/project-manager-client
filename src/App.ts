import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    appContainer: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100vh',
        flexDirection: 'column',
        backgroundColor: '#FFFF',
        overflowX: 'hidden',
        flexGrow: 1,
        fontFamily: 'Heebo'
    },
    content: {
        direction: 'rtl',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '20px 8px 0px 8px',
        '@media (min-width: 480px)': {
            padding: '20px 160px 0px 160px',
        },
    }
});

export default useStyles;
