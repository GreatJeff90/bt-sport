"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#131355] py-12 px-6 sm:px-12 text-center text-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-xl sm:text-2xl font-semibold mb-4">
          © {new Date().getFullYear()} BT SPORT. All Rights Reserved.
        </p>
        <p className="text-sm sm:text-base text-gray-300">
          Transforming the betting experience with a revolutionary approach. Stay tuned for more updates.
        </p>
      </div>
    </footer>
  );
}
