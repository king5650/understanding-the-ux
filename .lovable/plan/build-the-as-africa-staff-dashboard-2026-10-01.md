# Build the AS-AFRICA Staff Dashboard

## Goal
Create a polished, responsive dashboard prototype from the supplied specification, using realistic demonstration data and working front-end interactions. The first screen will be the Overview dashboard rather than a marketing page.

## Pages and navigation
- Build the persistent graphite sidebar and top bar with responsive icon-rail and mobile drawer states.
- Add separate routes for Overview, Orders, Bookings, Products, Catalog, Projects, Team, Equipment, Messages, Issues, and Settings.
- Keep Settings visible only for the demonstrated Super Admin role.

## Core experience
- Overview: issue alert, five key metrics, interactive revenue range selector and chart/table view, recent orders, and upcoming bookings.
- Orders and Bookings: filters, realistic tables/calendar, status badges, and interactive detail panels.
- Products and content pages: inventory editing controls, content grids/tables, and add/edit dialogs.
- Messages, Issues, and Settings: inbox workflow, alert resolution, business details, availability, and staff-role views.
- Global search, notifications, user menu, sidebar collapse, mobile navigation, and clear loading/empty/error presentation patterns.

## Visual and interaction system
- Implement the supplied graphite, warm-concrete, terracotta, slate, success, and danger palette as semantic design tokens.
- Use Poppins for headings/navigation, Inter for body/data, and Lucide icons throughout.
- Use restrained cross-fades, count-up metrics, panel/dialog transitions, success feedback, and reduced-motion fallbacks.
- Maintain 44px touch targets, visible keyboard focus, readable contrast, and accessible chart data.

## Technical scope
- Build this as a front-end dashboard prototype with local demonstration data; authentication, persistence, uploads, payments, and live server updates will be represented in the interface but not connected to a backend yet.
- Use reusable layout, table, status, chart, modal, and panel components to keep all pages consistent.
- Add unique metadata to every page and verify the main flows at desktop and mobile sizes.
