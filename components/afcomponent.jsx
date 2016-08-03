import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {teal400} from 'material-ui/styles/colors';
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
          <div>
            <h2 style={styles.headline}>Asset Finance</h2>
            <p>
              Asset finance is a way to purchase assets without taking out a conventional loan. It allows you to spread payments over an agreed term and so avoid making big one-off payments for the extra machinery or equipment your business might need to grow.
            </p><br/>
            <br/>
          </div>
        </Tab>
        <Tab label="£1m-£25m turnover" value="c"  style= {styles.tabColor}>
          <div>
            <h2 style={styles.headline}>Asset Finance</h2>
            <p>
              Corporate Asset Finance helps support your business objectives. We focus on delivering solutions to £100m+ turnover customers, with dedicated teams to support Global Corporates and Mid Market customers requiring asset funding solutions of £250,000 and above.
            </p><br/>
            <br/>
          </div>
        </Tab>
        <Tab label="£25m+ turnover" value="d"  style= {styles.tabColor}>
          <div>
            <h2 style={styles.headline}>Asset Finance</h2>
            <p>
              Corporate Asset Finance helps support your business objectives. We focus on delivering solutions to £100m+ turnover customers, with dedicated teams to support Global Corporates and Mid Market customers requiring asset funding solutions of £250,000 and above.
            </p><br/>
            <br/>
          </div>
        </Tab>
      </Tabs>
    );
  }
}
