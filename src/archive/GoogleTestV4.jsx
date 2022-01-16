import { makeStyles } from '@mui/styles'

import logoImg from '../assets/googlelogo_color_272x92dp.png'
import microphone from '../assets/microphone.svg'

import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import DirectionsIcon from '@material-ui/icons/Directions'

import Button from '@mui/material/Button'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: theme.spacing(3),
    },

    main: {
      display: 'flex',
      // flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: 150,
    },

    logo: {
      maxWidth: 272,
    },

    // Search Field
    searchFieldContainer: {
      display: 'flex',
      flex: 1,
      marginTop: theme.spacing(2.5),
      minWidth: 584,
      border: '1px solid #DDD',
      borderRadius: 100,
    },

    searchFieldPaper: {
      backgroundColor: 'transparent',
    },

    searchRoot: {
      padding: '2px 4px',
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      // width: 400,
    },

    input: {
      marginLeft: theme.spacing(1),
      flex: 10,
    },

    iconButton: {
      padding: 10,
      color: '#999',
    },

    searchIcon: {
      maxWidth: 20,
    },

    divider: {
      height: 28,
      margin: 4,
    },

    // Buttons
    buttonsContainer: {
      display: 'flex',
      flex: 1,
      marginTop: theme.spacing(3.5),
    },

    micContainer: {
      flex: 1,
      marginTop: theme.spacing(0.5),
      marginRight: theme.spacing(-0.5),
    },

    mic: {
      maxWidth: 24,
    },
  }),
  {
    name: 'GoogleTestV4',
  }
)

const GoogleTestV4 = props => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.logoContainer}>
          <img className={classes.logo} src={logoImg} alt="logo" />
        </div>

        <div className={classes.searchFieldContainer}>
          <Paper
            component="form"
            className={classes.searchRoot}
            classes={{
              root: classes.searchFieldPaper,
            }}
            elevation={0}
          >
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon className={classes.searchIcon} />
            </IconButton>
            <InputBase className={classes.input} />
            <div className={classes.micContainer}>
              <img className={classes.mic} src={microphone} alt="mic" />
            </div>
          </Paper>
        </div>

        <div className={classes.buttonsContainer}>
          <Button
            variant="contained"
            style={{
              color: '#555',
              backgroundColor: '#F8F9FA',
              textTransform: 'capitalize',
              marginRight: 14,
              letterSpacing: 'normal',
            }}
            disableElevation
          >
            Google Search
          </Button>

          <Button
            variant="contained"
            style={{
              color: '#555',
              backgroundColor: '#F8F9FA',
              textTransform: 'capitalize',
              letterSpacing: 'normal',
            }}
            disableElevation
          >
            I'm Feeling Lucky
          </Button>
        </div>
      </div>
    </div>
  )
}

export default GoogleTestV4
