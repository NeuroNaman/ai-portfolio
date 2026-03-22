import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// --- PROJECT DATABASE ---
const PROJECT_CONTENT = [
  {
    title: 'DocMind – Multi-Agent RAG Document Intelligence System',
    description:
      'Developed an advanced multi-agent Retrieval-Augmented Generation (RAG) system enabling natural language querying and intelligent knowledge extraction from PDFs, DOCX, TXT files, and web content. Designed a dynamic LangGraph workflow that routes queries across 7 specialized agents with automated fallback to Wikipedia API. Implemented a semantic search pipeline using document chunking, embeddings, and vector storage for accurate and context-aware responses.',
    techStack: [
      'Python',
      'FastAPI',
      'LangGraph',
      'ChromaDB',
      'RAG',
      'NLP',
      'Vector Database',
    ],
    date: 'Aug 2025',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/NeuroNaman/DocMind-agents',
      },
    ],
    images: [
      {
        src: '/projects/docmind.png',
       
        alt: 'DocMind Project Preview',
  
        
        
      },
    ],
  },
  {
    title: 'PropPulse – Real Estate Analytics & Recommendation Engine',
    description:
      'Built an end-to-end real estate analytics and recommendation system leveraging machine learning to predict property prices and suggest optimal investments. Benchmarked 11 ML models and reduced MAE from 0.94 to 0.45 (R² ≈ 0.90) using Random Forest with 10-fold cross-validation and GridSearchCV. Designed an advanced preprocessing pipeline using ColumnTransformer and Target Encoding to handle high-cardinality features, significantly improving model performance. Developed a hybrid recommendation engine using TF-IDF similarity, 40+ price features, and 1000+ geospatial features, with interactive visualizations powered by Matplotlib and Plotly.',
    techStack: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'TF-IDF',
      'Machine Learning',
      'Matplotlib',
      'Plotly',
    ],
    date: 'Dec 2025',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/NeuroNaman/PropPulse-Real-Estate-Analytics-Recommendation-Engine',
      },
    ],
    images: [
      {
        src: '/projects/default.png',
        alt: 'PropPulse Project Preview',
      },
    ],
  },
  {
    title: 'MedCortex – AI Diagnostic Intelligence System',
    description:
      'Architected a comprehensive healthcare AI platform integrating disease prediction models, a ResNet18-based skin disease classifier, and a Retrieval-Augmented Generation (RAG) powered medical assistant for intelligent medical query answering. Built a disease prediction system on 4.9K patient records covering 130+ symptoms across 40+ diseases, benchmarking multiple models (SVM, Random Forest, Gradient Boosting) and deploying a high-performance Random Forest API. Engineered advanced ML solutions including an Optuna-tuned Easy Ensemble (LightGBM) model improving heart disease recall from 24% to 81%, a ResNet18-based skin classifier achieving 95.7% accuracy, and a RAG-based medical recommendation system.',
    techStack: [
      'Python',
      'PyTorch',
      'FastAPI',
      'LangChain',
      'LightGBM',
      'Optuna',
      'Machine Learning',
      'Deep Learning',
      'RAG',
    ],
    date: 'Feb 2026',
    links: [
      {
        name: 'GitHub Profile',
        url: 'https://github.com/NeuroNaman',
      },
    ],
    images: [
      {
        src: '/projects/default.png',
        alt: 'MedCortex Project Preview',
      },
    ],
  },
];

// --- COMPONENT ---
interface ProjectProps {
  title: string;
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  const projectData = PROJECT_CONTENT.find(
    (p) => p.title === project.title
  );

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            {projectData.date}
          </div>

          <p className="text-base md:text-lg">
            {projectData.description}
          </p>

          {/* Tech Stack */}
          <div>
            <h3 className="mb-2 text-sm text-neutral-500 uppercase">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-black dark:bg-neutral-800 dark:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      {projectData.links.length > 0 && (
        <div>
          <h3 className="text-sm text-neutral-500 mb-2">Links</h3>
          <Separator />
          <div className="space-y-2 mt-3">
            {projectData.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center p-3 rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
              >
                <span className="text-black dark:text-white font-medium">
                  {link.name}
                </span>
                <ChevronRight className="w-4 h-4 text-black dark:text-white" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images */}
      <div>
        {projectData.images.map((img, i) => (
          <div key={i} className="relative aspect-video rounded-xl overflow-hidden">
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

// --- UI DATA ---
export const data = [
  {
    category: 'AI & Machine Learning',
    title: 'DocMind – Multi-Agent RAG Document Intelligence System',
    src: '/projects/default.png',
    content: (
      <ProjectContent
        project={{
          title: 'DocMind – Multi-Agent RAG Document Intelligence System',
        }}
      />
    ),
  },
  {
    category: 'AI & Machine Learning',
    title: 'PropPulse – Real Estate Analytics & Recommendation Engine',
    src: '/projects/default.png',
    content: (
      <ProjectContent
        project={{
          title: 'PropPulse – Real Estate Analytics & Recommendation Engine',
        }}
      />
    ),
  },
  {
    category: 'AI & Healthcare',
    title: 'MedCortex – AI Diagnostic Intelligence System',
    src: '/projects/default.png',
    content: (
      <ProjectContent
        project={{
          title: 'MedCortex – AI Diagnostic Intelligence System',
        }}
      />
    ),
  },
];