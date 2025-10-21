import React from 'react'
import { Helmet } from 'react-helmet-async'
import PropTypes from 'prop-types'

const siteMetadata = {
  title: 'Asish Kakumanu',
  description: '26 year old software developer with MS in CS from SUNY Buffalo',
  author: '@asishkakumanu',
  image: 'https://github.com/AsishKakumanu/asishkakumanu.github.io/blob/develop/src/images/webview.png'
}

function SEO({ description, lang, meta, title }) {
  const metaDescription = description || siteMetadata.description
  const image = siteMetadata.image

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${siteMetadata.title} | %s`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: `Asish Kakumanu | ${title}`,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: image,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: image,
        },
        ...meta,
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
