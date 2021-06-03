import React,{useState,useEffect} from 'react'
import {FormControl,Select,MenuItem } from '@material-ui/core';
import './Header.css'
import sortdata from '../util'
function Header({countryInfo,setcountryInfo,tables,settables,setMapCenter, setMapZoom,setmapcountry}) {
    const [countries,setcountries]=useState([]);
    const [country,setcountry]=useState('worldwide');
  
    async function GetCountries(){
      const URL_COUNTRIES=`https://disease.sh/v3/covid-19/countries`;

      const responses = await fetch(URL_COUNTRIES)
      const data=await responses.json();
     
      const countriest =  data.map(country => (
        {
          name: country.country,
          value:country.countryInfo.iso2,
          id:country.countryInfo._id,
        }
      ))
        setmapcountry(data)
        try {
          setcountries(countriest);
          const sorted=sortdata(data);
          settables(sorted);
          
        }
        catch(err){
          settables(data)
        }
       
        
    
    }
    async function worldwide(){
      const url='https://disease.sh/v3/covid-19/all';
      const response=await fetch(url);
      const data=await response.json();

      setcountryInfo(data)
    }
    useEffect(() => {
      worldwide();
      GetCountries();
      }, []);


    const countrychange=async(e)=>{
            const countryon=e.target.value
          
            const url=countryon==='worldwide' ? 'https://disease.sh/v3/covid-19/all' 
                      : `https://disease.sh/v3/covid-19/countries/${countryon}`
            
            const response= await fetch(url);
            const data=await response.json();
            setcountryInfo(data);
            setcountry(countryon);
            try{
              setMapCenter([data.countryInfo.lat,data.countryInfo.long])
            }catch(err){
              setMapCenter([-6.200000, 106.816666]) 
            }
          
            setMapZoom(5)
   
    }
    console.log(countryInfo)
    return (
        
        <div className="header">
            <h1  style={{fontWeight:'700'}}>Covid-19 Tracker</h1>
            <FormControl className="app_dropdown">
              <Select onChange={countrychange}  style={{ color:'white'}} className="app_select" variant='outlined' value={country} >
                      <MenuItem  style={{ color:'black'}}  value="worldwide">WorldWide</MenuItem>
                      {countries.map(country=>(
                        <MenuItem key={country.id} style={{ color:'black'}} value={country.value}>{country.name}</MenuItem>
                      ))}
              </Select>
            </FormControl>
        </div>
       
    )
}

export default Header
