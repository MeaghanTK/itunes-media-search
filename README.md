# iTunes Media Search Application

## Description

This is a simple, user-friendly React application that allows users to search for various types of media from the iTunes API, such as music, movies, podcasts, and more. Users can filter search results by media type and add their favorite items to a favourites list, which can be managed within the app. The project uses JWT-based authentication and protects the search functionality with a token verification system.

## Purpose

The purpose of this application is to provide a convenient interface for searching iTunes media content while demonstrating the use of React components, Axios for API requests, and token-based authentication. It also showcases state management for a dynamic favourites list, with results and favourites displayed in an attractive, Apple Music-inspired UI.

## Key Features

- **Search Media**: Users can search iTunes for media content based on a search term and media type.
- **Media Type Selection**: Choose from options like music, movies, podcasts, ebooks, etc.
- **Favourites List**: Add and remove media items from a dynamic favourites list.
- **JWT Authentication**: Token-based authentication protects the search route.
- **Clean and Responsive UI**: Styled with Apple Music's color scheme, ensuring a sleek and user-friendly experience.

## Backend Explanation

The backend is built using Node.js and Express, serving as the API layer for the application. Key components include:

- **Routes**:

  - `/authRoute`: A simulated login route that generates a JWT token when a user logs in. This token is required for accessing protected routes.
  - `/itunes`: A protected route that requires a valid JWT token in the request headers. It fetches data from the iTunes Search API based on user-provided search terms and media types.

- **JWT Authentication**: The application uses JSON Web Tokens (JWT) for secure authentication. When a user logs in, a token is generated and sent back to the client. This token must be included in the headers of any subsequent requests to access protected routes.

- **Middleware**:

  - A middleware function verifies the JWT token to ensure that only authenticated users can access certain endpoints.

- **Error Handling**: The backend includes error handling for common issues, such as unauthorized access or failed data retrieval from the iTunes API.

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm (Node Package Manager)
- Git (optional, for cloning the repository)

### Instructions

Follow these steps to install and run the application locally:

1. **Make use of the zipped folder**

- Unzip folder

2. **Open CMD to run backend and frontend**

- Open CMD and type
  `cd backend'
- Then type NPM start

Server should be running

- Open CMD and type
  `cd itunes-search'
- Then type NPM start

3. **Have fun with the app!**
