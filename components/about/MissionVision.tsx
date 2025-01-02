export function MissionVision() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To make quality healthcare accessible to every household by providing 
              affordable generic medicines through a trusted network of verified sellers.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To create a healthier India where everyone has access to affordable 
              medicines and quality healthcare, regardless of their economic status.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}