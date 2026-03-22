'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Code2, Globe } from 'lucide-react';

const InternshipCard = () => {

  const openMail = () => {
    window.open('mailto:naman.codewizard@gmail.com', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12"
    >

      {/* Header */}
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-4">

          <div className="bg-muted h-16 w-16 overflow-hidden rounded-full shadow-md">
            <img
              src="/naman.jpg"
              alt="Naman Nanda"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-foreground text-2xl font-semibold">
              Naman Nanda
            </h2>
            <p className="text-muted-foreground text-sm">
              AI / Machine Learning Internship
            </p>
          </div>

        </div>

        {/* Live badge */}
        <div className="mt-4 flex items-center gap-2 sm:mt-0">
          <span className="flex items-center gap-1 rounded-full border border-green-500 px-3 py-0.5 text-sm font-medium text-green-500">

            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>

            Available
          </span>
        </div>

      </div>

      {/* Internship Info */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

        <div className="flex items-start gap-3">
          <CalendarDays className="mt-1 h-5 w-5 text-blue-500" />
          <div>
            <p className="text-foreground text-sm font-medium">
              Availability
            </p>
            <p className="text-muted-foreground text-sm">
              Open for internship opportunities
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Globe className="mt-1 h-5 w-5 text-green-500" />
          <div>
            <p className="text-foreground text-sm font-medium">
              Location
            </p>
            <p className="text-muted-foreground text-sm">
              India / Remote
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex items-start gap-3 sm:col-span-2">

          <Code2 className="mt-1 h-5 w-5 text-purple-500" />

          <div className="w-full">

            <p className="text-foreground text-sm font-medium">
              Tech stack
            </p>

            <div className="text-muted-foreground grid grid-cols-1 gap-y-1 text-sm sm:grid-cols-2">

              <ul className="list-disc pl-4">
                <li>Python</li>
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>NLP</li>
                <li>Generative AI</li>
              </ul>

              <ul className="list-disc pl-4">
                <li>NumPy, Pandas, Scikit-learn</li>
                <li>TensorFlow / PyTorch</li>
                <li>Django, Flask, FastAPI</li>
                <li>SQL</li>
                <li>Git & GitHub</li>
              </ul>

            </div>

          </div>

        </div>

      </div>

      {/* What I bring */}
      <div className="mt-10">

        <p className="text-foreground mb-2 text-lg font-semibold">
          What I bring
        </p>

        <p className="text-foreground text-sm">
          Strong foundation in AI, Machine Learning, and Data Science. <br/>
          Experience building intelligent applications and data-driven systems. <br/>
          Passionate about solving real-world problems with AI and constantly learning new technologies.
        </p>

      </div>

      {/* Goal */}
      <div className="mt-8">

        <p className="text-foreground mb-2 text-lg font-semibold">
          Goal
        </p>

        <p className="text-foreground text-sm">
          Join an innovative team working on impactful AI systems. 
          I'm eager to learn, contribute to real-world projects, and build intelligent solutions that create value.
        </p>

      </div>

      {/* Contact button */}
      <div className="mt-10 flex justify-center">

        <button
          onClick={openMail}
          className="cursor-pointer rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-zinc-800"
        >
          Contact Me
        </button>

      </div>

    </motion.div>
  );
};

export default InternshipCard;