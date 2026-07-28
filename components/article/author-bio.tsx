import React from 'react'
import Link from 'next/link'
import { ShieldCheck, Award } from 'lucide-react'

interface AuthorBioProps {
  name: string
  role: string
  bio: string
  location?: string
}

export function AuthorBio({ name, role, bio, location = 'Bengaluru, India' }: AuthorBioProps) {
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
