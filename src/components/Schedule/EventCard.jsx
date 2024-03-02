import React from "react";
import styles from "./Schedule.module.css";

export const EventCard = ({
  time,
  date,
  event,
  bordercolor,
  multiEvent,
  bg,
  smallBg,
}) => {
  return (
    <div className={styles.eventContainer}>
      <div className={styles.timeFlexbox}>
        <div
          className={styles.timeContainer}
          style={{
            backgroundColor:
              smallBg === ""
                  ? "#28292B"
                : smallBg,
          }}
        >
          <div
            className={styles.time}
            style={smallBg === "" ? {} : { color: "white" }}
          >
            {time}
          </div>
          <div
            className={styles.date}
            style={smallBg === "" ? {} : { color: "white" }}
          >
            {date}
          </div>
        </div>
      </div>
      {multiEvent ? (
        event.map((event, i) => (
          <div className={styles.eventNameFlexbox}>
            <div
              className={styles.eventNameMulti}
              style={{
                borderLeft: "5px solid " + bordercolor[i],
                backgroundColor: bg[i][1]
              }}
            >
              {event}
            </div>
          </div>
        ))
      ) : (
        <div className={styles.eventNameFlexbox}>
          <div
            className={styles.eventName}
            style={{
              borderLeft: "5px solid " + bordercolor,
              backgroundColor: bg[1],
            }}
          >
            {event}
          </div>
        </div>
      )}
    </div>
  );
};
