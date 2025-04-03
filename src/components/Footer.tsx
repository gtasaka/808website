import React from 'react'
import { Combine, Mail, Phone, Linkedin, Twitter, Github } from 'lucide-react'

const Footer: React.FC = () => {
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#process', label: 'Process' },
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
  ]

  const socialLinks = [
    { href: '#', icon: Twitter, label: 'Twitter' },
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
    { href: '#', icon: Github, label: 'GitHub' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center space-x-2 text-xl font-bold text-white mb-4">
              <Combine className="h-6 w-6 text-intersection" />
              <span>
                808<span className="text-intersection">alpha</span>.studio
              </span>
            </a>
            <p className="text-sm">Transforming Expertise Into Software.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-intersection" />
                <a href="mailto:hello@808alpha.studio" className="hover:text-white transition-colors">hello@808alpha.studio</a>
              </li>
              <li className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 text-intersection" />
                <span>+1 (555) 123-4567</span> {/* Example phone */}
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
             <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Follow Us</h3>
             <div className="flex space-x-4">
               {socialLinks.map((link) => (
                 <a key={link.label} href={link.href} aria-label={link.label} className="text-gray-400 hover:text-white transition-colors">
                   <link.icon className="h-5 w-5" />
                 </a>
               ))}
             </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} 808alpha.studio. All rights reserved.
          </p>
          <div className="mt-2 space-x-4 text-xs">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <span>&middot;</span>
             <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
