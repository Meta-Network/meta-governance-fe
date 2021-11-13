import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxyMiddleware from 'next-http-proxy-middleware'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return httpProxyMiddleware(req, res, {
    target: process.env.API_TARGET,
    pathRewrite: [
      {
        patternStr: '^/api/',
        replaceStr: '/',
      }
    ],
  })
}

export default handler
