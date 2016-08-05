import React from 'react';
import {teal100} from 'material-ui/styles/colors';
export default class Turnover extends React.Component {
  render(){
    return(
        <div>
        <h1>Funding those essential purchases <span>
        {
        this.props.title
        }</span></h1>
        <p>
          Business success in a competitive landscape means investing in capital assets to stay ahead of the game, but purchases can strain your cashflow and limit your financial headroom.
        </p><br/>
        <p>
        Let Asset Finance help you purchase essential equipment to drive your business forward without tying up your cash.
        </p>
        <h2>What acquisitions can Asset Finance fund?</h2>
        <p>Key growth assets can be acquired for your business through Asset Finance, such as:</p><br/>
        <ul style = {{listStyleType: "square",paddingLeft:"15px"}}>
        <li>Equipment – whether engineering, office, construction, medical or agricultural</li>
        <li>Construction plant and machinery</li>
        <li>Heavy goods vehicles</li>
        <li>Light commercial vehicles</li>
        <li>New and used cars</li>
        </ul>

        <h2>What benefits can Asset Finance bring to your business?</h2>
        <ul style = {{listStyleType: "square",paddingLeft:"15px"}}>
        <li><strong>Versatility -</strong> fund purchases of a diverse range of business-essential assets, including vehicles and machinery.</li>
        <li><strong>Smart finance -</strong> run your business efficiently and manage your budget.</li>
        <li><strong>Prudence -</strong> avoid paying cash up-front and ease your cashflow with regular payments over an agreed term.</li>
        </ul>

        <h2>What are my funding options?</h2>
        <ul style = {{listStyleType: "square",paddingLeft:"15px"}}>
        <li><strong>Hire Purchase -</strong> Businesses looking for straightforward financing and asset ownership should consider Hire Purchase. You benefit from spreading the cost of the asset over an agreed term, followed by a one-off purchase option fee, which transfers ownership to you at the end of the term.</li>
        <li><strong>Finance Lease -</strong> Businesses looking for immediate use of a new asset but with minimal initial financial outlay should consider a Finance Lease. This allows you to benefit from the full use of the asset for an agreed term without the responsibility of ownership, in return for rental payments.</li>
        </ul>

        <p>Should your asset need replacing before the term is complete, early settlement is possible and fees may apply.</p><br/>
        <p>Our funding options are eligible for discounted funding through the Funding for Lending Scheme, as well as flexible funding terms to meet your business needs.</p>

        <h2>Why AF Bank Commercial Finance?</h2>
        <ul style = {{listStyleType: "square",paddingLeft:"15px"}}>
        <li>Responsiveness – funding requests turned around in 24 hours.</li>
        <li>Affordability – competitive rates of interest and terms.</li>
        <li>Flexible – we work with you to determine the period of funding and initial deposit made.</li>
        <li>Expertise - a relationship manager dedicated to your needs.</li>
        <li>Specialist sector support, across construction, engineering, manufacturing, plant hire, printing transport, business services and professional practices.</li>
        </ul>

        <p>We’ve been helping fund assets for over 40 years – driving forward business growth. We’ll help you find the funding package that supports your business ambitions.</p>

        <h2>Next steps</h2>
        <p>Call us on 0800 169 4356 or visit us at <a href="#">www.AFbank.com/commercialfinance</a> to learn more about Asset Finance and our other business funding options.</p>

        </div>
    );
  }
}
