import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I know the medicines are genuine?",
    answer: "All sellers on our platform are licensed pharmacies and verified sellers. We ensure that all medicines are sourced from authorized distributors and manufacturers.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept various payment methods including UPI, credit/debit cards, and cash on delivery for your convenience.",
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery time varies by location and seller. Typically, orders are delivered within 24-48 hours in major cities.",
  },
  {
    question: "Can I return medicines?",
    answer: "For safety reasons, medicines cannot be returned once sold. Please check the package carefully at the time of delivery.",
  },
];

export function FAQ() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}