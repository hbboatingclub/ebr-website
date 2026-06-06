'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState } from 'react';

export type ProjectCard = {
  id: string;
  slug: string;
  title: string;
  location?: string;
  shortDescription?: string;
  category?: string;
  imageSrc?: string;
  imageAlt?: string;
};

const CATEGORIES = [
  'All',
  'Controller Rebuilds',
  'Battery Upgrades',
  'Motor Repair',
  'Full Restorations',
  'Bottom Paint',
  'Upholstery',
];

function normalizeCategory(value?: string) {
  if (!value) return '';
  return value.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function ProjectsGrid({ projects }: { projects: ProjectCard[] }) {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((p) => normalizeCategory(p.category) === active);
  }, [active, projects]);

  return (
    <>
      <div className="hub-premium-filters" role="tablist" aria-label="Filter projects">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={active === cat}
            className={`hub-premium-filter${active === cat ? ' hub-premium-filter--active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="hub-premium-card-grid">
          {filtered.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`} className="hub-premium-portfolio-card group">
              <div className="hub-premium-portfolio-card__media">
                {project.imageSrc ? (
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt || project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="hub-premium-portfolio-card__placeholder">Photo Coming Soon</div>
                )}
                {project.category && (
                  <span className="hub-premium-portfolio-card__badge">
                    {normalizeCategory(project.category)}
                  </span>
                )}
                <div className="hub-premium-portfolio-card__overlay" aria-hidden />
              </div>
              <div className="hub-premium-portfolio-card__body">
                <h2 className="hub-premium-portfolio-card__title">{project.title}</h2>
                {project.location && (
                  <p className="hub-premium-portfolio-card__meta">{project.location}</p>
                )}
                {project.shortDescription && (
                  <p className="hub-premium-portfolio-card__text">{project.shortDescription}</p>
                )}
                <span className="hub-premium-portfolio-card__link">
                  View project
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="hub-premium-empty">No projects in this category yet.</p>
      )}
    </>
  );
}
