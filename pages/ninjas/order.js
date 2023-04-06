import Link from 'next/link'
import React from 'react';
import styles from '../../styles/Ninjas.module.css'
import {motion} from 'framer-motion'

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0

  },
  transition: {
    type: 'spring',
    delay: 0.5
  },
  exit: {
    x: "-100vw",
    transition: {ease: 'easeInOut'}
  }
}
const nextVariant = {
  hidden: {
  x: '-100vw'
},
visible: {
  x: 0,
  transition: {type: 'spring', stiffness: 120}
}
}

const buttonVariants = {
  visible: {
    scale: [1,1.1, 1, 1.1, 1, 1.1, 1],
    transition: {delay: 2}
  },
  hover: {
    scale: 1.1, 
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
          transition: {
            duration: 0.3,
            yoyo: Infinity
          }
  }
}


const Order = ({addBase, pizza }) => {
  const bases = ['Rice', 'Pounded Yam', 'Beans'];
  return (
    
    <div>
      <h1>Food Menu</h1>
      <motion.div className="base container"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >

      <h3>Step 1: What will you like to</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza?.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
            whileHover={{ scale: 1.3, originX:0, color: '#f8e112'}}
            transition={{ type: 'spring', stiffness: 300}}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>
        <motion.div className="next"
        variants={nextVariant}
        initial="hidden"
        animate="visible"
        transition={{type:'spring', stiffness: 120 }}
        >
          <Link href="/ninjas/toppings">
            <motion.button
            variants={buttonVariants}
            whileHover="hover"
            >
              Next
              </motion.button>
          </Link>
        </motion.div>
      

    </motion.div>
    </div>
  );
}
 
export default Order;