# Auth Dash MS

A modern Next.js application featuring robust authentication and a protected dashboard with a server-side data table.

## 🚀 Features

### 🔐 Authentication
- **Secure Login**: Validates credentials via mock API and stores sessions in HTTP-only cookies.
- **Route Protection**: Advanced middleware implementation (using `proxy.ts`) ensures all `/dashboard` routes are protected.
- **Auto-Redirect**: Seamlessly redirects unauthorized users to `/login` with return URL support.
- **Logout**: Complete session termination and cookie clearing.

### 📊 Dashboard & Data Table
- **Server-side Processing**: High-performance data fetching with server-side pagination, sorting, and filtering.
- **TanStack Table v8**: Leveraging industry-standard table logic for state management.
- **Responsive Design**: Fully mobile-responsive layout with a collapsible sidebar.
- **Search & Filter**: Real-time server-side search across multiple fields.

### 🛠 Tech Stack
- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Table Logic**: [TanStack Table v8](https://tanstack.com/table/v8)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🛠 Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd auth-dash-ms
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📂 Project Structure

- `app/api/`: Serverless API routes for auth and user data.
- `app/(auth)/`: Authentication related pages (Login).
- `app/(dashboard)/`: Protected dashboard pages and layout.
- `proxy.ts`: Core middleware logic for route protection and proxying.
- `lib/`: Shared utility functions and authentication helpers.

## 📝 Coding Standards
- **Strict TypeScript**: Ensures type safety across the entire codebase.
- **Component-based Architecture**: Reusable UI components for tables and layouts.
- **Clean Code**: Adherence to consistent naming conventions and modular design.

---
Built with ❤️ for Metizsoft.
Developed by: Jignesh Zala
