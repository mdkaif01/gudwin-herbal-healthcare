export default function PrimaryButton({
  children,
  className = "",
  as: Component = "button",
  ...props
}) {
  return (
    <Component
      className={`bg-[#1E4D2B] hover:bg-[#163820] text-white px-6 py-3 rounded-xl font-medium shadow-md transition-all ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}