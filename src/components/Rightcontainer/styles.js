import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
    minHeight:'100vh',
  },
  media: {
    
    color:'#919191'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  tables:{
    paddingTop:'20px',
    overflow:'auto',
    maxHeight:'400px',
  },
  tr:{
    display: 'flex',
    justifyContent:'space-between',
  }
 
}));


export default useStyles