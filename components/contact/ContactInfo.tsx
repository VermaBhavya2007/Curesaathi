import { Mail, Phone, Clock } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    title: 'Email Us',
    details: ['support@curesaathi.com', 'business@curesaathi.com'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+91 1800-123-4567', '+91 1800-987-6543'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Monday - Saturday: 9:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 5:00 PM'],
  },
];

export function ContactInfo() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
      <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
      {contactDetails.map((item, index) => (
        <div key={index} className="flex items-start space-x-4">
          <div className="p-2 bg-blue-100 rounded-full">
            <item.icon className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium mb-1">{item.title}</h3>
            {item.details.map((detail, idx) => (
              <p key={idx} className="text-gray-600">{detail}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}