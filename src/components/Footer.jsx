import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
} from "@tabler/icons-react";

const social = [
  <IconBrandLinkedin stroke={2} />,
  <IconBrandX stroke={2} />,
  <IconBrandFacebook stroke={2} />,
  <IconBrandInstagram stroke={2} />,
  <IconBrandWhatsapp stroke={2} />,
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-5 md:px-8">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-xs font-body text-sm text-white/60">
            Powering every mile, fueling every future — fuel, gas, lubricants
            and marine logistics across Nigeria.
          </p>
          <div className="mt-6 flex gap-3">
            {social.map((s) => (
              <span
                key={s}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 font-mono text-[10px] font-semibold text-white/70"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white">
            Company
          </h4>
          <ul className="mt-4 space-y-2 font-body text-sm">
            <li>
              <NavLink to="/about" className="hover:text-flame">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers" className="hover:text-flame">
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-flame">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white">
            Products
          </h4>
          <ul className="mt-4 space-y-2 font-body text-sm">
            <li>Lube Oils</li>
            <li>Liquefied Petroleum Gas</li>
            <li>Compressed Natural Gas</li>
            <li>Marine &amp; Bulk Fuel</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white">
            Services
          </h4>
          <ul className="mt-4 space-y-2 font-body text-sm">
            <li>
              <NavLink to="/services" className="hover:text-flame">
                Retail Stations
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-flame">
                Bulk Storage
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-flame">
                Shipping &amp; Haulage
              </NavLink>
            </li>
            <li>
              <NavLink to="/locations" className="hover:text-flame">
                Find a Station
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 font-body text-xs text-white/40 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            &copy; {new Date().getFullYear()} RYA Group. All rights reserved.
          </p>
          <p>Legal · Privacy · FAQs · Sitemap</p>
        </div>
      </div>
    </footer>
  );
}
