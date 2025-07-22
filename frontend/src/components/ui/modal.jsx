import * as React from "react";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

const Modal = React.forwardRef(({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  className, 
  ...props 
}, ref) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div
        ref={ref}
        className={cn(
          "relative bg-gradient-to-br from-background to-muted/20 rounded-2xl shadow-2xl border border-border/50 max-w-lg w-full max-h-[85vh] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300",
          className
        )}
        {...props}
      >
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 border-b border-border/50 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted/50 rounded-xl transition-all duration-200 hover:scale-110"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Content with better spacing */}
        <div className="p-6 overflow-y-auto max-h-[65vh] scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
          {children}
        </div>
      </div>
    </div>
  );
});

Modal.displayName = "Modal";

export { Modal }; 