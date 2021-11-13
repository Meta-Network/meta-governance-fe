import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxyMiddleware from 'next-http-proxy-middleware'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return httpProxyMiddleware(req, res, {
    target: 'https://meta-governance-api.mttk.net',
    pathRewrite: [
      {
        patternStr: '^/api/',
        replaceStr: '/',
      }
    ],
  })
}

export default handler
