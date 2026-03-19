import React, { useEffect, useMemo, useRef, useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./timeline.module.css";

import Layout from "../../components/Layout/Layout";

const HistoryWall = ({ data }) => {
  const timelineDataRaw = data.allSanityTimelineEvent?.nodes || [];
  // Sort by the actual datetime value so the chapters appear in chronological order.
  // useMemo keeps the sorted array stable across scroll re-renders.
  const timelineData = useMemo(() => {
    return [...timelineDataRaw].sort(
      (a, b) => +new Date(a.dateTime) - +new Date(b.dateTime),
    );
  }, [timelineDataRaw]);

  const [scrollProgress, setScrollProgress] = useState(0);

  const logoFragments = useMemo(() => {
    // Decorative “logo fragments” similar to the CodePen vibe,
    // using the timeline event images instead of floating text.
    const count = Math.min(8, timelineData.length);
    const picked = timelineData.slice(0, count);

    return picked
      .map((e, i) => {
        const imageData = e.image?.asset?.gatsbyImageData || null;
        if (!imageData) return null;

        const left = 8 + Math.random() * 84;
        const top = 6 + Math.random() * 88;
        const speed = 0.18 + Math.random() * 0.55;
        const driftX = 10 + Math.random() * 26;
        const driftY = 6 + Math.random() * 18;
        const phase = Math.random() * Math.PI * 2;
        const rotRange = (Math.random() - 0.5) * 10;

        return {
          key: `${e._id || i}-${i}`,
          imageData,
          left,
          top,
          speed,
          driftX,
          driftY,
          phase,
          rotRange,
        };
      })
      .filter(Boolean);
  }, [timelineData]);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const doc = document.documentElement;
      const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      setScrollProgress(progress);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const revealEls = Array.from(
      document.querySelectorAll('[data-reveal="true"]'),
    );
    if (!revealEls.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.target || !(e.target instanceof Element)) return;
          if (e.isIntersecting) e.target.classList.add(styles.show);
          else e.target.classList.remove(styles.show);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <Layout>
      <div className={styles.storyRoot}>
        {/* Floating logo fragments */}
        <div className={styles.fragmentsContainer}>
          {logoFragments.map((f, idx) => (
            <LogoFragment
              key={f.key}
              left={f.left}
              top={f.top}
              index={idx}
              imageData={f.imageData}
              scrollProgress={scrollProgress}
            />
          ))}
        </div>
        <div className={styles.timeline}>
          <div className={styles.container}>
            <div className={styles.timelineRail} />

            {timelineData.map((event, index) => {
              const isRight = index % 2 === 1;
              const imageData = event.image?.asset?.gatsbyImageData || null;

              return (
                <div
                  key={event._id || index}
                  className={`${styles.timelineItem} ${
                    isRight ? styles.timelineItemRight : styles.timelineItemLeft
                  }`}
                >
                  <div
                    className={`${styles.card} ${styles.reveal} ${
                      isRight ? styles.revealRight : styles.revealLeft
                    }`}
                    data-reveal="true"
                  >
                    <div className={styles.imgWrap}>
                      {imageData && (
                        <GatsbyImage
                          image={imageData}
                          alt={event.title}
                          objectFit="contain"
                          objectPosition="center"
                          style={{ width: "100%", height: "100%" }}
                          imgStyle={{
                            objectFit: "contain",
                            objectPosition: "center",
                          }}
                        />
                      )}
                    </div>

                    <div className={styles.date}>{event.dateLabel}</div>

                    <div className={styles.cardBody}>
                      <h2>{event.title}</h2>
                      <p>{event.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HistoryWall;

function LogoFragment({ left, top, index, imageData, scrollProgress }) {
  const ref = useRef(null);

  useEffect(() => {
    let raf = 0;
    const tick = (t) => {
      const el = ref.current;
      if (el) {
        const time = t * 0.001;
        const speed = 0.2 + index * 0.02;
        const driftX = 18;
        const driftY = 10;
        const phase = index * 1.7;
        const x = left + Math.sin(time * speed + phase) * driftX * 0.06;
        const y = top + Math.cos(time * speed + phase) * driftY * 0.06;
        const rot = Math.sin(time * 0.6 + phase) * 3;
        el.style.left = `${x}%`;
        el.style.top = `${y}%`;
        el.style.transform = `rotate(${rot}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [index, left, top]);

  // Slightly fade in once the user starts scrolling.
  const visible = scrollProgress > 0.01;

  return (
    <div
      ref={ref}
      className={`${styles.timeFragment} ${
        visible ? styles.fragmentVisible : ""
      }`}
      style={{ left: `${left}%`, top: `${top}%` }}
    >
      <GatsbyImage image={imageData} alt="" className={styles.fragmentImg} />
    </div>
  );
}

// GraphQL Page Query
export const query = graphql`
  {
    allSanityTimelineEvent {
      nodes {
        _id
        title
        dateTime: date
        dateLabel: date(formatString: "MMMM D, YYYY")
        image {
          asset {
            gatsbyImageData
          }
        }
        content
      }
    }
  }
`;
