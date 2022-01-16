import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Helmet, HelmetProvider } from 'react-helmet-async'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import GoogleTest from './archive/GoogleTest'
import GoogleTestV4 from './archive/GoogleTestV4'

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
})

const classes = {
  header: {
    backgroundColor: 'green',
  },

  body: {
    backgroundColor: 'pink',
  },

  footer: {
    width: {
      mobile: 100,
      laptop: 300,
    },
    backgroundColor: theme => theme.palette.primary.main,
  },
}

const App = () => {
  return (
    <HelmetProvider>
      <CssBaseline />
      <Helmet>
        <title>Google</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Router>
            <Routes>
              {/* <Route path="//*" element={<GoogleTest />} /> */}
              <Route path="//*" element={<GoogleTestV4 />} />
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
