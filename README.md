# QuickFlow Frontend

QuickFlow is an enterprise-grade project management application with agentic capabilities, designed to streamline team collaboration and task management.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **UI Components**: Custom components with Tailwind CSS
- **State Management**: React Query + Zustand
- **Authentication**: JWT-based auth with Next-Auth
- **Styling**: Tailwind CSS with custom theming
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form with Zod validation

## Features

- **Kanban Boards**: Visualize your workflow with customizable Kanban boards
- **Team Collaboration**: Assign tasks, comment, and collaborate in real-time
- **AI-Powered Features**: Agentic features that automatically create tasks from conversations (coming soon)
- **Responsive Design**: Works on desktop and mobile devices
- **Dark/Light Mode**: Theme support with system preference detection

## Project Structure

```
src/
├── app/                # Next.js app router pages
├── components/         # Reusable UI components
│   ├── dashboard/      # Dashboard-specific components
│   ├── providers/      # Context providers
│   └── ui/             # Core UI components
├── lib/                # Utility functions and shared logic
└── types/              # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Backend server running

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/quickflow.git
cd quickflow-frontend
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Create a `.env` file in the root directory with the following variables:
```
NEXT_PUBLIC_API_URL=http://localhost:3030
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

The application will be available at http://localhost:3000 (or another port if 3000 is in use).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.