import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">Joshi Holiday Home</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              A peaceful homestay in the hills of Lansdowne, offering mountain views, 
              home-cooked meals, and the warmth of Garhwali hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Rooms", "Experiences", "Gallery", "Payment"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-primary-foreground/70 hover:text-gold text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-gold">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+919999999999"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 99999 99999
              </a>
              <a
                href="mailto:info@joshiholidayhome.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold text-sm transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@joshiholidayhome.com
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Near Govt Hospital, Jaiharikhal,<br />
                Lansdowne, Uttarakhand 246193
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Joshi Holiday Home. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
