"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Image from "next/image";

export default function RefundPolicy() {
  return (
    <div className="space-y-6">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center gap-3">
            
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-800">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-white"
              >
                <path 
                  d="M12 2L4 7V12C4 16.5 7.5 20.5 12 22C16.5 20.5 20 16.5 20 12V7L12 2Z" 
                  fill="currentColor"
                />
                <text 
                  x="12" 
                  y="16" 
                  textAnchor="middle" 
                  className="text-xs font-bold fill-white"
                >
                  @
                </text>
              </svg>
            </div>

            {/* Title */}
            <CardTitle className="text-2xl text-left">Refund Policy</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          
          <div className="flex gap-4">
            <span className="text-orange-800 font-medium text-lg">01</span>

            <div>
              <h3 className="font-semibold mb-2">Standard Cancellation</h3>
              <p className="list-disc list-inside space-y-1 text-sm">
                Full refund are provided for cancellations made at least 48 hours
                prior to the scheduled arrival date.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-orange-800 font-medium text-lg">02</span>

            <div>
              <h3 className="font-semibold mb-2">Late Notice</h3>
              <p className="list-disc list-inside space-y-1 text-sm">
                Cancellations within 48 hours are subject to a one-night stay
                penalty. The remainder is credited back to the original payment
                method.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-orange-800 font-medium text-lg">03</span>

            <div>
              <h3 className="font-semibold mb-2">Processing Time</h3>
              <p className="list-disc list-inside space-y-1 text-sm">
                Once approved, please allow 5-7 business days for the credit to
                reflect in your account.
              </p>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-medium">For urgent matters, please contact our 24/7 highland concierge at +1 (800) highland</h3>
          </div>
        </CardContent>
      </Card>

      {/* Image Card - Outside the main card */}
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/highland.jfif"
          alt="Northern Highlands Golf Club"
          width={600}
          height={200}
          className="w-full h-60 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <p className="text-white text-lg font-medium">
            The peaks await your next journey.
          </p>
        </div>
      </div>
    </div>
  );
}