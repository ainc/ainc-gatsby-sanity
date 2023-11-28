import { MdSettings } from "react-icons/md";
import { GiBarefoot } from 'react-icons/gi';


const hiddenDocTypes = listItem =>
  !['category', 'teamMember', 'sampleProject', 'siteSettings', 'footer', 'accomplishments','fiveAcrossSponsors','program','bootcamp'].includes(listItem.getId())

export default (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
          .title('Footer')
          .child(
            S.editor()
              .id('footer')
              .schemaType('footer')
              .documentId('footer')
          )
          .icon(GiBarefoot),
      S.listItem()
          .title('Accomplishments')
          .child(
            S.editor()
              .id('accomplishments')
              .schemaType('accomplishments')
              .documentId('accomplishments')
          ),
       S.listItem()
          .title('5A Program Guide')
          .child(
            S.editor()
              .id('program')
              .schemaType('program')
              .documentId('program')
          ),
        
        S.listItem()
          .title('Sample projects')
          .schemaType('sampleProject')
          .child(S.documentTypeList('sampleProject').title('Sample projects')),
        S.listItem()
          .title('Team Member')
          .schemaType('teamMember')
          .child(S.documentTypeList('teamMember').title('Team Member')),
        S.listItem()
          .title('Categories')
          .schemaType('category')
          .child(S.documentTypeList('category').title('Categories')),
        S.listItem()
        .title('5 Across Sponsors')
        .child(
          S.editor()
            .id('fiveAcrossSponsors')
            .schemaType('fiveAcrossSponsors')
            .documentId('fiveAcrossSponsors')
        ),
        S.listItem()
        .title('Bootcamp')
        .child(
          S.editor()
            .id('bootcamp')
            .schemaType('bootcamp')
            .documentId('bootcamp')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
