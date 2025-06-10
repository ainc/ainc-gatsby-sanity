import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import { useStaticQuery, graphql } from "gatsby";
import CorkBoard from "../../components/CorkBoard/CorkBoard";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify";

const PinBoardPage = () => {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
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
        }
      }
    }
  `);

  // Build array of team members, including startDate
  const teamMembers = (allSanityTeamMember.nodes || []).map((n) => ({
    name: n.name,
    startDate: n.startDate,
    pictureUrl: n.picture?.asset?.url || "",
  }));

  // Create a Set of valid team member names
  const memberNames = new Set(teamMembers.map((m) => m.name));

  // Log all team member names once
  console.log("Team member names:", Array.from(memberNames));
  console.log(teamMembers)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("/api/sheet");
        if (!resp.ok) throw new Error("Network response failed");
        const { pins } = await resp.json();
        console.log(pins)

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
    console.log(
      `Checking "${board.recipient}" against team members: ${exists}`,
    );
    return exists;
  });

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
          boards.map((board, i) => (
          /* filteredBoards.map((board, i) => ( */
            <Row key={board.recipient} className="justify-content-center my-5">
              <Col xs="auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h2 className="text-center">
                    {board.recipient}&apos;s Achievement Board
                  </h2>
                  <CorkBoard
                    initialPins={board.pins}
                    onHoverStory={setGlobalHoveredStory}
                    teamMembers={teamMembers}
                  />
                </motion.div>
              </Col>
            </Row>
          ))
        )}
      </Container>

      <div
        className="position-fixed w-100 text-center bg-black text-white"
        style={{ bottom: 0, left: 0, zIndex: 9999, padding: "8px 0" }}
      >
        {globalHoveredStory || "Hover over a pin to see its story"}
      </div>
    </Layout>
  );
};

export default PinBoardPage;
