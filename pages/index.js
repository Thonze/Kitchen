import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion';

export default function Home() {
  return (
      <>
        <Head>
          <title>Ma'Puts | Home</title>
          <meta name="keyword" content="ninjas"/>
        </Head>
        <motion.div>
          <motion.h1 className={styles.title} animate={{fontSize: 50}}>Shola's kitchen Resturant</motion.h1>
            <motion.p className={styles.text} 
             initial={{x: '100vw'}}
              animate={{x: 0}}
              transition={{ delay: 0.5, duration: 1}}>Welcome to our restaurant web app! We are excited to bring you a new way to experience dining. With our app, you can easily browse our menu, place your order, and have it delivered directly to your doorstep or ready for pickup at our restaurant</motion.p>
            <motion.p className={styles.text} 
             initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{ delay: 1.5, duration: 2}}>Our platform is designed to make your dining experience convenient, efficient, and enjoyable. Whether you're looking for a quick bite or a full meal, our app has everything you need to satisfy your hunger. So why wait? Explore our menu and start ordering now!</motion.p>
            <Link href="/ninjas/">
            <a className={styles.btn}>See Our Food Menu</a>
          </Link>
      </motion.div>
      </>
  )
}
