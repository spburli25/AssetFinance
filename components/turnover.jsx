import React from 'react';
import {teal100} from 'material-ui/styles/colors';
export default class Turnover extends React.Component {
  render(){
    return(
        <div>
        <h1>Asset Finance <span>
        {
        this.props.title
        }</span></h1>
        <p>
          Asset finance is a way to purchase assets without taking out a conventional loan. It allows you to spread payments over an agreed term and so avoid making big one-off payments for the extra machinery or equipment your business might need to grow.

        </p>
        <h2>Features and benefits</h2>
        <ul style = {{listStyleType: "square",paddingLeft:"15px"}}>
          <li>Funding for all types of assets from farm vehicles to plant and office equipment.</li>
          <li>Competitive interest rates.</li>
          <li>Response to funding requests within 24 hours.</li>
          <li>A fast and efficient phone-based service.</li>
          <br/>
          <h3>Hire Purchase</h3>
          <li>Straightforward financing and asset ownership.</li>
          <li>Spread the asset cost over an agreed term, followed by a one-off purchase option fee which transfers ownership to you at the end of the term.</li>
          <h3>Finance Lease</h3>
          <li>Immediate use of new assets with minimal initial financial outlay.</li>
          <li>Rental payments over an agreed term without the responsibility of ownership.</li>
          <li>Flexibility of initial deposit amount and period of funding.</li>
          <h3>Assets funded include:</h3>
          <li>new and used cars</li>
          <li>light commercial vehicles</li>
          <li>heavy goods vehicles</li>
          <li>buses and coaches</li>
          <li>printing machinery</li>
          <li>construction equipment</li>
          <li>engineering machinery</li>
          <li>office equipment.</li>
          <br/>
          <h4>These packages can help healthcare businesses fund surgery equipment such as:</h4>

          <li>dental chairs</li>
          <li>scanners</li>
          <li>beds and hoists</li>
          <li>office equipment.</li>
          <br/>
          <h4>These packages can help agricultural businesses fund:</h4>

          <li>light and heavy commercial vehicles</li>
          <li>tractors</li>
          <li>combine harvesters</li>
          <li>commercial vehicle trailers</li>
          <li>all-terrain vehicles</li>
          <li>other farm equipment.</li>

        </ul>

        <div className="panel-group" id="accordion">
    <div className="panel panel-success">
      <a data-toggle="collapse" data-parent="#accordion" href={"#collapse1"+this.props.idx} style = {{textDecoration:"none"}}>
      <div className="panel-heading" style = {{backgroundColor:teal100}}>
        <h4 className="panel-title" >
          Is your business eligible?
        </h4>
      </div>
      </a>
      <div id={"collapse1"+this.props.idx} className="panel-collapse collapse">
        <div className="panel-body">
        <p>To apply for Asset Finance, you should:</p>
<ul style = {{listStyleType: "square",paddingLeft:"15px"}}>
<li>achieve sales in excess of £ <span>{this.props.amount}</span></li>
<li>require the finance for business use</li>
<li>be a sole trader, partner or director with authority to borrow on behalf of your business</li>
<li>be aged 18 or over.</li>
</ul>
<p>Before we can help you, we need to know:</p>
<ul style = {{listStyleType: "square",paddingLeft:"15px"}}>
<li>how much you would like to borrow</li>
<li>what you need the finance for</li>
<li>how many months you would like to make the repayments over.</li>
</ul>
        </div>
      </div>
    </div>

    <div className="panel panel-success">
      <a data-toggle="collapse" data-parent="#accordion" href={"#collapse2"+this.props.idx} style = {{textDecoration:"none"}}>
      <div className="panel-heading" style = {{backgroundColor:teal100}}>
        <h4 className="panel-title" >
          Important information
        </h4>
      </div>
      </a>
      <div id={"collapse2"+this.props.idx} className="panel-collapse collapse">
        <div className="panel-body">
          Easy-to-follow figures so you can make comparisons.</div>
      </div>
    </div>
    <div className="panel panel-success">
      <a data-toggle="collapse" data-parent="#accordion" href={"#collapse3"+this.props.idx} style = {{textDecoration:"none"}}>
      <div className="panel-heading" style = {{backgroundColor:teal100}}>
        <h4 className="panel-title" >
          How to apply
        </h4>
      </div>
      </a>
      <div id={"collapse3"+this.props.idx} className="panel-collapse collapse">
        <div className="panel-body"><p>On the phone
        <br/>
        <br/>
        <div>
          <i className="fa fa-phone"></i>
          +1 555 123456
          </div>
          Call us to talk to one of our business management team. We are available from 8am to 8pm Monday to Friday.</p></div>
      </div>
    </div>
  </div>


    </div>
    );
  }
}
