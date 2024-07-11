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
**Create 2 new modules**:

#### 1. Screenings:

Step 1: Create a new migration file to add the screenings table. Define the screenings table with the necessary data: screening id, movie id, screening timestamp(s), total tickets allocation.
Run the migration to update the database schema.

Step 2: Start writing TTD for screenings by writing tests what the entire screening module should do. Start by testing endpoints: GET, POST, PATCH. Along the way use the technique - make it fail, make it work, make it right - by writing tests firsts, then writing the straightforward code just to pass it and then finally refactor it. Meaning that along writing tests create a controller file to write the code for handling endpoints.

Step 3: Similar approach use for writing TTD for repository as in step 2 again starting from tests. Repository file should contain database operations: get all screenings that are not in the past, getting screenings by movie ID, creating and updating screenings.

Step 4: Create schema that ensures user's inputs validation. Again - start from writing tests as in the previous two steps.

#### 2. Tickets:

Step 1: Create a new migration file to add the tickets table. Define the tickets table with the necessary data: ticket id, user id, screening id.
ickets.
Run the migration to update the database schema.

Step 2: Write TDD tests for the tickets module. Tests for the endpoints: GET, POST. Create a controller file to handle these endpoints and write straightforward code to pass the tests. Refactor as needed.

Step 3: Write TDD tests for the repository. Tests for database operations: get all bookings for a user, create a booking for a screening. Implement the repository methods to pass the tests, then refactor the code.

Step 4: Write tests to ensure the schema validates user inputs correctly. Implement the schema to pass the tests.


**Roles**:

#### Administrators':

Create new viewing screenings for watching a movie.

#### Users':

Get a list of movies with their title and year by providing a list of their IDs.
Get a list of screenings available for booking.
Get a list of booking (tickets).
Create a booking (ticket).

NOTE: For this application permissions and authentication part of the application will be ignored. To limit our scope, we will assume that your endpoints will be reached only by users who have the correct permissions to do so. Therefore, administrators and users do not have any functional differences.


