'use client';

import { useState, forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps {
  label?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  options: { value: string; label: string }[];
  className?: string;
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ label, value, onValueChange, placeholder = "Select an option", options, className = '' }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (optionValue: string) => {
      onValueChange?.(optionValue);
      setIsOpen(false);
    };

    const selectedOption = options.find(option => option.value === value);

    return (
      <div className="space-y-2" ref={ref}>
        {label && (
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </label>
        )}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`flex h-10 w-full items-center justify-between rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
          >
            <span className={selectedOption ? 'text-zinc-900' : 'text-zinc-500'}>
              {selectedOption?.label || placeholder}
            </span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isOpen && (
            <div className="absolute top-full z-50 mt-1 w-full rounded-md border border-zinc-200 bg-white shadow-lg mx-auto">
              <div className="max-h-60 overflow-auto text-black mx-auto">
                {options.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleSelect(option.value)}
                    className="w-full px-3 py-2 text-left text-sm hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-none"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

Select.displayName = 'Select';