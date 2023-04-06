import React from 'react';
import { Link } from 'next/link';
import { motion } from 'framer-motion';

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

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['plantain', 'meat', 'egg', 'fish', 'okro soup', 'eguisi soup'];

  return (
    <motion.div className="toppings container"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      
      <h3>Step 2: What do you want it with?</h3>
      

      <ul>
        {toppings.map(topping => {
          let spanClass = pizza?.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
            whileHover={{ scale: 1.3, originX:0, color: '#f8e112'}}
            transition={{ type: 'spring', stiffness: 300}}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <button>Pay now</button>

      
    </motion.div>
  )
}

export default Toppings;