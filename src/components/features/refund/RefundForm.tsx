'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';

interface FormData {
  name: string;
  email: string;
  phone: string;
  bookingReference: string;
  refundReason: string;
  additionalContext: string; // Added this new field
}

const refundReasons = [
  { value: 'change-of-plans', label: 'Change of Plans' },
  { value: 'medical-emergency', label: 'Medical Emergency' },
  { value: 'weather-conditions', label: 'Weather Conditions' },
  { value: 'travel-issues', label: 'Travel Issues' },
  { value: 'personal-circumstances', label: 'Personal Circumstances' },
  { value: 'service-dissatisfaction', label: 'Service Dissatisfaction' },
  { value: 'other', label: 'Other' },
];

export function RefundForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    bookingReference: '',
    refundReason: '',
    additionalContext: '' // Added this new field
  });

  const handleInputChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleReasonChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      refundReason: value
    }));
  };

  const handleAdditionalContextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      additionalContext: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Refund request submitted:', formData);
    // Handle form submission here
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-2xl text-left">Refund Request</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black-900 mx-auto">
            <Input
              label="Name "
              value={formData.name}
              onChange={handleInputChange('name')}
              placeholder="Evelyn Smith"
              required
            />
            <Input
              label="Booking Reference"
              value={formData.bookingReference}
              onChange={handleInputChange('bookingReference')}
              placeholder="NH-8829-X"
              required
            />
          </div>
          
          <div className=" grid-cols-1 md:grid-cols-2 gap-4 text-black-900 mx-auto">
            <Input
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              placeholder="evelyn.smith@gmail.com"
              required
            />
          </div>

          <Select
            label="Reason for Refund"
            value={formData.refundReason}
            onValueChange={handleReasonChange}
            placeholder="Select a reason"
            options={refundReasons}
            className="text-black-900"
          />

          <Textarea 
            className="text-gray-900"
            label="Additional Context (Optional)"
            value={formData.additionalContext} // Changed from refundReason to additionalContext
            onChange={handleAdditionalContextChange} // Changed to new handler
            placeholder="Briefly describe the circumstances..."
            rows={4}
          />

          <Button 
            type="submit" 
            className="w-fit bg-[var(--color-brand-sienna)] hover:bg-[var(--color-brand-sienna)]/90 text-white hover:text-white"
          >
            Submit Request
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}