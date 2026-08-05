export default function Badge({ children }) {
  return (
    <span className="inline-block bg-emerald-100 text-[#1E4D2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
      {children}
    </span>
  );
}