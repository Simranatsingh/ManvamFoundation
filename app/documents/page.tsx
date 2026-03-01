"use client"

import { Download, FileText } from "lucide-react"

const documentsData = [
  {
    id: 1,
    title: "Registration Certificate",
    type: "pdf",
    description: "Official registration certificate of Manvam Foundation.",
    uploadDate: "2026-02-25",
    url: "/documents/regist.pdf",
  },
  {
    id: 2,
    title: "PAN Card Document",
    type: "pdf",
    description: "PAN card document for official and legal verification.",
    uploadDate: "2026-02-25",
    url: "/documents/panc.pdf",
  },
  {
    id: 3,
    title: "12A Registration Certificate",
    type: "pdf",
    description:
      "Income Tax Department registration under Section 12A(1) granting tax exemption status to the foundation.",
    uploadDate: "2026-02-25",
    url: "/documents/12A(1).pdf",
  },
  {
    id: 4,
    title: "80G Certification",
    type: "pdf",
    description:
      "Certification under Section 80G allowing donors to claim tax deductions on contributions made to the foundation.",
    uploadDate: "2026-02-25",
    url: "/documents/80G(1).pdf",
  },
]

export default function DocumentsPage() {
  return (
    <main className="w-full pt-20 pb-20">

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-yellow-50 border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Documents & Resources
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Access official documents and certifications of Manvam Foundation.
          </p>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documentsData.map((doc) => (
              <div
                key={doc.id}
                className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <FileText className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/50 uppercase font-semibold">
                      PDF Document
                    </p>
                    <p className="text-xs text-foreground/50">
                      Uploaded {new Date(doc.uploadDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {doc.title}
                </h3>

                <p className="text-foreground/70 text-sm mb-6">
                  {doc.description}
                </p>

                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-semibold transition text-sm"
                >
                  <Download size={16} />
                  Download
                </a>
              </div>
            ))}
          </div>

          {documentsData.length === 0 && (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                No Documents Available
              </h3>
              <p className="text-foreground/70">
                Documents will be added soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}