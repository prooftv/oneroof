import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'


const projectId =gz4pcqwf;
const dataset =production;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_STUDIO_API_VERSION!;

export default defineConfig({
  basePath: "/studio",
  name: 'OneRoof_Studio',
  title: 'OneRoof Studio',

  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

// export const sanityClient = createClient(defineConfig);
// export const urlFor = (source) => createImageUrlBuilder(defineConfig).image(source);
// export const useCurrentUser = createCurrentUserHook(defineConfig);
