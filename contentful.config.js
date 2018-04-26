require('dotenv').config()

const { env } = process

module.exports = {
  ...{ spaceId: env.CTF_SPACE_ID },
  ...(env.NODE_ENV === 'development'
    ? {
        accessToken: env.CTF_CPA_TOKEN,
        host: 'preview.contentful.com'
      }
    : {
        accessToken: env.CTF_CDA_TOKEN
      })
}
