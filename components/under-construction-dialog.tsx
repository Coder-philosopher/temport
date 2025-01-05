"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function UnderConstructionDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>🚧 Under Construction 🚧</DialogTitle>
            <DialogDescription>
              Oops! You&#39;ve stumbled upon a work-in-progress masterpiece. 🎨✨  
              I&#39;m cooking Something Crazzy. Stay tuned!, Enjoy Current Work 🚀
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>Cool, I&#39;ll Wait! 👍</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    
    
  );
}