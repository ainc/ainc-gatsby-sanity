import { MdSettings } from "react-icons/md";
import { GiBarefoot } from 'react-icons/gi';



export default (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('General')
        .child(
          /*GENERAL */
          S.list()
          .title('General')
          .items([
            S.listItem()
              .title('Settings')
              .schemaType('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings').title('Settings')),
            S.listItem()
              .title('Footer')
              .schemaType('footer')
              .child(S.document().schemaType('footer').documentId('footer').title('Footer')),
            S.listItem()
              .title('Team Members')
              .schemaType('teamMember')
              .child(S.documentTypeList('teamMember').title('Team Members')),
            S.listItem()
              .title('Accomplishments')
              .schemaType('accomplishments')
              .child(S.document().schemaType('accomplishments').documentId('accomplishments').title('Accomplishments')),
            S.listItem()
              .title('Blogs')
              .schemaType('blog')
              .child(S.documentTypeList('blog').title('Blogs')),
            S.listItem()
              .title('Blog Authors')
              .schemaType('blogAuthor')
              .child(S.documentTypeList('blogAuthor').title('Blog Authors')),
            S.listItem()
              .title('Event Types')
              .schemaType('eventTypes')
              .child(S.documentTypeList('eventTypes').title('Event Types')),
            S.listItem()
              .title('Events')
              .schemaType('events')
              .child(S.documentTypeList('events').title('Events')),
            S.listItem()
              .title('Press')
              .schemaType('press')
              .child(S.documentTypeList('press').title('Press')),
            S.listItem()
              .title('Links')
              .schemaType('links')
              .child(S.documentTypeList('links').title('Links')),
            S.listItem()
              .title('Careers')
              .schemaType('careers')
              .child(S.documentTypeList('careers').title('Careers')),
            S.listItem()
              .title('Page Titles')
              .schemaType('pageTitles')
              .child(S.documentTypeList('pageTitles').title('Page Titles')),
            S.listItem()
              .title('Notes')
              .schemaType('notes')
              .child(S.documentTypeList('notes').title('Notes')),
            S.listItem()
              .title('Team Alpha')
              .schemaType('teamAlpha')
              .child(S.documentTypeList('teamAlpha').title('Team Alpha')),
            S.listItem()
              .title('Tutorials')
              .schemaType('tutorials')
              .child(S.documentTypeList('tutorials').title('Tutorials')),
            S.listItem()
              .title('Team Alpha Testimonials')
              .schemaType('internTestimonials')
              .child(S.documentTypeList('internTestimonials').title('Team Alpha Testimonials')),
            S.listItem()
              .title('What We Do Page')
              .schemaType('whatWeDo')
              .child(S.documentTypeList('whatWeDo').title('What We Do Page')),
            S.listItem()
              .title('Homepage Image Slider')
              .schemaType('imageSlider')
              .child(S.document().schemaType('imageSlider').documentId('d5a0afc5-1753-4277-a07d-f43f25dc881f').title('Homepage Image Slider')),
          ]),
      ),
      /*5 ACROSS */
      S.listItem()
        .title('5 Across')
        .child(
          S.list()
          .title('5 Across')
          .items([
            S.listItem()
              .title('5 Across Program')
              .schemaType('program')
              .child(S.document().schemaType('program').documentId('program').title('5 Across Program Guide')),
            S.listItem()
              .title('5 Across Winners')
              .schemaType('fiveAcrossWinners')
              .child(S.documentTypeList('fiveAcrossWinners').title('5 Across Winners')),
            S.listItem()
              .title('5 Across Sponsors')
              .schemaType('fiveAcrossSponsors')
              .child(S.document().schemaType('fiveAcrossSponsors').documentId('fiveAcrossSponsors').title('5 Across Sponsors')),
            S.listItem()
              .title('5 Across Testimonials')
              .schemaType('fiveAcrossTestimonials')
              .child(S.document().schemaType('fiveAcrossTestimonials').documentId('0d62df32-5bfb-4f6a-b754-394c664fe87d').title('5 Across Testimonials')),
          ]),
      ),
      /* FELLOWSHIP */
      S.listItem()
      .title('Fellowship')
      .child(
        S.list()
        .title('Fellowship')
        .items([
          S.listItem()
            .title('Fellowship Portfolio')
            .schemaType('fellowshipPortfolio')
            .child(S.documentTypeList('fellowshipPortfolio').title('Fellowship Portfolio')),
          S.listItem()
            .title('Fellowship Sponsors')
            .schemaType('fellowshipSponsers')
            .child(S.documentTypeList('fellowshipSponsers').title('Fellowship Sponsors')),
          S.listItem()
            .title('Fellowship Metrics')
            .schemaType('fellowshipKPIs')
            .child(S.document().schemaType('fellowshipKPIs').documentId('ccd9e263-4b53-47d7-92b2-f9d9ae446d0c').title('Fellowship Metrics')),
            S.listItem()
            .title('Fellowship Mentors')
            .schemaType('mentor')
            .child(S.documentTypeList('mentor').title('Fellowship Mentors')),
        ])),
        /* AWESOME INC U */
        S.listItem()
        .title('Awesome Inc U')
        .child(
          S.list()
          .title('Awesome Inc U')
          .items([
            S.listItem()
              .title('Courses')
              .schemaType('courses')
              .child(S.documentTypeList('courses').title('Courses')),
            S.listItem()
              .title('Bootcamp Testimonials')
              .schemaType('bootcampTestimonials')
              .child(S.documentTypeList('bootcampTestimonials').title('Bootcamp Testimonials')),
            S.listItem()
              .title('Bootcamp Graduation Stats')
              .schemaType('bootcampGraduationStats')
              .child(S.documentTypeList('bootcampGraduationStats').title('Bootcamp Graduation Stats')),
            S.listItem()
              .title('Bootcamp Employers')
              .schemaType('bootcampEmployers')
              .child(S.documentTypeList('bootcampEmployers').title('Bootcamp Employers')),
            S.listItem()
              .title('Bootcamp Profile Card')
              .schemaType('bootcampProfileCard')
              .child(S.document().schemaType('bootcampProfileCard').documentId('2727d39e-c68b-47fc-9d1c-e654d24c4fc2').title('Profile Card')),
              S.listItem()
              .title('Bootcamp Alumni')
              .schemaType('bootcampAlumni')
              .child(S.documentTypeList('bootcampAlumni').title('Bootcamp Alumni')),
             S.listItem()
              .title('Bootcamp Class')
              .schemaType('bootcampClass')
              .child(S.documentTypeList('bootcampClass').title('Bootcamp Class')),
            S.listItem()
              .title('Bootcamp Program Guide')
              .schemaType('bootcampProgramGuide')
              .child(S.document().schemaType('bootcampProgramGuide').documentId('55173d5b-fb52-4f17-885e-85a82dee1c29').title('Program Guide')),
            S.listItem()
              .title('Bootcamp Dates')
              .schemaType('bootcamp')
              .child(S.document().schemaType('bootcamp').documentId('bootcamp').title('Bootcamp Dates')),
            S.listItem()
              .title('Bootcamp Social Media Testimonials')
              .schemaType('bootcampImageTestimonials')
              .child(S.document().schemaType('bootcampImageTestimonials').documentId('25fdef99-2753-44b1-b592-e4c1df0160b9').title('Bootcamp Image Testimonials')),
            S.listItem()
              .title('Bootcamp Employer Testimonials')
              .schemaType('alumniTestimonials')
              .child(S.documentTypeList('alumniTestimonials').title('Bootcamp Employer Testimonials')),   
          ])),
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings', 'teamMember', 'blog', 'blogAuthor', 'accomplishments',
          'eventTypes', 'events', 'program', 'fiveAcrossWinners', 'fiveAcrossSponsors',
          'fellowshipPortfolio', 'fellowshipSponsers', 'footer', 'fellowshipKPIs', 'courses',
          'bootcampTestimonials', 'bootcampGraduationStats', 'bootcampEmployers', 'bootcampProfileCard',
          'bootcampAlumni', 'bootcampClass', 'bootcampProgramGuide', 'press', 'links', 'careers',
          'mentor', 'pageTitles', 'notes', 'teamAlpha', 'bootcamp', 'tutorials', 'internTestimonials', 
          'whatWeDo', 'fiveAcrossTestimonials', 'imageSlider', 'bootcampImageTestimonials', 'alumniTestimonials'
         ].includes(listItem.getId()))
    ])
