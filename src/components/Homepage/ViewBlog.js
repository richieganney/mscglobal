import React from 'react';
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import '../../styles/styles.css'

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
    const blogId = this.props.match.params.postId
    const url = process.env.REACT_APP_API_KEY
    axios.get(`${url}/posts/${blogId}`)
    .then(res => {
        this.setState({ blog: res.data, blogLoaded: true });
    })
    .catch(error => {
        console.log(error)
    })
}

  render() {
    const { date, title, content, like_count } = this.state.blog
    return (
        <div>
          {this.state.blogLoaded === true ? 
                <div>
                <center><h1 className='blog-title'>{title}</h1><br></br><br></br></center>
                <p className='blog-content'>{ ReactHtmlParser(content) }</p>
                <p className='blog-footer'>{`${new Date(date)}`}</p>
                <p className='blog-footer'>likes: {like_count}</p>
                </div>
                : null}
        </div>
    );
  }
}

export default ViewBlog;
