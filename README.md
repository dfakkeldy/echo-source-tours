# Echo Source Tours

Curated, annotated walkthroughs of the [Echo](https://github.com/dfakkeldy/Echo)
codebase. Each tour is "lecture notes" snapshotted from a specific Echo commit.

## Develop

```bash
npm install
npm run dev      # local preview
npm run build    # production build + internal-link validation
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to
GitHub Pages. One-time setup: create the GitHub repo, push, then enable
**Settings → Pages → Source: GitHub Actions**.

## Refreshing a tour

Tours are pinned to an Echo commit via `sourceCommit` in each MDX file's front-matter.
When the underlying subsystem changes, re-read the source at the new commit, update the
code blocks and prose, and bump `sourceCommit` / `sourceDate`. There is no automated
pipeline — this is intentional.
