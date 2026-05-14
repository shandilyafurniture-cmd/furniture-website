export default function FurnitureWebsite() {
  const products = [
    {
      image: '/sofa1.jpg',
      title: 'Luxury Sofa Collection',
      description: 'Premium modern sofas with elegant comfort and luxury finishing.',
    },
    {
      image: '/sofa2.jpg',
      title: 'Modern Dining Sets',
      description: 'Stylish dining furniture designed for modern luxury homes.',
    },
    {
      image: '/sofa3.jpg',
      title: 'Premium Bedroom Furniture',
      description: 'Elegant bedroom interiors with high-quality craftsmanship.',
    },
    {
      image: '/sofa4.jpg',
      title: 'Office Furniture',
      description: 'Modern office furniture for comfort and productivity.',
    },
    {
      image: '/sofa5.jpg',
      title: 'TV Units & Cabinets',
      description: 'Beautiful TV units and cabinets with luxury finishing.',
    },
    {
      image: '/sofa6.jpg',
      title: 'Designer Chairs',
      description: 'Comfortable and modern designer chairs for every space.',
    },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Shandilya Furniture Mall</h1>
            <p className="text-sm text-gray-500">Luxury Furniture Showroom</p>
          </div>

          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#home" className="hover:text-gray-500">Home</a>
            <a href="#products" className="hover:text-gray-500">Products</a>
            <a href="#about" className="hover:text-gray-500">About</a>
            <a href="#contact" className="hover:text-gray-500">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[90vh] flex items-center justify-center overflow-hidden"
      >
        <img
          src="/bedroom set.jpg"
          alt="Furniture"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="uppercase tracking-[6px] text-gray-200 mb-4">
            Luxury Furniture Collection
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Transform Your Home Into Luxury
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-8">
            Explore premium sofas, dining sets, beds, office furniture,
            and luxury interiors for modern homes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
              Explore Collection
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Premium Quality</h3>
            <p className="text-gray-600 leading-7">
              Crafted with high-quality materials for durability and comfort.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Modern Designs</h3>
            <p className="text-gray-600 leading-7">
              Elegant furniture collections designed for luxury interiors.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Affordable Luxury</h3>
            <p className="text-gray-600 leading-7">
              Luxury furniture at affordable pricing with excellent support.
            </p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="products" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-gray-500 mb-3">
              Our Collections
            </p>

            <h2 className="text-5xl font-bold">
              Featured Furniture Products
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">
                    {product.title}
                  </h3>

                  <p className="text-gray-600 leading-7 mb-5">
                    {product.description}
                  </p>

                  <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-gray-100 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="/sofa.jpg"
              alt="About"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <p className="uppercase tracking-[5px] text-gray-500 mb-4">
              About Us
            </p>

            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Your Trusted Luxury Furniture Destination
            </h2>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              Shandilya Furniture Mall provides premium quality furniture
              collections for modern homes and offices.
            </p>

            <p className="text-lg text-gray-600 leading-8 mb-8">
              From luxury sofas and dining tables to beds and office furniture,
              we bring elegant interiors with modern designs.
            </p>

            <button className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[5px] text-gray-500 mb-4">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold mb-8">
            Visit Our Showroom Today
          </h2>

          <p className="text-lg text-gray-600 mb-12 leading-8">
            Explore our latest luxury furniture collections and transform your
            home interiors.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-3">Address</h3>
              <p className="text-gray-600 leading-7">
                Main Road, Dhamtari, Chhattisgarh
              </p>
            </div>

            <div className="bg-gray-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-3">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>

            <div className="bg-gray-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-3">Instagram</h3>
              <p className="text-gray-600">@shandilyafurnituremall</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-3xl font-bold">Shandilya Furniture Mall</h3>
            <p className="text-gray-400 mt-2">
              Luxury Furniture Showroom
            </p>
          </div>

          <p className="text-gray-400 text-sm">
            © 2026 Shandilya Furniture Mall. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
