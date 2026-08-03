import type { Metadata } from "next";
import { AcademicHome } from "../AcademicHome";

export const metadata: Metadata = {
  title: "Youhua Li | Operations, FinTech & Artificial Intelligence",
  description: "Academic homepage of Youhua Li, a Ph.D. student working on operations optimization, FinTech, large language models, and recommender systems.",
};

export default function EnglishHome() {
  return <AcademicHome locale="en" />;
}

