# Pidgin Wiki Documentation

The official documentation for the [Pidgin Wiki](https://github.com/PidginWiki) project,
published at [docs.pidgin.wiki](https://docs.pidgin.wiki).

Built with [Astro Starlight](https://starlight.astro.build/).

## Develop

```sh
pnpm install
pnpm dev        # local dev server
pnpm build      # production build to ./dist
pnpm preview    # preview the production build
```

If `pnpm build` reports ignored build scripts, run the build directly with
`pnpm exec astro build`; the native dependencies are optional and the build succeeds
without them.

## Structure

Content lives in `src/content/docs`:

- `introduction.md` — project overview and goals
- `architecture/` — Bandolo, Langwa, Pidgin.Wiki, and the overview
- `project/` — requirements (SRS), roadmap, data governance and licensing
- `contribute/` — how to contribute

## Deploy

Pushing to `master` triggers the GitHub Pages workflow in
`.github/workflows/deploy.yml`. The custom domain is set via `public/CNAME`.

## License

Documentation content is licensed CC-BY-4.0. See [LICENSE](./LICENSE).
