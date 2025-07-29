import { Icon } from "@iconify/react";
import { Button } from "../ui/button";

const socialLinks = [
  { icon: "mdi:instagram", url: "#" },
  { icon: "mdi:facebook", url: "#" },
  { icon: "mdi:twitter", url: "#" },
  { icon: "mdi:linkedin", url: "#" },
];

const linkSections = [
  {
    title: "Shop",
    items: ["Men", "Women", "Kids", "Accessories"],
  },
  {
    title: "Support",
    items: ["FAQs", "Contact Us", "Returns", "Shipping"],
  },
];

const Footer = () => (
  <footer className="bg-teal-600 text-white pt-16 pb-10">
    <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-4 sm:grid-cols-2">
      {/* Brand & Newsletter */}
      <div className="space-y-6 col-span-1">
        <h4 className="text-2xl font-bold tracking-tight">Fashion Cart</h4>
        <p className="text-sm text-white/80 leading-relaxed">
          Premium fashion at your fingertips. Stay in style all year round.
        </p>
        <div>
          <p className="text-sm mb-2 font-medium">
            Subscribe to our newsletter
          </p>
          <div className="flex rounded-full overflow-hidden bg-teal-700 border border-white/20 shadow-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 text-sm bg-transparent text-white placeholder:text-white/50 focus:outline-none"
            />
            <Button className="rounded-none bg-white text-teal-600 font-semibold hover:bg-white/90 text-sm px-5">
              Send
            </Button>
          </div>
        </div>
      </div>

      {/* Links Sections */}
      {linkSections.map((section) => (
        <div key={section.title}>
          <h5 className="text-lg font-semibold mb-4">{section.title}</h5>
          <ul className="space-y-3 text-sm text-white/80">
            {section.items.map((item) => (
              <li
                key={item}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Social Media */}
      <div className="space-y-4">
        <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
        <div className="flex gap-4 text-2xl">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="text-white/80 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="container mx-auto px-4 mt-12 pt-6 border-t border-white/20 text-center">
      <p className="text-xs text-white/60">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-medium text-white">Fashion Cart</span> by{" "}
        <span className="font-medium text-white">
          Securebyte Cyber Solutions Private Limited
        </span>
        . All rights reserved.
      </p>
    </div>
  </footer>
);

export { Footer };
