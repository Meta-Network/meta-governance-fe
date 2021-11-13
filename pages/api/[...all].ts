import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxyMiddleware from 'next-http-proxy-middleware'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  req.headers.authorization = `Bearer ${process.env.MTTK_PROXY_ACCESS_TOKEN}`

  return httpProxyMiddleware(req, res, {
    target: 'https://meta-matataki-proxy-q8tdxaj5h-kodamasakuno.vercel.app',
    pathRewrite: [
      {
        patternStr: '^/api/',
        replaceStr: '/',
      }
    ],
  })
}

export default handler
