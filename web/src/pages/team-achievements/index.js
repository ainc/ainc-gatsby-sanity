import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import { useStaticQuery, graphql } from "gatsby";
import CorkBoard from "../../components/CorkBoard/CorkBoard";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import { toast, ToastContainer } from "react-toastify";
import { BOARD_WIDTH } from "../../components/CorkBoard/randomPlacement";

const PinBoardPage = () => {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [links, setLinks] = useState([]);
  const [globalHoveredStory, setGlobalHoveredStory] = useState("");

  const { allSanityTeamMember } = useStaticQuery(graphql`
    query TeamMembersForBoards {
      allSanityTeamMember {
        nodes {
          name
          startDate
          picture {
            asset {
              url
            }
          }
          recipientName
        }
      }
    }
  `);

  // Optimal window size is 1440px
  // Idea is to scale entire boards based on window size
  const [scale, setScale] = useState(1);
  const [pinScale] = useState(0.8);

  useEffect(() => {
    if (typeof window === "undefined") return; // No effect during server side rendering

    const updateScale = () => {
      const width = window.innerWidth;
      let newScale;

      if (width >= 1200) {
        let x = width / 2;
        x = x - 100; // 50px margin
        x = x / BOARD_WIDTH;
        newScale = Number(x.toFixed(2));
      } else {
        let x = width - 100;
        x = x / BOARD_WIDTH;
        newScale = Number(x.toFixed(2));
      }

      setScale(newScale);
    };
    updateScale();

    // Debounce so we don't re-render every board on every resize tick
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateScale, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Build array of team members, including startDate. Memoized so memoized
  // CorkBoards don't see a new array identity on every page render.
  const teamMembers = useMemo(
    () =>
      (allSanityTeamMember.nodes || []).map((n) => ({
        name: n.name,
        pinName: n.recipientName || "",
        startDate: n.startDate,
        pictureUrl: n.picture?.asset?.url || "",
      })),
    [allSanityTeamMember],
  );

  // Create a Set of valid team member names
  const memberNames = useMemo(
    () => new Set(teamMembers.map((m) => m.pinName)),
    [teamMembers],
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch pins and pin images in parallel — each hits the Google Sheets
        // API, so running them serially doubles the loading time.
        const [resp, links] = await Promise.all([
          fetch("/api/sheet"),
          fetch("/api/pinImages"),
        ]);
        if (!resp.ok || !links.ok) throw new Error("Network response failed");

        const [{ pins }, { imgLinks }] = await Promise.all([
          resp.json(),
          links.json(),
        ]);
        setLinks(imgLinks);

        const grouped = pins.reduce((acc, p) => {
          const key = p.recipient?.trim() || "Unknown";
          (acc[key] ??= []).push({
            ...p,
            x: Number(p.x) || null,
            y: Number(p.y) || null,
          });
          return acc;
        }, {});

        setBoards(
          Object.entries(grouped).map(([recipient, pins]) => ({
            recipient,
            pins: pins.sort((a, b) => a.pinName.localeCompare(b.pinName)),
          })),
        );
      } catch (err) {
        toast.error(`Failed to load pins: ${err.message}`);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Only keep boards whose recipient matches a team member and isn't Nathan,
  // then split in half for the two columns.
  const { halfOneBoards, halfTwoBoards } = useMemo(() => {
    const filtered = boards.filter((board) => {
      const recipient = board.recipient?.trim();

      // Skip null, undefined, or Nathan Wilson
      if (!recipient || recipient === "Nathan Wilson") {
        return false;
      }

      return memberNames.has(recipient);
    });

    const half = Math.floor(filtered.length / 2);
    return {
      halfTwoBoards: filtered.slice(0, half),
      halfOneBoards: filtered.slice(half),
    };
  }, [boards, memberNames]);

  return (
    <Layout>
      <Container fluid style={{ paddingBottom: 60 }}>
        {loading ? (
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ height: "80vh", textAlign: "center" }}
          >
            <Spinner
              animation="border"
              variant="primary"
              style={{ width: 64, height: 64 }}
            />
            <p style={{ fontSize: "1.25rem", marginTop: "1rem" }}>
              Loading achievement boards...
            </p>
          </div>
        ) : (
          <Row>
            <Title className="mt-5 text-center text-uppercase">
              Our Team's Achievement Boards
            </Title>
            <Col sm={12} xl={6}>
              {halfOneBoards.map((board, i) => (
                <Row
                  key={board.recipient}
                  className="justify-content-center py-5 my-5"
                >
                  <Col xs="auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {/*  <h2 className="text-center">
                    {board.recipient}&apos;s Achievement Board
                  </h2> */}
                      <CorkBoard
                        initialPins={board.pins}
                        onHoverStory={setGlobalHoveredStory}
                        teamMembers={teamMembers}
                        imgLinks={links}
                        scale={scale}
                        pinScale={pinScale}
                        valid={true}
                      />
                    </motion.div>
                  </Col>
                </Row>
              ))}
            </Col>
            <Col sm={12} xl={6}>
              {halfTwoBoards.map((board, i) => (
                <Row
                  key={board.recipient}
                  className="justify-content-center py-5 my-5"
                >
                  <Col xs="auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <CorkBoard
                        initialPins={board.pins}
                        onHoverStory={setGlobalHoveredStory}
                        teamMembers={teamMembers}
                        imgLinks={links}
                        scale={scale}
                        pinScale={pinScale}
                        valid={true}
                      />
                    </motion.div>
                  </Col>
                </Row>
              ))}
            </Col>
          </Row>
        )}
      </Container>
      <div
        className="position-fixed w-100 text-center bg-black text-white"
        style={{ bottom: 0, left: 0, zIndex: 9998, padding: "8px 0" }}
      >
        {globalHoveredStory || "Hover over a pin to see its story"}
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Layout>
  );
};

export default PinBoardPage;
