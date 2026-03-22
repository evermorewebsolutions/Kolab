import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/27679250042"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute right-0 bg-green-500 w-14 h-14 rounded-full animate-ping opacity-75"></div>
      <div className="relative flex items-center justify-center bg-green-500 text-white w-14 h-14 rounded-full shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
        <MessageCircle className="w-7 h-7 fill-white" />
      </div>
      <div className="absolute right-16 px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Chat with us
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-[6px] border-transparent border-l-white"></div>
      </div>
    </a>
  );
}
