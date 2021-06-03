import React,{useState} from 'react'
import {Card,CardContent }from '@material-ui/core';
import useStyles from './styles';
import LineGraph from '../Graph/Graph'

function Rightcontainer({tables,settables,casestype,setcasestype}) {
    const numberWithCommas=(x)=> (x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","))
    const classes=useStyles()
    return (
        <Card  className={classes.root}>
            <CardContent className={classes.media} color="textsecondary" >
              <h3 style={{color:'black',fontWeight:'700'}}>Live Cases By country</h3>
                    <div className={classes.tables}>
                        {tables.map((table)=>(
                                  <tr className={classes.tr} >
                                      <td style={{padding:'0.5rem'}} className={classes.media}>{table.country}</td>
                                      <td style={{color:'black',fontSize:'13px', fontWeight:'bold',padding:'0.5rem'}}>{numberWithCommas(table.cases)}</td>
                                  </tr>
                        ))}
                    </div>
                <h3 style={{color:'black',fontWeight:'700',marginTop:'15px',marginBottom:'10px'}} >Worldwide new {casestype}</h3>
                <LineGraph  casestype={casestype}/>
            </CardContent>
        </Card>
    )
}

export default Rightcontainer;
