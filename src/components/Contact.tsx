import { useState } from 'react';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Sending contact form data:', formData);
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      console.log('Email sent successfully:', data);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Fallback to mailto link if edge function fails
      const mailtoLink = `mailto:zeyadmohamedali6@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `From: ${formData.fullName} (${formData.email})\n\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      
      toast({
        title: "Opening Email Client",
        description: "Your default email client will open to send the message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'zeyadmohamedali6@gmail.com',
      link: 'mailto:zeyadmohamedali6@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+201554123400',
      link: 'tel:+201554123400'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/zeyadmohamedali',
      link: 'https://linkedin.com/in/zeyadmohamedali'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? Let's discuss how we can 
            transform your data into compelling stories.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                className="flex items-center p-4 bg-card border border-gray-800 rounded-xl hover:border-blue-gradient-end/50 transition-all duration-300 hover-glow group"
              >
                <div className="text-blue-gradient-end mr-4 group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{contact.label}</p>
                  <p className="text-white font-medium group-hover:text-blue-gradient-end transition-colors duration-300">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}

            <div className="mt-8 p-6 bg-blue-gradient-subtle border border-blue-gradient-start/30 rounded-xl">
              <h4 className="text-xl font-semibold text-white mb-3">Let's Collaborate</h4>
              <p className="text-gray-200 leading-relaxed">
                I'm always excited to work on innovative projects that combine 
                research excellence with creative data visualization. Whether you need 
                academic research support, data analysis, or educational content design, 
                I'd love to help bring your vision to life.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white focus:border-blue-gradient-end"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white focus:border-blue-gradient-end"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white focus:border-blue-gradient-end"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-gray-800 border-gray-700 text-white focus:border-blue-gradient-end resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-gradient hover:opacity-90 text-white font-medium py-3 rounded-lg transition-all duration-300 hover-glow"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
