import React from 'react'

import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export const Seo = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{ lang: "ru" }}
      title={`${site.siteMetadata.title} | ${title}`}
      meta={[{ name: `description`, content: metaDescription }]}
    />
  )
}
