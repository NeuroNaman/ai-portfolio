'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Code, Cpu, PenTool, Users } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      category: 'AI & Machine Learning',
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        'Machine Learning',
        'Deep Learning',
        'Neural Networks',
        'Computer Vision',
        'Natural Language Processing (NLP)',
        'Generative AI',
        'Agentic AI Systems',
        'Retrieval-Augmented Generation (RAG)',
        'Model Training',
        'Model Evaluation',
        'Hyperparameter Tuning',
        'Feature Engineering',
      ],
    },
    {
      category: 'Data Science',
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        'Data Analysis',
        'Data Cleaning',
        'Exploratory Data Analysis (EDA)',
        'Statistical Analysis',
        'Data Visualization',
        'Feature Engineering',
        'Model Evaluation',
        'A/B Testing',
      ],
    },
    {
      category: 'AI Frameworks & LLM Ecosystem',
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'Hugging Face',
        'Transformers',
        'LangChain',
        'LLM Fine-tuning',
        'Embeddings',
        'Prompt Engineering',
        'Vector Databases',
        'RAG Pipelines',
        'AI Agents',
      ],
    },
    {
      category: 'Programming Languages',
      icon: <Code className="h-5 w-5" />,
      skills: ['Python', 'C++', 'JavaScript', 'SQL'],
    },
    {
      category: 'Data Science Libraries',
      icon: <Cpu className="h-5 w-5" />,
      skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly', 'Scikit-learn'],
    },
    {
      category: 'Backend Development',
      icon: <Code className="h-5 w-5" />,
      skills: ['Django', 'Flask', 'FastAPI', 'REST APIs', 'Microservices', 'API Development'],
    },
    {
      category: 'Frontend Development',
      icon: <Code className="h-5 w-5" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive UI Design'],
    },
    {
      category: 'Cloud & DevOps',
      icon: <PenTool className="h-5 w-5" />,
      skills: ['AWS', 'EC2', 'S3', 'IAM', 'Docker', 'Kubernetes', 'CI/CD', 'Cloud Deployment'],
    },
    {
      category: 'Databases',
      icon: <PenTool className="h-5 w-5" />,
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Vector Databases'],
    },
    {
      category: 'Tools & Development Environment',
      icon: <PenTool className="h-5 w-5" />,
      skills: ['Git', 'GitHub', 'Linux', 'VS Code', 'Jupyter Notebook', 'Docker Desktop'],
    },
    {
      category: 'Computer Science Fundamentals',
      icon: <Users className="h-5 w-5" />,
      skills: [
        'Data Structures',
        'Algorithms',
        'System Design Basics',
        'Software Engineering Principles',
        'Problem Solving',
        'Object Oriented Programming',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="mx-auto w-full max-w-5xl rounded-4xl"
    >
      <Card className="w-full border-none bg-transparent px-0 pb-12 text-black shadow-none dark:text-white">
        <CardHeader className="px-0 pb-1">
          <CardTitle className="text-primary px-0 text-4xl font-bold">
            Skills & Expertise
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          <motion.div
            className="space-y-8 px-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillsData.map((section, index) => (
              <motion.div key={index} className="space-y-3 px-0" variants={itemVariants}>
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h3 className="text-accent-foreground text-lg font-semibold">
                    {section.category}
                  </h3>
                </div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {section.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={badgeVariants}
                      whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                    >
                      <Badge className="border px-3 py-1.5 font-normal">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;