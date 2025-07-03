import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact inquiry endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const inquiry = insertContactInquirySchema.parse(req.body);
      const createdInquiry = await storage.createContactInquiry(inquiry);
      res.json({ success: true, inquiry: createdInquiry });
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

  // Get all contact inquiries (for admin use)
  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json({ success: true, inquiries });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch inquiries" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
