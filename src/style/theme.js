
import { createMuiTheme } from "@material-ui/core/styles";

let theme = createMuiTheme({
    palette: {
        primary: {
            light: 'ffffff',
            dark: '#bbbbbb',
            main: '#eeeeee',
            contrastText: '#000000'
        },
        secondary: {
            light: '#5cdfe7',
            dark: '#007d85',
            main: '#00adb5',
            contrastText: '#000000'
        },
        background: {
            paper: '#eeeeee',
        }
    }
})
export default theme;