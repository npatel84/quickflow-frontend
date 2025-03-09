import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: ReactNode;
  action?: ReactNode;
}

export function EmptyState({ title, description, icon, action }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center"
    >
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="mb-2 text-lg font-medium">{title}</h3>
      <p className="mb-6 text-sm text-muted-foreground">{description}</p>
      {action && <div>{action}</div>}
    </motion.div>
  );
} 