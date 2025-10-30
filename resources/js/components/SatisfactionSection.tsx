import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

interface Statement {
  name: string;
  text: string;
  rating?: number; // 1-5
}

interface SatisfactionSectionProps {
  title?: string;
  statements: Statement[];
  storageKey?: string; // optional localStorage key
  chunkSize?: number; // default 3
}

export const SatisfactionSection: React.FC<SatisfactionSectionProps> = ({
  title = "Statements of Satisfaction",
  statements,
  storageKey = "reviews_offset",
  chunkSize = 3,
}) => {
  const [visible, setVisible] = useState<Statement[]>([]);

  useEffect(() => {
    if (!Array.isArray(statements) || statements.length === 0) {
      setVisible([]);
      return;
    }

    const n = statements.length;

    // read offset from localStorage (if available)
    let offset = 0;
    try {
      const raw = localStorage.getItem(storageKey);
      offset = raw ? parseInt(raw, 10) || 0 : 0;
    } catch (e) {
      offset = 0;
    }

    // normalize offset to [0, n-1]
    offset = ((offset % n) + n) % n;

    // pick up to chunkSize items starting from offset, wrapping around if needed
    const picked: Statement[] = [];
    const take = Math.min(chunkSize, n);
    for (let i = 0; i < take; i++) {
      picked.push(statements[(offset + i) % n]);
    }

    setVisible(picked);

    // advance offset by chunkSize for next refresh and save
    const nextOffset = (offset + chunkSize) % n;
    try {
      localStorage.setItem(storageKey, String(nextOffset));
    } catch (e) {
      // ignore localStorage errors (e.g., privacy mode)
    }
  }, [statements, storageKey, chunkSize]);

  const renderStars = (rating = 5) => (
    <div className="flex items-center justify-center gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={18}
          className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );

  return (
    <section className="mt-12 w-full px-4 rounded-lg bg-[#4C1D95] p-8 text-white flex flex-col items-center gap-8 text-center">
      <h2 className="text-3xl font-semibold mb-8">{title}</h2>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 w-full max-w-5xl">
        {visible.map((item, index) => (
          <div
            key={index}
            className="bg-white text-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center w-full sm:w-[30%]"
          >
            {/* Avatar with first letter */}
            <div className="w-14 h-14 rounded-full bg-purple-700 text-white flex items-center justify-center text-2xl font-bold mb-3">
              {item.name.charAt(0).toUpperCase()}
            </div>

            {/* Name */}
            <p className="font-semibold mb-1">{item.name}</p>

            {/* Stars */}
            {renderStars(item.rating)}

            {/* Comment */}
            <p className="text-sm text-center text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
