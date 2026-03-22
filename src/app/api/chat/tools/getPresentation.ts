import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
description:
'This tool returns a concise personal introduction of Naman Nanda. It is used to answer the question "Who are you?" or "Tell me about yourself".',

parameters: z.object({}),

execute: async () => {
return {
presentation:
"I'm Naman Nanda, a Machine Learning and AI enthusiast passionate about building intelligent systems and real-world applications. I work with Python, Deep Learning, NLP, and backend technologies to create scalable AI solutions. I enjoy solving complex problems, exploring new technologies, and continuously improving my skills as a developer.",
};
},
});
