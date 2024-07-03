## Setup

**Note:** For this exercise, we have provided an `.env` file with the database connection string. Normally, you would not commit this file to version control. We are doing it here for simplicity and given that we are using a local SQLite database.

## Migrations

Before running the migrations, we need to create a database. We can do this by running the following command:

```bash
npm run migrate:latest
```

## Running the server

In development mode:

```bash
npm run dev
```

In production mode:

```bash
npm run start
```

## Updating types

If you make changes to the database schema, you will need to update the types. You can do this by running the following command:

```bash
npm run generate-types
```

## Overview

This application allows users to book tickets for movies and administrators to manage screenings.

### Tasks:
**Create 2 new endpoints**:

#### 1. Screenings:

Step 1: Create a new migration file to add the screenings table. Define the screenings table with the necessary columns. Run the migration to update the database schema.
Step 2: Create controller for screenings: POST endpoint to create new screenings, GET endpoint to retrieve all available screenings for booking.
Step 3: Create repository for screenings. Methods needed: creating a new screening, getting all screenings that are not in the past, getting movie ID from the movies table by title and year.



#### 2. Tickets:

Step 1: Create a new migration file to add the screenings table.
Step 2: Create controller for tickets.
Step 3: Create repository for tickets.


(work still in progress)