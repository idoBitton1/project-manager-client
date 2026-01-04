import React from 'react';

import ProjectIcon from '/src/assets/ProjectIcon.png';

import useStyles from './Header.styles';
import { Typography } from '@mui/material';

const Header: React.FC = () => {
    const { classes } = useStyles();

    return (
        <header className={classes.header}>
            <img
                src={ProjectIcon}
                alt='Project Manager Icon'
                className={classes.icon}
            />
            <Typography variant="h6">Project Manager</Typography>
        </header>
    );
};

export default Header;
