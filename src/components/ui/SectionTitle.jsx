export default function SectionTitle({
  badge,
  title,
  description,
  center = true,
}) {
  return (
    <div
      className={`${
        center ? "text-center max-w-3xl mx-auto" : ""
      } mb-16 space-y-4`}
    >
      {badge && (
        <span className="inline-block bg-emerald-100 text-[#1E4D2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          {badge}
        </span>
      )}

      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E4D2B]">
        {title}
      </h2>

      {description && (
        <p className="text-stone-600 text-base">
          {description}
        </p>
      )}
    </div>
  );
}