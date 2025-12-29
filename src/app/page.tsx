
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Globe,
  Contact,
  Star,
} from "lucide-react";
import type { ReactNode } from "react";
import { CompanyLogo } from "@/components/company-logo";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";
import { cn } from "@/lib/utils";

const ContactItem = ({
  icon,
  href,
  children,
  iconClassName
}: {
  icon: ReactNode;
  href: string;
  children: ReactNode;
  iconClassName?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center space-x-4 rounded-lg p-3 transition-colors hover:bg-gray-100"
  >
    <div className={cn("rounded-full p-2", iconClassName)}>
      {icon}
    </div>
    <span className="font-medium text-foreground">{children}</span>
  </a>
);

const SocialLink = ({
  href,
  icon,
  "aria-label": ariaLabel,
  className,
}: {
  href: string;
  icon: ReactNode;
  "aria-label": string;
  className?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className={cn("transition-opacity hover:opacity-80", className)}
  >
    {icon}
  </a>
);

export default function Home() {
  const contactDetails = [
    {
      icon: <FaPhone className="h-5 w-5 text-white" />,
      href: "tel:+443300103521",
      text: "0330 010 3521",
      iconClassName: "bg-blue-500",
    },
    {
      icon: <FaWhatsapp className="h-5 w-5 text-white" />,
      href: "https://wa.me/447969559746",
      text: "Live Chat",
      iconClassName: "bg-green-500",
    },
    {
      icon: <FaWhatsapp className="h-5 w-5 text-white" />,
      href: "https://wa.me/4407709135507",
      text: "Print Today Studio",
      iconClassName: "bg-green-500",
    },
    {
      icon: <FaWhatsapp className="h-5 w-5 text-white" />,
      href: "https://wa.me/4407752711508",
      text: "AI Studio",
      iconClassName: "bg-green-500",
    },
    {
      icon: <FaEnvelope className="h-5 w-5 text-white" />,
      href: "mailto:info@printtodayuk.com",
      text: "info@printtodayuk.com",
      iconClassName: "bg-gray-700",
    },
    {
      icon: <FaEnvelope className="h-5 w-5 text-white" />,
      href: "mailto:sales@printtodayuk.com",
      text: "sales@printtodayuk.com",
      iconClassName: "bg-gray-700",
    },
    {
      icon: <FaEnvelope className="h-5 w-5 text-white" />,
      href: "mailto:artwork@printtodayuk.com",
      text: "artwork@printtodayuk.com",
      iconClassName: "bg-gray-700",
    },
    {
      icon: <FaMapMarkerAlt className="h-5 w-5 text-white" />,
      href: "https://maps.app.goo.gl/hyVjEKKv5QDLNqFg9",
      text: "Find us on Google Maps",
      iconClassName: "bg-red-500",
    },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/PrintTodayUK",
      icon: <FaFacebook className="h-6 w-6" />,
      label: "Facebook",
      colorClass: "text-[#1877F2]",
    },
    {
      href: "https://www.instagram.com/printtodayuk/",
      icon: <FaInstagram className="h-6 w-6" />,
      label: "Instagram",
      colorClass: "text-[#E4405F]",
    },
    {
      href: "https://www.linkedin.com/in/printtoday-uk",
      icon: <FaLinkedin className="h-6 w-6" />,
      label: "LinkedIn",
      colorClass: "text-[#0A66C2]",
    },
    {
      href: "https://twitter.com/PrintToday_uk",
      icon: <FaTwitter className="h-6 w-6" />,
      label: "Twitter",
      colorClass: "text-[#1DA1F2]",
    },
    {
      href: "https://www.youtube.com/@printtodayuk",
      icon: <FaYoutube className="h-6 w-6" />,
      label: "YouTube",
      colorClass: "text-[#FF0000]",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-body text-foreground animate-fade-in">
      <main className="flex w-full items-center justify-center p-4 py-12 sm:p-6 lg:p-8">
        <Card className="w-full max-w-sm overflow-hidden rounded-3xl border-2 border-transparent bg-card shadow-2xl shadow-primary/10 sm:max-w-md">
          <CardHeader className="items-center bg-primary/5 p-6 text-center">
            <a
              href="https://printtodayuk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4"
            >
              <CompanyLogo className="h-auto w-[450px]" />
            </a>
            <CardDescription className="text-lg font-semibold text-foreground">
              Same Day Print & Delivery
            </CardDescription>
            <Button asChild size="lg" className="w-full rounded-xl mt-4">
              <a
                href="https://ptpos.vercel.app/contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Contact className="mr-2 h-5 w-5" /> Contact Details
              </a>
            </Button>
            <p className="pt-2 text-sm text-muted-foreground">We are open 7 days a week</p>
          </CardHeader>

          <CardContent className="p-6">
            <div className="flex flex-col space-y-1">
              {contactDetails.map((item, index) => (
                <ContactItem key={index} icon={item.icon} href={item.href} iconClassName={item.iconClassName}>
                  {item.text}
                </ContactItem>
              ))}
            </div>

            <Separator className="my-6 bg-border/50" />

            <div className="flex flex-col gap-4">
              <Button
                asChild
                size="lg"
                className="w-full rounded-xl"
                style={{ backgroundColor: '#C8102E' }}
              >
                <a
                  href="https://g.page/r/CdtujWes0srmEAE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Star className="mr-2 h-5 w-5" /> Give us a review
                </a>
              </Button>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social) => (
                  <SocialLink
                    key={social.label}
                    href={social.href}
                    icon={social.icon}
                    aria-label={social.label}
                    className={social.colorClass}
                  />
                ))}
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex-col gap-4 bg-primary/5 p-6">
            <Button asChild size="lg" className="w-full rounded-xl">
              <a
                href="https://printtodayuk.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="mr-2 h-5 w-5" /> Visit Our Website
              </a>
            </Button>
            
            <p className="pt-2 text-center text-sm text-muted-foreground">
              We've been providing high quality print for over 20 years. Our team of experts is dedicated to delivering outstanding results and we pride ourselves on our commitment to customer service and the environment.
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
