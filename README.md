# Cruisebound

A responsive, deployed web app that uses React, Next, Zustand, NPM, and Tailwind CSS. A user can view available sailings, sort them a few different ways, and apply some filter. Results are
paginated

## Getting Started

The app is deployed to [Vercel](https://cruisebound-takehome-mk.vercel.app/), but you can run it locally also.

1. Clone this repository
1. Use a compatible `node` and `NPM` version as described in `package.json` (currently using `node v20.9.0` and NPM `v10.1.0`)
1. From the root directory of the project, run `npm install`
1. Stand up the app on the dev server with `npm run dev`
1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- The app fetches a static list of sailings from a test endpoint which are then rendered on teh screen
- Results can be filtered: filter menu defaults to open for both, can be toggled open/closed via `->` icon in the upper left of screen
- Results can be sorted: sort menu in upper right of screen, applies to complete result set
- Results are paginated: max ten results per page, moving to a new page visually scrolls the user to the top of the page

## Futures

- Filter menu
  - Build focus trap on mobile menu to prevent scrolling through results when side menu is open
  - Sticky header
  - Render "active filters" as a sort of chip set where you can clear some filters and leave others i.e. not all or nothing filter removal
  - Build predefined filter options e.g. map through results set, extract all unique names of Cruiselines, and show them in their own check box section. A user could check the box for both MSC and Carnival and see only sailings which match.
- Accessiblity
  - Quality of life improvements for keyboard navigation through sailings - screen reader could announce more content of the card
- Components
  - Genericise slider/side menu to render any children as content
  - Reimplement grid on sailings card to maximise available space
  - Manage long itineraries - ideally would work with someone on design with this, my first proposal would be to use an ellipsis between first and last entries of long itineraries
  - Build some sort of interactive map where someone can see the Departure/Return ports as well as all the stops
  - Break down Monolithic components like Sidebar and Card into landmark sections e.g. Card could be sections like "Date and Image", "Sailing and Cruiseline", "Reviews", "Itinerary", and "Price and Actions"

