<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the public tattoo site as distinct TanStack routes with shared navigation in `src/components/site-layout.tsx`, because ad visitors need direct, shareable destinations.
- Treat Instagram as the source of current portfolio images and availability; the site links to the public profile rather than inventing or scraping posts, because public profile HTML does not expose reliable post media.
- Keep shared WhatsApp and Google Maps destinations in `src/components/site-layout.tsx`, because every public page uses the same verified contact and location.
