/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'

// import logoImg from '../assets/googlelogo_color_272x92dp.png'

const getStyles = theme => ({
  root: {
    backgroundColor: 'lightblue',
    minHeight: '100vh',
  },

  body: {
    backgroundColor: 'pink',
  },

  footer: {
    width: {
      mobile: 100,
      laptop: 300,
    },
    // backgroundColor: theme => theme.palette.primary.main,
  },

  logoContainer: {
    padding: theme.spacing(2),
  },

  logo: {
    padding: 5,
  },

  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red',
  },
})

const GoogleTest = () => {
  const theme = useTheme()
  const classes = getStyles(theme)

  // MUI v5 and Emotion Styling Strings
  // https://networksynapse.net/development/mui-v5-material-with-emotion/
  const styles = {
    text: css`
      font-weight: bold;
      color: red;
      font-size: 20px;
    `,
  }

  // Using Emotion the MUI 5 Way
  // https://networksynapse.net/development/mui-v5-material-with-emotion/
  const sty = {
    text: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'green',
    },
  }

  return (
    <Box style={classes.root}>
      {/* <Box sx={{ ...classes.logoContainer }}>
        <img sx={{ ...classes.logo }} src={logoImg} alt="logo" />
      </Box> */}

      {/* OK */}
      <Box sx={{ ...classes.text }}>HELLO</Box>
      <Box style={classes.text}>HELLO</Box>
      <Box css={styles.text}>HELLO</Box>
      <Box sx={sty.text}>HELLO (MUI Box required for this to work, not div)</Box>

      {/* FAIL */}
      <Box classes={{ root: classes.text }}>HELLO</Box>
      <Box className={classes.text}>HELLO</Box>
      <Box class={classes.text}>HELLO</Box>
    </Box>
  )
}

export default GoogleTest
