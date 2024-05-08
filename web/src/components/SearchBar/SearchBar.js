import React, { useState, useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Col, Row } from 'react-bootstrap';
import './Searchbar.scss'

import * as styles from "./Searchbar.scss";

const SearchBar = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityBlog {
        edges {
          node {
            title
            reference {
              name
            }
            slug {
              current
            }
            previewText
            date
            thumbnail {
              asset {
                gatsbyImageData(placeholder: BLURRED, height: 120, width: 120)
              }
            }
          }
        }
      }
    }
  `);

  const blogs = data.allSanityBlog.edges.map(({ node }) => {
      const defaultBgImageUrl = '../images/logo.png'
      const bgImage = node.thumbnail.asset !== null ? getImage(node.thumbnail.asset.gatsbyImageData) : defaultBgImageUrl;
      return {
        title: node.title,
        author: node.reference.name,
        blogURL: node.slug.current,
        imageUrl: bgImage,
        description: node.previewText,
        date: node.date
      };
    });

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(blogs.sort((a, b) => new Date(b.date) - new Date(a.date)));
  
    const handleChange = event => {
      setSearchTerm(event.target.value);
      const results = blogs.filter(item =>
        item.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        item.author.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setSearchResults(results);
    };
  
    return (
      <div className="">
        <input
          className="form-control"
          type="text"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={handleChange}
          fieldtype="7"
        />
        <ul className="autocomplete-list mt-2">
        {searchResults.length > 0 || searchTerm == '' ? (
          searchResults.map((item, index) => (
              <SearchItem key={index} title={item.title} description={item.description} author={item.author} blogUrl={item.blogURL} imageUrl={item.imageUrl}/>
          ))
          ) : (<h3 className='mt-3'>No blogs found.</h3>)
        }
        </ul>
      </div>
    )
};

const SearchItem = ({key, title, description, author, blogUrl, imageUrl}) => { 

  return (
    <li key={key}>
      
      <a href={"/blog/" + blogUrl}>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={2} className="mt-3 mb-3 mb-md-0">
              <div className="d-flex justify-content-center align-items-center">
                <GatsbyImage image={imageUrl} alt={title} className="shadow"/>
              </div>
          </Col>
          <Col md={10}>
            <strong>{title}</strong> | {author}
            <p>{description}</p>
          </Col>
        </Row>
      </a>
      
    </li>
  )
}

export default SearchBar;