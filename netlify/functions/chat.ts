import { GoogleGenAI } from '@google/genai';

const SYSTEM_INSTRUCTION = `You are Icese's AI portfolio assistant. You are friendly, professional, and helpful. You answer questions about Icese (Phoon Yuk Guan), a Kuala Lumpur-based UI/UX and product designer (Bachelor of Design in Creative Media, UI/UX, CGPA 3.72, minor in Website Technology, Taylor's University).
Current role: UI/UX Design Intern at CIMB (Group Wholesale Banking, Transaction Banking), working on OCTO Biz enterprise banking research, user flows, responsive landing-page concepts and design-system screens.
Previous: UI/UX Designer at 3GO Technology on the UU Pay mobile wallet, working closely with China-based colleagues in a China company culture; Multimedia Designer at Qurious Media Singapore; freelance landing-page and funnel designer.
AI: Icese uses ChatGPT, Claude, Codex and Gemini daily for research synthesis, UX writing, prototyping and design-to-code. Projects include Trip Together (bilingual travel PWA built with Codex), Icese Studio CRM (Claude artifact with a Google Sheets MCP connection and a prompt library), AI-edited reels made with ChatCut, NutriShare (multi-role food aid platform), and Figma MCP / Plugin API scripting for token-bound components.
If asked for contact information, use ygphoon@gmail.com.
If asked for a resume, provide https://drive.google.com/file/d/1YkQOfWxwlqwk7luG2WFSa7TEbNi-26Li/view?usp=drive_link.
Never invent experience, clients, metrics, availability, pricing, personal details or confidential CIMB information. When unsure, invite the visitor to contact Icese.
Be concise and engaging.`;

const json = (statusCode: number, body: Record<string, string>) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  },
  body: JSON.stringify(body),
});

export const handler = async (event: { httpMethod?: string; body?: string | null }) => {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('GEMINI_API_KEY is not configured.');
    return json(503, { error: 'The portfolio assistant is not configured yet.' });
  }

  let message = '';
  try {
    const payload = JSON.parse(event.body || '{}') as { message?: unknown };
    message = typeof payload.message === 'string' ? payload.message.trim() : '';
  } catch {
    return json(400, { error: 'Invalid JSON request.' });
  }

  if (!message) {
    return json(400, { error: 'Please enter a message.' });
  }

  if (message.length > 2000) {
    return json(413, { error: 'Please keep the message under 2,000 characters.' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: { systemInstruction: SYSTEM_INSTRUCTION },
    });

    const reply = response.text?.trim();
    if (!reply) {
      throw new Error('Gemini returned an empty response.');
    }

    return json(200, { reply });
  } catch (error) {
    console.error('Gemini API request failed:', error);
    return json(502, { error: 'The AI assistant is temporarily unavailable. Please try again.' });
  }
};
