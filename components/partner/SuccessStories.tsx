import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const stories = [
  {
    name: 'Rajesh Medical Store',
    location: 'Delhi',
    story: 'Partnering with Cureसाथी helped us reach more customers and grow our business by 40% in just 6 months.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80',
  },
  {
    name: 'Jana Aushadhi Kendra',
    location: 'Mumbai',
    story: 'The platform made it easy to manage inventory and connect with customers looking for affordable medicines.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
  },
];

export function SuccessStories() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stories.map((story, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{story.story}</p>
                <div>
                  <p className="font-semibold">{story.name}</p>
                  <p className="text-sm text-gray-500">{story.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}