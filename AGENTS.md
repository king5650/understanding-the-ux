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

- Keep dashboard routes presentation-only with shared demo data until a backend is explicitly connected, so the prototype remains usable without persistence.
- Centralize dashboard navigation and shared interface primitives under `src/components/dashboard`, so role-aware shell behavior stays consistent across routes.
- Keep demo CRUD state in dashboard presentation components and reuse the shared dialog/notification kit, because the prototype must remain interactive without suggesting server persistence.
