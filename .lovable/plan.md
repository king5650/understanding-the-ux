# Complete dashboard CRUD interactions

## What will change
- Add reusable animated create/edit/view/delete dialogs with clear destructive confirmations.
- Add compact success/error notifications after each action.
- Make the demo data on Orders, Bookings, Products, Catalog, Projects, Team, Equipment, Messages, Issues, and Settings editable in-session.
- Replace ambiguous action menus with clear view, edit, duplicate, archive/delete controls where appropriate.
- Improve forms with labels, validation, disabled submission states, and responsive layouts.
- Add subtle morphing transitions between list/card state and dialogs while respecting reduced-motion preferences.

## Technical details
- Keep this presentation-only: changes persist for the current page session, with no database or login changes.
- Centralize dialogs, confirmations, notifications, and transitions under `src/components/dashboard`.
- Preserve existing routes, visual tokens, and metadata.
- Verify key create, edit, and delete flows plus desktop/mobile layouts in the browser.
