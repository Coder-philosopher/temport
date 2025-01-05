import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-md mx-auto">
          <Card>
            <CardContent className="p-6">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}