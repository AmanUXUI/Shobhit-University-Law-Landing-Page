import React from "react";
import { Award, ShieldCheck, Star, Bookmark, BookOpen } from "lucide-react";

interface RankingItem {
  id: string;
  rank: string;
  title: string;
  description: string;
  source: string;
  badgeColor: string;
  accentColor: string;
  bgGradient: string;
  icon: React.ComponentType<any>;
}

const RANKINGS: RankingItem[] = [
  {
    id: "careers360",
    rank: "Rated AAA in Uttar Pradesh",
    title: "Among Private Law Colleges",
    description: "Recognized for academic excellence and quality legal education.",
    source: "Careers360 Law Rankings",
    badgeColor: "bg-emerald-50 border-emerald-200/50 text-[#116446]",
    accentColor: "text-[#116446] group-hover:text-emerald-800",
    bgGradient: "group-hover:border-emerald-500/30 group-hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.08)]",
    icon: ShieldCheck,
  },
  {
    id: "ghrdc",
    rank: "Ranked #1 in India",
    title: "Outstanding Law School of Excellence",
    description: "Recognized for excellence in legal education, research, and academic standards.",
    source: "GHRDC Law School Survey",
    badgeColor: "bg-amber-50 border-amber-200/50 text-amber-800",
    accentColor: "text-amber-600 group-hover:text-amber-800",
    bgGradient: "group-hover:border-amber-500/30 group-hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.08)]",
    icon: Award,
  },
  {
    id: "the-week",
    rank: "Ranked #42 in India",
    title: "Among Top Law Colleges",
    description: "Acknowledged for quality legal education and academic performance.",
    source: "The Week Law College Survey",
    badgeColor: "bg-blue-50 border-blue-200/50 text-blue-800",
    accentColor: "text-blue-600 group-hover:text-blue-800",
    bgGradient: "group-hover:border-blue-500/30 group-hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.08)]",
    icon: Star,
  },
  {
    id: "csr",
    rank: "Highly Ranked in India",
    title: "Top Distinguished Law School",
    description: "Recognized for excellence in legal education and professional development.",
    source: "Competition Success Review (CSR)",
    badgeColor: "bg-purple-50 border-purple-200/50 text-purple-800",
    accentColor: "text-purple-600 group-hover:text-purple-800",
    bgGradient: "group-hover:border-purple-500/30 group-hover:shadow-[0_20px_40px_-15px_rgba(147,51,234,0.08)]",
    icon: Bookmark,
  },
];

export default function BottomCards() {
  return (
    <div 
      className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 sm:-mt-4 md:-mt-6 lg:-mt-8" 
      id="interactive-hero-cards"
    >
      <div className="bg-white rounded-2xl shadow-[0_25px_60px_-15px_rgba(17,100,70,0.08),0_1px_3px_rgba(0,0,0,0.04)] border border-zinc-200/80 p-6 md:p-8 relative overflow-hidden">
        {/* Ambient grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
        
        {/* Rankings Header */}
        <div className="mb-8 relative z-10">
          <h2 
            style={{ fontSize: "28px", lineHeight: "34px" }}
            className="font-excon font-normal text-[#0B1E33] tracking-tight"
          >
            National Rankings & Recognitions
          </h2>

          <p className="font-ranade font-light text-zinc-600 text-xs sm:text-[13px] leading-relaxed mt-3 max-w-3xl">
            Recognised among India's leading law schools for academic excellence, legal education, research, innovation, and student success.
          </p>
        </div>

        {/* Dynamic Rankings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {RANKINGS.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`group relative bg-zinc-50/40 border border-zinc-200/60 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white ${item.bgGradient} flex flex-col justify-between`}
              >
                <div>
                  {/* Top Icon & Badge Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-lg border ${item.badgeColor} shrink-0`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Huge Rank/Rating Display */}
                  <div className="mb-2">
                    <span className={`block font-excon font-bold text-lg leading-snug tracking-tight ${item.accentColor} transition-colors duration-300`}>
                      {item.rank}
                    </span>
                  </div>

                  {/* Title of the Rank */}
                  <h4 className="font-excon font-semibold text-zinc-900 text-xs sm:text-[13px] tracking-tight mb-2">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="font-ranade font-light text-zinc-600 text-xs sm:text-[12.5px] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Footnotes Source */}
                <div className="pt-3 border-t border-zinc-100 mt-auto">
                  <div className="flex items-center gap-1.5 text-zinc-500">
                    <BookOpen className="w-3.5 h-3.5 shrink-0 text-zinc-400" />
                    <span className="font-ranade text-[10.5px] font-medium leading-tight text-zinc-500">
                      Source: {item.source}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
