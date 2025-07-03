# Pioneer Sounds Equipment Rental System

## Overview

This is a full-stack web application for Pioneer Sounds, an events equipment rental company specializing in sound, lighting, video, and staging solutions. The application serves as both a marketing website and a customer inquiry management system.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type safety
- **Vite** as the build tool for fast development and optimized production builds
- **Tailwind CSS** for utility-first styling with custom design tokens
- **shadcn/ui** component library for consistent UI components
- **React Router (wouter)** for client-side routing
- **TanStack Query** for server state management and caching
- **React Hook Form** with Zod validation for form handling

### Backend Architecture
- **Express.js** with TypeScript for the REST API server
- **In-memory storage** for development (MemStorage class)
- **Drizzle ORM** configured for PostgreSQL (ready for production deployment)
- **Zod** for runtime type validation and schema definition
- **ESM modules** throughout the application

### Database Design
The application uses Drizzle ORM with PostgreSQL schemas defined in `shared/schema.ts`:

- **Users table**: Basic user management (id, username, password)
- **Contact inquiries table**: Customer inquiries with event details (name, email, phone, event type, event date, message, created timestamp)

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Landing area with call-to-action buttons
- **Services Section**: Equipment categories display
- **Equipment Gallery**: Professional equipment showcase
- **Portfolio Section**: Past events and client testimonials
- **Contact Section**: Inquiry form with validation
- **Footer**: Company information and social links

### Backend Services
- **Contact API**: Handles inquiry submission and retrieval
- **Storage Interface**: Abstraction layer for data persistence
- **Route Registration**: Centralized API endpoint management

### Shared Types
- Type-safe schemas using Drizzle and Zod
- Shared types between frontend and backend
- Runtime validation for API requests

## Data Flow

1. **User Interaction**: Customer fills out contact form
2. **Form Validation**: Client-side validation using React Hook Form + Zod
3. **API Request**: TanStack Query handles the HTTP request
4. **Server Validation**: Backend validates request using shared Zod schemas
5. **Data Storage**: Inquiry stored via Storage interface
6. **Response Handling**: Success/error feedback via toast notifications

## External Dependencies

### UI & Styling
- **@radix-ui**: Headless UI components for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

### State Management
- **TanStack Query**: Server state management
- **React Hook Form**: Form state management

### Database & Validation
- **Drizzle ORM**: Type-safe database toolkit
- **Zod**: Schema validation library
- **@neondatabase/serverless**: Neon database connector

### Development Tools
- **Vite**: Build tool with HMR
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler

## Deployment Strategy

### Development
- Vite dev server with HMR for frontend
- tsx for running TypeScript backend in development
- In-memory storage for rapid development

### Production Build
- Frontend: `vite build` outputs static files to `dist/public`
- Backend: `esbuild` bundles server code to `dist/index.js`
- Database: Drizzle migrations for PostgreSQL setup

### Environment Configuration
- PostgreSQL database via `DATABASE_URL` environment variable
- Drizzle configuration points to `./shared/schema.ts`
- Production-ready with ESM module support

## Recent Changes
- July 03, 2025: Created multi-page website structure with dedicated pages for About, Services, Equipment, Portfolio, and Contact
- Updated navigation to use proper routing with wouter instead of smooth scrolling
- Added custom Pioneer Sounds logo component based on professional audio branding
- Updated contact information with real details from company PDF (Kiambu Town location, phone numbers, email)
- Removed equipment gallery from home page as requested
- Removed all database functionality - contact form now works without database storage
- Implemented responsive design across all pages
- Added comprehensive content based on PDF information including artists, venues, and client testimonials
- Integrated authentic wedding photos from PDF into portfolio section
- Created dedicated wedding gallery showcasing real Safari Park and Windsor Golf Club events
- Updated homepage portfolio section with authentic wedding imagery

## Changelog
- July 03, 2025. Initial setup
- July 03, 2025. Multi-page restructure and content integration

## User Preferences

Preferred communication style: Simple, everyday language.
Website structure: Multi-page layout with separate dedicated pages
Content: Use real company information and images from PDF
Navigation: Page-based routing instead of single-page scrolling