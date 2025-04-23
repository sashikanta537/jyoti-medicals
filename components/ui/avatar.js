
export function Avatar({ children }) {
  return <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">{children}</div>;
}
export function AvatarImage({ src, alt }) {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
}
