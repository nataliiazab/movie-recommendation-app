# Movie Recommendation App

A **Movie Recommendation App** that allows users to browse a curated list of movies. Built with a React-based frontend and an Express.js backend powered by Prisma ORM and PostgreSQL.

---

## More Details

### Architecture Overview

The app consists of two primary components:

1. **Client**  
   A React application for the user interface hosted on **Vercel**.

2. **Server**  
   An Express.js server for API endpoints hosted on **Vercel**, using **Prisma** for database interactions.

### API Workflow

- **Frontend** communicates with the backend through RESTful API endpoints.
- Backend fetches data from a **PostgreSQL** database.
- CORS middleware enables seamless client-server communication.

---

## Database Schema

The application uses a PostgreSQL database with the following schema:

### Movie Table

| **Column**    | **Type**     | **Description**             |
| ------------- | ------------ | --------------------------- |
| `id`          | Integer (PK) | Unique identifier for movie |
| `title`       | String       | Movie title                 |
| `description` | String       | Movie description           |
| `genre`       | String       | Genre of the movie          |
| `year`        | Integer      | Release year                |
| `rating`      | Float        | Average user rating         |
| `image`       | String       | URL of the movie poster     |

---

## Live Demo

- **Client**: [movie-recommendation-app-client.vercel.app](https://movie-recommendation-app-client.vercel.app/)
- **Server**: [movie-recommendation-app-server.vercel.app](https://movie-recommendation-app-server.vercel.app/)

---

## Local Development

### Frontend Setup

1. Navigate to the `client` folder:
   ```bash
   cd ./client
   ```
2. Start the development server:

   ```bash
   npm start
   ```

View the app in your browser:
http://localhost:3000

### Backend Setup

Navigate to the server folder:

```bash
cd ./server
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Access the server locally:

Movies endpoint: http://localhost:4000/movies

### Reseeding the Database

To reseed the database on the server:

Navigate to the server folder:

```bash
cd ./server
```

Run the following Prisma command:

```bash
npx prisma migrate reset
```

This will drop the database, recreate it, and populate it with seed data.

## Tech Stack

### Frontend

- React: For building the user interface.
- Axios: For API requests.
- Tailwind CSS: For styling.

### Backend

-Express.js: For server-side API endpoints.
-Prisma: ORM for database interaction.
-PostgreSQL: Relational database.
CORS Middleware: For handling cross-origin requests.

##

Developed by [Nataliia Zablotska](https://www.linkedin.com/in/nataliia-zablotska/)
