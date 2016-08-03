import React from 'react';
import IconButton from 'material-ui/IconButton';
import ContactUS from 'material-ui/svg-icons/communication/call';
import FindBranch from 'material-ui/svg-icons/communication/location-on';
import Search from 'material-ui/svg-icons/action/search';
import SvgIcon from 'material-ui/SvgIcon';
import RaisedButton from 'material-ui/RaisedButton';
import Lock from 'material-ui/svg-icons/action/lock';
import FontIcon from 'material-ui/FontIcon';
import ActionHome from 'material-ui/svg-icons/action/home';
import {teal900} from 'material-ui/styles/colors';

export default class Nav extends React.Component {
   render() {

     var LBGLogo = "../img/logo.jpg";
     const styles = {
      tabColor :{backgroundColor:teal900},
        smallIcon: {
          width: 30,
          height: 30,
        },
        small: {
          width: 50,
          height: 50,
          paddingRight: 50,
        }
      };

      return (
        <div>
            <div className="container-fluid" id="nav-primary" style = {styles.tabColor}>
                <div className="row">
                    <div className="container" >
                        <div id="brandText"><strong>AF BANK</strong><img src={LBGLogo} type="image/jpg" />
                        </div>
                        <div id="brandMenu">
                            <IconButton style={{marginTop:30}} tooltip="Contact Us">
                                <ContactUS color="white" />
                            </IconButton>
                            <IconButton style={{marginTop:30 }} tooltip="Find a Branch">
                                <FindBranch color="white" />
                            </IconButton>
                            <IconButton style={{marginTop:30, marginRight:40}} tooltip="Search">
                                <Search color="white" />
                            </IconButton>
                            <div id="login">
                                <RaisedButton className="raised-button-login" label="Log In" labelPosition="before" primary={true} icon={<Lock />} color="white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      );
    }
  }
