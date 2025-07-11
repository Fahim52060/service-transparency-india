
import React from 'react';
import { CheckCircle, Clock, AlertTriangle, XCircle, Loader } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatusBadgeProps {
  status: 'submitted' | 'inProgress' | 'completed' | 'delayed' | 'rejected';
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ 
  status, 
  size = 'md', 
  showIcon = true 
}) => {
  const statusConfig = {
    submitted: {
      label: 'Submitted',
      color: 'bg-blue-100 text-blue-800 border-blue-200',
      icon: CheckCircle
    },
    inProgress: {
      label: 'In Progress',
      color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      icon: Clock
    },
    completed: {
      label: 'Completed',
      color: 'bg-green-100 text-green-800 border-green-200',
      icon: CheckCircle
    },
    delayed: {
      label: 'Delayed',
      color: 'bg-orange-100 text-orange-800 border-orange-200',
      icon: AlertTriangle
    },
    rejected: {
      label: 'Rejected',
      color: 'bg-red-100 text-red-800 border-red-200',
      icon: XCircle
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  return (
    <motion.span
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`
        inline-flex items-center gap-1.5 rounded-full font-medium border
        ${config.color} ${sizeClasses[size]}
      `}
    >
      {showIcon && (
        <Icon className={`${size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'}`} />
      )}
      {config.label}
    </motion.span>
  );
};

export default StatusBadge;
