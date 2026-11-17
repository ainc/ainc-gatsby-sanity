import React from "react";
import { Link } from "gatsby";
import { motion, useReducedMotion } from "framer-motion";

import SEO from "../../components/seo";
import * as styles from "./seeThe5.module.scss";

const clues = ["Five founders.", "Five minutes each.", "$5000 cash prize."];

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const SeeThe5Page = () => {
  const reduceMotion = useReducedMotion();
  const itemMotion = reduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.6 },
        transition: { duration: 0.55, ease: "easeOut" },
        variants: fade,
      };

  return (
    <main className={styles.page}>
      <SEO
        title="See the 5"
        description="Five founders. Five minutes. One room."
      />
      <section className={styles.hero}>
        <motion.p
          className={styles.mark}
          aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          5
        </motion.p>
        <h1 className={styles.kicker}>See the 5</h1>
        <p className={styles.whisper}>Something is about to take the floor.</p>
        <p className={styles.scroll}>Keep going</p>
      </section>

      <section className={styles.clues} aria-label="What the 5 means">
        {clues.map((clue, index) => (
          <motion.article key={clue} className={styles.clue} {...itemMotion}>
            <span className={styles.index}>0{index + 1}</span>
            <p className={styles.clueText}>{clue}</p>
          </motion.article>
        ))}
      </section>

      <section className={styles.reveal}>
        <motion.div className={styles.revealCard} {...itemMotion}>
          <p className={styles.eyebrow}>Lexington</p>
          <h2 className={styles.revealTitle}>This is 5 Across.</h2>
          <p className={styles.revealCopy}>
            A night for Kentucky founders. Five people get the room. Five
            minutes each. Then it belongs to everyone watching.
          </p>
          <Link className={styles.cta} to="/events/5across/">
            See the next 5
          </Link>
          <Link className={styles.home} to="/">
            Awesome Inc
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default SeeThe5Page;
