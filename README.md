<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Icese Portfolio

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1_0ylDo04betJAkTkWiebEmhr7i5z0ESU

## Make the AI assistant work

The Gemini request runs in a Netlify Function, so the API key is never included in the browser bundle.

1. Create a Gemini API key in Google AI Studio.
2. In Netlify, open **Site configuration → Environment variables**.
3. Add `GEMINI_API_KEY` with the API key as its value (all scopes).
4. Trigger a new deployment.

Do not create a `VITE_GEMINI_API_KEY` variable: variables prefixed with `VITE_` are public in the browser.

## Run locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Install the Netlify CLI if needed: `npm install -g netlify-cli`
3. Create `.env` containing `GEMINI_API_KEY=your_key_here` (the file is gitignored).
4. Run the site and its function together: `netlify dev`

`npm run dev` still starts the Vite UI only; use `netlify dev` when testing the chatbot.

## Update projects without editing code

After deployment, open `https://your-domain.com/admin/`. The portfolio dashboard provides forms for work experiences and projects, including cover images, galleries, filters, tools, links, and full case studies. See `PORTFOLIO_SETUP.md` for the one-time authentication setup.
