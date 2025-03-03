import { MdHome, MdSchool, MdGroups } from "react-icons/md";
import { GiBarefoot, GiOfficeChair } from "react-icons/gi";
import { FaGraduationCap, FaCalendarAlt, FaBuilding } from "react-icons/fa";

export default (S) =>
  S.list()
    .id("websiteStructure")
    .title("Website Structure")
    .items([
      // General
      S.listItem()
        .id("generalSettings")
        .title("General (SEO, Footer, Metadata)")
        .child(
          S.list()
            .id("settingsGroup")
            .title("Settings")
            .items([
              S.listItem()
                .id("siteSettings")
                .title("Settings")
                .child(
                  S.document()
                    .id("siteSettingsDoc")
                    .schemaType("siteSettings")
                    .documentId("siteSettings"),
                ),
              S.listItem()
                .id("footerSettings")
                .title("Footer")
                .child(
                  S.document()
                    .id("footerDoc")
                    .schemaType("footer")
                    .documentId("footer"),
                ),
              S.listItem()
                .id("pageTitles")
                .title("Page Titles")
                .child(S.documentTypeList("pageTitles").title("Page Titles")),
            ]),
        ),

      // Home Page
      S.listItem()
        .id("homePage")
        .title("Home Page (/)")
        .icon(MdHome)
        .child(
          S.list()
            .id("homeComponents")
            .title("Home Page Components")
            .items([
              S.listItem()
                .title("Homepage Image Slider")
                .schemaType("imageSlider")
                .child(
                  S.document()
                    .schemaType("imageSlider")
                    .documentId("d5a0afc5-1753-4277-a07d-f43f25dc881f")
                    .title("Homepage Image Slider"),
                ),
              S.listItem()
                .id("imageSlider")
                .title("Image Slider")
                .schemaType("imageSlider")
                .child(
                  S.document()
                    .schemaType("imageSlider")
                    .documentId("homepageSlider"),
                ),
              S.listItem()
                .id("accomplishments")
                .title("Accomplishments")
                .schemaType("accomplishments")
                .child(
                  S.document()
                    .schemaType("accomplishments")
                    .documentId("accomplishments"),
                ),
              S.listItem()
                .id("Courses")
                .title("Courses")
                .child(
                  S.documentTypeList("courses").id("courses").title("Courses"),
                ),
            ]),
        ),

      // About Page
      S.listItem()
        .id("aboutPage")
        .title("About Page (/about)")
        .child(
          S.list()
            .id("aboutComponents")
            .title("About Components")
            .items([
              S.listItem()
                .id("teamMembers")
                .title("Team Members")
                .schemaType("teamMember")
                .child(S.documentTypeList("teamMember")),
              S.listItem()
                .id("whatWeDo")
                .title("What We Do")
                .schemaType("whatWeDo")
                .child(S.documentTypeList("whatWeDo")),
              S.listItem()
                .id("accomplishments")
                .title("Accomplishments")
                .schemaType("accomplishments")
                .child(
                  S.document()
                    .schemaType("accomplishments")
                    .documentId("accomplishments"),
                ),
            ]),
        ),

      // 5 Across Program Guide Page
      S.listItem()
        .id("fiveAcrossProgramGuide")
        .title("5 Across Program Guide (/program)")
        .child(
          S.list()
            .id("programGuideComponents")
            .title("Program Guide Components")
            .items([
              S.listItem()
                .id("programGuide")
                .title("5 Across Program")
                .schemaType("program")
                .child(
                  S.document()
                    .id("programDocument")
                    .schemaType("program")
                    .documentId("program")
                    .title("5 Across Program Guide"),
                ),
              S.listItem()
                .id("programSponsors")
                .title("5 Across Sponsors")
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

      // 5 Across Main Page
      S.listItem()
        .id("fiveAcrossPage")
        .title("5 Across Page (/5across)")
        .child(
          S.list()
            .id("fiveAcrossComponents")
            .title("5 Across Components")
            .items([
              S.listItem()
                .id("fiveAcrossWinners")
                .title("5 Across Winners")
                .schemaType("fiveAcrossWinners")
                .child(
                  S.documentTypeList("fiveAcrossWinners")
                    .title("All Winners")
                    .filter('_type == "fiveAcrossWinners"'),
                ),
              S.listItem()
                .id("fiveAcrossTestimonials")
                .title("5 Across Testimonials")
                .schemaType("fiveAcrossTestimonials")
                .child(
                  S.document()
                    .id("testimonialsDoc")
                    .schemaType("fiveAcrossTestimonials")
                    .documentId("0d62df32-5bfb-4f6a-b754-394c664fe87d")
                    .title("Testimonials"),
                ),
              S.listItem()
                .id("pageSponsors")
                .title("5 Across Sponsors")
                .schemaType("fiveAcrossSponsors")
                .child(
                  S.document()
                    .id("pageSponsorsDoc")
                    .schemaType("fiveAcrossSponsors")
                    .documentId("fiveAcrossSponsors")
                    .title("Page Sponsors"),
                ),
            ]),
        ),

      // Events Page
      S.listItem()
        .id("eventsPage")
        .title("Events Page (/events)")
        .icon(FaCalendarAlt)
        .child(
          S.list()
            .id("eventComponents")
            .items([
              S.listItem()
                .id("eventTypes")
                .title("Event Types")
                .schemaType("eventTypes")
                .child(S.documentTypeList("eventTypes")),
              S.listItem()
                .id("allEvents")
                .title("All Events")
                .schemaType("events")
                .child(S.documentTypeList("events")),
            ]),
        ),

      // Workspace Page
      S.listItem()
        .id("workspacePage")
        .title("Workspace Page (/workspace)")
        .icon(FaBuilding)
        .child(S.list().id("workspaceComponents")),

      // Blog Page
      S.listItem()
        .id("blogPage")
        .title("Blog Page (/blog)")
        .child(
          S.list()
            .id("blogComponents")
            .items([
              S.listItem()
                .title("Blogs")
                .schemaType("blog")
                .child(S.documentTypeList("blog").title("Blogs")),
              S.listItem()
                .title("Blog Authors")
                .schemaType("blogAuthor")
                .child(S.documentTypeList("blogAuthor").title("Blog Authors")),
            ]),
        ),

      // Fellowship Portfolio (Standalone)
      S.listItem()
        .id("fellowshipPortfolio")
        .title("Fellowship Portfolio (/fellowship/portfolio)")
        .child(
          S.documentTypeList("fellowshipPortfolio")
            .id("fellowshipPortfolioList")
            .title("Fellowship Portfolios")
            .filter('_type == "fellowshipPortfolio"'),
        ),

      // Fellowship Main Page with Sponsors and Metrics
      S.listItem()
        .id("fellowshipPage")
        .title("Fellowship Page (/fellowship)")
        .child(
          S.list()
            .id("fellowshipComponents")
            .title("Fellowship Components")
            .items([
              S.listItem()
                .id("fellowshipSponsors")
                .title("Fellowship Sponsors")
                .child(
                  S.documentTypeList("fellowshipSponsers")
                    .id("sponsorsList")
                    .title("All Sponsors")
                    .filter('_type == "fellowshipSponsers"'),
                ),
              S.listItem()
                .id("fellowshipMetrics")
                .title("Fellowship Metrics")
                .child(
                  S.document()
                    .id("kpiDocument")
                    .schemaType("fellowshipKPIs")
                    .documentId("ccd9e263-4b53-47d7-92b2-f9d9ae446d0c")
                    .title("Fellowship Metrics"),
                ),
            ]),
        ),

      // Mentors (Standalone)
      S.listItem()
        .id("fellowshipMentors")
        .title("Fellowship Mentors (/mentors)")
        .child(
          S.documentTypeList("mentor")
            .id("mentorsList")
            .title("All Mentors")
            .filter('_type == "mentor"'),
        ),

      // Press Page
      S.listItem()
        .id("pressPage")
        .title("Press Page (/press)")
        .child(S.documentTypeList("press").title("Press")),

      // Links Page
      S.listItem()
        .id("linksPage")
        .title("Links Page (/links)")
        .child(S.documentTypeList("links").title("Links")),

      // Apax Careers Page
      S.listItem()
        .id("apaxCareersPage")
        .title("Apax Careers Page (https://www.apaxsoftware.com/careers)")
        .child(S.documentTypeList("careers").title("Careers")),

      // Awesome Inc Careers Page
      S.listItem()
        .id("awesomeIncCareersPage")
        .title(
          "Awesome Inc Careers Page (https://careers.awesomeinc.org/jobs/Careers)",
        )
        .child(S.documentTypeList("careers").title("Careers")),

      // Notes Pages
      S.listItem()
        .id("notesPages")
        .title("Notes Pages (/notes/*)")
        .child(S.documentTypeList("notes").title("Notes")),

      // Internships Page
      S.listItem()
        .id("internshipsPage")
        .title("Internships Page (/internships)")
        .child(
          S.list()
            .id("internshipsComponents")
            .title("Internships Components")
            .items([
              S.listItem()
                .id("teamAlphaList")
                .title("TeamAlpha")
                .child(
                  S.documentTypeList("teamAlpha").title("Team Alpha Members"),
                ),
              S.listItem()
                .id("internTestimonialsList")
                .title("Team Alpha Testimonials")
                .child(
                  S.documentTypeList("internTestimonials").title(
                    "Intern Testimonials",
                  ),
                ),
            ]),
        ),

      // Team Alpha Page
      S.listItem()
        .id("teamAlphaPage")
        .title("Team Alpha Page (/team-alpha)")
        .child(S.documentTypeList("teamAlpha").title("TeamAlpha")),

      // Tutorials Pages
      S.listItem()
        .id("tutorialsPages")
        .title("Tutorials Pages (/tutorials)")
        .child(S.documentTypeList("tutorials").title("Tutorials")),

      // What We Do Page
      S.listItem()
        .id("whatWeDoPage")
        .title("What We Do Page (/what-we-do)")
        .child(S.documentTypeList("whatWeDo").title("What We Do Page")),

      // Intro to Web Development Page
      S.listItem()
        .id("introToWebDevelopmentPage")
        .title("Intro to Web Development Page (/intro-to-web-development)")
        .child(S.documentTypeList("courses").id("courses").title("Courses")),

      // Learn Page
      S.listItem()
        .id("learnPage")
        .title("Learn Page (/learn)")
        .child(S.documentTypeList("courses").id("courses").title("Courses")),

      // Adult Courses Page
      S.listItem()
        .id("adultCourses")
        .title("Adult Courses Page (/learn/adultCourses)")
        .child(S.documentTypeList("courses").id("courses").title("Courses")),

      // Learn Adults Page
      S.listItem()
        .id("learnAdults")
        .title("Learn Adults Page (/learn/adults)")
        .child(S.documentTypeList("courses").id("courses").title("Courses")),

      // Bootcamp Page
      S.listItem()
        .id("bootcampSection")
        .title("Bootcamp Page (/bootcamp)")
        .icon(FaGraduationCap)
        .child(
          S.list()
            .id("bootcampComponents")
            .title("Bootcamp Components")
            .items([
              S.listItem()
                .id("programDetails")
                .title("Program Details")
                .child(
                  S.document()
                    .schemaType("bootcampProgramGuide")
                    .documentId("bootcampProgram"),
                ),
              S.listItem()
                .id("testimonials")
                .title("Testimonials")
                .child(
                  S.list()
                    .id("testimonialTypes")
                    .title("Testimonial Types")
                    .items([
                      S.listItem()
                        .id("studentTestimonials")
                        .title("Student Testimonials")
                        .schemaType("bootcampTestimonials")
                        .child(S.documentTypeList("bootcampTestimonials")),
                      S.listItem()
                        .id("employerTestimonials")
                        .title("Employer Testimonials")
                        .schemaType("alumniTestimonials")
                        .child(S.documentTypeList("alumniTestimonials")),
                    ]),
                ),
              S.listItem()
                .id("outcomes")
                .title("Outcomes")
                .child(
                  S.list()
                    .id("bootcampOutcomes")
                    .title("Outcomes")
                    .items([
                      S.listItem()
                        .id("graduationStats")
                        .title("Graduation Stats")
                        .schemaType("bootcampGraduationStats")
                        .child(S.documentTypeList("bootcampGraduationStats")),
                      S.listItem()
                        .id("hiringCompanies")
                        .title("Hiring Companies")
                        .schemaType("bootcampEmployers")
                        .child(S.documentTypeList("bootcampEmployers")),
                    ]),
                ),
            ]),
        ),

      // Filter out hidden document types
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
    ]);
