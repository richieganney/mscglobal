import React from 'react';
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import '../../styles.css'

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
        this.setState({ blog: res.data, blogLoaded: true });
    })
    .catch(error => {
        console.log(error)
    })
}

  render() {
    const { date, title, content, excerpt, like_count } = this.state.blog
    // const newDate = `${date[0]}${date[1]}${date[2]}${date[3]}${date[4]}${date[5]}${date[6]}${date[7]}${date[8]}${date[9]}`
    // const mydate = new Date(newDate);
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


