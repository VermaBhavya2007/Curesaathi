import { Card } from '@/components/ui/card';

const stats = [
  {
    number: '50,000+',
    label: 'Patients Served',
  },
  {
    number: '1,000+',
    label: 'Partner Pharmacies',
  },
  {
    number: '30%',
    label: 'Average Savings',
  },
  {
    number: '100+',
    label: 'Cities Covered',
  },
];

export function Impact() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Our Impact
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}