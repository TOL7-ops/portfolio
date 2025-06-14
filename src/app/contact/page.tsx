import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 text-center mb-8">
            Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
          </p>
          
          <ContactForm />
        </div>
      </div>
    </main>
  );
} 