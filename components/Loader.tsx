"use client"

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-amber-100 via-orange-100 to-amber-200 flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2 tracking-tight">Manvam Foundation</h1>
          <p className="text-xl md:text-2xl text-foreground/70 italic font-light">We are here for help</p>
        </div>

        {/* Loading animation dots */}
        <div className="flex gap-2 mt-8">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    </div>
  )
}
