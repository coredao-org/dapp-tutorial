

      "use client";
      import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
      

const Footer = () => {
  return (
    <>
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2023 DEX Platform. All rights reserved.
          </p>
          <Button variant="ghost" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
