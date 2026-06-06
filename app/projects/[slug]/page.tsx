import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCaseStudyView from '@/components/ProjectCaseStudyView';
import { getProjectCaseStudyBySlug, getProjectCaseStudySlugs } from '@/lib/projectCaseStudies';
import { sanityFetch, urlFor } from '@/lib/sanity.client';
import { PROJECT_BY_SLUG_QUERY, ALL_PROJECTS_QUERY } from '@/lib/queries';
import { buildPageMetadata } from '@/lib/seo';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const caseStudyParams = getProjectCaseStudySlugs().map((slug) => ({ slug }));

  try {
    const projects: { slug: { current: string } }[] = await sanityFetch(ALL_PROJECTS_QUERY);
    const sanityParams = projects
      .map((p) => ({ slug: p.slug.current }))
      .filter((p) => !getProjectCaseStudyBySlug(p.slug));

    return [...caseStudyParams, ...sanityParams];
  } catch {
    return caseStudyParams;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseStudy = getProjectCaseStudyBySlug(params.slug);
  if (caseStudy) {
    return buildPageMetadata({
      title: caseStudy.seo.title,
      description: caseStudy.seo.description,
      path: `/projects/${params.slug}`,
      image: caseStudy.hero.imageSrc,
    });
  }

  try {
    const project: {
      seo?: { seoTitle?: string; seoDescription?: string };
      projectTitle?: string;
      shortDescription?: string;
    } = await sanityFetch(PROJECT_BY_SLUG_QUERY, { slug: params.slug });
    if (!project) return {};
    return buildPageMetadata({
      title: project.seo?.seoTitle || project.projectTitle || 'Project',
      description: project.seo?.seoDescription || project.shortDescription || '',
      path: `/projects/${params.slug}`,
    });
  } catch {
    return {};
  }
}

export default async function ProjectPage({ params }: Props) {
  const caseStudy = getProjectCaseStudyBySlug(params.slug);
  if (caseStudy) {
    return (
      <>
        <Header />
        <ProjectCaseStudyView content={caseStudy} />
        <Footer />
      </>
    );
  }

  let project: any = null;

  try {
    project = await sanityFetch(PROJECT_BY_SLUG_QUERY, { slug: params.slug });
  } catch {}

  if (!project) {
    return (
      <>
        <Header />
        <main className="pt-32 min-h-screen">
          <div className="container-site py-24 text-center">
            <h1 className="font-display text-navy-DEFAULT text-4xl mb-4">Project Not Found</h1>
            <Link href="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section className="bg-navy-DEFAULT pt-32 pb-16">
          <div className="container-site">
            <Link
              href="/projects"
              className="font-mono text-xs text-gray-400 uppercase tracking-wider hover:text-teal-DEFAULT transition-colors mb-6 block"
            >
              ← All Projects
            </Link>
            {project.projectCategory && (
              <span className="label-category block mb-3">
                {project.projectCategory.replace(/-/g, ' ')}
              </span>
            )}
            <h1 className="font-display text-softwhite text-4xl md:text-5xl mb-3">{project.projectTitle}</h1>
            {project.location && (
              <p className="font-mono text-sm text-gray-400 uppercase tracking-wider">{project.location}</p>
            )}
          </div>
        </section>

        <div className="container-site py-16">
          {(project.beforeImage?.asset || project.afterImage?.asset) && (
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.beforeImage?.asset && (
                  <div>
                    <p className="label-category mb-3">Before</p>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={urlFor(project.beforeImage.asset).width(800).height(600).url()}
                        alt={project.beforeImage.alt || 'Before'}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
                {project.afterImage?.asset && (
                  <div>
                    <p className="label-category mb-3">After</p>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={urlFor(project.afterImage.asset).width(800).height(600).url()}
                        alt={project.afterImage.alt || 'After'}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              {project.shortDescription && (
                <p className="text-xl text-gray-700 leading-relaxed border-l-2 border-teal-DEFAULT pl-6">
                  {project.shortDescription}
                </p>
              )}

              {project.problem && (
                <div>
                  <span className="teal-rule" />
                  <h2 className="font-display text-navy-DEFAULT text-3xl mb-4">The Problem</h2>
                  <p className="text-gray-700 leading-relaxed">{project.problem}</p>
                </div>
              )}

              {project.solution && (
                <div>
                  <span className="teal-rule" />
                  <h2 className="font-display text-navy-DEFAULT text-3xl mb-4">Our Solution</h2>
                  <p className="text-gray-700 leading-relaxed">{project.solution}</p>
                </div>
              )}

              {project.galleryImages && project.galleryImages.length > 0 && (
                <div>
                  <span className="teal-rule" />
                  <h2 className="font-display text-navy-DEFAULT text-3xl mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {project.galleryImages.map((img: any, i: number) => (
                      <div key={i} className="aspect-square relative overflow-hidden">
                        <Image
                          src={urlFor(img.asset).width(400).height(400).url()}
                          alt={img.alt || project.projectTitle || 'Project gallery image'}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-navy-DEFAULT p-7">
                <p className="label-category mb-5 text-teal-DEFAULT">Project Details</p>
                <dl className="space-y-3">
                  {project.location && (
                    <div>
                      <dt className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">Location</dt>
                      <dd className="text-softwhite text-sm mt-0.5">{project.location}</dd>
                    </div>
                  )}
                  {project.projectCategory && (
                    <div>
                      <dt className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">Category</dt>
                      <dd className="text-softwhite text-sm mt-0.5">
                        {project.projectCategory.replace(/-/g, ' ')}
                      </dd>
                    </div>
                  )}
                  {project.completionDate && (
                    <div>
                      <dt className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">Completed</dt>
                      <dd className="text-softwhite text-sm mt-0.5">
                        {new Date(project.completionDate).toLocaleDateString('en-US', {
                          month: 'long',
                          year: 'numeric',
                        })}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              {project.servicesPerformed && project.servicesPerformed.length > 0 && (
                <div className="bg-softwhite border border-gray-100 p-6">
                  <p className="label-category mb-4">Services Performed</p>
                  <ul className="space-y-2">
                    {project.servicesPerformed.map((s: string, i: number) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-DEFAULT flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-teal-DEFAULT p-6">
                <h3 className="font-display text-navy-DEFAULT text-xl mb-2">Ready for a Similar Project?</h3>
                <p className="text-navy-DEFAULT/80 text-sm mb-5">Tell us about your boat and what you need.</p>
                <Link
                  href="/contact"
                  className="bg-navy-DEFAULT text-teal-DEFAULT font-mono text-xs uppercase tracking-widest px-5 py-3 block text-center hover:bg-navy-600 transition-colors"
                >
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
