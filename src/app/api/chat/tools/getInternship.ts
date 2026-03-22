import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Provides information about the internship opportunities I'm looking for and how to contact me. Use this when a user asks about internships, opportunities, or collaboration.",

  parameters: z.object({}),

  execute: async () => {
    return `Here’s what I’m currently looking for 👇

📅 **Availability**
- Open to internship opportunities and collaborative projects

🌍 **Location**
- Open to opportunities across **India** or **remote roles**

🧠 **Focus Areas**
- Artificial Intelligence
- Machine Learning
- Data Science
- Generative AI
- Backend development for AI systems

🛠 **Technical Stack**
- Python
- Machine Learning / Deep Learning
- NLP
- Generative AI
- Django / Flask / FastAPI
- SQL
- Data Science libraries (NumPy, Pandas, Scikit-learn)

🚀 **What I Bring**
- Strong foundation in AI, ML, and Data Science
- Experience building intelligent systems and data-driven applications
- Passion for solving real-world problems with AI
- Quick learner who enjoys exploring new technologies

📬 **Contact Me**

📧 Email: naman.codewizard@gmail.com  
📱 Phone: +91 7027706482  
🔗 LinkedIn: https://www.linkedin.com/in/naman-nanda-dev/  
💻 GitHub: https://github.com/NeuroNaman  

If you're working on interesting AI or tech projects, I'd love to connect and explore opportunities to collaborate!`;
  },
});