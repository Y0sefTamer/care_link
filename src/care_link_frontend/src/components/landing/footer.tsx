import { Facebook, Linkedin, Instagram } from "lucide-react";
import carelinkLogo from "@/assets/carelink-logo.png";
import { NavLink } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const importantLinks = [
    { name: "Book Appointment", href: "/booking-form" },
  ];

  const helpCenter = [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={carelinkLogo} alt="CareLink Logo" className="h-8 w-8" />
              <span className="text-xl font-semibold text-primary">CareLink</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Professional home healthcare services delivered with compassion and expertise. Your health, our priority.
            </p>
            <div className="flex space-x-4">
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ahmd.mjdy.607805?rdid=O0DjKjWjaa59lggx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FoGjzsPSL%2F#" className="text-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="www.linkedin.com/in/ahmed-magdy-023536240" className="text-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/_ahmed__magdi_?igsh=MXZ3ZTdidmI3NjhsMg==" className="text-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <NavLink to={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Important Links</h3>
            <ul className="space-y-2">
              {importantLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Center */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Help Center</h3>
            <ul className="space-y-2">
              {helpCenter.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            Copyright ©{currentYear} All Rights Reserved.
            Designed and Developed by{" "}
            <a href="https://ahmed-software-engineer.vercel.app" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              <strong>CareLink Team</strong>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}