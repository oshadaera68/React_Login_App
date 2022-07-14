import {Component} from "react";
import {Button, TextField, Typography} from "@mui/material";

/*styles*/
const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'grey',
    height: '100vh',
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center'
};

const text1 = {
    position: 'relative',
    display: 'flex',
    height: '30%',
    width: '30%',
    left: '83vh',
    top: '11vh',
    fontFamily: 'ubuntu',
    fontSize: '41px',
    color: '#9b59b6'
};

const form1 = {
    position: 'relative',
    height: '60%',
    width: '20%',
    left: '73vh',
    top: '11vh'
};

const button1 = {
    position: 'relative',
    left:'83vh',
    top:'14vh',
    display: 'flex',
    height: '9%',
    width: '10%',
    backgroundColor: 'green'
};

const button2 = {
    position: 'relative',
    left:'83vh',
    top:'11vh',
    display: 'flex',
    height: '9%',
    width: '10%',
    backgroundColor: 'red'
};


/*codes*/
class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={divStyle}>
                <div>
                    <Typography style={text1} variant="h5" gutterBottom component="div">
                        Log In
                    </Typography>
                </div>
                <br/>
                <div>

                    <TextField style={form1} id="outlined-basic" label="User Name" variant="outlined"/>
                    <br/><br/>
                    <TextField style={form1} id="outlined-password-input" label="Password" type="password"
                               autoComplete="current-password"/>
                </div>
                <br/>
                <div>
                    <Button style={button1} variant="contained">Log In</Button><br/><br/>
                    <Button style={button2} variant="contained">Cancel</Button>
                    <br/>
                </div>

            </div>
        );
    }
}


export default Login