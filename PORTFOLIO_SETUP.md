# Icese Portfolio — Setup and Content Editor

## Deploy on Netlify

For the editable portfolio workflow, upload this source project to a GitHub repository and connect that repository to Netlify.

Netlify build settings:

- Build command: `npm run build`
- Publish directory: `dist`

The included `netlify.toml` already contains these settings.

## Enable the visual content editor

The editor is available at:

`https://your-site-name.netlify.app/admin/`

In Netlify:

1. Open **Project configuration → Identity** and enable Netlify Identity.
2. Set registration to **Invite only**.
3. Enable **Git Gateway**.
4. Invite your own email address as an Identity user.
5. Accept the invitation, open `/admin/`, and sign in.

> Note: Netlify has deprecated Git Gateway for new setups, although existing configurations continue to work. This project keeps Git Gateway because it provides the simplest private form-based editor on Netlify. If your new Netlify account does not offer Git Gateway, switch `public/admin/config.yml` to Decap's GitHub backend and install GitHub under **Project configuration → Access & security → OAuth → Authentication providers**.

The editor lets you:

- Add, edit, reorder, or remove work experiences.
- Manage all existing portfolio projects and add new ones.
- Upload project cover images.
- Change project categories, tools, descriptions, links, role, and year.
- Fill in the reusable Challenge → Solution → Outcome case-study template.
- Build a project gallery and add longer formatted case-study content.

Use **Work Experiences → Add** or **Portfolio Projects → Add** inside `/admin/`. Upload images directly in the image fields, complete the form, and press **Publish**. Publishing commits `content/managed.json` and uploaded media to the connected repository, which triggers a fresh Netlify deployment.

Saving in the editor updates the GitHub project and triggers a new Netlify deployment automatically.

## Local development

Install dependencies, then start the development server:

`npm install`

`npm run dev`

For a local CMS editing session, run Decap's local proxy in a second terminal:

`npx decap-server`
