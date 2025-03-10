import {
  FaArchive,
  FaBlog,
  FaBullhorn,
  FaBuilding,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaClock,
  FaCommentAlt,
  FaGraduationCap,
  FaTrophy,
  FaHandshake,
  FaHeading,
  FaListAlt,
  FaMicrophone,
  FaRegWindowMaximize,
  FaInfoCircle,
  FaStar,
  FaTools,
  FaWrench,
  FaLink,
} from "react-icons/fa";
import { GiBarefoot, GiOfficeChair } from "react-icons/gi";
import { IoMdRibbon } from "react-icons/io";
import {
  MdGroups,
  MdHome,
  MdOutlineSubtitles,
  MdPhoto,
  MdPhotoLibrary,
  MdSchool,
  MdSettings,
  MdTitle,
} from "react-icons/md";

export default (S) =>
  S.list()
    .id("websiteStructure")
    .title("Website Structure")
    .items([
      // 1) HOME
      S.listItem()
        .id("homeSection")
        .title("Home")
        .icon(MdHome)
        .child(
          S.list()
            .id("homePageComponents")
            .title("Home Page Components")
            .items([
              S.listItem()
                .id("home_accomplishments")
                .title("Accomplishments")
                .icon(FaTrophy)
                .schemaType("accomplishments")
                .child(
                  S.document()
                    .schemaType("accomplishments")
                    .documentId("accomplishments"),
                ),
              S.listItem()
                .id("home_courses")
                .title("Courses")
                .icon(FaChalkboardTeacher)
                .child(S.documentTypeList("courses").title("Courses")),
              S.listItem()
                .id("home_homepageImageSlider")
                .title("Homepage Image Slider")
                .icon(MdPhoto)
                .schemaType("imageSlider")
                .child(
                  S.document()
                    .schemaType("imageSlider")
                    .documentId("d5a0afc5-1753-4277-a07d-f43f25dc881f")
                    .title("Homepage Image Slider"),
                ),
              S.listItem()
                .id("home_imageSlider")
                .title("Image Slider")
                .icon(MdPhotoLibrary)
                .schemaType("imageSlider")
                .child(
                  S.document()
                    .schemaType("imageSlider")
                    .documentId("homepageSlider"),
                ),
            ]),
        ),

      // 2) GENERAL
      S.listItem()
        .id("generalSection")
        .title("General")
        .icon(MdSettings)
        .child(
          S.list()
            .id("generalSettings")
            .title("General Settings")
            .items([
              S.listItem()
                .id("general_footer")
                .title("Footer")
                .icon(GiBarefoot)
                .child(
                  S.document()
                    .id("footerDoc")
                    .schemaType("footer")
                    .documentId("footer"),
                ),
              S.listItem()
                .id("general_pageTitles")
                .title("Page Titles")
                .icon(FaHeading)
                .child(S.documentTypeList("pageTitles").title("Page Titles")),
              S.listItem()
                .id("general_siteSettings")
                .title("Settings (SEO, Metadata)")
                .icon(MdSettings)
                .child(
                  S.document()
                    .id("siteSettingsDoc")
                    .schemaType("siteSettings")
                    .documentId("siteSettings"),
                ),
            ]),
        ),

      // 3) LEARN TO CODE
      S.listItem()
        .id("learnToCodeSection")
        .title("Learn to Code")
        .icon(MdSchool)
        .child(
          S.list()
            .id("learnToCodePagesList")
            .title("Learn to Code Pages")
            .items([
              S.listItem()
                .id("introToWebDevPage")
                .title("Intro to Web Development (/intro-to-web-development)")
                .icon(FaChalkboardTeacher)
                .child(S.documentTypeList("courses").title("Courses")),
              S.listItem()
                .id("learnPage")
                .title("Learn (/learn)")
                .icon(MdSchool)
                .child(S.documentTypeList("courses").title("Courses")),
              S.listItem()
                .id("learnAdultsPage")
                .title("Learn Adults (/learn/adults)")
                .icon(MdSchool)
                .child(S.documentTypeList("courses").title("Courses")),
              S.listItem()
                .id("adultCoursesPage")
                .title("Adult Courses (/learn/adultCourses)")
                .icon(MdSchool)
                .child(S.documentTypeList("courses").title("Courses")),
            ]),
        ),

      // 4) STARTUPS
      S.listItem()
        .id("startupsSection")
        .title("Startups")
        .icon(FaBuilding)
        .child(
          S.list()
            .id("startupsPagesList")
            .title("Startups Pages")
            .items([
              // 5 Across Main
              S.listItem()
                .id("fiveAcrossMain")
                .title("5 Across Main (/5across)")
                .icon(FaMicrophone)
                .child(
                  S.list()
                    .id("fiveAcrossComponents")
                    .title("5 Across Components")
                    .items([
                      S.listItem()
                        .id("fiveAcross_pageSponsors")
                        .title("5 Across Sponsors")
                        .icon(FaHandshake)
                        .schemaType("fiveAcrossSponsors")
                        .child(
                          S.document()
                            .id("fiveAcrossSponsorsDoc")
                            .schemaType("fiveAcrossSponsors")
                            .documentId("fiveAcrossSponsors")
                            .title("Page Sponsors"),
                        ),
                      S.listItem()
                        .id("fiveAcross_testimonials")
                        .title("5 Across Testimonials")
                        .icon(FaCommentAlt)
                        .schemaType("fiveAcrossTestimonials")
                        .child(
                          S.document()
                            .id("testimonialsDoc")
                            .schemaType("fiveAcrossTestimonials")
                            .documentId("0d62df32-5bfb-4f6a-b754-394c664fe87d")
                            .title("Testimonials"),
                        ),
                      S.listItem()
                        .id("fiveAcross_winners")
                        .title("5 Across Winners")
                        .icon(FaStar)
                        .schemaType("fiveAcrossWinners")
                        .child(
                          S.documentTypeList("fiveAcrossWinners")
                            .title("All Winners")
                            .filter('_type == "fiveAcrossWinners"'),
                        ),
                    ]),
                ),

              // 5 Across Program
              S.listItem()
                .id("fiveAcrossProgram")
                .title("5 Across Program (/program)")
                .icon(FaBullhorn)
                .child(
                  S.list()
                    .id("fiveAcrossProgramComponents")
                    .title("Program Guide Components")
                    .items([
                      S.listItem()
                        .id("fiveAcrossProgram_guide")
                        .title("5 Across Program")
                        .icon(FaMicrophone)
                        .schemaType("program")
                        .child(
                          S.document()
                            .id("programDocument")
                            .schemaType("program")
                            .documentId("program")
                            .title("5 Across Program Guide"),
                        ),
                      S.listItem()
                        .id("fiveAcrossProgram_sponsors")
                        .title("5 Across Sponsors")
                        .icon(FaHandshake)
                        .schemaType("fiveAcrossSponsors")
                        .child(
                          S.document()
                            .id("programSponsorsDoc")
                            .schemaType("fiveAcrossSponsors")
                            .documentId("fiveAcrossSponsors")
                            .title("Program Sponsors"),
                        ),
                    ]),
                ),

              // Events
              S.listItem()
                .id("eventsPage")
                .title("Events (/events)")
                .icon(FaCalendarAlt)
                .child(
                  S.list()
                    .id("eventsComponents")
                    .title("Event Components")
                    .items([
                      S.listItem()
                        .id("allEvents")
                        .title("All Events")
                        .icon(FaListAlt)
                        .schemaType("events")
                        .child(S.documentTypeList("events")),
                      S.listItem()
                        .id("eventTypes")
                        .title("Event Types")
                        .icon(FaWrench)
                        .schemaType("eventTypes")
                        .child(S.documentTypeList("eventTypes")),
                    ]),
                ),

              // Fellowship
              S.listItem()
                .id("fellowshipPage")
                .title("Fellowship (/fellowship)")
                .icon(FaBuilding)
                .child(
                  S.list()
                    .id("fellowshipComponents")
                    .title("Fellowship Components")
                    .items([
                      S.listItem()
                        .id("fellowship_metrics")
                        .title("Fellowship Metrics")
                        .icon(GiOfficeChair)
                        .child(
                          S.document()
                            .id("kpiDocument")
                            .schemaType("fellowshipKPIs")
                            .documentId("ccd9e263-4b53-47d7-92b2-f9d9ae446d0c")
                            .title("Fellowship Metrics"),
                        ),
                      S.listItem()
                        .id("fellowship_sponsors")
                        .title("Fellowship Sponsors")
                        .icon(FaHandshake)
                        .child(
                          S.documentTypeList("fellowshipSponsers")
                            .id("fellowshipSponsersDTL")
                            .title("All Sponsors")
                            .filter('_type == "fellowshipSponsers"'),
                        ),
                    ]),
                ),

              // Fellowship Portfolio
              S.listItem()
                .id("fellowshipPortfolio")
                .title("Fellowship Portfolio (/fellowship/portfolio)")
                .icon(IoMdRibbon)
                .child(
                  S.documentTypeList("fellowshipPortfolio")
                    .id("fellowshipPortfolioDTL")
                    .title("Fellowship Portfolios")
                    .filter('_type == "fellowshipPortfolio"'),
                ),
            ]),
        ),

      // 6) BE AWESOME
      S.listItem()
        .id("beAwesomeSection")
        .title("Be Awesome")
        .icon(MdOutlineSubtitles)
        .child(
          S.list()
            .id("beAwesomePagesList")
            .title("Be Awesome Pages")
            .items([
              // About
              S.listItem()
                .id("aboutSection")
                .title("About (/about)")
                .icon(FaInfoCircle)
                .child(
                  S.list()
                    .id("aboutComponents")
                    .title("About Components")
                    .items([
                      S.listItem()
                        .id("about_accomplishments")
                        .title("Accomplishments")
                        .icon(FaTrophy)
                        .schemaType("accomplishments")
                        .child(
                          S.document()
                            .schemaType("accomplishments")
                            .documentId("accomplishments"),
                        ),
                      S.listItem()
                        .id("teamMembers")
                        .title("Team Members")
                        .icon(IoMdRibbon)
                        .schemaType("teamMember")
                        .child(S.documentTypeList("teamMember")),
                      S.listItem()
                        .id("about_whatWeDo")
                        .title("What We Do")
                        .icon(FaTools)
                        .schemaType("whatWeDo")
                        .child(S.documentTypeList("whatWeDo")),
                    ]),
                ),

              // Blog
              S.listItem()
                .id("blogSection")
                .title("Blog (/blog)")
                .icon(FaBlog)
                .child(
                  S.list()
                    .id("blogComponents")
                    .items([
                      S.listItem()
                        .id("blog_authors")
                        .title("Blog Authors")
                        .icon(FaHandshake)
                        .schemaType("blogAuthor")
                        .child(
                          S.documentTypeList("blogAuthor").title(
                            "Blog Authors",
                          ),
                        ),
                      S.listItem()
                        .id("blogsList")
                        .title("Blogs")
                        .icon(MdGroups)
                        .schemaType("blog")
                        .child(S.documentTypeList("blog").title("Blogs")),
                    ]),
                ),

              // CAREERS
              S.listItem()
                .id("careersSection")
                .title("Careers")
                .icon(FaBuilding)
                .child(
                  S.list()
                    .id("careersPagesList")
                    .title("Careers Pages")
                    .items([
                      S.listItem()
                        .id("awesomeIncCareersPage")
                        .title(
                          "Awesome Inc Careers (https://careers.awesomeinc.org/jobs/Careers)",
                        )
                        .icon(FaBuilding)
                        .child(S.documentTypeList("careers").title("Careers")),
                      S.listItem()
                        .id("apaxCareersPage")
                        .title(
                          "Apax Careers (https://www.apaxsoftware.com/careers)",
                        )
                        .icon(FaBuilding)
                        .child(S.documentTypeList("careers").title("Careers")),
                    ]),
                ),

              // Events
              S.listItem()
                .id("eventsPage")
                .title("Events (/events)")
                .icon(FaCalendarAlt)
                .child(
                  S.list()
                    .id("eventsComponents")
                    .title("Event Components")
                    .items([
                      S.listItem()
                        .id("allEvents")
                        .title("All Events")
                        .icon(FaListAlt)
                        .schemaType("events")
                        .child(S.documentTypeList("events")),
                      S.listItem()
                        .id("eventTypes")
                        .title("Event Types")
                        .icon(FaWrench)
                        .schemaType("eventTypes")
                        .child(S.documentTypeList("eventTypes")),
                    ]),
                ),

              // Internships
              S.listItem()
                .id("internshipsPage")
                .title("Internships (/internships)")
                .icon(GiOfficeChair)
                .child(
                  S.list()
                    .id("internshipsComponents")
                    .title("Internships Components")
                    .items([
                      S.listItem()
                        .id("intern_testimonials")
                        .title("Team Alpha Testimonials")
                        .icon(FaCommentAlt)
                        .child(
                          S.documentTypeList("internTestimonials").title(
                            "Intern Testimonials",
                          ),
                        ),
                      S.listItem()
                        .id("teamAlphaList")
                        .title("TeamAlpha")
                        .icon(MdGroups)
                        .child(
                          S.documentTypeList("teamAlpha").title(
                            "Team Alpha Members",
                          ),
                        ),
                    ]),
                ),

              // Press
              S.listItem()
                .id("pressPage")
                .title("Press (/press)")
                .icon(FaBullhorn)
                .child(S.documentTypeList("press").title("Press")),

              // WHAT WE DO (/what-we-do)
              S.listItem()
                .id("ap_whatWeDoPage")
                .title("What We Do (/what-we-do)")
                .icon(FaTools)
                .child(S.documentTypeList("whatWeDo").title("What We Do Page")),
            ]),
        ),

      // 8) OTHER
      S.listItem()
        .id("otherSection")
        .title("Other")
        .icon(FaArchive)
        .child(
          S.list()
            .id("otherPagesList")
            .title("Other Pages")
            .items([
              S.listItem()
                .id("fellowshipMentors")
                .title("Fellowship Mentors (/mentors)")
                .icon(IoMdRibbon)
                .child(
                  S.documentTypeList("mentor")
                    .id("mentorsList")
                    .title("All Mentors")
                    .filter('_type == "mentor"'),
                ),
              S.listItem()
                .id("linksPage")
                .title("Links (/links)")
                .icon(FaLink)
                .child(S.documentTypeList("links").title("Links")),
              S.listItem()
                .id("notesPages")
                .title("Notes Pages (/notes/*)")
                .icon(MdOutlineSubtitles)
                .child(S.documentTypeList("notes").title("Notes")),
              S.listItem()
                .id("teamAlphaPage")
                .title("Team Alpha (/team-alpha)")
                .icon(MdGroups)
                .child(S.documentTypeList("teamAlpha").title("TeamAlpha")),
              S.listItem()
                .id("ap_tutorialsPages")
                .title("Tutorials Pages (/tutorials)")
                .icon(MdSchool)
                .child(S.documentTypeList("tutorials").title("Tutorials")),
            ]),
        ),

      // 9) EVERYTHING
      S.listItem()
        .id("allPagesSection")
        .title("Everything")
        .icon(FaListAlt)
        .child(
          S.list()
            .id("allPagesList")
            .title("Everything")
            .items([
              // 5 ACROSS MAIN (/5across)
              S.listItem()
                .id("ap_fiveAcrossMain")
                .title("5 Across Main (/5across)")
                .icon(FaMicrophone)
                .child(
                  S.list()
                    .id("ap_fiveAcrossComponents")
                    .title("5 Across Components")
                    .items([
                      S.listItem()
                        .id("ap_pageSponsorsDoc")
                        .title("5 Across Sponsors")
                        .icon(FaHandshake)
                        .schemaType("fiveAcrossSponsors")
                        .child(
                          S.document()
                            .id("ap_pageSponsorsDoc1")
                            .schemaType("fiveAcrossSponsors")
                            .documentId("fiveAcrossSponsors")
                            .title("Page Sponsors"),
                        ),
                      S.listItem()
                        .id("ap_fiveAcrossTestimonials")
                        .title("5 Across Testimonials")
                        .icon(FaCommentAlt)
                        .schemaType("fiveAcrossTestimonials")
                        .child(
                          S.document()
                            .id("ap_testimonialsDoc1")
                            .schemaType("fiveAcrossTestimonials")
                            .documentId("0d62df32-5bfb-4f6a-b754-394c664fe87d")
                            .title("Testimonials"),
                        ),
                      S.listItem()
                        .id("ap_fiveAcrossWinners")
                        .title("5 Across Winners")
                        .icon(FaStar)
                        .schemaType("fiveAcrossWinners")
                        .child(
                          S.documentTypeList("fiveAcrossWinners")
                            .title("All Winners")
                            .filter('_type == "fiveAcrossWinners"'),
                        ),
                    ]),
                ),

              // 5 ACROSS PROGRAM (/program)
              S.listItem()
                .id("ap_fiveAcrossProgram")
                .title("5 Across Program (/program)")
                .icon(FaBullhorn)
                .child(
                  S.list()
                    .id("ap_fiveAcrossProgramComponents")
                    .title("Program Guide Components")
                    .items([
                      S.listItem()
                        .id("ap_programGuide")
                        .title("5 Across Program")
                        .icon(FaMicrophone)
                        .schemaType("program")
                        .child(
                          S.document()
                            .id("ap_programDocumentAll")
                            .schemaType("program")
                            .documentId("program")
                            .title("5 Across Program Guide"),
                        ),
                      S.listItem()
                        .id("ap_programSponsors")
                        .title("5 Across Sponsors")
                        .icon(FaHandshake)
                        .schemaType("fiveAcrossSponsors")
                        .child(
                          S.document()
                            .id("ap_programSponsorsDocAll")
                            .schemaType("fiveAcrossSponsors")
                            .documentId("fiveAcrossSponsors")
                            .title("Program Sponsors"),
                        ),
                    ]),
                ),
              // HOME (/)
              S.listItem()
                .id("ap_home")
                .title("Home (/)")
                .icon(MdHome)
                .child(
                  S.list()
                    .id("ap_homeComponents")
                    .title("Home Page Components")
                    .items([
                      S.listItem()
                        .id("ap_homeAccomplishments")
                        .title("Accomplishments")
                        .icon(FaTrophy)
                        .schemaType("accomplishments")
                        .child(
                          S.document()
                            .schemaType("accomplishments")
                            .documentId("accomplishments"),
                        ),
                      S.listItem()
                        .id("ap_homeCourses")
                        .title("Courses")
                        .icon(FaChalkboardTeacher)
                        .child(
                          S.documentTypeList("courses")
                            .id("ap_homeCoursesDTL")
                            .title("Courses"),
                        ),
                      S.listItem()
                        .id("ap_homepageImageSlider")
                        .title("Homepage Image Slider")
                        .icon(MdPhoto)
                        .schemaType("imageSlider")
                        .child(
                          S.document()
                            .schemaType("imageSlider")
                            .documentId("d5a0afc5-1753-4277-a07d-f43f25dc881f")
                            .title("Homepage Image Slider"),
                        ),
                      S.listItem()
                        .id("ap_homeImageSlider")
                        .title("Image Slider")
                        .icon(MdPhotoLibrary)
                        .schemaType("imageSlider")
                        .child(
                          S.document()
                            .schemaType("imageSlider")
                            .documentId("homepageSlider"),
                        ),
                    ]),
                ),

              // ABOUT (/about)
              S.listItem()
                .id("ap_about")
                .title("About (/about)")
                .icon(FaInfoCircle)
                .child(
                  S.list()
                    .id("ap_aboutComponents")
                    .title("About Components")
                    .items([
                      S.listItem()
                        .id("ap_aboutAccomplishments")
                        .title("Accomplishments")
                        .icon(FaTrophy)
                        .schemaType("accomplishments")
                        .child(
                          S.document()
                            .schemaType("accomplishments")
                            .documentId("accomplishments"),
                        ),
                      S.listItem()
                        .id("ap_aboutTeamMembers")
                        .title("Team Members")
                        .icon(IoMdRibbon)
                        .schemaType("teamMember")
                        .child(S.documentTypeList("teamMember")),
                      S.listItem()
                        .id("ap_aboutWhatWeDo")
                        .title("What We Do")
                        .icon(FaTools)
                        .schemaType("whatWeDo")
                        .child(S.documentTypeList("whatWeDo")),
                    ]),
                ),

              // ADULT COURSES (/learn/adultCourses)
              S.listItem()
                .id("ap_adultCourses")
                .title("Adult Courses (/learn/adultCourses)")
                .icon(MdSchool)
                .child(
                  S.documentTypeList("courses")
                    .id("ap_adultCoursesDTL")
                    .title("Courses"),
                ),

              // APAX CAREERS
              S.listItem()
                .id("ap_apaxCareersPage")
                .title("Apax Careers (https://www.apaxsoftware.com/careers)")
                .icon(FaBuilding)
                .child(S.documentTypeList("careers").title("Careers")),

              // AWESOME INC CAREERS
              S.listItem()
                .id("ap_awesomeIncCareersPage")
                .title(
                  "Awesome Inc Careers (https://careers.awesomeinc.org/jobs/Careers)",
                )
                .icon(FaBuilding)
                .child(S.documentTypeList("careers").title("Careers")),

              // BLOG (/blog)
              S.listItem()
                .id("ap_blogPage")
                .title("Blog (/blog)")
                .icon(FaBlog)
                .child(
                  S.list()
                    .id("ap_blogComponents")
                    .title("Blog Components")
                    .items([
                      S.listItem()
                        .id("ap_blogAuthors")
                        .title("Blog Authors")
                        .icon(FaHandshake)
                        .schemaType("blogAuthor")
                        .child(
                          S.documentTypeList("blogAuthor").title(
                            "Blog Authors",
                          ),
                        ),
                      S.listItem()
                        .id("ap_blogsList")
                        .title("Blogs")
                        .icon(MdGroups)
                        .schemaType("blog")
                        .child(S.documentTypeList("blog").title("Blogs")),
                    ]),
                ),

              // BOOTCAMP (/bootcamp)
              S.listItem()
                .id("ap_bootcampSection")
                .title("Bootcamp (/bootcamp)")
                .icon(FaGraduationCap)
                .child(
                  S.list()
                    .id("ap_bootcampComponents")
                    .title("Bootcamp Components")
                    .items([
                      S.listItem()
                        .id("ap_outcomes")
                        .title("Outcomes")
                        .icon(FaTools)
                        .child(
                          S.list()
                            .id("ap_bootcampOutcomes")
                            .title("Outcomes")
                            .items([
                              S.listItem()
                                .id("ap_graduationStats")
                                .title("Graduation Stats")
                                .icon(MdTitle)
                                .schemaType("bootcampGraduationStats")
                                .child(
                                  S.documentTypeList("bootcampGraduationStats"),
                                ),
                              S.listItem()
                                .id("ap_hiringCompanies")
                                .title("Hiring Companies")
                                .icon(FaHandshake)
                                .schemaType("bootcampEmployers")
                                .child(S.documentTypeList("bootcampEmployers")),
                            ]),
                        ),
                      S.listItem()
                        .id("ap_programDetails")
                        .title("Program Details")
                        .icon(FaChalkboardTeacher)
                        .child(
                          S.document()
                            .schemaType("bootcampProgramGuide")
                            .documentId("bootcampProgram"),
                        ),
                      S.listItem()
                        .id("ap_testimonials")
                        .title("Testimonials")
                        .icon(MdOutlineSubtitles)
                        .child(
                          S.list()
                            .id("ap_testimonialTypes")
                            .title("Testimonial Types")
                            .items([
                              S.listItem()
                                .id("ap_employerTestimonials")
                                .title("Employer Testimonials")
                                .icon(GiOfficeChair)
                                .schemaType("alumniTestimonials")
                                .child(
                                  S.documentTypeList("alumniTestimonials"),
                                ),
                              S.listItem()
                                .id("ap_studentTestimonials")
                                .title("Student Testimonials")
                                .icon(MdGroups)
                                .schemaType("bootcampTestimonials")
                                .child(
                                  S.documentTypeList("bootcampTestimonials"),
                                ),
                            ]),
                        ),
                    ]),
                ),

              // EVENTS (/events)
              S.listItem()
                .id("ap_eventsPage")
                .title("Events (/events)")
                .icon(FaCalendarAlt)
                .child(
                  S.list()
                    .id("ap_eventComponents")
                    .title("Event Components")
                    .items([
                      S.listItem()
                        .id("ap_allEvents")
                        .title("All Events")
                        .icon(FaListAlt)
                        .schemaType("events")
                        .child(S.documentTypeList("events")),
                      S.listItem()
                        .id("ap_eventTypes")
                        .title("Event Types")
                        .icon(FaWrench)
                        .schemaType("eventTypes")
                        .child(S.documentTypeList("eventTypes")),
                    ]),
                ),

              // FELLOWSHIP (/fellowship)
              S.listItem()
                .id("ap_fellowshipPage")
                .title("Fellowship (/fellowship)")
                .icon(FaBuilding)
                .child(
                  S.list()
                    .id("ap_fellowshipComponents")
                    .title("Fellowship Components")
                    .items([
                      S.listItem()
                        .id("ap_fellowshipMetrics")
                        .title("Fellowship Metrics")
                        .icon(GiOfficeChair)
                        .child(
                          S.document()
                            .id("ap_kpiDocument")
                            .schemaType("fellowshipKPIs")
                            .documentId("ccd9e263-4b53-47d7-92b2-f9d9ae446d0c")
                            .title("Fellowship Metrics"),
                        ),
                      S.listItem()
                        .id("ap_fellowshipSponsors")
                        .title("Fellowship Sponsors")
                        .icon(FaHandshake)
                        .child(
                          S.documentTypeList("fellowshipSponsers")
                            .id("ap_fellowshipSponsersDTL")
                            .title("All Sponsors")
                            .filter('_type == "fellowshipSponsers"'),
                        ),
                    ]),
                ),

              // FELLOWSHIP MENTORS (/mentors)
              S.listItem()
                .id("ap_fellowshipMentors")
                .title("Fellowship Mentors (/mentors)")
                .icon(IoMdRibbon)
                .child(
                  S.documentTypeList("mentor")
                    .id("ap_mentorsList")
                    .title("All Mentors")
                    .filter('_type == "mentor"'),
                ),

              // FELLOWSHIP PORTFOLIO (/fellowship/portfolio)
              S.listItem()
                .id("ap_fellowshipPortfolio")
                .title("Fellowship Portfolio (/fellowship/portfolio)")
                .icon(IoMdRibbon)
                .child(
                  S.documentTypeList("fellowshipPortfolio")
                    .id("ap_fellowshipPortfolioList")
                    .title("Fellowship Portfolios")
                    .filter('_type == "fellowshipPortfolio"'),
                ),

              // GENERAL (SEO, FOOTER, METADATA)
              S.listItem()
                .id("ap_generalSettings")
                .title("General (SEO, Footer, Metadata)")
                .icon(MdSettings)
                .child(
                  S.list()
                    .id("ap_generalSettingsGroup")
                    .title("Settings")
                    .items([
                      S.listItem()
                        .id("ap_footerSettings")
                        .title("Footer")
                        .icon(GiBarefoot)
                        .child(
                          S.document()
                            .id("ap_footerDoc")
                            .schemaType("footer")
                            .documentId("footer"),
                        ),
                      S.listItem()
                        .id("ap_pageTitles")
                        .title("Page Titles")
                        .icon(FaHeading)
                        .child(
                          S.documentTypeList("pageTitles").title("Page Titles"),
                        ),
                      S.listItem()
                        .id("ap_siteSettings")
                        .title("Settings (SEO, Metadata)")
                        .icon(MdSettings)
                        .child(
                          S.document()
                            .id("ap_siteSettingsDoc")
                            .schemaType("siteSettings")
                            .documentId("siteSettings"),
                        ),
                    ]),
                ),

              // HOME (/)
              S.listItem()
                .id("ap_homeAgain")
                .title("Home (/)")
                .icon(MdHome)
                .child(
                  S.list()
                    .id("ap_homeComponentsAgain")
                    .title("Home Page Components")
                    .items([
                      S.listItem()
                        .id("ap_homeAccomplishmentsAgain")
                        .title("Accomplishments")
                        .icon(FaTrophy)
                        .schemaType("accomplishments")
                        .child(
                          S.document()
                            .schemaType("accomplishments")
                            .documentId("accomplishments"),
                        ),
                      S.listItem()
                        .id("ap_homeCoursesAgain")
                        .title("Courses")
                        .icon(FaChalkboardTeacher)
                        .child(
                          S.documentTypeList("courses")
                            .id("ap_homeCoursesListAgain")
                            .title("Courses"),
                        ),
                      S.listItem()
                        .id("ap_homepageImageSliderAgain")
                        .title("Homepage Image Slider")
                        .icon(MdPhoto)
                        .schemaType("imageSlider")
                        .child(
                          S.document()
                            .schemaType("imageSlider")
                            .documentId("d5a0afc5-1753-4277-a07d-f43f25dc881f")
                            .title("Homepage Image Slider"),
                        ),
                      S.listItem()
                        .id("ap_homeImageSliderAgain")
                        .title("Image Slider")
                        .icon(MdPhotoLibrary)
                        .schemaType("imageSlider")
                        .child(
                          S.document()
                            .schemaType("imageSlider")
                            .documentId("homepageSlider"),
                        ),
                    ]),
                ),

              // INTERNSHIPS (/internships)
              S.listItem()
                .id("ap_internships")
                .title("Internships (/internships)")
                .icon(GiOfficeChair)
                .child(
                  S.list()
                    .id("ap_internshipsComponents")
                    .title("Internships Components")
                    .items([
                      S.listItem()
                        .id("ap_internTestimonialsList")
                        .title("Team Alpha Testimonials")
                        .icon(FaCommentAlt)
                        .child(
                          S.documentTypeList("internTestimonials").title(
                            "Intern Testimonials",
                          ),
                        ),
                      S.listItem()
                        .id("ap_teamAlphaList")
                        .title("TeamAlpha")
                        .icon(MdGroups)
                        .child(
                          S.documentTypeList("teamAlpha").title(
                            "Team Alpha Members",
                          ),
                        ),
                    ]),
                ),

              // INTRO TO WEB DEVELOPMENT
              S.listItem()
                .id("ap_introToWebDevPage")
                .title("Intro to Web Development (/intro-to-web-development)")
                .icon(FaChalkboardTeacher)
                .child(S.documentTypeList("courses").title("Courses")),

              // LEARN (/learn)
              S.listItem()
                .id("ap_learnPage")
                .title("Learn (/learn)")
                .icon(MdSchool)
                .child(S.documentTypeList("courses").title("Courses")),

              // LEARN ADULTS (/learn/adults)
              S.listItem()
                .id("ap_learnAdultsPage")
                .title("Learn Adults (/learn/adults)")
                .icon(MdSchool)
                .child(S.documentTypeList("courses").title("Courses")),

              // LINKS (/links)
              S.listItem()
                .id("ap_linksPage")
                .title("Links (/links)")
                .icon(FaLink)
                .child(S.documentTypeList("links").title("Links")),

              // NOTES (/notes)
              S.listItem()
                .id("ap_notesPages")
                .title("Notes Pages (/notes/*)")
                .icon(MdOutlineSubtitles)
                .child(S.documentTypeList("notes").title("Notes")),

              // PRESS (/press)
              S.listItem()
                .id("ap_pressPage")
                .title("Press (/press)")
                .icon(FaBullhorn)
                .child(S.documentTypeList("press").title("Press")),

              // TUTORIALS (/tutorials)
              S.listItem()
                .id("ap_tutorialsPages")
                .title("Tutorials Pages (/tutorials)")
                .icon(MdSchool)
                .child(S.documentTypeList("tutorials").title("Tutorials")),

              // TEAM ALPHA (/team-alpha)
              S.listItem()
                .id("ap_teamAlphaPage")
                .title("Team Alpha (/team-alpha)")
                .icon(MdGroups)
                .child(S.documentTypeList("teamAlpha").title("TeamAlpha")),

              // Finally, filter out doc types so they don't appear twice
              ...S.documentTypeListItems().filter(
                (listItem) =>
                  ![
                    "siteSettings",
                    "teamMember",
                    "blog",
                    "blogAuthor",
                    "accomplishments",
                    "eventTypes",
                    "events",
                    "program",
                    "fiveAcrossWinners",
                    "fiveAcrossSponsors",
                    "fellowshipPortfolio",
                    "fellowshipSponsers",
                    "footer",
                    "fellowshipKPIs",
                    "courses",
                    "bootcampTestimonials",
                    "bootcampGraduationStats",
                    "bootcampEmployers",
                    "bootcampProfileCard",
                    "bootcampAlumni",
                    "bootcampClass",
                    "bootcampProgramGuide",
                    "press",
                    "links",
                    "careers",
                    "mentor",
                    "pageTitles",
                    "notes",
                    "teamAlpha",
                    "bootcamp",
                    "tutorials",
                    "internTestimonials",
                    "whatWeDo",
                    "fiveAcrossTestimonials",
                    "imageSlider",
                    "bootcampImageTestimonials",
                    "alumniTestimonials",
                  ].includes(listItem.getId()),
              ),
            ]),
        ),
    ]);
