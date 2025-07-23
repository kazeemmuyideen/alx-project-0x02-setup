import Head from 'next/head'
import Header from '@/components/layout/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Welcome to ALX Project 0x02</h1>
      </main>
    </>
  )
}
