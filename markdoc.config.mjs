import { defineMarkdocConfig } from '@astrojs/markdoc/config';
import Heading from "@/components/MarkDown/Heading.astro"

export default defineMarkdocConfig({
  nodes: {
    // heading: {
    //   render: Heading,
    //   attributes: {
    //     level: { type: String },
    //   }
    // },
  },
});
