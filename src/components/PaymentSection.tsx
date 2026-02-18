import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard, Smartphone, Building2, Copy, Check } from "lucide-react";
import { useState } from "react";

const PaymentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  const bankDetails = [
    { label: "Account Holder", value: "Joshi Holiday Home" },
    { label: "Bank Name", value: "State Bank of India" },
    { label: "Account Number", value: "XXXXXXXXXXXX" },
    { label: "IFSC Code", value: "SBIN0XXXXXX" },
    { label: "Branch", value: "Lansdowne Branch" },
  ];

  return (
    <section id="payment" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Easy Booking
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Payment Details
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Book your stay by making a payment via UPI or bank transfer. 
            Contact us to confirm your booking after payment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* UPI Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-card rounded-lg p-8 shadow-lg border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                UPI Payment
              </h3>
            </div>

            <div className="bg-muted rounded-lg p-6 text-center mb-6">
              <div className="w-48 h-48 bg-foreground/5 border-2 border-dashed border-border rounded-lg mx-auto flex items-center justify-center mb-4">
                <p className="text-muted-foreground text-sm">QR Code<br />Coming Soon</p>
              </div>
              <p className="text-sm text-muted-foreground">Scan to pay via any UPI app</p>
            </div>

            <div className="flex items-center justify-between bg-muted rounded-lg p-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">UPI ID</p>
                <p className="font-semibold text-foreground">joshiholiday@upi</p>
              </div>
              <button
                onClick={() => copyToClipboard("joshiholiday@upi", "upi")}
                className="p-2 rounded-md hover:bg-border transition-colors"
              >
                {copied === "upi" ? (
                  <Check className="w-4 h-4 text-primary" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
            </div>
          </motion.div>

          {/* Bank Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-card rounded-lg p-8 shadow-lg border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Bank Transfer
              </h3>
            </div>

            <div className="space-y-4">
              {bankDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-center justify-between py-3 border-b border-border last:border-0"
                >
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{detail.label}</p>
                    <p className="font-semibold text-foreground text-sm">{detail.value}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(detail.value, detail.label)}
                    className="p-2 rounded-md hover:bg-muted transition-colors"
                  >
                    {copied === detail.label ? (
                      <Check className="w-4 h-4 text-primary" />
                    ) : (
                      <Copy className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-10 text-muted-foreground text-sm"
        >
          After payment, please share the screenshot via WhatsApp or call to confirm your booking.
        </motion.p>
      </div>
    </section>
  );
};

export default PaymentSection;
