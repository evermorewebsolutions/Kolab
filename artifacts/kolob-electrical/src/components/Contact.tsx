import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Loader2, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  message: z.string().min(10, "Please provide a brief description"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Need an estimate or emergency assistance? Contact us today and our team will get back to you immediately.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-8 rounded-2xl"
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. Our team will contact you shortly regarding your enquiry.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-primary hover:underline font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Full Name</label>
                    <input
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-xl bg-black/20 border ${
                        errors.name ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-primary focus:ring-primary/20"
                      } text-white focus:outline-none focus:ring-4 transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-destructive text-xs">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Phone Number</label>
                    <input
                      {...register("phone")}
                      className={`w-full px-4 py-3 rounded-xl bg-black/20 border ${
                        errors.phone ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-primary focus:ring-primary/20"
                      } text-white focus:outline-none focus:ring-4 transition-all`}
                      placeholder="067 925 0042"
                    />
                    {errors.phone && <p className="text-destructive text-xs">{errors.phone.message}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">How can we help?</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl bg-black/20 border ${
                      errors.message ? "border-destructive focus:ring-destructive/20" : "border-white/10 focus:border-primary focus:ring-primary/20"
                    } text-white focus:outline-none focus:ring-4 transition-all resize-none`}
                    placeholder="Describe your electrical issue or project..."
                  />
                  {errors.message && <p className="text-destructive text-xs">{errors.message.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-blue-600 shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:transform-none flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...</>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <a href="tel:0679250042" className="glass-card p-6 rounded-2xl flex items-start gap-4 group block">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all">
                <Phone className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-sm text-muted-foreground mb-1">Call Us Direct</h4>
                <p className="text-xl font-bold text-white">067 925 0042</p>
              </div>
            </a>
            
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-muted-foreground" />
              </div>
              <div>
                <h4 className="text-sm text-muted-foreground mb-1">Our Location</h4>
                <p className="text-white font-medium">45 Van Riebeeck Rd, Kuils River, Cape Town, 7580</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/5 h-48 w-full bg-muted/50">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13241.456787592547!2d18.689614799999998!3d-33.8907064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc569a82e90c65%3A0xc04e5700be08d4c2!2sKuils%20River%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Kolob Electrical Service Area"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
