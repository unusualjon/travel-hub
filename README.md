# Travel Hub Host

## Overview

Travel Hub Host is a tend to be modern web application that helps users plan and organize group tours. It allows users to create tour plans, manage schedules using Google Calendar integration, and collaborate with other travelers in planning their perfect journey.

## Features

### Implemented Features

- **User Authentication**

  - Google Sign-in integration
  - Secure user sessions

- **Calendar Integration**
  - Google Calendar API integration
  - Synchronized event management

### Technologies Used

- **Frontend**

  - SvelteKit - Modern web framework
  - TailwindCSS - Utility-first CSS framework
  - TypeScript - Type-safe JavaScript

- **Backend & Infrastructure**

  - Firebase Authentication - User management
  - Firebase Firestore - Database
  - Google Calendar API - Event management
  - SvelteKit API routes - Backend services

- **Development Tools**
  - Vite - Build tool and development server
  - ESLint - Code linting
  - Prettier - Code formatting

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm
- Google Cloud Platform account
- Firebase account

### Environment Setup

1. Clone the repository

```bash
git clone https://github.com/unusualjon/travel-hub.git
cd travel-hub
```

2. Install dependencies

```bash
npm install
```

3. Create `.env` file in the root directory with the following variables:

```env
AUTH_CLIENT_ID="your-google-client-id"
AUTH_CLIENT_SECRET="your-google-client-secret"
```

4. Configure Firebase

- Create a new Firebase project
- Enable Google Authentication
- Add required Google Calendar API scopes:
  - https://www.googleapis.com/auth/calendar.readonly
  - https://www.googleapis.com/auth/calendar.events

5. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
travel-hub/
├── src/
│   ├── integration/
│   │   ├── firebase.ts/    # Firebase related code
│   │   └── calendar.ts/    # Calendar integration
│   ├── lib/
│   │   ├── components/    # Reusable Svelte components
│   │   └── stores/        # Stores files
│   ├── server/            # Server-side utilities
│   ├── routes/            # SvelteKit routes
│   │    ├── api/           # API routes
│   │    ├── +layout.svelte   # Layout page
│   │    └── +page.svelte   # Index page
│   └── app.html           # HTML template
└── static/                # Static assets

```

## Development Approach

### Authentication Flow

1. Implemented Firebase Google authentication
2. Added Google Calendar API scopes to auth provider

### Calendar Integration

1. Set up OAuth2 client configuration
2. Created calendar event CRUD operations

## Challenges Faced

### Google Calendar API Integration

- **Challenge**: Managing OAuth2 flow with Firebase authentication
- **Learning**: Better understanding of OAuth2 flows and token management

## Future Enhancements

### Short-term Improvements

1. **Enhanced Event Management**

   - View and create tour events
   - Drag-and-drop event scheduling
   - Recurring event support
   - Event categories and tags

2. **Collaboration Features**

   - Real-time chat
   - Shared itinerary editing
   - Comment system on events

3. **User Experience**
   - Offline support
   - Mobile-responsive design improvements
   - Dark mode support

### Long-term Vision

1. **Advanced Planning Tools**

   - AI-powered itinerary suggestions
   - Budget tracking and management
   - Weather integration for better planning

2. **Social Features**

   - User profiles and connections
   - Tour group discovery
   - Experience sharing platform

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Google Calendar API documentation
- Firebase Authentication team
- SvelteKit community
