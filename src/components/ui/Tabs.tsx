import { forwardRef } from 'react';

interface TabsProps {
  tabs: { label: string; count?: number }[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ tabs, activeTab, onTabChange, ...props }, ref) => {
    return (
      <div ref={ref} className="flex p-1 bg-gray-300 rounded-lg" {...props}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => onTabChange(index)}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === index
                ? 'bg-white text-zinc-900 shadow-sm mx-auto'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
            }`}
          >
            {tab.label}
            {tab.count && (
              <span className="ml-2 rounded-full bg-zinc-200 px-2 py-0.5 text-xs">
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';