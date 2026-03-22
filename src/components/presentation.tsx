'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

export function Presentation() {

  const profile = {
    name: 'Naman Nanda',
    age: '20 years old',
    location: 'Yamunanagar, India',

    description:
`Hey 👋
I'm Naman Nanda, a 20-year-old AI & Machine Learning Engineer and Data Scientist from Yamunanagar, India.

I specialize in building intelligent systems using Machine Learning, Natural Language Processing (NLP), and Generative AI. My focus is on developing real-world AI applications like RAG systems, AI agents, predictive models, and intelligent data-driven solutions.

Along with AI, I also work on backend and full-stack development using Python frameworks like Django, Flask, and FastAPI to build scalable AI-powered applications.`,

    src: '/naman.jpg',

    fallbackSrc:
      'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?q=80&w=3560&auto=format&fit=crop',
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const paragraphAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
  };

  return (
    <div className="mx-auto w-full max-w-5xl py-6 font-sans">

      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">

        {/* Image Section */}
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm">

          <div className="relative h-full w-full overflow-hidden rounded-2xl">

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="h-full w-full"
            >
              <Image
                src={profile.src}
                alt={profile.name}
                width={500}
                height={500}
                className="h-full w-full object-cover object-center"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = profile.fallbackSrc;
                }}
              />
            </motion.div>

          </div>

        </div>

        {/* Text Section */}
        <div className="flex flex-col">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >

            <h1 className="from-foreground to-muted-foreground bg-gradient-to-r bg-clip-text text-xl font-semibold text-transparent md:text-3xl">
              {profile.name}
            </h1>

            <div className="mt-1 flex flex-col gap-1 md:flex-row md:items-center md:gap-4">

              <p className="text-muted-foreground">
                {profile.age}
              </p>

              <div className="bg-border hidden h-1.5 w-1.5 rounded-full md:block" />

              <p className="text-muted-foreground">
                {profile.location}
              </p>

            </div>

          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraphAnimation}
            className="text-foreground mt-6 leading-relaxed whitespace-pre-line"
          >
            {profile.description}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 flex flex-wrap gap-2"
          >

            {[
              'Machine Learning',
              'Data Science',
              'Generative AI',
              'NLP',
              'RAG Systems',
              'AI Agents',
              'Python',
              'Backend Development'
            ].map((tag) => (

              <span
                key={tag}
                className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm"
              >
                {tag}
              </span>

            ))}

          </motion.div>

        </div>

      </div>

    </div>
  );
}

export default Presentation;

