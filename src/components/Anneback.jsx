import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Anneback = () => {
  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    <section className="bg-white h-screen flex items-center justify-center">
      <div className="w-full max-w-lg">
        <motion.div style={{ opacity }} className="text-3xl font-medium leading-tight text-black">
          {text}
        </motion.div>
        <p className='text-center text-black'> - Anne Back</p>
      </div>
    </section>
  );
};

export default Anneback;