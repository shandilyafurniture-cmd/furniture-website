export default function FurnitureShowroomWebsite() {
  const featuredProducts = [
    {
      name: 'Luxury Sofa Collection',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      price: 'Starting ₹29,999',
    },
    {
      name: 'Modern Dining Sets',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      price: 'Starting ₹18,999',
    },
    {
      name: 'Premium Bedroom Furniture',
      image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200&auto=format&fit=crop',
      price: 'Starting ₹24,999',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">Shandilya Furniture Mall</h1>
            <p className="text-sm text-gray-500">Luxury Furniture Showroom</p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-gray-600">Home</a>
            <a href="#collection" className="hover:text-gray-600">Collections</a>
            <a href="#about" className="hover:text-gray-600">About</a>
            <a href="#contact" className="hover:text-gray-600">Contact</a>
          </nav>

          <button className="bg-black text-white px-5 py-2 rounded-2xl hover:opacity-90 transition">
            Visit Showroom
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[90vh] flex items-center justify-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
          alt="Luxury Furniture"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="uppercase tracking-[5px] text-gray-200 text-sm mb-4">
            Premium Furniture Collection
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Transform Your Home With Luxury Interiors
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Discover elegant sofas, modern dining sets, premium beds, office furniture,
            and complete home décor solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
              Explore Collection
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Premium Quality',
              desc: 'Crafted with high-quality materials for long-lasting comfort and durability.',
            },
            {
              title: 'Modern Designs',
              desc: 'Stylish and elegant furniture collections for every modern home.',
            },
            {
              title: 'Affordable Luxury',
              desc: 'Luxury furniture at competitive prices with excellent customer support.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Collection */}
      <section id="collection" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-3">
              Featured Collections
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Best Selling Furniture
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-500 mb-5">{product.price}</p>

                  <button className="w-full bg-black text-white py-3 rounded-2xl hover:opacity-90 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop"
              alt="Furniture Showroom"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <p className="uppercase tracking-[4px] text-gray-500 text-sm mb-4">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Your Trusted Furniture Destination
            </h2>

            <p className="text-gray-600 leading-8 text-lg mb-6">
              At Shandilya Furniture Mall, we provide premium quality furniture designed
              to enhance comfort, elegance, and luxury in your home and office spaces.
            </p>

            <p className="text-gray-600 leading-8 text-lg mb-8">
              From sofas and dining sets to bedroom and office furniture, our showroom
              offers a wide range of modern and luxury collections.
            </p>

            <button className="bg-black text-white px-8 py-4 rounded-2xl hover:opacity-90 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[4px] text-gray-500 text-sm mb-4">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Visit Our Showroom Today
          </h2>

          <p className="text-lg text-gray-600 mb-10 leading-8">
            Explore our latest luxury furniture collections and transform your home with
            premium interiors.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-3">Address</h3>
              <p className="text-gray-600 leading-7">
                Street no 3 vivekanand nagar Dhamtari , Chhattisgarh
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-3">Phone</h3>
              <p className="text-gray-600">+91 7974015506</p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-3">Instagram</h3>
              <p className="text-gray-600">@shandilyafurnituremall</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">Shandilya Furniture Mall</h3>
            <p className="text-gray-400 mt-2">Luxury Furniture Showroom</p>
          </div>

          <p className="text-gray-400 text-sm">
            © 2026 Shandilya Furniture Mall. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
