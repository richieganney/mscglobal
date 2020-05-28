import React from 'react';
import axios from 'axios';
import { Media } from 'react-bootstrap';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { Link } from 'react-router-dom'
import '../styles/styles.css'

class MatchReports extends React.Component {
  constructor() {
    super();
    this.state = {
      matchReport: [],
      matchReportLoaded: false
    };
  }

  componentDidMount() {
      this.getReports()
  }

  getReports(){
      const url = process.env.REACT_APP_API_KEY
      axios.get(`${url}/posts`)
      .then(res => {
          this.setState({ matchReport: this.filterReports(res.data.posts), matchReportLoaded: true });
          console.log(this.state.matchReport)
      })
      .catch(error => {
          console.log(error)
      });
  };

  filterReports(reports) {
    const reportsArray = []
    reports.map(report => {
        if(Object.keys(report.tags)[0] === "match_report"){
            reportsArray.push(report);
        };
    });
    return reportsArray
  };

  renderReportData() {
    return this.state.matchReport.map((report) => {
        console.log(report.ID)
       return (
        <div>
        <div className='homepage-blog-list'>
            <Link to={{
                pathname: `/blogs/${report.ID}/${report.title}`,
                state: {
                    id: report.ID,
                    key: report.ID
                }
            }}>
            <ul className="list-unstyled">
            <Media as="li">
                <img
                width={170}
                height={170}
                className='homepage-blog-image'
                src={report.featured_image}
                alt="Generic placeholder"
                />
                <Media.Body>
                <h5 className='homepage-blog-title'>{report.title}</h5>
                <p className='homepage-blog-body'>{ ReactHtmlParser(report.excerpt) }</p>
                </Media.Body>
            </Media>
            </ul>
            </Link>
        </div><br></br>
        </div>
       )
    })
 }

  render() {
    return (
        <div>
        <center><h1 className='blog-title'>Match Reports</h1></center>
        {this.renderReportData()}
        </div>
    );
  }
}

export default MatchReports;
