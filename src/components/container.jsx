import React from 'react'
import { Grid } from '@material-ui/core'
import { Navbar } from './navbar'

export const Container = props => {

    return (
        <Grid container direction='column' sm={12} >
            <Grid item>
                <Navbar />
            </Grid>
            <Grid item container>
                <Grid item xs={0} sm={2} />
                <Grid item xs={12} sm={8} style={{ paddingTop: 50 }}>
                    {/* Cuerpo del programa */}
                    {props.children}
                </Grid>
                <Grid item xs={0} sm={2} />
            </Grid>
        </Grid>
    )
}