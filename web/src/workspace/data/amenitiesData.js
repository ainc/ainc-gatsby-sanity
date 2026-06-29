import Wifi from "../../images/wifi.png";
import MailAddress from "../../images/mailing-address.png";
import Chair from "../../images/chair.png";
import Events from "../../images/events-hosted.png";
import Printer from "../../images/printer.png";
import PingPong from "../../images/ping-pong.png";
import Bubble from "../../images/thinking-room.png";
import Podcast from "../../images/podcadsting-room.png";
import Mentor from "../../images/mentor.png";
import Lightbulb from "../../images/indoor-outdoor.png";
import Scooter from "../../images/electric-scooter.png";
import ThreeDPrinter from "../../images/3d-printer.png";
import SecondMonitor from "../../images/second-monitor.svg";
import AllHoursAccess from "../../images/24-7-access.svg";
import PhoneBooth from "../../images/phone-booth.svg";

/** Copied from /workspace membership amenities */
export const WORKSPACE_AMENITIES = [
  {
    info: "Secure Wi-Fi, Gigabit Internet",
    imgSrc: Wifi,
    imgAlt: "Wifi Access",
  },
  {
    info: "Second Monitor on Every Desk",
    imgSrc: SecondMonitor,
    imgAlt: "Second Monitor",
  },
  {
    info: "24/7 Access",
    imgSrc: AllHoursAccess,
    imgAlt: "24/7 Access",
  },
  {
    info: "Private Phone Booths",
    imgSrc: PhoneBooth,
    imgAlt: "Private Phone Booths",
  },
  {
    info: "Downtown Mailing Address",
    imgSrc: MailAddress,
    imgAlt: "Mailing Address",
  },
  {
    info: "Conference + Meeting Rooms",
    imgSrc: Chair,
    imgAlt: "Conference Rooms",
  },
  {
    info: "Networking Events",
    imgSrc: Events,
    imgAlt: "Networking Events",
  },
  {
    info: "Print + Copy",
    imgSrc: Printer,
    imgAlt: "Printing and Copying",
  },
  {
    info: "Breakroom + Kitchen",
    imgSrc: PingPong,
    imgAlt: "Breakroom and Kitchen",
  },
  { info: "Thinking Room", imgSrc: Bubble, imgAlt: "Thinking Room" },
  { info: "Mentorship", imgSrc: Mentor, imgAlt: "Mentorship Access" },
  { info: "Podcasting Room", imgSrc: Podcast, imgAlt: "Podcast Room" },
  {
    info: "Indoor/Outdoor space",
    imgSrc: Lightbulb,
    imgAlt: "Indoor/Outdoor space",
  },
  {
    info: "Electric Scooters",
    imgSrc: Scooter,
    imgAlt: "Electric Scooters",
  },
  { info: "3D Printer", imgSrc: ThreeDPrinter, imgAlt: "3D Printer" },
];
