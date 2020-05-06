import React from 'react';
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class ViewBlog extends React.Component {
  constructor() {
    super();
    this.state = {
        blog: [],
        blogLoaded: false,
    };
  }

  componentDidMount() {
    this.getBlog()
  }

  getBlog(){
    const blogId = this.props.location.state.id
    const url = process.env.REACT_APP_API_KEY
    axios.get(`${url}/posts/${blogId}`)
    .then(res => {
        console.log('single blog state')
        this.setState({ blog: res.data, blogLoaded: true });
        console.log(this.state)
    })
    .catch(error => {
        console.log(error)
    })
}

  render() {
    const { date, title, content, excerpt, like_count } = this.state.blog
    return (
        <div>
          {this.state.blogLoaded === true ? 
                <div>
                <center><h1 style={titleStyle}>{title}</h1><br></br><br></br></center>
                <p style={contentStyle}>{ ReactHtmlParser(content) }</p>
                <p style={footerStyle}>{date}</p>
                <p style={footerStyle}>likes: {like_count}</p>
                </div>
                : null}
        </div>
    );
  }
}

const titleStyle = {
  fontWeight: 'bold',
  marginTop: '30px'
}

const contentStyle = {
    marginLeft: '400px',
    marginRight: '400px',
    fontSize: '35px'
}

const footerStyle = {
  marginLeft: '400px',
  fontWeight: 'bold',
  color: '#7B67C9'
}

export default ViewBlog;
