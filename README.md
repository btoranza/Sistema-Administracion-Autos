
# Vehicle Administration System

A small React application for managing a vehicle registry. This project was originally created as a technical exercise for **D3 Sistemas**. It was one of my first programming projects and became an important milestone: completing it helped me earn my first major job in software development.

The original exercise focused on building a simple, organized frontend rather than a visually complex product. This repository preserves that goal while documenting the implementation and the decisions behind it.

## Overview

The application displays a list of vehicles and allows the user to manage the following information:

- Brand
- Model
- Color
- License plate

All interactions happen in the browser. There is no backend, API, database, or server-side persistence.

## Features

- View all registered vehicles in a table.
- Add a new vehicle through a form.
- Edit the details of an existing vehicle inline.
- Delete a vehicle from the list.
- Validate required form fields using standard HTML form validation.
- Start with two sample vehicles so the interface can be explored immediately.

## Implementation

The project is built with React and uses a component-based structure:

- `App` owns the vehicle collection and coordinates the main actions.
- `Hero` renders the application heading.
- `AddVehicle` contains the form used to add vehicles.
- `TableHeader` renders the table headings.
- `Vehicle` renders each row and switches between display and edit modes.
- Sass is used for the application styles.

Vehicle records are kept in the frontend application state. The data model is intentionally small:

```js
{
	id: 1,
	brand: 'Peugeot',
	model: '208',
	color: 'Red',
	license: 'BQP005'
}
```

Because this is a frontend-only exercise, changes are available during the current session and are not intended to be a permanent data store.

## Getting Started

### Requirements

- Node.js and npm
- A modern web browser

### Installation

Clone the repository and move into the project directory:

```bash
git clone https://github.com/btoranza/Sistema-Administracion-Autos.git
cd Sistema-Administracion-Autos
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000) and should open automatically in the browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Runs the app in development mode. |
| `npm test` | Runs the test suite in watch mode. |
| `npm run build` | Creates an optimized production build in `build/`. |
| `npm run eject` | Exposes the Create React App configuration. This is irreversible. |

## Project Context

The requirements for the original exercise were:

1. Use React.
2. Let the user view a vehicle list with all required fields.
3. Let the user add, edit, and delete vehicles.
4. Keep the solution in the frontend; persistence and an API were not required.
5. Prioritize a simple, organized interface over visual complexity.

This project meets those requirements with a focused client-side implementation and a small set of reusable React components.

## Possible Next Steps

If this application were extended beyond the original exercise, useful improvements could include:

- Persisting records through a backend API or browser storage.
- Adding stronger validation for license plate formats and duplicate records.
- Improving responsive behavior for smaller screens.
- Adding automated tests for adding, editing, and deleting vehicles.
- Replacing sample data with a real data source.

## License

This project is shared as a portfolio and learning project.