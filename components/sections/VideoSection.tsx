"use client"

export default function VideoSection() {
  return (
    <>
      {/* Our Story Video Section */}
      <section id="video" className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-foreground/70">Watch how we are making a difference in communities</p>
          </div>

  
          <div className="relative w-full bg-foreground/10 rounded-lg overflow-hidden aspect-video border border-border">
      
          <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/5jORjai_6v0"
                title="Manvam Foundation Story" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              /> </div>

          <div className="mt-12 text-center">
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Our journey of making a real difference in the lives of underprivileged communities across rural India.
              Learn about the impact we are creating through our various initiatives and programs.
            </p>
          </div>
        </div>
      </section>

    
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto space-y-4">
         
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-8 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border border-border">
            <p className="text-lg font-semibold text-foreground">
              Follow us on YouTube for full context and more stories:
            </p>
            <a
              href="https://www.youtube.com/@ManvamFoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-semibold transition"
            >
              Visit YouTube Channel
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-8 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border border-border">
            <p className="text-lg font-semibold text-foreground">
              Check out our Facebook for updates and community stories:
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61582535221460"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-semibold transition"
            >
              Visit Facebook Page
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
