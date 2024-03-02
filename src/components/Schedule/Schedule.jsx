import React from "react";
import { EventCard } from "./EventCard.jsx";
import styles from "./Schedule.module.css";
import { SpeakerCard } from "./SpeakerCard.jsx";
import sp1 from "../../assets/speakers/sp1.png";
import sp2 from "../../assets/speakers/sp2.png";
import sp3 from "../../assets/speakers/sp3.webp";
import sp4 from "../../assets/speakers/sp4.png";
import sp5 from "../../assets/speakers/sp5.png";
import sp6 from "../../assets/speakers/sp6.png";
import sp7 from "../../assets/speakers/sp7.png";


export const Schedule = () => {
  const green = "#0F9D56",
    red = "#DB4437",
    blue = "#4285F4",
    yellow = "#F4B400";

  //===============================================================
  const events2 = [
    {
      time: "9:00am - 10:00am ",
      // date: "Nov 06",
      event: ["Registration", "Breakfast  ☕"],
      bordercolor: ["#DB4437", green],
      multiEvent: true,
      bg: [
        ["#e8eaed", "#28292B"],
        ["rgba(15, 157, 86, 0.2)", "#1D3A2E"],
      ],
    },
    {
      time: "10:00 AM - 10:45 AM",
      // date: "Nov 06",
      // event: (
      //   <SpeakerCard
      //     path={[Speaker11]}
      //     event={"Opening Ceremony "}
      //     speaker={"Host"}
      //   />
      // ),
      event: ["Opening Ceremony " ,
        <SpeakerCard
          path={[sp7]}
          event={
            "Opening Keynote : Impact the Future"
          }
          speaker={"Aastha Patel"}
      />],
      bordercolor: green,
      multiEvent: true,
      bg: [
        ["#e8eaed", "#28292B"],
        ["#28292B", "#28292B"],
      ],
    },
    {
      time: "11:00 AM - 11:35 AM\t",
      // date: "Nov 06",
      event: (
        <SpeakerCard
          path={[sp6]}
          event={" Staying ahead in the Gen AI revolution\t"}
          speaker={"Rishiraj Acharya\n"}
        />
      ),
      bordercolor: blue,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "11:40 AM - 12:10 PM\t",
      // date: "Nov 05",
      event: (
        <SpeakerCard
          path={[sp4]}
          event={
            "Building AI Driven Applications using Gemini and Gemini Vision Pro	"}
          speaker={"Varun Raj"}
        />
      ),
      bordercolor: yellow,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },


    {
      time: "12:15 PM - 01:00 PM\t",
      // date: "Nov 06",
      event: "Lunch Break 🍕",
      bordercolor: green, //green
      multiEvent: false,
      smallBg: green,
      bg: ["rgba(15, 157, 86, 0.2)", "#1D3A2E"],
    },
    {
      time: "1:10 PM - 1:40 PM\t",
      // date: "Nov 05",
      event: "Activity",
      bordercolor: blue,
      multiEvent: false,
      smallBg: blue,
      bg: ["rgba(66, 133, 244, 0.2)", "#263D64"],
    },
        {
      time: "1:45 PM - 2:30 PM\t ",
      // date: "Nov 06",
      event: (
        <SpeakerCard
          path={[sp5]}
          event={"Web Security Essentials: A Developer's Guide to OWASP Top 10 "}
          speaker={"Shrutirupa Banerjiee\n"}
        />
      ),
      bordercolor: yellow,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "2:35 PM - 03:05 PM\t",
      // date: "Nov 06",
      event: (
        <SpeakerCard
          path={[sp1]}
          event={"Rising Above: Stories of Resilience in the Tech World\t"}
          speaker={"Ananya R"}
        />
      ),
      bordercolor: red,
      multiEvent: false,
      bg: ["#e8eaed", "#28292B"],
    },
    {
      time: "3:10 PM - 3:35 PM",
      // date: "Nov 05",
      event: "Surprise ",
      bordercolor: blue,
      multiEvent: false,
      smallBg: blue,
      bg: ["rgba(66, 133, 244, 0.2)", "#263D64"],
    }, {
      time: "3:40 PM - 4:00 PM\t",
      // date: "Nov 05",
      event: "Workshop",
      bordercolor: yellow,
      multiEvent: false,
      smallBg: yellow,
      bg: ["rgba(244, 180, 0, 0.2)", "#483D1C"],
    },
    {
      time: "4:00 PM - 5:00 PM\t",
      // date: "Nov 06",
      event: (
        <div className="special-event">
          {" "}
          <div>Impacting the Future with Technology in Chh.Sambhajinagar (Aurangabad)</div>
          <div style={{ fontSize: "14px" }}>Panel Discussion</div>
        </div>
      ),
      bordercolor: blue,
      multiEvent: false,
      smallBg: blue,
      bg: ["rgba(66, 133, 244, 0.2)", "#263D64"],
    },

    {
      time: "5:00 PM - 5:30 PM\t",
      // date: "Nov 06",
      event: (
          <SpeakerCard
              path={[sp3]}
              event={"Closing Keynote and Vote of Thanks\t"}
              speaker={"Salman Shaikh"}
          />
      ),
      bordercolor: green, //green
      multiEvent: false,
      smallBg: green,
      bg: ["rgba(15, 157, 86, 0.2)", "#1D3A2E"],
    },




  ];


  return (
    <div className={styles.scheduleMainContainer}>
      <div className={styles.heading}>Schedule</div>
      <div className={styles.scheduleContainer}>
        {events2.map((event) => {
              return (
                <EventCard
                  date={event.date}
                  time={event.time}
                  event={event.event}
                  bordercolor={event.bordercolor}
                  multiEvent={event.multiEvent}
                  bg={event.bg}
                  smallBg={event.smallBg === undefined ? "" : event.smallBg}
                />
              );
            })}
      </div>
    </div>
  );
};
