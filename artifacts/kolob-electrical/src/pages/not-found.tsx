import { Link } from "wouter";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="glass-card max-w-md w-full p-8 rounded-2xl text-center border-white/10">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-destructive/20 rounded-2xl flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-destructive" />
          </div>
        </div>
        <h1 className="text-3xl font-display font-bold text-white mb-2">404 - Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white/10 hover:bg-white/20 text-white transition-all w-full"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
