export default function Footer() {
  return (
    <footer className="bg-green-700 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center">
        <p>© {new Date().getFullYear()} Vrindavan Farms</p>
        <p className="text-sm mt-1">
          Nature Stay & Celebration Destination
        </p>
      </div>
    </footer>
  );
}