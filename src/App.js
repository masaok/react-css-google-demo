import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Helmet, HelmetProvider } from 'react-helmet-async'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// import GoogleHomepage from './pages/GoogleHomepage'
import GoogleTest from './archive/GoogleTest'
import GoogleTestV4 from './archive/GoogleTestV4'
import HelloWorld from './pages/HelloWorld'

const theme = createTheme({})

const classes = {
  header: {
    backgroundColor: 'green',
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
              <Route path="//*" element={<GoogleTestV4 />} />
              <Route path="/mui5" element={<GoogleTest />} />
              <Route path="/hello" element={<HelloWorld />} />
              {/* <Route path="//*" element={<GoogleHomepage />} /> */}
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
