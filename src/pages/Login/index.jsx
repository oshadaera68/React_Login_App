import {Component} from "react";
import {Button, TextField, Typography, withStyles} from "@mui/material";
import {styleSheet} from "./style";

/*codes*/
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'admin',
            password: 'admin',
            formData: {
                userName: '',
                password: ''
            }
        }
    }

    checkValidate() {
        console.log("Log In button clicked")
        console.log("User name:" + this.state.userName)
        console.log("Password:" + this.state.password)

        console.log("Form data" + this.state.formData)
        // console.log("Form data" + this.state.password)
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div>
                    <Typography style={classes.text__container} variant="h5" gutterBottom component="div">
                        Log In
                    </Typography>
                </div>
                <br/>
                <div>
                    <TextField style={classes.form__container} id="outlined-basic" label="User Name" onChange={(e) => {
                        console.log(e.target.value)
                        let formData = this.state.formData;
                        formData.userName = e.target.value;
                        this.setState(formData)
                    }} variant="outlined"/>

                    <br/><br/>

                    <TextField style={classes.form__container} id="outlined-password-input" label="Password"
                               onChange={(e) => {
                                   console.log(e.target.value)
                                   let formData = this.state.formData;
                                   formData.password = e.target.value;
                                   this.setState(formData)
                               }}
                               type="password" autoComplete="current-password"/>
                </div>
                <br/>
                <div>
                    <Button style={classes.btn__container} variant="contained" onClick={() => {
                        this.checkValidate();
                    }}>Log In</Button><br/><br/>
                    <Button style={classes.btn__container} variant="contained">Cancel</Button>
                    <br/>
                </div>
            </div>
        );
    }
}


export default withStyles(styleSheet)(Login)