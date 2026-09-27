# Echo Source Tours

Astro Starlight site with annotated walkthroughs of the
[Echo](https://github.com/dfakkeldy/Echo) codebase, published to GitHub Pages
on every push to `main`.

```bash
npm install
npm run dev
npm run build    # also validates internal links
```

Tours live in `src/content/docs/` as MDX. Each one is pinned to an Echo commit
by `sourceCommit` and `sourceDate` frontmatter. When refreshing a tour, re-read
Echo at the new commit, update the code and prose, then bump both fields.
There's deliberately no automated refresh.
