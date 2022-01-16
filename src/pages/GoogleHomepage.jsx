import { createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* New MUI System styling but with "classes" */}
        <Box sx={{ ...classes.header }}>BOX WITH HEADER STYLE</Box>
        <Box sx={{ ...classes.body }}>BOX WITH BODY STYLE</Box>
        <Box sx={{ ...classes.footer }}>BOX WITH FOOTER STYLE</Box>
      </div>
    </ThemeProvider>
  )
}

export default App
