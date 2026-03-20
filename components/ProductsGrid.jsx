const products = [
  { img: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&auto=format&fit=crop", title: "Floor Tiles", desc: "Durable and aesthetic flooring solutions for every space", tags: ["Vitrified Tiles", "Ceramic Tiles", "Wooden Planks", "Double Charge"] },
  { img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop", title: "Sanitaryware", desc: "Complete bathroom solutions with modern designs", tags: ["Toilets & Bidets", "Wash Basins", "Urinals", "Bathroom Accessories"] },
  { img: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=800&auto=format&fit=crop", title: "Wall Tiles", desc: "Decorative and elegant wall designs to transform any room", tags: ["Digital Wall Tiles", "Elevation Tiles", "Cladding Stone", "3D Wall Tiles"] },
  { img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop", title: "Bathroom Tiles", desc: "Slip-resistant and waterproof tiles for your private sanctuary", tags: ["Anti-skid Floor Tiles", "Shower Mosaics", "Designer Wall Sets", "Matte Finish"] },
  { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop", title: "Outdoor & Parking", desc: "Heavy-duty, weather-resistant tiles for exteriors", tags: ["Heavy Duty Pavers", "Parking Tiles", "Deck Tiles", "Terracotta Tiles"] },
  { img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop", title: "Bath Fittings", desc: "Premium faucets, showers, and accessories for a modern look", tags: ["Faucets & Taps", "Shower Panels", "Mixers & Diverters", "Health Faucets"] },
  { img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop", title: "Wellness & Spa", desc: "Luxury bathtubs and enclosures for ultimate relaxation", tags: ["Freestanding Bathtubs", "Jacuzzis", "Steam Rooms", "Shower Enclosures"] },
  { img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop", title: "Adhesives & Grouts", desc: "High-quality fixing and grouting solutions for lasting strength", tags: ["Tile Adhesives", "Epoxy Grouts", "Tile Cleaners", "Waterproofing Chemicals"] }
];

export default function ProductsGrid() {
  return (
    <section className="products-section section-padding bg-light">
      <div className="container">
        <div className="section-header center reveal">
          <h2>Our Product Categories</h2>
          <p>Explore an extensive range of high-quality tiles and sanitaryware designed to elevate your living and working spaces.</p>
        </div>
        <div className="product-grid">
          {products.map((product, idx) => (
            <div key={idx} className="product-card reveal" style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}>
              <div className="card-img">
                <img src={product.img} alt={product.title} />
              </div>
              <div className="card-content">
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
                <div className="tags">
                  {product.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tag">{tag}</span>
                  ))}
                </div>
                <button className="btn-outline">View Catalog <i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
