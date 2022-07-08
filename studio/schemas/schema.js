// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Object types
import bioPortableText from './objects/bioPortableText'
import figure from './objects/figure'
import projectMember from './objects/projectMember'
import projectPortableText from './objects/projectPortableText'
import simplePortableText from './objects/simplePortableText'
import internalTeamMember from './objects/internalTeamMember'
import imageLink from './objects/imageLink'
import link from './objects/link'

// Document types
import category from './documents/category'
import teamMember from './documents/teamMember'
import sampleProject from './documents/sampleProject'
import siteSettings from './documents/siteSettings'
import bootcampAlumni from './documents/bootcampAlumni'
import accomplishments from './documents/accomplishments'
import footer from './documents/footer'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'ainc',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    bioPortableText,
    figure,
    projectMember,
    projectPortableText,
    simplePortableText,
    internalTeamMember,
    imageLink,
    link,
    // The following are document types which will appear
    // in the studio.
    category,
    teamMember,
    sampleProject,
    siteSettings,
    bootcampAlumni,
    accomplishments,
    footer,
  ])
})
