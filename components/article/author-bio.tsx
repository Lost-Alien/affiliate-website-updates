import React from 'react'
import Link from 'next/link'
import { ShieldCheck, Award } from 'lucide-react'

interface AuthorBioProps {
  name: string
  role: string
  bio: string
  location?: string
  linkedinUrl?: string
}

function LinkedinIcon({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z" />
    </svg>
  )
}

export function AuthorBio({
  name,
  role,
  bio,
  location = 'Jabalpur, Madhya Pradesh, India',
  linkedinUrl,
}: AuthorBioProps) {
  return (
    <div className="my-10 bg-muted/40 border border-border rounded-2xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="h-16 w-16 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold font-serif text-2xl shrink-0 border-2 border-primary/30">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h4 className="font-serif font-bold text-lg text-foreground">{name}</h4>
            <span className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-medium border border-primary/20">
              {role}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mb-3">Based in {location} · TechSelect Testing Team</p>
          <p className="text-sm text-foreground/90 leading-relaxed mb-4">{bio}</p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-primary">
            {linkedinUrl && (
              <>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium"
                >
                  <LinkedinIcon className="h-3.5 w-3.5" /> Connect on LinkedIn
                </a>
                <span className="text-muted-foreground/40">•</span>
              </>
            )}
            <Link href="/about" className="hover:underline flex items-center gap-1">
              <Award className="h-3.5 w-3.5" /> About Team &amp; Testing Methodology
            </Link>
            <span className="text-muted-foreground/40">•</span>
            <Link href="/editorial-guidelines" className="hover:underline flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" /> Editorial Standards
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
