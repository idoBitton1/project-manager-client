import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    header: {
        maxHeight: '73px',
        display: 'flex',
        alignItems: 'center',
        padding: '16px 20px',
        gap: '12px',
        backgroundColor: '#deebff',
        borderBottom: '1px solid #e0e0e0',
        '@media (min-width: 480px)': {
            padding: '16px 60px',
        },
    },
    icon: {
        height: '40px',
        width: 'auto',
        cursor: 'pointer',
    },
});

export default useStyles;
