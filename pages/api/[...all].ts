import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxyMiddleware from 'next-http-proxy-middleware'

export default (req: NextApiRequest, res: NextApiResponse) => httpProxyMiddleware(req, res, {
  target: 'http://localhost:3000',
  pathRewrite: [
    {
      patternStr: '^/api/',
      replaceStr: '/',
    }
  ],
})
