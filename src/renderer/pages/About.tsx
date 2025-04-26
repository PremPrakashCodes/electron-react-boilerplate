import React from "react";
import { Button } from "@/renderer/components/ui/button";
import { Link } from "react-router";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">About Page</h1>
      <Button asChild>
        <Link to="/" className="text-blue-500 hover:underline">
          Go to Home Page
        </Link>
      </Button>
    </div>
  );
}
