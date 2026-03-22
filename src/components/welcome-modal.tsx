'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface WelcomeModalProps {
  trigger?: React.ReactNode;
}

export default function WelcomeModal({ trigger }: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const defaultTrigger = (
    <Button
      variant="ghost"
      className="h-auto w-auto cursor-pointer rounded-2xl bg-white/30 p-3 shadow-lg backdrop-blur-lg hover:bg-white/60"
      onClick={() => setIsOpen(true)}
    >
      <Image
        src="/logo-yuvi.svg"
        width={100}
        height={100}
        alt="Logo"
        className="w-6 md:w-8"
      />
      <span className="sr-only">About Naman</span>
    </Button>
  );

  const handleContactMe = () => {
    setIsOpen(false);
    window.location.href = '/chat?query=How%20can%20I%20contact%20you%3F';
  };

  return (
    <>
      {trigger ? (
        <div onClick={() => setIsOpen(true)}>{trigger}</div>
      ) : (
        defaultTrigger
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-background max-h-[85vh] overflow-auto rounded-2xl p-6 shadow-xl sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col"
          >
            {/* Header */}
            <DialogHeader className="flex flex-row justify-between items-start pb-4">
              <div>
                <DialogTitle className="text-3xl font-bold">
                  Welcome to Naman Nanda’s AI Portfolio
                </DialogTitle>
                <p className="mt-2 text-gray-500">
                  AI/ML Engineer building real-world intelligent systems
                </p>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black text-white"
                onClick={() => setIsOpen(false)}
              >
                <X />
              </Button>
            </DialogHeader>

            {/* Content */}
            <div className="space-y-6 mt-4">
              <section className="bg-accent rounded-2xl p-6 space-y-5">

                {/* About */}
                <div>
                  <h3 className="text-xl font-semibold">About This Portfolio</h3>
                  <p className="text-base mt-2 leading-relaxed">
                    This is not a traditional portfolio. It’s an AI-powered interactive experience where you can ask questions and explore my work dynamically.
                  </p>
                </div>

                {/* What I Do */}
                <div>
                  <h3 className="text-xl font-semibold">What I Do</h3>
                  <p className="text-base mt-2 leading-relaxed">
                    I build intelligent systems using Machine Learning, Deep Learning, and Generative AI.
                    My work includes multi-agent systems, RAG pipelines, healthcare AI, and real-world ML applications.
                  </p>
                </div>

                {/* Projects */}
                <div>
                  <h3 className="text-xl font-semibold">Featured Work</h3>
                  <p className="text-base mt-2 leading-relaxed">
                    Some of my key projects include:
                    <br />• DocMind – Multi-Agent RAG system  
                    <br />• PropPulse – Real Estate ML Engine  
                    <br />• MedCortex – AI Healthcare Platform  
                  </p>
                </div>

                {/* How to Use */}
                <div>
                  <h3 className="text-xl font-semibold">How to Explore</h3>
                  <p className="text-base mt-2 leading-relaxed">
                    You can interact with the chatbot to:
                    <br />• Explore my projects  
                    <br />• Understand system architecture  
                    <br />• Learn about my skills  
                    <br />• Ask technical or professional questions  
                  </p>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="flex flex-col items-center mt-6">
              <Button
                onClick={() => setIsOpen(false)}
                className="rounded-full px-6 py-3"
              >
                Start Exploring 🚀
              </Button>

              <div className="mt-4 text-sm text-center">
                <span className="text-gray-500">
                  Interested in collaborating or hiring?
                </span>
                <span
                  className="ml-2 text-blue-500 cursor-pointer hover:underline"
                  onClick={handleContactMe}
                >
                  Contact me
                </span>
              </div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}