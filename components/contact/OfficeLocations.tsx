import { MapPin } from 'lucide-react';

const offices = [
  {
    city: 'Mumbai',
    address: '123 Business Park, Andheri East, Mumbai - 400069',
  },
  {
    city: 'Delhi',
    address: '456 Tech Hub, Connaught Place, New Delhi - 110001',
  },
];

export function OfficeLocations() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Our Offices</h2>
      <div className="space-y-6">
        {offices.map((office, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="p-2 bg-blue-100 rounded-full">
              <MapPin className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium mb-1">{office.city}</h3>
              <p className="text-gray-600">{office.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}