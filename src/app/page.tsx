
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
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Star,
} from "lucide-react";
import type { ReactNode } from "react";
import { CompanyLogo } from "@/components/company-logo";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";

const ContactItem = ({
  icon,
  href,
  children,
}: {
  icon: ReactNode;
  href: string;
  children: ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center space-x-4 rounded-lg p-3 transition-colors hover:bg-accent/10"
  >
    <div className="rounded-full bg-accent/20 p-2 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
      {icon}
    </div>
    <span className="font-medium text-foreground">{children}</span>
  </a>
);

const SocialLink = ({
  href,
  icon,
  "aria-label": ariaLabel,
}: {
  href: string;
  icon: ReactNode;
  "aria-label": string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="text-muted-foreground transition-colors hover:text-primary"
  >
    {icon}
  </a>
);

export default function Home() {
  const contactDetails = [
    {
      icon: <Phone className="h-5 w-5" />,
      href: "tel:+447969559746",
      text: "+44 7969 559746",
    },
    {
      icon: <WhatsappIcon className="h-5 w-5" />,
      href: "https://wa.me/447969559746",
      text: "WhatsApp Message",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:info@printtodayuk.com",
      text: "info@printtodayuk.com",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:sales@printtodayuk.com",
      text: "sales@printtodayuk.com",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:artwork@printtodayuk.com",
      text: "artwork@printtodayuk.com",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      href: "https://maps.app.goo.gl/hyVjEKKv5QDLNqFg9",
      text: "Find us on Google Maps",
    },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/PrintTodayUK",
      icon: <Facebook className="h-6 w-6" />,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/printtodayuk/",
      icon: <Instagram className="h-6 w-6" />,
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/in/printtoday-uk",
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
    },
    {
      href: "https://twitter.com/PrintToday_uk",
      icon: <Twitter className="h-6 w-6" />,
      label: "Twitter",
    },
    {
      href: "https://www.youtube.com/@printtodayuk",
      icon: <Youtube className="h-6 w-6" />,
      label: "YouTube",
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
              <CompanyLogo className="h-10 w-auto" />
            </a>
            <CardDescription className="text-lg font-semibold text-foreground">
              Same Day Print & Delivery
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6">
            <div className="flex flex-col space-y-1">
              {contactDetails.map((item, index) => (
                <ContactItem key={index} icon={item.icon} href={item.href}>
                  {item.text}
                </ContactItem>
              ))}
            </div>

            <Separator className="my-6 bg-border/50" />

            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <SocialLink
                  key={social.label}
                  href={social.href}
                  icon={social.icon}
                  aria-label={social.label}
                />
              ))}
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
            <Button asChild size="lg" variant="outline" className="w-full rounded-xl">
              <a
                href="https://g.page/r/CdtujWes0srmEAE/review"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Star className="mr-2 h-5 w-5" /> Give us a review
              </a>
            </Button>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              We provide a wide range of professional printing, from business cards and flyers to large-format products like banners. Our expert team and modern equipment ensure high-quality results at affordable prices.
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
