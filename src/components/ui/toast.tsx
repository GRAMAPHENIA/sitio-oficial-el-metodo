import React from 'react';

// Define ToastProps interface
export interface ToastProps {
  id: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

// Define ToastActionElement type
export type ToastActionElement = React.ReactElement<{
  onClick: () => void;
  label: string;
}>;

// Example Toast Component (optional)
const Toast: React.FC<ToastProps> = ({
  title,
  description,
  action,
  open = true,
}) => {
  if (!open) return null;

  return (
    <div className="toast">
      {title && <div className="toast-title">{title}</div>}
      {description && <div className="toast-description">{description}</div>}
      {action && <div className="toast-action">{action}</div>}
    </div>
  );
};

export default Toast;
