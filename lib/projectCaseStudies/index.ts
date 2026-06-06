import { duffyHullOxidationCaseStudy } from '@/lib/projectCaseStudies/duffyHullOxidation';
import {
  bottomPaintRestorationCaseStudy,
  duffyControllerDiagnosticsRepairCaseStudy,
  duffyElectricMotorRepairCaseStudy,
  duffyRestorationCaseStudy,
  electricalDiagnosticsCaseStudy,
  fiberglassRepairCaseStudy,
  lithiumBatteryConversionCaseStudy,
  woodVarnishingCaseStudy,
} from '@/lib/projectCaseStudies/studies';
import type { ProjectCaseStudy } from '@/lib/projectCaseStudies/types';

export type { ProjectCaseStudy } from '@/lib/projectCaseStudies/types';

export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  duffyHullOxidationCaseStudy,
  duffyRestorationCaseStudy,
  lithiumBatteryConversionCaseStudy,
  bottomPaintRestorationCaseStudy,
  fiberglassRepairCaseStudy,
  woodVarnishingCaseStudy,
  electricalDiagnosticsCaseStudy,
  duffyElectricMotorRepairCaseStudy,
  duffyControllerDiagnosticsRepairCaseStudy,
];

const caseStudyBySlug = new Map(PROJECT_CASE_STUDIES.map((study) => [study.slug, study]));

export function getProjectCaseStudyBySlug(slug: string): ProjectCaseStudy | undefined {
  return caseStudyBySlug.get(slug);
}

export function getProjectCaseStudySlugs(): string[] {
  return PROJECT_CASE_STUDIES.map((study) => study.slug);
}
