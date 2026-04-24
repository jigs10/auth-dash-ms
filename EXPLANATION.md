# Project Explanation

This document provides a detailed overview of the technical decisions and architectural patterns used in the Auth Dash MS project.

## 🏗 Architecture Overview

The application is built using the **Next.js 16 App Router**, focusing on modularity, type safety, and efficient server-side processing.

### 🛡 Authentication System
- **Proxy Middleware**: In accordance with the naming conventions of the latest version of Next.js, the core route protection logic is located in `proxy.ts`. This acts as the gateway for the `/dashboard` routes.
- **Secure Sessions**: Authentication is handled via a mock API that issues a secure cookie. This prevents client-side script access to the session token (XSS protection).
- **Route Protection**: The middleware automatically intercepts requests to protected paths and redirects unauthenticated users to the login page.

### 📊 Data Processing
- **Server-Side Rendering (SSR)**: The dashboard utilizes React Server Components for the initial layout, while the data table uses client-side state management for real-time interactivity.
- **API Strategy**: Data fetching is handled through internal Next.js API routes (`/api/users`), which support advanced querying:
  - **Pagination**: Optimized to fetch only the necessary subset of data.
  - **Sorting**: Dynamic column-based sorting processed on the server.
  - **Filtering**: Case-insensitive search across multiple user fields.

## 🛠 Tech Stack Decisions

- **TanStack Table v8**: Chosen for its headless architecture, allowing for maximum flexibility in UI design while providing powerful state management for complex table features.
- **Tailwind CSS**: Used for rapid UI development with a focus on responsiveness and modern aesthetics.
- **Lucide React**: Provides a consistent and lightweight icon set.

## 📂 Key Files
- `proxy.ts`: Route protection and naming convention handler.
- `app/api/users/route.ts`: Core data processing logic for the table.
- `app/components/dashboard/UserTableContainer.tsx`: Main UI logic for the interactive table.
