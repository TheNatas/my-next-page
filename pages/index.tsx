import type { NextPage } from 'next'
import { Head } from 'next/document'
import Background from '../components/Background'
import Bio from '../components/Bio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  

  return (
    <>
      <Head title='Natanael Alves Gabriel'></Head>
      <Background/>
      <Header/>
      <Bio/>
      <Skills/>
      <Contact/>
      <Footer/>
      <div className='overlay'></div>
    </>
  )
}

export default Home
