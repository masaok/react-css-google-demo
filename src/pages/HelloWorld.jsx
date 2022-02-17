import { makeStyles } from '@mui/styles'

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
      color: 'red',
    },
  }),
  { name: 'HelloWorld' }
)

const HelloWorld = props => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <div className={classes.main}>HELLO WORLD</div>
    </div>
  )
}

export default HelloWorld
