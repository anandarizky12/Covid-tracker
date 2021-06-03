import React from 'react'
import {Card,Typography,CardContent} from '@material-ui/core'
import useStyles from './styles'
import numberWithCommas from '../util';
import './style.css'
function InfoBox({title,cases,total,active,...props}) {
    const classes=useStyles();

    const numberWithCommas=(x)=> (x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","))
    
    return (
       <Card onClick={props.onClick}  className={active ? classes.rootactive : classes.root}>
           <CardContent>
                    <Typography color="textSecondary"> {title}</Typography>
                    <h2 style={{color: '#d61002'}}>{cases}</h2>
                    <Typography variant='caption'  color="textSecondary">{total && numberWithCommas(total)} Total</Typography>
           </CardContent>
       </Card>
    )
}

export default InfoBox
