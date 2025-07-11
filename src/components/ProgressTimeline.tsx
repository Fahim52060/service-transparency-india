
import React from 'react';
import { CheckCircle, Circle, Clock, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'pending' | 'delayed';
  timestamp?: string;
  officer?: string;
}

interface ProgressTimelineProps {
  steps: TimelineStep[];
  vertical?: boolean;
}

const ProgressTimeline: React.FC<ProgressTimelineProps> = ({ 
  steps, 
  vertical = true 
}) => {
  const getStepIcon = (status: TimelineStep['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'current':
        return <Clock className="h-5 w-5 text-blue-600 animate-pulse" />;
      case 'delayed':
        return <AlertTriangle className="h-5 w-5 text-orange-600" />;
      default:
        return <Circle className="h-5 w-5 text-gray-300" />;
    }
  };

  const getStepColor = (status: TimelineStep['status']) => {
    switch (status) {
      case 'completed':
        return 'border-green-600 bg-green-50';
      case 'current':
        return 'border-blue-600 bg-blue-50';
      case 'delayed':
        return 'border-orange-600 bg-orange-50';
      default:
        return 'border-gray-300 bg-gray-50';
    }
  };

  if (vertical) {
    return (
      <div className="space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative flex items-start space-x-4"
          >
            {/* Timeline line */}
            {index < steps.length - 1 && (
              <div className="absolute left-6 top-8 w-0.5 h-12 bg-gray-200" />
            )}
            
            {/* Step icon */}
            <div className={`
              flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center
              ${getStepColor(step.status)}
            `}>
              {getStepIcon(step.status)}
            </div>

            {/* Step content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">
                  {step.title}
                </h3>
                {step.timestamp && (
                  <span className="text-xs text-gray-500">
                    {step.timestamp}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {step.description}
              </p>
              {step.officer && (
                <p className="text-xs text-gray-500 mt-1">
                  Officer: {step.officer}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  // Horizontal timeline for mobile
  return (
    <div className="flex items-center space-x-4 overflow-x-auto pb-2">
      {steps.map((step, index) => (
        <div key={step.id} className="flex flex-col items-center min-w-0 flex-shrink-0">
          <div className={`
            w-10 h-10 rounded-full border-2 flex items-center justify-center mb-2
            ${getStepColor(step.status)}
          `}>
            {getStepIcon(step.status)}
          </div>
          <span className="text-xs text-center font-medium text-gray-700 max-w-20">
            {step.title}
          </span>
          {index < steps.length - 1 && (
            <div className="w-8 h-0.5 bg-gray-200 mt-2 absolute translate-x-6" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressTimeline;
