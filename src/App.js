import React, {Component} from 'react';
import Numbers from './components/Numbers/Numbers';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
injectTapEventPlugin();
class App extends Component {
    render() {
        let {state} = this.props;
        return (
            <MuiThemeProvider>
                <Numbers state={state}/>
            </MuiThemeProvider>
        );
    }
}

export default App;
