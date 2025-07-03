import { useState } from "react";
import { MapPin, Phone, Mail, Check, Send } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      message: "",
    },
  });

  const submitInquiryMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent Successfully",
        description: "We'll get back to you soon with a personalized quote.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error Sending Inquiry",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    submitInquiryMutation.mutate(data);
  };

  const services = [
    "Professional Sound Systems",
    "Event Lighting & Effects", 
    "Video & Projection Equipment",
    "Staging & Platform Solutions",
    "Backline Musical Equipment",
    "Professional DJ Equipment"
  ];

  return (
    <section id="contact" className="py-20 bg-pioneer-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Ready to make your event unforgettable? Contact us for a personalized quote</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-pioneer-orange p-3 rounded-lg">
                    <MapPin className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-white font-semibold">Kiambu Town, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-pioneer-orange p-3 rounded-lg">
                    <Phone className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-white font-semibold">+254 XXX XXX XXX</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-pioneer-orange p-3 rounded-lg">
                    <Mail className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white font-semibold">info@pioneersounds.co.ke</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Services Summary */}
            <div className="bg-pioneer-charcoal p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4">Our Services Include:</h4>
              <ul className="space-y-2 text-gray-300">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="text-pioneer-orange w-4 h-4 mr-3" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-pioneer-charcoal p-8 rounded-xl shadow-lg animate-slide-up">
            <h3 className="text-2xl font-bold text-white mb-6">Request a Quote</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            className="bg-pioneer-navy border-gray-600 text-white focus:border-pioneer-orange"
                            placeholder="Your Name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Phone</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            type="tel"
                            className="bg-pioneer-navy border-gray-600 text-white focus:border-pioneer-orange"
                            placeholder="Your Phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="email"
                          className="bg-pioneer-navy border-gray-600 text-white focus:border-pioneer-orange"
                          placeholder="Your Email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Event Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-pioneer-navy border-gray-600 text-white focus:border-pioneer-orange">
                            <SelectValue placeholder="Select Event Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-pioneer-navy border-gray-600">
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="concert">Concert/Show</SelectItem>
                          <SelectItem value="church">Church Event</SelectItem>
                          <SelectItem value="private">Private Event</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="eventDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Event Date</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="date"
                          className="bg-pioneer-navy border-gray-600 text-white focus:border-pioneer-orange"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field}
                          rows={4}
                          className="bg-pioneer-navy border-gray-600 text-white focus:border-pioneer-orange"
                          placeholder="Tell us about your event requirements..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={submitInquiryMutation.isPending}
                  className="w-full bg-pioneer-orange text-white hover:bg-orange-600 transition-all duration-300 shadow-lg"
                >
                  {submitInquiryMutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Inquiry
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
