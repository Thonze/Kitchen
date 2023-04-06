import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <nav>
      <motion.div className="logo"
      initial={{y: -250}}
      animate={{y: -5}}
      transition={{ delay: 0.2, type: 'spring', stiffness: 120}}
      >
        <Image src="/logo.png" width={128} height={77}  />
      </motion.div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/ninjas/menu/"><a>Food Menu</a></Link>
      <Link href="/ninjas/order/"><a className={styles.order}>Order Now &#8594;</a></Link>
    </nav>
);
}
 
export default Navbar;