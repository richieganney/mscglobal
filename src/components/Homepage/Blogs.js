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
          this.setState({ blogs: res.data.posts, blogsLoaded: true });
      })
      .catch(error => {
          console.log(error)
      })
  }

  render() {
    return this.state.blogs.map((blog) => (
    <div>
    <div className='homepage-blog-list'>
        <Link to={{
            pathname: `/blogs/${blog.ID}/${blog.title}`,
            state: {
                id: blog.ID,
                key: blog.ID
            }
        }}>
        <ul className="list-unstyled">
        <Media as="li">
            <img
            width={170}
            height={170}
            className='homepage-blog-image'
            src={blog.featured_image}
            alt="Generic placeholder"
            />
            <Media.Body>
            <h5 className='homepage-blog-title'>{blog.title}</h5>
            <p className='homepage-blog-body'>{ ReactHtmlParser(blog.excerpt) }</p>
            </Media.Body>
        </Media>
        </ul>
        </Link>
    </div><br></br>
    </div>
      ));
  }
}

export default Blogs;
