'use client';

export default function NewsSection() {
  return (
    <section className="bg-blue-50 p-4 rounded-xl shadow-md my-6">
      <h2 className="text-xl font-semibold text-blue-600 mb-2">Latest Updates</h2>
      <p className="text-gray-700 mb-4">Stay updated with the latest news, offers, and important information!</p>
      <a href="/news" className="text-blue-600 hover:text-blue-800 font-medium">
        Read more
      </a>
    </section>
  );
}
