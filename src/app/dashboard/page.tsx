'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Search, Clock, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BoardCard } from '@/components/dashboard/board-card';
import { CreateBoardDialog } from '@/components/dashboard/create-board-dialog';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { EmptyState } from '@/components/dashboard/empty-state';
import { useToast } from '@/components/ui/use-toast';
import { Board } from '@/types';

// Mock data for development - will be replaced with API calls
const mockBoards: Board[] = [
  {
    id: '1',
    name: 'Product Development',
    description: 'Roadmap and feature planning for our product',
    ownerId: '1',
    owner: {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'USER',
      avatar: 'https://avatars.githubusercontent.com/u/1234567',
    },
    members: [],
    columns: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Marketing Campaign',
    description: 'Q3 marketing initiatives and tracking',
    ownerId: '1',
    owner: {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'USER',
      avatar: 'https://avatars.githubusercontent.com/u/1234567',
    },
    members: [],
    columns: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export default function DashboardPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [boards, setBoards] = useState<Board[]>(mockBoards);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  // Filter boards based on search query
  const filteredBoards = boards.filter(
    (board) =>
      board.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      board.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateBoard = (newBoard: Board) => {
    setBoards([newBoard, ...boards]);
    toast({
      title: 'Board created',
      description: `"${newBoard.name}" has been created successfully.`,
    });
    setIsCreateDialogOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      
      <main className="flex-1 container mx-auto py-6 px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">My Boards</h1>
          <Button onClick={() => setIsCreateDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Create Board
          </Button>
        </div>

        <div className="mb-6">
          <Input
            placeholder="Search boards..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
            icon={<Search className="h-4 w-4 text-muted-foreground" />}
          />
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Boards</TabsTrigger>
            <TabsTrigger value="recent">
              <Clock className="mr-2 h-4 w-4" />
              Recent
            </TabsTrigger>
            <TabsTrigger value="starred">
              <Star className="mr-2 h-4 w-4" />
              Starred
            </TabsTrigger>
            <TabsTrigger value="team">
              <Users className="mr-2 h-4 w-4" />
              Team
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="w-full">
            {filteredBoards.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredBoards.map((board) => (
                  <motion.div
                    key={board.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BoardCard
                      board={board}
                      onClick={() => router.push(`/board/${board.id}`)}
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <EmptyState
                title="No boards found"
                description="Create a new board to get started"
                action={
                  <Button onClick={() => setIsCreateDialogOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Board
                  </Button>
                }
              />
            )}
          </TabsContent>

          {/* Other tab contents can be implemented with similar patterns */}
          <TabsContent value="recent">
            <EmptyState
              title="No recent boards"
              description="Boards you've recently viewed will appear here"
            />
          </TabsContent>
          <TabsContent value="starred">
            <EmptyState
              title="No starred boards"
              description="Star boards to add them to this list"
            />
          </TabsContent>
          <TabsContent value="team">
            <EmptyState
              title="No team boards"
              description="Boards shared with your team will appear here"
            />
          </TabsContent>
        </Tabs>
      </main>

      <CreateBoardDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
        onCreateBoard={handleCreateBoard}
      />
    </div>
  );
} 