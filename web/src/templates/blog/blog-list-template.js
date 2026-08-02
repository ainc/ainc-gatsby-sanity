import React, { useState, useRef, useEffect } from "react";
import { graphql, Link } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { Col, Container, Row } from "react-bootstrap";
import SEO from "../../components/seo";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import ModalCustom from "../../components/Modal/ModalCustom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { FaBell, FaSearch } from "react-icons/fa";
import BlogPreview from "./BlogPreview";
import "../../styles/main.scss";
import * as styles from "./blog-list-template.module.scss";

const BlogPage = ({ pageContext, data }) => {
  const [lgShowSub, setLgShowSub] = useState(false);
  const [lgShowSearch, setLgShowSearch] = useState(false);
  const handleCloseSubscribe = () => setLgShowSub(false);
  const handleShowSubscribe = () => setLgShowSub(true);
  const handleShowSearch = () => setLgShowSearch(true);
  const handleCloseSearch = () => setLgShowSearch(false);
  const [visibleCount, setVisibleCount] = useState(6); // Start with 6 blogs
  const loadMoreRef = useRef(null);
  const allBlogs = data.allSanityBlog.edges;

  const defaultBgImageUrl = "/web/src/images/logo.png";

  const blogs = data.allSanityBlog.edges;

  const { currentBlog, numBlogs } = pageContext;
  const isFirst = currentBlog === 1;
  const isLast = currentBlog === numBlogs;
  const prevPage = currentBlog - 1 === 1 ? "" : (currentBlog - 1).toString();
  const nextPage = (currentBlog + 1).toString();

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((prev) => Math.min(prev + 6, allBlogs.length));
      }
    },
    { rootMargin: "200px", threshold: 1.0 }
  );

  if (loadMoreRef.current) {
    observer.observe(loadMoreRef.current);
  }

  return () => {
    if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
  };
}, [loadMoreRef.current]);

  return (
    <Layout>
      <Container>
        <Row className="mt-5" style={{ marginTop: "5rem" }}>
          <Col xs={4} className="d-flex justify-content-center">
            <Title className="text-uppercase">Blog</Title>
          </Col>
          <Col
            xs={{ span: 4, offset: 4 }}
            className="d-flex justify-content-center"
          >
            <a onClick={handleShowSubscribe}>
              <FaBell size={40} className="link--brand" />
            </a>
            <a onClick={handleShowSearch} className="ms-2 ms-sm-5">
              <FaSearch size={40} className="link--brand" />
            </a>
          </Col>
          {/* Subscribe Modal */}
          <ModalCustom
            lgShow={lgShowSub}
            hide={handleCloseSubscribe}
            title="Subscribe to our blog"
            centered
            content={
              //Pass HTML here
              <Container fluid>
                <form
                  action="https://forms.zohopublic.com/virtualoffice9155/form/Signup/formperma/oGBr66VPX7l_Drlh1scVwCic8K1-QgeS5bvJGtjwwik/htmlRecords/submit"
                  name="form"
                  id="form"
                  method="POST"
                  accept-charset="UTF-8"
                  enctype="multipart/form-data"
                >
                  <input type="hidden" name="zf_referrer_name" value="" />
                  {/*<!-- To Track referrals , place the referrer name within the " " in the above hidden input field -->*/}
                  <input type="hidden" name="zf_redirect_url" value="" />
                  {/*<!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field -->*/}
                  <input type="hidden" name="zc_gad" value="" />
                  {/*<!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM -->*/}
                  <h4>You'll receive a monthly email with new blog info.</h4>
                  <Row>
                    {/*<!--Name-->*/}
                    <label style={{ marginLeft: "0px" }}>First Name</label>
                    <input
                      type="text"
                      maxlength="255"
                      name="Name_First"
                      fieldtype="7"
                      placeholder="John"
                      className="form-control"
                      style={{ marginLeft: "15px", width: "80%" }}
                    />
                  </Row>
                  <Row>
                    <label style={{ marginLeft: "0px" }}>Last Name</label>
                    <input
                      type="text"
                      maxlength="255"
                      name="Name_Last"
                      fieldtype="7"
                      placeholder="Hancock"
                      className="form-control"
                      style={{ marginLeft: "15px", width: "80%" }}
                    />
                  </Row>
                  {/*<!--Email-->*/}
                  <Row>
                    <label style={{ marginLeft: "0px" }}> Email Address </label>
                    <input
                      type="text"
                      maxlength="255"
                      name="Email"
                      fieldtype="9"
                      placeholder="john@123.com"
                      className="form-control"
                      style={{ marginLeft: "15px", width: "80%" }}
                    />
                  </Row>
                  <BrandButton
                    type="submit"
                    className="mt-3"
                    style={{ marginRight: "auto" }}
                  >
                    <em>Submit</em>
                  </BrandButton>
                </form>
              </Container>
            }
          />
          {/* Search Modal */}
          <ModalCustom
            lgShow={lgShowSearch}
            hide={handleCloseSearch}
            title="Search our blogs!"
            content={
              <Container fluid>
                <SearchBar />
              </Container>
            }
          />
        </Row>
      </Container>

      <Container className="px-1 pb-3 pb-lg-5">
        <Row className="mb-5 mx-3">
         {allBlogs.slice(0, visibleCount).map((edge) => (
          <BlogPreview key={edge.node.slug.current} blog={edge} />
          ))}
        </Row>
      </Container>
        <div ref={loadMoreRef} style={{height: "40px"}}></div>
        {visibleCount>= allBlogs.length && (
          <p className="text-center text-muted">Stay tuned for more blogs!</p>
        )}
    </Layout>
  );
};

export const query = graphql`
  query BlogPageQuery {
    allSanityBlog(sort: { date: DESC }) {
      totalCount
      edges {
        node {
          date(formatString: "MMMM DD, YYYY")
          slug {
            current
          }
          title
          previewText
          thumbnail {
            asset {
              gatsbyImageData(width: 360, height: 270, layout: CONSTRAINED, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          reference {
            name
            picture {
              asset {
                gatsbyImageData(width: 100, height: 100, layout: FIXED)
              }
            }
            title
          }
        }
      }
    }
  }
`;

export default BlogPage;
