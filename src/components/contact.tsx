'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export function Contact() {

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      value: 'naman.codewizard@gmail.com',
      href: 'mailto:naman.codewizard@gmail.com',
      color: 'text-blue-600'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      value: '+91 7027706482',
      href: 'tel:+917027706482',
      color: 'text-green-600'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Location',
      value: 'Yamunanagar, India',
      href: '#',
      color: 'text-purple-600'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: 'LinkedIn',
      value: 'naman-nanda-dev',
      href: 'https://www.linkedin.com/in/naman-nanda-dev/',
      color: 'text-blue-700'
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: 'GitHub',
      value: 'NeuroNaman',
      href: 'https://github.com/NeuroNaman',
      color: 'text-gray-800'
    }
  ];

  return (
    <div className="space-y-6">

      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <p className="text-muted-foreground">
          I'm always excited to connect with developers, AI enthusiasts, and professionals.
          Feel free to reach out if you'd like to collaborate on AI/ML projects or discuss opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {contactInfo.map((contact, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">

            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gray-100 ${contact.color}`}>
                  {contact.icon}
                </div>
                <CardTitle className="text-lg">{contact.title}</CardTitle>
              </div>
            </CardHeader>

            <CardContent>
              <CardDescription className="text-base font-medium mb-3">
                {contact.value}
              </CardDescription>

              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => window.open(contact.href, '_blank')}
              >
                {contact.title === 'Location' ? 'View Location' : `Open ${contact.title}`}
              </Button>

            </CardContent>

          </Card>
        ))}

      </div>

      <div className="text-center space-y-4 pt-6">

        <div className="bg-accent rounded-lg p-6">
          <h3 className="font-semibold mb-2">What I'm Looking For</h3>
          <p className="text-sm text-muted-foreground">
            • AI & Machine Learning opportunities • Generative AI projects • Data Science roles •
            Backend development for AI systems • Open source collaborations
          </p>
        </div>

        <p className="text-sm text-muted-foreground">
          If you're working on AI, machine learning, or innovative tech projects,
          I'd love to connect and explore potential collaborations.
        </p>

      </div>

    </div>
  );
}