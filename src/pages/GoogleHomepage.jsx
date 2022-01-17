import { makeStyles } from '@mui/styles'

import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import DirectionsIcon from '@material-ui/icons/Directions'

import logoImg from '../assets/googlelogo_color_272x92dp.png'
import microphone from '../assets/microphone.svg'

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
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: 150,
    },

    logoContainer: {
      marginBottom: theme.spacing(2.5),
    },

    logo: {
      maxWidth: 272,
    },

    searchFieldContainer: {
      display: 'flex',
      flex: 1,
      marginBottom: theme.spacing(3),
      minWidth: 584,
      border: '1px solid #DDD',
      borderRadius: 100,
    },

    // Search Field Styles
    searchRoot: {
      display: 'flex',
      flex: 1,
      padding: '2px 4px',
      alignItems: 'center',
      width: 400,
    },

    input: {
      marginLeft: theme.spacing(1),
      flex: 10,
    },

    iconButton: {
      padding: 10,
    },

    divider: {
      height: 28,
      margin: 4,
    },

    // Icons
    searchIcon: {
      maxWidth: 20,
    },

    // Microphone
    micContainer: {
      display: 'flex',
      flex: 1,
      marginRight: theme.spacing(-1.5),
    },

    mic: {
      maxWidth: 24,
    },
  }),
  { name: 'GoogleHomepage' }
)

const GoogleHomepage = props => {
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
            style={{
              backgroundColor: 'transparent',
            }}
            elevation={0}
          >
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
              style={{
                color: '#AAA',
              }}
            >
              <SearchIcon className={classes.searchIcon} />
            </IconButton>
            <InputBase
              className={classes.input}
              inputProps={{ 'aria-label': 'search google maps' }}
            />
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
              letterSpacing: 'normal',
              marginRight: 14,
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

export default GoogleHomepage
