import * as React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import ApplyNowModal from "../Components/ApplyNowModal";
import BrandButton from "../../../components/UI/BrandButton/BrandButton";
import FellowshipCompanyCard from "../../../components/FellowshipCompanyCard/FellowshipCompanyCard";
import Layout from "../../../components/Layout/Layout";
import SEO from "../../../components/seo";
import Title from "../../../components/UI/Title/Title";

import "../../../styles/main.scss";
import * as styles from "./portfolio.module.scss";

const groupByYear = (companies) => {
  const groups = [];

  companies.forEach((company) => {
    const year = company.year ? company.year.split("-")[0] : "Unknown";
    const currentGroup = groups[groups.length - 1];

    if (currentGroup && currentGroup.year === year) {
      currentGroup.companies.push(company);
      return;
    }

    groups.push({ year, companies: [company] });
  });

  return groups;
};

const PortfolioPage = ({ data }) => {
  const allFellowshipPortfolio = data.allSanityFellowshipPortfolio.nodes;
  const companiesByYear = groupByYear(allFellowshipPortfolio);
  const [activeYear, setActiveYear] = React.useState(
    companiesByYear[0]?.year ?? "",
  );

  React.useEffect(() => {
    const sections = document.querySelectorAll("[data-year]");
    if (!sections.length) return undefined;

    const visibleTops = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleTops.set(
            entry.target,
            entry.isIntersecting ? entry.boundingClientRect.top : null,
          );
        });

        const active = [...visibleTops.entries()]
          .filter(([, top]) => top !== null)
          .sort((a, b) => a[1] - b[1])[0];

        if (active) setActiveYear(active[0].getAttribute("data-year"));
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <SEO />
      <Row className="col-sm-10 mx-auto">
        <Container>
          <Row className="text-center text-uppercase my-5">
            <Title>Fellowship Portfolio</Title>
          </Row>
        </Container>
        <Container>
          <Row className="d-inline h6 mx-1">
            <a href="/" className="link--red text--grey px-0">
              HOME
            </a>
            <h6 className="d-inline px-2">/</h6>
            <a href="/fellowship" className="link--red text--grey px-0">
              FELLOWSHIP
            </a>
            <h6 className="d-inline px-2">/</h6>
            <h6 className="d-inline px-0 text--red">PORTFOLIO</h6>
          </Row>
          <Row className="d-flex justify-content-center  text-center align-items-center my-3">
            <Col
              md={4}
              className="my-3 d-flex align-items-center justify-content-center"
            >
              <ApplyNowModal
                title="Apply Now"
                link="https://forms.zohopublic.com/virtualoffice9155/form/AwesomeFellowshipApplication/formperma/r12Y7iQP0rWYHU33MvoA15j6wO4YlTVP02EuWMwJol8"
              />
            </Col>
            <Col
              md={4}
              className="my-3 d-flex align-items-center justify-content-center text-center"
            >
              <a href="/fellowship/perks">
                <BrandButton className="">Perks</BrandButton>
              </a>
            </Col>
          </Row>
        </Container>

        <Container className={styles.portfolio}>
          <nav className={styles.index} aria-label="Portfolio years">
            {companiesByYear.map((group) => (
              <a
                key={group.year}
                href={`#year-${group.year}`}
                className={
                  activeYear === group.year
                    ? styles.indexLinkActive
                    : styles.indexLink
                }
                onClick={(event) => {
                  event.preventDefault();
                  document
                    .getElementById(`year-${group.year}`)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.history.replaceState(null, "", `#year-${group.year}`);
                  setActiveYear(group.year);
                }}
              >
                {group.year}
              </a>
            ))}
          </nav>
          <div className={styles.chapters}>
            {companiesByYear.map((group, index) => (
              <section
                key={group.year}
                id={`year-${group.year}`}
                className={styles.year}
                data-year={group.year}
              >
                <header className={styles.yearHeader}>
                  <div>
                    {index === 0 ? (
                      <p className={styles.kicker}>Latest class</p>
                    ) : null}
                    <h2 className={styles.yearNumber}>{group.year}</h2>
                  </div>
                  <p className={styles.count}>
                    {group.companies.length}{" "}
                    {group.companies.length === 1 ? "company" : "companies"}
                  </p>
                </header>
                <div className={styles.grid}>
                  {group.companies.map((node) => (
                    <FellowshipCompanyCard
                      key={node.id}
                      name={node.companyName}
                      url={node.companyURL}
                      image={node._rawFellowshipImage?.asset?.url}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>

        <Container>
          <Row className="d-flex justify-content-start">
            <Col
              md={4}
              className="my-1 d-flex align-items-center justify-content-start"
            >
              <ApplyNowModal
                title="Apply Now"
                link="https://forms.zohopublic.com/virtualoffice9155/form/AwesomeFellowshipApplication/formperma/r12Y7iQP0rWYHU33MvoA15j6wO4YlTVP02EuWMwJol8"
              />
            </Col>
          </Row>
          <Row className="d-flex justify-content-start">
            <Col
              md={4}
              className="my-1 d-flex align-items-center justify-content-start"
            >
              <a href="/fellowship/perks">
                <BrandButton className="col-md-auto px-4 mb-5">
                  Perks
                </BrandButton>
              </a>
            </Col>
          </Row>
        </Container>
      </Row>
    </Layout>
  );
};
// fit: MAX
export const query = graphql`
  query {
    allSanityFellowshipPortfolio(sort: { year: DESC }) {
      nodes {
        id
        year
        companyName
        companyURL
        _rawFellowshipImage(resolveReferences: { maxDepth: 10 })
      }
    }
  }
`;

export default PortfolioPage;
