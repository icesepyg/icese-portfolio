type ChatApiResponse = {
  reply?: string;
  error?: string;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });

  let data: ChatApiResponse = {};
  try {
    data = await response.json();
  } catch {
    // A non-JSON response usually means the Netlify function is not running locally.
  }

  if (!response.ok) {
    throw new Error(data.error || `AI request failed (${response.status})`);
  }

  if (!data.reply) {
    throw new Error('The AI returned an empty response.');
  }

  return data.reply;
};
