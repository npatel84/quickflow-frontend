import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          QuickFlow
        </h1>
        <p className="text-2xl mb-12 text-muted-foreground">
          Enterprise-grade project management with agentic capabilities
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/login" 
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500"
            )}
          >
            Get Started
          </Link>
          <Link 
            href="/demo" 
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" })
            )}
          >
            View Demo
          </Link>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Kanban Boards</h3>
          <p className="text-muted-foreground">
            Visualize your workflow with customizable Kanban boards. Drag and drop tasks between columns.
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Team Collaboration</h3>
          <p className="text-muted-foreground">
            Assign tasks, comment, and collaborate in real-time with your team members.
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
          <p className="text-muted-foreground">
            Coming soon: Agentic features that automatically create tasks from your conversations.
          </p>
        </div>
      </div>
    </main>
  );
} 