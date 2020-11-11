import React from 'react'
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import theme from '../style/theme'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}
));

export const Navbar = () => {
    const classes = useStyles();
    console.log(theme.palette.secondary.light)
    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant="h5" className={classes.root} color={theme.palette.secondary.light} >
                        NESGAA
                    </Typography>
                    <IconButton>
                        <AccountCircle htmlColor='#fff' />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}