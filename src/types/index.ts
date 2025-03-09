export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Board {
  id: string;
  name: string;
  description?: string;
  owner: User;
  members: User[];
  createdAt: string;
  updatedAt: string;
  starred?: boolean;
}

export interface BoardColumn {
  id: string;
  name: string;
  boardId: string;
  order: number;
  tasks: Task[];
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  columnId: string;
  order: number;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
  labels: string[];
  creator: User;
  assignees: User[];
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: string;
  content: string;
  taskId: string;
  author: User;
  createdAt: string;
}

export interface Attachment {
  id: string;
  name: string;
  url: string;
  size: number;
  type: string;
  taskId: string;
  uploadedBy: User;
  createdAt: string;
} 