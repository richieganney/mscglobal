import React from 'react';
import axios from 'axios';
import { Media } from 'react-bootstrap';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import ViewBlog from './ViewBlog';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

class Blogs extends React.Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
      blogsLoaded: false,
      singleBlog: [],
      singleBlogLoaded: false
    };
  }

  componentDidMount() {
      this.getBlogs()
  }

  getBlogs(){
      const url = process.env.REACT_APP_API_KEY
      axios.get(`${url}/posts`)
      .then(res => {
          console.log('blog state')
          this.setState({ blogs: res.data.posts, blogsLoaded: true });
      })
      .catch(error => {
          console.log(error)
      })
  }

  render() {
    return this.state.blogs.map((blog) => (
    <div>
    <div style={overlayStyle}>
        <Link to={{
            pathname: `/blogs/${blog.ID}/${blog.title}`,
            state: {
                id: blog.ID
            }
        }}>
        <ul className="list-unstyled">
        <Media as="li">
            <img
            width={170}
            height={170}
            className="mr-3"
            style={imageStyle}
            src={blog.featured_image}
            alt="Generic placeholder"
            />
            <Media.Body>
            <h5 style={titleStyle}>{blog.title}</h5>
            <p style={bodyStyle}>{ ReactHtmlParser(blog.excerpt) }</p>
            </Media.Body>
        </Media>
        </ul>
        </Link>
    </div><br></br>
    </div>
      ));
  }
}

const overlayStyle = {
  position: 'relative',
  backgroundColor: '#7B67C9',
  width: '1000px',
  borderRadius: '25px',
  padding: '10px',
  top: '250px',
  left: '30px',
  right: '0',
  bottom: '0',
}

const titleStyle = {
  color: '#ffffff',
  fontWeight: 'bold'
}

const bodyStyle = {
  color: '#ffffff'
}

const imageStyle = {
  borderRadius: '25px',
  padding: '10px'
}

export default Blogs;
