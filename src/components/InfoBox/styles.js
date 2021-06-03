import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 263,

    marginTop: 20,
   
    '&:hover':{
      cursor: 'pointer',
    }
  },
  rootactive :{
    borderBottom:'15px solid #ff5500',
    minWidth: 263,
    marginTop: 20,
    '&:hover':{
      cursor: 'pointer',
    }
  },

  
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
 
}));


export default useStyles