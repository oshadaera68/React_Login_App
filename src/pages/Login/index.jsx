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
    alignItems: 'center',
    height: '30%',
    width: '30%',
    left: '85vh',
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
    left: '83vh',
    top: '14vh',
    display: 'flex',
    height: '9%',
    width: '10%',
    backgroundColor: 'green'
};

const button2 = {
    position: 'relative',
    left: '83vh',
    top: '11vh',
    display: 'flex',
    height: '9%',
    width: '10%',
    backgroundColor: 'red'
};


/*codes*/
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'admin',
            password: 'admin',
            formData:{
                userName: '',
                password: ''
            }
        }
    }

    checkValidate() {
        console.log("Log In button clicked")
        console.log("User name:" + this.state.userName)
        console.log("Password:" + this.state.password)
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
                    <TextField style={form1} id="outlined-basic" label="User Name" onChange={(e) => {
                        console.log(e.target.value)
                    }} variant="outlined"/>
                    <br/><br/>
                    <TextField style={form1} id="outlined-password-input" label="Password" onChange={(e) => {
                        console.log(e.target.value)
                    }}
                    type="password" autoComplete="current-password"/>
                </div>
                <br/>
                <div>
                    <Button style={button1} variant="contained" onClick={() => {
                        this.checkValidate();
                    }}>Log In</Button><br/><br/>
                    <Button style={button2} variant="contained">Cancel</Button>
                    <br/>
                </div>
            </div>
        );
    }
}


export default Login