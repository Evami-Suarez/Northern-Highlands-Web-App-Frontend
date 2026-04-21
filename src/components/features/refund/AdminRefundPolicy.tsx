"use client";

import { forwardRef, Key } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Download, Info } from "lucide-react";

interface PolicySection {
  title: string;
  content: string | string[];
}

export const RefundPolicy = forwardRef<HTMLDivElement, { className?: string }>(
  ({ className = "", ...props }, ref) => {
    const policySections: PolicySection[] = [
      {
        title: "STANDARD BOOKINGS",
        content: [
          "60+ days notice: 100% refund",
          "30-59 days notice: 75% refund",
          "14-29 days notice: 50% refund",
          "7-13 days notice: 25% refund",
          "Less than 7 days: No refund",
        ],
      },
      {
        title: "EMERGENCY CLAUSES",
        content: [
          "Full refund may be granted for documented emergencies including medical emergencies, family bereavement, or severe weather events.",
          "REQUIRED PROOF:",
          "• Medical certificate from licensed physician",
          "• Death certificate or obituary notice",
          "• Official travel advisories or weather warnings",
        ],
      },
      {
        title: "SUITES & PENTHOUSES",
        content:
          "All suite and penthouse bookings follow standard refund policy, but may be eligible for priority processing during emergency situations. Additional travel insurance coverage is recommended for high-value reservations.",
      },
    ];

    return (
      <Card ref={ref} className={`mt-8 ${className}`} {...props}>
        {/* White Header Section */}
        <CardHeader className="pb-4 bg-white dark:bg-zinc-800">
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-2">
              <CardTitle className="text-xl font-bold text-zinc-900 dark:text-zinc-100 ">
                Refund Policy
              </CardTitle>
              <Info className="w-4 h-4 text-zinc-400" />
            </div>
          </div>
          <p className="text-sm text-zinc-500 mt-2">
            Last Updated: January 2024
          </p>
        </CardHeader>

        {/* Gray Content Section */}
        <CardContent className="pt-0 bg-green-50 dark:bg-zinc-900">
          {policySections.map((section, index) => (
            <div
              key={index}
              className="border-b border-zinc-200 dark:border-zinc-700 last:border-b-0 dark:bg-zinc-900"
            >
              <div className="py-4">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 ">
                  {section.title}
                </span>
              </div>
              <div className="pb-4 text-sm text-zinc-600 dark:text-zinc-400">
                {Array.isArray(section.content) ? (
                  <ul className="space-y-2">
                    {section.content.map((item, itemIndex) => {
                      // Color code refund percentages
                      if (item.includes("100% refund")) {
                        return (
                          <li
                            key={itemIndex}
                            className="text-green-600 font-medium"
                          >
                            {item}
                          </li>
                        );
                      }
                      if (
                        item.includes("75% refund") ||
                        item.includes("50% refund")
                      ) {
                        return (
                          <li
                            key={itemIndex}
                            className="text-orange-600 font-medium"
                          >
                            {item}
                          </li>
                        );
                      }
                      if (
                        item.includes("25% refund") ||
                        item.includes("No refund")
                      ) {
                        return (
                          <li
                            key={itemIndex}
                            className="text-red-600 font-medium"
                          >
                            {item}
                          </li>
                        );
                      }

                      // Handle REQUIRED PROOF section
                      const isRequiredProof = item.includes("REQUIRED PROOF:");
                      const isBulletPoint = item.startsWith("•");

                      if (isRequiredProof) {
                        // Find all proof items after this one
                        const proofItems = (
                          Array.isArray(section.content)
                            ? section.content
                            : [section.content]
                        )
                          .slice(itemIndex + 1)
                          .filter((item: string) => item.startsWith("•"));

                        return (
                          <li key={itemIndex}>
                            <div className="bg-gray-100 dark:bg-zinc-800 rounded-lg p-4 mt-2 border border-zinc-200 dark:border-zinc-700">
                              <div className="font-semibold text-blue-900 mb-3 dark:text-blue-100">
                                {item}
                              </div>
                              <div className="space-y-2">
                                {proofItems.map(
                                  (
                                    proofItem: string,
                                    proofIndex: Key | null | undefined,
                                  ) => (
                                    <div
                                      key={proofIndex}
                                      className="flex items-center gap-3"
                                    >
                                      <div className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center dark:border-blue-400">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                                      </div>
                                      <span className="text-sm text-zinc-700 dark:text-zinc-300">
                                        {proofItem.replace("• ", "")}
                                      </span>
                                    </div>
                                  ),
                                )}
                              </div>
                            </div>
                          </li>
                        );
                      }

                      // Skip individual bullet points since they're now handled in the proof section
                      if (isBulletPoint) {
                        return null;
                      }

                      // Regular text
                      return <li key={itemIndex}>{item}</li>;
                    })}
                  </ul>
                ) : (
                  <p>{section.content}</p>
                )}
              </div>
            </div>
          ))}

          {/* Download Button */}
          <div className="mt-6 pt-4 border-t border-zinc-200">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 w-full justify-center bg-white dark:bg-zinc-800 dark:border-zinc-700"
            >
              <Download className="w-4 h-4" />
              Download Full PDF
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
);

RefundPolicy.displayName = "RefundPolicy";
