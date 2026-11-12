# LiveWhitePaper

This template turns your white paper into a live website. You write in Markdown, and every time you commit a change, GitHub rebuilds and republishes your site automatically.

## Setting up your copy

Do these steps once, at the start of the project.

1. **Make your copy.** At the top of this page, click **Use this template** › **Create a new repository**. Give it a short name in lowercase, with hyphens instead of spaces (for example, `zombie-white-paper`). Leave it **Public**, because GitHub Pages only publishes public repositories on a free account.
2. **Turn on GitHub Pages.** In your new repository, go to **Settings** › **Pages**. Under **Build and deployment** › **Source**, choose **GitHub Actions**.
3. **Publish for the first time.** Go to the **Actions** tab, click **Deploy to GitHub Pages** on the left, then click **Run workflow** › **Run workflow**. Wait about 2–3 minutes for two green checks.

Your site is now live at:

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

> **Seeing a skipped or failed run in Actions?** That's the automatic run from when you created your copy, before Pages was turned on. It's expected. Step 3 fixes it.

## Writing your white paper

Your white paper is the file `whitepaper.md` in the `docs` folder.

1. Open `whitepaper.md` and click the pencil icon to edit.
2. Write in Markdown. Use the **Preview** tab to check how it looks.
3. Click **Commit changes** when you're done. Your site updates automatically in a couple of minutes.

To see who wrote or changed each line, open the file and click **Blame**.

## Tips

- **Leave a blank line** between paragraphs, after headings, and after tables. Without one, text runs together or gets pulled into a table.
- **Put a space after `#`** in headings: `# Title`, not `#Title`.
- **Name new files in lowercase, with hyphens instead of spaces:** `costs-survey.md`, not `Costs Survey.md`. Capital letters can break your links when the site is published.
- **Try writing one sentence per line.** The site still shows normal paragraphs, but changes and Blame become much easier to read.

## If something goes wrong

Click the red X in the **Actions** tab, then click the step with the red X to see the error.

| Error says | What to do |
| --- | --- |
| `Failed to create deployment (status: 404)` or `Ensure GitHub Pages has been enabled` | Pages isn't turned on. Do step 2, then rerun the workflow. |
| `Docusaurus found broken links` | A link points to a page that doesn't exist. Check the listed links for typos and capital letters. |
| Your site shows a 404 page right after a green check | Wait a minute and refresh. New sites can take a moment to appear. |

## Previewing on your own computer (optional)

If you've cloned your repository with GitHub Desktop and installed [Node.js](https://nodejs.org), open a terminal in the project folder and run:

```
npm install
npm start
```

A preview of your site opens in your browser and updates as you save.
