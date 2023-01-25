import Exercise from '@/components/Exercise'
import Log from '@/components/Log';
import Head from 'next/head'
import Link from 'next/link';
import { supabase } from '../../lib/supabaseClient';

function Home({ exercises }: any) {

  return (
    <>
      <Head>
        <title>Gym Log</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <meta name="theme-color" content="#161616" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/favicon.png"></link>
      </Head>

      <main className="p-2">
          <Log exercises={exercises} />
          
          <div className="buttons">
            <Link href="/add" className="exercise-add text-center">New</Link>
          </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  let { data } = await supabase.from('exercises').select()

  return {
    props: {
      exercises: data
    },
  }
}

export default Home;
