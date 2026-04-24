# Auth Dash MS

A modern Next.js application featuring robust authentication and a protected dashboard with a server-side data table.

## 🚀 Features

### 🔐 Authentication
- **Secure Login**: Validates credentials via mock API and stores sessions in HTTP-only cookies.
- **Route Protection**: Advanced implementation using `proxy.ts` (following the new Next.js 16 naming convention) ensures all `/dashboard` routes are protected.
- **Auto-Redirect**: Seamlessly redirects unauthorized users to `/login` with return URL support.
- **Logout**: Complete session termination and cookie clearing.

For a deeper dive into the architecture, see the [Project Explanation](EXPLANATION.md).

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

## 🔐 Login Credentials

To access the dashboard, use the following credentials:

- **Email**: `admin@example.com`
- **Password**: `password123`

## 🚶 Step-by-Step Instructions

1. **Access Login**: Open your browser and navigate to `http://localhost:3000/login`.
2. **Enter Credentials**: Use the email and password provided above.
3. **Explore Dashboard**: After successful login, you will be redirected to the `/dashboard`.
4. **Interact with Table**:
   - Use the **Search** bar to filter users by name or email.
   - Click on **Table Headers** (ID, Name, Email) to sort data.
   - Use the **Pagination** buttons at the bottom to navigate between pages.
5. **Route Protection**: Try navigating directly to `/dashboard` in a private window to see the automatic redirect to login in action.
6. **Logout**: Click the **Log out** button in the sidebar to securely end your session.

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
