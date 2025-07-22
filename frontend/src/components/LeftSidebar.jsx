import { ArrowDown } from 'lucide-react';

export default function LeftSidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-20 bg-background/80 backdrop-blur-md border-r border-border/30 z-40 flex flex-col items-center justify-between py-8">
      {/* Top section with navigation dots */}
      <div className="flex flex-col items-center space-y-6">
        {/* Navigation dots/indicators - styled like the image */}
        <div className="flex flex-col space-y-3">
          {[1, 2, 3, 4, 5].map((dot) => (
            <div
              key={dot}
              className={`w-0.5 h-6 rounded-full transition-all duration-500 ease-in-out ${
                dot === 1 
                  ? 'bg-primary h-8 shadow-lg shadow-primary/50' 
                  : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Middle section with social media links */}
      <div className="flex flex-col items-center space-y-4">
        {/* Social media links - vertical text */}
        <div className="vertical-text-container">
          <div className="vertical-text text-primary text-xs font-medium tracking-widest">
            <span className="vertical-link hover:text-primary/80 transition-all duration-300 cursor-pointer">dr</span>
            <span className="vertical-link hover:text-primary/80 transition-all duration-300 cursor-pointer">be</span>
            <span className="vertical-link hover:text-primary/80 transition-all duration-300 cursor-pointer">in</span>
            <span className="vertical-link hover:text-primary/80 transition-all duration-300 cursor-pointer">fb</span>
            <span className="vertical-link hover:text-primary/80 transition-all duration-300 cursor-pointer">ig</span>
          </div>
        </div>
      </div>

      {/* Bottom section with scroll indicator */}
      <div className="flex flex-col items-center space-y-2">
        <div className="vertical-text-container">
          <div className="vertical-text text-primary text-sm font-bold tracking-wider">
            <div className="flex items-center space-x-1">
              <ArrowDown className="w-3 h-3 transform rotate-90" />
              <span>start</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 