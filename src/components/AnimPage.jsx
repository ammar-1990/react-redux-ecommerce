import { motion } from "framer-motion"

const AnimPage = ({children}) => {
const theMotion={
    start:{
       x:'-500px',
       opacity:0,
       transition:{   duration:0.2}
    

    },
    to :{
    opacity:1,
    x:0,
        transition:{
type:'tween'
        }
    },
   
    end:{
        opacity:0,
            x:500,
            transition:{
                type:'tween',
                duration:0.2

                        }
          
    }
}


  return (
    <motion.div variants={theMotion}
    initial='start'
    animate='to'
    exit='end'
    >
        {children}
        </motion.div>
  )
}

export default AnimPage