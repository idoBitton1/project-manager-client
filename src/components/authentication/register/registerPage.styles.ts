import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
    },
    paper: {
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        marginBottom: theme.spacing(3),
        textAlign: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submitButton: {
        margin: theme.spacing(3, 0, 2),
    },
}));
