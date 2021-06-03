import './App.css';
import React,{useState} from 'react';
import {Header,InfoBox,Map,Rightcontainer} from './components';
import "leaflet/dist/leaflet.css";
import {prettyPrintStat} from './components/util'


function App() {
  const [countryInfo,setcountryInfo]=useState({});
  const [tables,settables]=useState([]);
  const [mapCenter, setMapCenter] = useState([ -6.200000, 106.816666 ]);
  const [zoom, setMapZoom] = useState(2);
  const [mapcountry,setmapcountry]=useState([]);
  const [casestype,setcasestype]=useState("cases");
  
  console.log(casestype);
  return (
   
    <div className="App">
        <div className="left_container">
          <Header setmapcountry={setmapcountry} tables={tables} setMapCenter={setMapCenter} setMapZoom={setMapZoom} settables={settables} countryInfo={countryInfo} setcountryInfo={setcountryInfo} />
            <div className="infoBox_container">
                <InfoBox active={casestype==='cases'} value="cases" onClick={e=>setcasestype('cases')} title="Corona Virus Today" cases={prettyPrintStat(countryInfo.todayCases)} total={countryInfo.cases}/>
                <InfoBox active={casestype==='recovered'} title="Recovered" onClick={e=>setcasestype('recovered')}  cases={prettyPrintStat(countryInfo.todayRecovered)} total={countryInfo.recovered}/>
                <InfoBox active={casestype==='deaths'} title="Death" onClick={e=>setcasestype('deaths')}  cases={prettyPrintStat(countryInfo.todayDeaths)} total={countryInfo.deaths}/>
            </div>
          <Map casestype={casestype} mapcountry={mapcountry} center={mapCenter} zoom={zoom}/>
        </div>
          <div className="right_container">
             <Rightcontainer casestype={casestype} setcasestype={setcasestype} tables={tables} settables={settables} />
          </div>
      
        
    </div>
  );
}

export default App;

