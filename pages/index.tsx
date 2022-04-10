import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { LookingFor, Department, Contact, About, WorkIn } from '../src/components/form'
import { Box } from '@mui/system'

const Home: NextPage = () => {
  return (
    <Box >
      <LookingFor />
      <Department />
      <Contact />
      <About />
      <WorkIn />
    </Box>
  )
}

export default Home
