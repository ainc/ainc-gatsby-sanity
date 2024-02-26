import React, { useState, useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from "./SearchBar.scss";

const SearchBar = () => {
  const data = useStaticQuery(graphql`
    {
        allSanityBlog {
          totalCount
          edges {
            node {
              date
              slug {
                current
              }
              title
              previewText
              body
              thumbnail {
                asset {
                  url
                }
              }
              reference {
                name
                picture {
                  asset {
                    gatsbyImageData(height: 54, width: 54, placeholder: DOMINANT_COLOR)
                  }
                }
                title
              }
            }
          }
        }
      }
  `);

  const blogs = data.allSanityBlog.edges.map(({ node }) => ({
    title: node.title,
    author: node.reference.name,
    blogURL: node.slug.current,
    imageUrl: node.thumbnail.asset.url,
    description: node.previewText
    }));

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleChange = event => {
      setSearchTerm(event.target.value);
      const results = blogs.filter(item =>
        item.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        item.author.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setSearchResults(results);
    };
  
    return (
      <div className="autocompleteContainer">
        <input
          className="form-control autocomplete-input"
          type="text"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={handleChange}
          fieldtype="7"
        />
        <ul className="autocomplete-list">
          {searchResults.map((item, index) => (
            <SearchItem index={index} title={item.title} description={item.description} author={item.author} blogUrl={item.blogURL} />
          ))}
        </ul>
      </div>
    )
};

const SearchItem = ({index, title, description, author, blogUrl}) => { 

  return (
    <li key={index}>
      <a href={"/blog/" + blogUrl}>
        <strong>{title}</strong> by {author}
        <p>{description}</p>
      </a>
    </li>
  )
}

export default SearchBar;