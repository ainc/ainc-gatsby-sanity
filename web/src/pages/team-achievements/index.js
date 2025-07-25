import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Modal, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import { useStaticQuery, graphql } from "gatsby";
import CorkBoard from "../../components/CorkBoard/CorkBoard";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import { toast } from "react-toastify";
import {BOARD_WIDTH} from "../../components/CorkBoard/randomPlacement";

const PinBoardPage = () => {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [links, setLinks] = useState([]);
  const [globalHoveredStory, setGlobalHoveredStory] = useState("");
  const [valid, setValid] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

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
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1440,
    scale: 1,
  });

  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (typeof window === 'undefined') return; // No effect during server side rendering

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
      setWindowSize({
        width,
        scale: newScale
      });
      setScale(newScale);
    };
    updateScale();

  const handleResize = () => {
    updateScale();
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);



  // Build array of team members, including startDate
  const teamMembers = (allSanityTeamMember.nodes || []).map((n) => ({
    name: n.name,
    pinName: n.recipientName || "",
    startDate: n.startDate,
    pictureUrl: n.picture?.asset?.url || "",
  }));

  // Create a Set of valid team member names
  const memberNames = new Set(teamMembers.map((m) => m.pinName));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("/api/sheet");
        if (!resp.ok) throw new Error("Network response failed");
        const { pins } = await resp.json();

        const links = await fetch("/api/pinImages");
        if (!links.ok) throw new Error("Network response failed");
        const { imgLinks } = await links.json();
        setLinks(imgLinks)

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
        console.log(err)
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Only keep boards whose recipient matches a team member, and log each comparison
  const filteredBoards = boards.filter((board) => {
    const exists = memberNames.has(board.recipient);
    return exists;
  });

  // Split array in half for purposes of two columns
  const half = filteredBoards.length / 2;
  const halfTwoBoards = filteredBoards.splice(0, half)
  const halfOneBoards = filteredBoards.splice(0, filteredBoards.length)

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
            Our Team's Acheivement Boards
          </Title>
          <Col sm={12} xl={6}>{halfOneBoards.map((board, i) => (
            <Row key={board.recipient} className="justify-content-center py-5 my-5">
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
                  />
                </motion.div>
              </Col>
            </Row>
          ))}</Col>
          <Col sm={12} xl={6}>{halfTwoBoards.map((board, i) => (
            <Row key={board.recipient} className="justify-content-center py-5 my-5">
              <Col xs="auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >

                  {/* <h2 className="text-center">
                    {board.recipient}&apos;s Achievement Board
                  </h2> */}
                  <CorkBoard
                    initialPins={board.pins}
                    onHoverStory={setGlobalHoveredStory}
                    teamMembers={teamMembers}
                    imgLinks={links}
                    scale={scale}
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
        style={{ bottom: 0, left: 0, zIndex: 9999, padding: "8px 0" }}
      >
        {globalHoveredStory || "Hover over a pin to see its story"}
      </div>
     {/*  <div onClick={handleOpen} className="position-fixed bg-black text-white" style={{bottom: "10%", right: "5%", zIndex: 10, padding: "4px 4px"}}>Click me</div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>Enter Super Secret Phrase to prove you're Awesome</Modal.Header>
        <Form.Control placeholder="Super Secret Phrase"/>
      </Modal> */}
    </Layout>
  );
};

export default PinBoardPage;
