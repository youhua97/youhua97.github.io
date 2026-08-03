import type { Metadata } from "next";
import { AcademicHome } from "./AcademicHome";

export const metadata: Metadata = {
  title: "李佑华（Youhua Li）| 运筹优化、金融科技与人工智能",
  description: "李佑华的学术主页：运筹优化、金融科技、大语言模型与推荐系统研究。",
};

export default function Home() {
  return <AcademicHome locale="zh" />;
}

