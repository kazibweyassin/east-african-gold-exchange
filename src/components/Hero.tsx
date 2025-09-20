import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <Image 
          src="/images/unsplash/gold-background.jpg"
          alt="Gold background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-gray-900/80" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            East African Gold Direct
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Direct gold sellers from East Africa. We source and sell authentic, high-quality gold 
            directly to our clients with no intermediaries.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/about"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-semibold transition-colors"
            >
              Our Gold Products
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-md font-semibold transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}