import { defineMarkdocConfig } from '@astrojs/markdoc/config';
import Heading from './src/components/MarkDown/MD_Header.astro';

export default defineMarkdocConfig({
  nodes: {
    heading: {
      render: Heading,
      attributes: {
        // Pass the attributes from Markdoc's default heading node
        // as component props.
        level: { type: String },
      }
    },
  },
})