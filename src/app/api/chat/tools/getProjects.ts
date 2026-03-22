import { tool } from "ai";
import { z } from "zod";

export const getProjects = tool({
  description:
    "Returns a detailed list of AI, ML, and system design projects built by Naman Nanda",
  parameters: z.object({}),
  execute: async () => {
    return `
Hey! I’ve built several advanced AI and machine learning systems focused on solving real-world problems. Here are my key projects:

---

🚀 AI & Machine Learning Projects

1. DocMind – Multi-Agent RAG Document Intelligence System  
A multi-agent AI system that enables natural language querying over documents like PDFs, DOCX, TXT, and web content.  
It uses a LangGraph-based workflow with 7 specialized agents and semantic search using embeddings and vector databases.

Tech: Python, FastAPI, LangGraph, ChromaDB, RAG

---

2. PropPulse – Real Estate Analytics & Recommendation Engine  
An end-to-end ML system for predicting property prices and recommending investments.  
Benchmarked 11 ML models and improved performance (R² ≈ 0.90, MAE reduced from 0.94 → 0.45).  
Includes a hybrid recommendation engine using TF-IDF and geospatial features.

Tech: Python, Scikit-learn, Pandas, TF-IDF, Plotly

---

3. MedCortex – AI Diagnostic Intelligence System  
A healthcare AI platform combining disease prediction models, deep learning, and RAG-based medical assistance.  
Includes a ResNet18 classifier (95.7% accuracy) and optimized ML models improving recall from 24% to 81%.

Tech: Python, PyTorch, FastAPI, LangChain, LightGBM, Optuna, RAG

---

💡 What I focus on:

- Building production-ready AI systems  
- Designing multi-agent and RAG-based architectures  
- Optimizing ML models with measurable performance improvements  

---

Feel free to ask me about architecture, models, or challenges — I’d be happy to explain in detail! 🚀
`;
  },
});