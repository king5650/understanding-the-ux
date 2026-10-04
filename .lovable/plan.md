# Complete the dashboard motion pass

## Goal
Add purposeful motion to the existing dashboard without changing its layout, demo-only data, or CRUD behavior.

## Changes
- Add Motion for React as the animation library.
- Make Order and Booking selections visually expand from their source row/calendar item into the detail surface, with matching close transitions.
- Make the New Order, New Booking, and Add Product controls morph into their dialogs rather than using the same generic entrance everywhere.
- Animate numeric stat values from zero to their displayed value while preserving currency, separators, decimals, suffixes, and accessibility.
- Keep existing CSS transitions as a fallback and honor reduced-motion preferences.
- Preserve keyboard focus, Escape-to-close, validation, confirmations, notifications, and session-only demo state.

## Verification
- Check create/edit/detail/close flows for Orders, Bookings, and Products on desktop and mobile.
- Confirm count-up values settle on the exact displayed values.
- Confirm reduced-motion mode disables meaningful movement.
- Check the current build and runtime logs remain clean.
