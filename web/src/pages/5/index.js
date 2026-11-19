import React, { useEffect, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import SEO from "../../components/seo";
import { celebrate } from "../../lib/celebrate";
import * as styles from "./seeThe5.module.scss";

const clues = ["Five founders.", "Five minutes each.", "$55,000 prize."];

function ScrollClue({ clue, index, total, progress }) {
  const size = 1 / total;
  const start = index * size;
  const end = start + size;
  const fade = size * 0.28;
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const input = isFirst
    ? [start, Math.max(start, end - fade), end]
    : isLast
      ? [start, start + fade, end]
      : [start, start + fade, Math.max(start + fade, end - fade), end];
  const opacity = useTransform(
    progress,
    input,
    isFirst ? [1, 1, 0] : isLast ? [0, 1, 1] : [0, 1, 1, 0],
  );
  const y = useTransform(
    progress,
    input,
    isFirst ? [0, 0, -48] : isLast ? [48, 0, 0] : [48, 0, 0, -48],
  );

  return (
    <motion.p className={styles.clueLayer} style={{ opacity, y }}>
      {clue}
    </motion.p>
  );
}

function ScrollStory({ clues }) {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  const markScale = useTransform(scrollYProgress, [0, 1], [1, 0.62]);
  const markOpacity = useTransform(scrollYProgress, [0, 1], [0.85, 0.22]);
  const headlineOpacity = useTransform(
    scrollYProgress,
    [0, 0.22, 0.34],
    [1, 1, 0],
  );

  return (
    <section
      ref={trackRef}
      className={styles.track}
      style={{ height: `${clues.length * 100}vh` }}
      aria-label="What the 5 means"
    >
      <div className={styles.stage}>
        <motion.h1
          className={styles.headline}
          style={{ opacity: headlineOpacity }}
        >
          See the 5. Be the 5.
        </motion.h1>
        <motion.p
          className={styles.stageMark}
          aria-hidden="true"
          style={{ scale: markScale, opacity: markOpacity }}
        >
          5
        </motion.p>
        {clues.map((clue, index) => (
          <ScrollClue
            key={clue}
            clue={clue}
            index={index}
            total={clues.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

const SeeThe5Page = () => {
  const reduceMotion = useReducedMotion();
  const celebrated = useRef(false);
  const ctaRef = useRef(null);
  const confettiTimer = useRef(null);
  const { scrollYProgress } = useScroll();
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  useEffect(() => () => window.clearTimeout(confettiTimer.current), []);

  const popConfetti = () => {
    if (reduceMotion || celebrated.current) return;
    celebrated.current = true;
    confettiTimer.current = window.setTimeout(() => {
      celebrate(ctaRef.current);
    }, 1500);
  };

  return (
    <main className={styles.page}>
      <SEO
        title="See the 5"
        description="Five founders. Five minutes. One room."
      />
      <motion.div
        className={styles.progress}
        style={{ scaleX: scrollYProgress }}
      />
      <motion.div
        className={styles.arrow}
        style={{ opacity: arrowOpacity }}
        aria-hidden="true"
      >
        <span className={styles.float}>
          <span className={styles.chevron} />
        </span>
      </motion.div>

      {reduceMotion ? (
        <section className={styles.clues} aria-label="What the 5 means">
          <h1 className={styles.headlineStatic}>See the 5. Be the 5.</h1>
          {clues.map((clue) => (
            <article key={clue} className={styles.clue}>
              <p className={styles.clueText}>{clue}</p>
            </article>
          ))}
        </section>
      ) : (
        <ScrollStory clues={clues} />
      )}

      <section className={styles.reveal}>
        <motion.div
          className={styles.revealCard}
          initial={reduceMotion ? false : { opacity: 0, y: 48, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          onViewportEnter={popConfetti}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className={styles.eyebrow}>Kentucky Theatre, Dec 2, 5pm</p>
          <h2 className={styles.revealTitle}>5 Across</h2>
          <p className={styles.revealCopy}>
            The future of Commonwealth and its rich history collide at the
            Finals. A night for Kentucky founders, leaders, and community.
            Pitches. Performances. Celebration. Be in the room for Kentucky’s
            biggest night of entrepreneurship.
          </p>
          <a
            ref={ctaRef}
            className={styles.cta}
            href="https://www.eventbrite.com/e/1980880551052?discount=BETHE5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get your FREE ticket to the Finals
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default SeeThe5Page;
