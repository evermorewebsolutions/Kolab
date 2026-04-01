export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="inline-flex mb-5 group">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt="Kolob Electrical and Projects Logo"
                className="h-20 w-auto object-contain drop-shadow-[0_0_14px_rgba(59,130,246,0.5)] group-hover:drop-shadow-[0_0_22px_rgba(59,130,246,0.8)] transition-all duration-300"
              />
            </a>
            <p className="text-muted-foreground max-w-sm">
              Your trusted partner for professional electrical installations, maintenance, and compliance certification in Cape Town.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#why-us" className="text-muted-foreground hover:text-primary transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">Customer Reviews</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="tel:0679250042" className="hover:text-primary transition-colors">067 925 0042</a></li>
              <li>45 Van Riebeeck Rd</li>
              <li>Kuils River, 7580</li>
              <li>Cape Town, South Africa</li>
            </ul>
          </div>
        </div>
        
        <div className="divider-glow mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Kolob Electrical and Projects. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground/60">
          Made with ❤️ in South Africa by{" "}
          <span className="text-muted-foreground hover:text-white transition-colors font-medium">Evermore Digital Solutions</span>
        </div>
      </div>
    </footer>
  );
}
