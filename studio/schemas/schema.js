// Object types
import bioPortableText from "./objects/bioPortableText";
import figure from "./objects/figure";
import projectMember from "./objects/projectMember";
import projectPortableText from "./objects/projectPortableText";
import simplePortableText from "./objects/simplePortableText";
import internalTeamMember from "./objects/internalTeamMember";
import imageLink from "./objects/imageLink";
import link from "./objects/link";
import sliderImage from "./objects/sliderImage";
import fiveAcrossJudges from "./objects/fiveAcrossJudges";
import imageTestimonials from "./objects/imageTestimonials";
import hero from "./objects/hero";
import cta from "./objects/cta";
import button from "./objects/button";
import textBlock from "./objects/textBlock";
import columnBlock from "./objects/columnBlock";
// Document types
import category from "./documents/category";
import teamMember from "./documents/teamMember";
import siteSettings from "./documents/siteSettings";
import bootcampAlumni from "./documents/bootcampAlumni";
import events from "./documents/events";
import fiveAcrossWinners from "./documents/fiveAcrossWinners";
import fiveAcrossSponsors from "./documents/fiveAcrossSponsors";
import accomplishments from "./documents/accomplishments";
import footer from "./documents/footer";
import imageSlider from "./documents/imageSlider";
import blog from "./documents/blog";
import blogAuthor from "./documents/blogAuthors";
import fellowshipPortfolio from "./documents/fellowshipPortfolio";
import fellowshipSponsers from "./documents/fellowshipSponsers";
import courses from "./documents/courses";
import eventTypes from "./documents/eventTypes";
import bootcampTestimonials from "./documents/bootcampTestimonials";
import bootcampGraduationStats from "./documents/bootcampGraduationStats";
import bootcampEmployers from "./documents/bootcampEmployers";
import bootcampProfileCard from "./documents/bootcampProfileCard";
import press from "./documents/press";
import program from "./documents/program";
import links from "./documents/links";
import careers from "./documents/careers";
import mentors from "./documents/mentors";
import teamAlpha from "./documents/teamAlpha";
import pageTitles from "./documents/pageTitles";
import bootcampClass from "./documents/bootcampClass";
import notes from "./documents/notes";
import bootcamp from "./documents/bootcamp";
import tutorials from "./documents/tutorials";
import internTestimonials from "./documents/internTestimonials";
import bootcampProgramGuide from "./documents/bootcampProgramGuide";
import whatWeDo from "./documents/whatWeDo";
import fiveAcrossTestimonials from "./documents/fiveAcrossTestimonials";
import bootcampImageTestimonials from "./documents/bootcampImageTestimonials";
import alumniTestimonials from "./documents/alumniTestimonials";
import fellowshipKPIs from "./documents/fellowshipKPIs";
import page from "./documents/page";
// Then we give our schema to the builder and provide the result to Sanity
export default [
  bioPortableText,
  figure,
  projectMember,
  projectPortableText,
  simplePortableText,
  internalTeamMember,
  imageLink,
  link,
  sliderImage,
  imageTestimonials,
  hero,
  cta,
  button,
  textBlock,
  columnBlock,
  // The following are document types which will appear
  // in the studio.
  teamMember,
  siteSettings,
  blog,
  blogAuthor,
  accomplishments,
  eventTypes,
  events,
  program,
  fiveAcrossJudges,
  fiveAcrossWinners,
  fiveAcrossSponsors,
  fellowshipPortfolio,
  fellowshipSponsers,
  footer,
  courses,
  bootcampTestimonials,
  bootcampGraduationStats,
  bootcampEmployers,
  bootcampProfileCard,
  bootcampAlumni,
  bootcampClass,
  bootcampProgramGuide,
  press,
  links,
  careers,
  mentors,
  pageTitles,
  notes,
  teamAlpha,
  bootcamp,
  tutorials,
  internTestimonials,
  whatWeDo,
  fiveAcrossTestimonials,
  imageSlider,
  bootcampImageTestimonials,
  alumniTestimonials,
  fellowshipKPIs,
  page,
];
