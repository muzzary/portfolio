import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { RESUME_FILE } from '../constants'
import { buttonClasses } from '../components/UI/Button'
import { ExternalLinkIcon } from '../components/UI/icons'

/** Arrow-left glyph for the back link (kept local to avoid touching the shared set). */
function BackArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="18" height="18">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="18" height="18">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5M12 15V3" />
    </svg>
  )
}

/** Dedicated resume route: in-browser PDF viewer with download + open-in-new-tab. */
export default function ResumePage() {
  // Always start at the top when arriving on this page.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink/70 transition-colors hover:text-ink"
          >
            <BackArrow />
            Back to portfolio
          </Link>
          <div className="flex items-center gap-3">
            <a
              href={RESUME_FILE}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 text-sm font-medium text-ink/70 transition-colors hover:text-ink sm:inline-flex"
            >
              <ExternalLinkIcon /> Open in new tab
            </a>
            <a href={RESUME_FILE} download className={buttonClasses('primary', 'px-5 py-2.5')}>
              <DownloadIcon /> Download PDF
            </a>
          </div>
        </div>
      </header>

      {/* Title */}
      <div className="mx-auto w-full max-w-5xl px-6 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-ink/50">Curriculum Vitae</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold sm:text-5xl">
            Muzzary <span className="text-outline">Babar</span>
          </h1>
        </motion.div>
      </div>

      {/* PDF viewer */}
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-8">
        <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
          <object data={`${RESUME_FILE}#view=FitH`} type="application/pdf" className="h-[80vh] w-full">
            {/* Fallback for browsers that won't render PDFs inline. */}
            <div className="flex h-[60vh] flex-col items-center justify-center gap-4 p-8 text-center">
              <p className="text-ink/70">
                Your browser can&apos;t display the PDF inline.
              </p>
              <a href={RESUME_FILE} download className={buttonClasses('primary')}>
                <DownloadIcon /> Download the resume
              </a>
            </div>
          </object>
        </div>
      </main>
    </div>
  )
}
