import { getAllImages } from '@/lib/images';

export const metadata = {
  title: 'Project Gallery | Civil Engineering',
  description: 'View our complete portfolio of civil engineering and construction projects across Uganda.',
};

export default function GalleryPage() {
  const allImages = getAllImages().filter(img => img.category !== 'founder');

  return (
    <main className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Project Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive showcase of our civil engineering and construction work across Uganda
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allImages.map((image) => (
            <div
              key={image.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden bg-muted">
                <img
                  src={image.url || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                    {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {image.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {image.description}
                </p>

                <div className="space-y-2 text-sm">
                  {image.location && (
                    <p>
                      <span className="font-semibold text-secondary">Location:</span>{' '}
                      <span className="text-muted-foreground">{image.location}</span>
                    </p>
                  )}
                  {image.role && (
                    <p>
                      <span className="font-semibold text-secondary">Role:</span>{' '}
                      <span className="text-muted-foreground">{image.role}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-8">
            Interested in working with us? Let's discuss your project.
          </p>
          <a
            href="/#contact"
            className="inline-block px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <footer/>
    </main>
  );
}
