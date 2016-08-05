import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {teal700} from 'material-ui/styles/colors';
import AFComponent from './afcomponent.jsx';
import CAFComponent from './caf.jsx';
""
const styles = {
  tabColor : {backgroundColor : teal700},
  inkBarStyle : {backgroundColor : 'black'},
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class TabsExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange(v) {
    this.setState({
      value: v,
    });
  }


  render() {
    var x = this.handleChange.bind(this)
    return (
      <Tabs
        value={this.state.value}
        onChange={x}
        inkBarStyle = {styles.inkBarStyle}
      >
        <Tab label="Asset Finance" value="a" style= {styles.tabColor}>
          <div>
            <AFComponent/>
          </div>
        </Tab>
        <Tab label="Corporate Asset Finance" value="b"  style= {styles.tabColor}>
          <div>
            <CAFComponent/>
          </div>
        </Tab>
      </Tabs>
    );
  }
}
