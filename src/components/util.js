import numeral from "numeral";


export default function sortdata(data) {
    sortdata = [...data]
    sortdata.sort((a,b)=>{
        if(a.cases>b.cases){
            return -1;
        }
        else{
            return 1;
        }
    })
    return sortdata
}

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

