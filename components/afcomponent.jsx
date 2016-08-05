import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {teal400} from 'material-ui/styles/colors';
import Turnover from './turnover.jsx';
import Turnover25 from './turnover25.jsx';
""
const styles = {
  tabColor : {backgroundColor : teal400,color:"black"},
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
      <Tab label="About Asset Finance" value="a" style= {styles.tabColor}>
        <div>
          <h2 style={styles.headline}>Asset Finance</h2>
          <p>
            Asset finance is a way to purchase assets without taking out a conventional loan. It allows you to spread payments over an agreed term and so avoid making big one-off payments for the extra machinery or equipment your business might need to grow.
          </p><br/>
          <br/>
        </div>
      </Tab>
        <Tab label="£0-£1m turnover " value="b" style= {styles.tabColor}>
          <div className = "container">
            <Turnover title="£0-£1m turnover" amount="50,000" idx = "1"/>
          </div>
        </Tab>
        <Tab label="£1m-£25m turnover" value="c"  style= {styles.tabColor}>
          <div  className = "container">
            <Turnover title="£1m-£25m turnover" amount="100,000" idx = "2"/>
          </div>
        </Tab>
        <Tab label="£25m+ turnover" value="d"  style= {styles.tabColor}>
          <div className = "container">
          <Turnover25 title="£25m+ turnover"/>
          </div>
        </Tab>
      </Tabs>
    );
  }
}
