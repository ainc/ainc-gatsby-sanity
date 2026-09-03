import React from "react";
import { Container } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import FiveAcrossWinnersCard from "../FiveAcrossWinnersCard/FiveAcrossWinnersCard";
import * as styles from "./DropdownDataDisplay.module.scss";

const getWinnerYear = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    timeZone: "UTC",
  });

const formatWinnerDate = (date, options) =>
  new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
    ...options,
  });

const DropdownDataDisplay = (props) => {
  const data = props.data || [];
  const [search, setSearch] = React.useState("");
  const [isDense, setIsDense] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeControl, setActiveControl] = React.useState("");
  const [selectedYear, setSelectedYear] = React.useState("");
  const [selectedYearWinnerIndex, setSelectedYearWinnerIndex] =
    React.useState(0);

  const cardRefs = React.useRef([]);
  const monthRefs = React.useRef([]);
  const dotRefs = React.useRef([]);
  const scrollerRef = React.useRef(null);
  const frameRef = React.useRef(null);

  const winners = React.useMemo(() => {
    return data
      .map((entry) => entry.node)
      .sort((a, b) => new Date(a.WinningDate) - new Date(b.WinningDate));
  }, [data]);

  const years = React.useMemo(() => {
    if (props.categories?.length) {
      return props.categories;
    }

    return [
      ...new Set(winners.map((winner) => getWinnerYear(winner.WinningDate))),
    ].sort((left, right) => Number(right) - Number(left));
  }, [props.categories, winners]);

  const filteredWinners = React.useMemo(() => {
    if (!search.trim()) {
      return winners;
    }

    const needle = search.trim().toLowerCase();

    return winners.filter((winner) => {
      const formattedDate = new Date(winner.WinningDate).toLocaleDateString(
        "en-US",
        {
          month: "short",
          year: "numeric",
          timeZone: "UTC",
        },
      );

      return (
        winner.companyTitle?.toLowerCase().includes(needle) ||
        winner.FounderNames?.toLowerCase().includes(needle) ||
        formattedDate.toLowerCase().includes(needle)
      );
    });
  }, [winners, search]);

  const selectedYearWinners = React.useMemo(() => {
    if (!selectedYear) {
      return [];
    }

    return winners.filter(
      (winner) => getWinnerYear(winner.WinningDate) === selectedYear,
    );
  }, [winners, selectedYear]);

  const selectedYearWinner =
    selectedYearWinners[selectedYearWinnerIndex] || null;

  const selectedYearWinnerLabel = React.useMemo(() => {
    if (!selectedYearWinner) {
      return "";
    }

    return formatWinnerDate(selectedYearWinner.WinningDate, {
      month: "long",
      year: "numeric",
    });
  }, [selectedYearWinner]);

  React.useEffect(() => {
    if (!years.length) {
      setSelectedYear("");
      return;
    }

    setSelectedYear((previous) =>
      previous && years.includes(previous) ? previous : years[0],
    );
  }, [years]);

  React.useEffect(() => {
    if (!selectedYearWinners.length) {
      setSelectedYearWinnerIndex(0);
      return;
    }

    setSelectedYearWinnerIndex(selectedYearWinners.length - 1);
  }, [selectedYear, selectedYearWinners.length]);

  React.useEffect(() => {
    if (!filteredWinners.length) {
      setActiveIndex(0);
      return;
    }

    setActiveIndex((previous) =>
      Math.min(previous, filteredWinners.length - 1),
    );
  }, [filteredWinners]);

  React.useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || !filteredWinners.length) {
      return undefined;
    }

    const updateActiveIndexFromScroll = () => {
      const scrollerBounds = scroller.getBoundingClientRect();
      const centerX = scrollerBounds.left + scrollerBounds.width / 2;

      let nearestIndex = 0;
      let smallestDistance = Number.POSITIVE_INFINITY;

      cardRefs.current.forEach((card, index) => {
        if (!card) {
          return;
        }

        const cardBounds = card.getBoundingClientRect();
        const cardCenter = cardBounds.left + cardBounds.width / 2;
        const distanceFromCenter = Math.abs(cardCenter - centerX);

        if (distanceFromCenter < smallestDistance) {
          smallestDistance = distanceFromCenter;
          nearestIndex = index;
        }
      });

      setActiveIndex((previous) =>
        previous === nearestIndex ? previous : nearestIndex,
      );
    };

    const onScroll = () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(updateActiveIndexFromScroll);
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    updateActiveIndexFromScroll();

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [filteredWinners]);

  React.useEffect(() => {
    const activeMonth = monthRefs.current[activeIndex];
    if (activeMonth) {
      activeMonth.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }

    const activeDot = dotRefs.current[activeIndex];
    if (activeDot) {
      activeDot.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeIndex]);

  const activeYear = React.useMemo(() => {
    if (!filteredWinners.length) {
      return "";
    }

    const activeWinner = filteredWinners[activeIndex] || filteredWinners[0];

    return getWinnerYear(activeWinner.WinningDate);
  }, [filteredWinners, activeIndex]);

  const scrollToCard = (index) => {
    setActiveIndex(index);
    const currentCard = cardRefs.current[index];
    if (currentCard) {
      currentCard.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const jumpToLatest = () => {
    if (!filteredWinners.length) {
      return;
    }

    setActiveControl("latest");
    scrollToCard(filteredWinners.length - 1);
  };

  const toggleDensity = () => {
    setActiveControl("density");
    setIsDense((previous) => !previous);
  };

  const showPreviousYearWinner = () => {
    if (!selectedYearWinners.length) {
      return;
    }

    setSelectedYearWinnerIndex((previous) =>
      previous === 0 ? selectedYearWinners.length - 1 : previous - 1,
    );
  };

  const showNextYearWinner = () => {
    if (!selectedYearWinners.length) {
      return;
    }

    setSelectedYearWinnerIndex((previous) =>
      previous === selectedYearWinners.length - 1 ? 0 : previous + 1,
    );
  };

  return (
    <Container fluid className={styles.timelineShell}>
      <div className={styles.mobileWinnerBrowser}>
        <div className={styles.mobileYearSelectWrap}>
          <select
            className={styles.mobileYearSelect}
            value={selectedYear}
            onChange={(event) => setSelectedYear(event.target.value)}
            aria-label="Select a 5Across year"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {selectedYearWinner ? (
          <>
            <h3 className={styles.mobileChampionHeading}>
              {selectedYearWinnerLabel} 5Across Champion
            </h3>

            <div className={styles.mobileFeatureRow}>
              <button
                type="button"
                className={styles.mobileArrowButton}
                onClick={showPreviousYearWinner}
                aria-label="Show previous winner"
              >
                &#8249;
              </button>

              <div className={styles.mobileFeatureCard}>
                <p className={styles.mobileFeatureDate}>
                  {selectedYearWinnerLabel}
                </p>
                <div className={styles.mobileImageFrame}>
                  {selectedYearWinner.image?.asset?.gatsbyImageData ? (
                    <GatsbyImage
                      image={selectedYearWinner.image.asset.gatsbyImageData}
                      alt={selectedYearWinner.companyTitle}
                      className={styles.mobileWinnerImage}
                    />
                  ) : (
                    <div className={styles.mobileImageFallback}>
                      Winner image coming soon
                    </div>
                  )}
                </div>

                <h4 className={styles.mobileCompanyTitle}>
                  {selectedYearWinner.companyTitle}
                </h4>
                <p className={styles.mobileFounderNames}>
                  {selectedYearWinner.FounderNames ||
                    "Founder info coming soon"}
                </p>
              </div>

              <button
                type="button"
                className={styles.mobileArrowButton}
                onClick={showNextYearWinner}
                aria-label="Show next winner"
              >
                &#8250;
              </button>
            </div>

            {selectedYearWinners.length ? (
              <>
                <div className={styles.mobileSectionDivider} />
                <h4 className={styles.mobileAdditionalHeading}>
                  Additional 5Across Winners
                </h4>
                <div className={styles.mobileWinnerGrid}>
                  {selectedYearWinners.map((winner, winnerIndex) => {
                    return (
                      <button
                        type="button"
                        key={`${winner.companyTitle}-${winner.WinningDate}-mobile`}
                        className={`${styles.mobileWinnerChip} ${winnerIndex === selectedYearWinnerIndex ? styles.activeMobileWinnerChip : ""}`}
                        onClick={() => setSelectedYearWinnerIndex(winnerIndex)}
                      >
                        {formatWinnerDate(winner.WinningDate, {
                          month: "long",
                          year: "numeric",
                        })}
                      </button>
                    );
                  })}
                </div>
              </>
            ) : null}
          </>
        ) : (
          <p className={styles.mobileEmptyState}>
            No winners found for this year.
          </p>
        )}
      </div>

      <div className={styles.desktopTimeline}>
        <div className={styles.timelineHeader}>
          {filteredWinners.map((winner, index) => {
            const formattedDate = formatWinnerDate(winner.WinningDate, {
              month: "short",
              year: "numeric",
            });

            return (
              <button
                type="button"
                key={`${winner.companyTitle}-${winner.WinningDate}`}
                className={`${styles.monthButton} ${index === activeIndex ? styles.activeMonth : ""}`}
                onClick={() => scrollToCard(index)}
                ref={(element) => {
                  monthRefs.current[index] = element;
                }}
              >
                {formattedDate}
              </button>
            );
          })}
        </div>

        <div className={styles.yearIndicatorRow}>
          <span className={styles.yearIndicatorLabel}>Active year</span>
          <span className={styles.yearIndicatorValue} aria-live="polite">
            {activeYear}
          </span>
        </div>

        <div className={styles.timelineTrackScroller}>
          <div className={styles.timelineTrack}>
            {filteredWinners.map((winner, index) => (
              <button
                type="button"
                key={`${winner.companyTitle}-dot-${winner.WinningDate}`}
                className={`${styles.timelineDot} ${index === activeIndex ? styles.activeDot : ""}`}
                onClick={() => scrollToCard(index)}
                aria-label={`Go to ${winner.companyTitle}`}
                ref={(element) => {
                  dotRefs.current[index] = element;
                }}
              />
            ))}
          </div>
        </div>

        <div className={styles.cardScroller} ref={scrollerRef}>
          {filteredWinners.map((winner, index) => (
            <div
              key={`${winner.companyTitle}-card-${winner.WinningDate}`}
              className={styles.cardFrame}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              onClick={() => scrollToCard(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  scrollToCard(index);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Select winner ${winner.companyTitle}`}
            >
              <FiveAcrossWinnersCard
                companyTitle={winner.companyTitle}
                founders={winner.FounderNames}
                founderVideo={winner.founderVideo}
                fiveAcrossDate={winner.WinningDate}
                winnerImage={winner.image?.asset?.gatsbyImageData}
                isActive={index === activeIndex}
                dense={isDense}
              />
            </div>
          ))}
        </div>

        <div className={styles.timelineControls}>
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search Timeline"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search timeline"
          />
          <button
            type="button"
            className={`${styles.controlButton} ${activeControl === "latest" ? styles.activeControlButton : ""}`}
            onClick={jumpToLatest}
          >
            Jump to Latest
          </button>
          <button
            type="button"
            className={`${styles.controlButton} ${activeControl === "density" ? styles.activeControlButton : ""}`}
            onClick={toggleDensity}
          >
            {isDense ? "Normal density" : "Change density"}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default DropdownDataDisplay;
