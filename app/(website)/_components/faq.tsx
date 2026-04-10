import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const faq = [
  {
    question: "What is your return policy?",
    answer:
      "You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Track your order using the link provided in your confirmation email, or log into your account to view tracking details.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.",
  },
  {
    question: "What if I receive a damaged item?",
    answer:
      "Please contact our support team within 48 hours of delivery with photos of the damaged item. We’ll arrange a replacement or refund.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our support team via email at support@example.com or through the live chat on our website. We're available 24/7 to assist you.",
  },
];

const FAQ = () => {
  return (
    <div id="faq" className="w-full max-w-(--breakpoint-xl) mx-auto py-8 xs:py-16 px-6">
      <h2 className="md:text-center text-3xl xs:text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-tighter">
        Frequently Asked Questions
      </h2>
      <p className="mt-1.5 md:text-center xs:text-lg text-muted-foreground">
        Quick answers to common questions about our products and services.
      </p>

      <div className="min-h-[550px] md:min-h-[320px] xl:min-h-[300px]">
        <Accordion className="mt-8 block space-y-4 border-none bg-transparent md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className="mt-0! mb-4! rounded-xl border-none bg-accent px-4 py-1 md:mb-0"
            >
              <AccordionTrigger
                className={cn(
                  "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                  "text-start text-lg"
                )}
              >
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-[15px]">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
