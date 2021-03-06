import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'

const Home: NextPage = () => {
  const onLoginClick = useCallback(() => {
    window.location.href = `https://meta-network.mttk.net/oauth/login?redirect=${encodeURIComponent(
      window.location.origin,
    )}`
  }, [])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          META 管理器
        </h1>
        <hr />
        <button onClick={onLoginClick}>登录</button>
        <hr />
        <ul>
          <li><Link href="/invitations/batch"><a>批量生成</a></Link></li>
          <li><Link href="/invitations/airdrop"><a>批量空投</a></Link></li>
          <li><Link href="/invitations/verify"><a>可用性检查</a></Link></li>
        </ul>
      </main>
    </div>
  )
}

export default Home
