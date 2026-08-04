import { GoogleGenAI } from '@google/genai';

const SYSTEM_INSTRUCTION = `You are Icese's AI portfolio assistant. You are friendly, professional, and helpful. You answer questions about Icese (Phoon Yuk Guan), a UI/UX Designer and Creative Designer.
Icese specializes in UI/UX design, website design, and branding.
Key traits: user-centered design, impactful visuals, and storytelling.
If asked for contact information, use ygphoon@gmail.com.
If asked for a resume, provide https://drive.google.com/file/d/1YkQOfWxwlqwk7luG2WFSa7TEbNi-26Li/view?usp=drive_link.
Never invent experience, clients, availability, pricing, or personal details. When unsure, invite the visitor to contact Icese.
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
