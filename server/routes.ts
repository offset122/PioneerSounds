
import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

// Simple contact form schema
const contactInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  eventType: z.string().min(1, "Event type is required"),
  eventDate: z.string().min(1, "Event date is required"),
  venue: z.string().min(1, "Venue is required"),
  guestCount: z.number().min(1, "Guest count must be at least 1"),
  services: z.array(z.string()).min(1, "At least one service is required"),
  message: z.string().optional(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact inquiry endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const inquiry = contactInquirySchema.parse(req.body);
      
      // For now, just log the inquiry (you can integrate with email service later)
      console.log("New contact inquiry:", inquiry);
      
      res.json({ 
        success: true, 
        message: "Thank you for your inquiry! We'll get back to you soon.",
        inquiry: inquiry 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          error: "Invalid form data", 
          details: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          error: "Failed to submit inquiry" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
