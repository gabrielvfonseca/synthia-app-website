import { motion } from "framer-motion"

export const Pattern = () => (
  <motion.div 
    initial={{
      opacity: 0
    }}
    animate={{
      opacity: 1
    }}
    transition={{
      duration: 0.4,
      delay: 0.1
    }}
    className="opacity-70 absolute left-1/2 top-0 ml-[-15rem] h-[30rem] w-[80rem] dark:[mask-image:linear-gradient(white,transparent)]">
    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-primary-500/50 dark:to-highlight-200/20 dark:opacity-100">
      <div style={{ 
        width: "100%", 
        height: "100%", 
        backgroundColor: "transparent", 
        backgroundImage: "linear-gradient(rgb(184, 184, 184) 2px, transparent 2px), linear-gradient(90deg, rgb(184, 184, 184) 2px, transparent 2px), linear-gradient(rgb(184, 184, 184) 1px, transparent 1px), linear-gradient(90deg, rgb(184, 184, 184) 1px, rgba(34, 221, 221, 0) 1px)",
        backgroundPosition: "-2px -2px, -2px -2px, -1px -1px, -1px -1px",
        backgroundSize: "155px 155px, 155px 155px, 31px 31px, 31px 31px",
        borderRadius: "0px"
      }} />
    </div>
  </motion.div>
)
