// ============================================
// SITE DATA — Edit via Admin Panel or directly
// All editable website content lives here
// ============================================
const SITE_DATA = {

  company: {
    name: "Pretreatment Technologies",
    tagline: "Providing solutions in a better way",
    established: "1989",
    email: "pretreatmenttechnologies@gmail.com",
    website: "https://pretreatmenttechnologies.com",
    phone: "",
    address: "",
    logoColor: "#981917",
  },

  hero: {
    badge: "Precision Chemistry Since 1989",
    titleLine1: "Where Science Meets",
    titleLine2: "Surface Perfection",
    subtitle: "One of India's leading manufacturers and suppliers of phosphating & fine chemicals. From advanced surface treatment solutions to pure essential oils — providing solutions in a better way.",
    ctaPrimary: "Explore Products",
    ctaSecondary: "Talk to Our Experts",
  },

  about: {
    eyebrow: "Our Story",
    title: "Three Decades of Chemical Excellence",
    paragraph1: "Established in 1989, Pretreatment Technologies is one of India's leading manufacturers and suppliers of a wide range of Phosphating & Fine Chemicals. With more than three decades of experience, we formulate pure and safe chemicals backed by transparent, well-documented business transactions — earning a reliable and trusted reputation across the globe.",
    paragraph2: "We adhere to rigorous quality parameters during formulation, ensuring our chemicals are at par with international standards. Quality testing is done in our state-of-the-art laboratory under experienced quality auditors. Through our qualitative approach, we customize chemicals to the exact specifications of our clients.",
    statNumber: "35+",
    statLabel: "Years of Chemical Excellence",
    features: [
      "Rigorously tested formulations",
      "ISO-grade quality control",
      "Expert technical guidance",
      "Cost-effective solutions"
    ]
  },

  stats: [
    { number: 100, suffix: "+", label: "Products in our portfolio" },
    { number: 8, suffix: "+", label: "Industries served" },
    { number: 500, suffix: "+", label: "Satisfied clients" },
    { number: 99, suffix: "%", label: "Quality consistency" }
  ],

  process: [
    {
      title: "Understand Your Needs",
      description: "We begin by listening. Our technical team works with you to understand your specific requirements, surface types, environmental constraints, and performance goals."
    },
    {
      title: "Formulate the Solution",
      description: "Based on your needs, we recommend the optimal chemistry from our portfolio or develop a custom formulation. Every product is lab-verified before it reaches you."
    },
    {
      title: "Test & Validate",
      description: "Before full deployment, we conduct rigorous testing to ensure performance meets our exacting standards. We only move forward when results are flawless."
    },
    {
      title: "Deliver & Support",
      description: "On-time delivery backed by ongoing technical support. Our relationship doesn't end at the invoice — we're your long-term chemistry partner."
    }
  ],

  products: {
    industrial: {
      eyebrow: "01 — Core Range",
      title: "Industrial & Phosphating Chemicals",
      description: "Our flagship product line. Advanced surface treatment formulations engineered for maximum adhesion, corrosion resistance, and coating performance.",
      color: "blue",
      items: [
        {
          name: "PRETREAT 35",
          category: "Zinc Phosphating",
          description: "Our signature zinc phosphate coating solution. Creates a crystalline zinc phosphate layer on steel, iron, and zinc surfaces, providing superior paint adhesion and corrosion resistance for automotive and industrial applications.",
          tags: ["Zinc Phosphate", "Corrosion Resistant", "Automotive Grade"],
          badge: "Flagship",
          icon: "⚗",
          bgColor: "vis-blue"
        },
        {
          name: "PRETREAT MN",
          category: "Manganese Phosphating",
          description: "Manganese phosphate coating for wear-resistant applications. Provides excellent oil retention and anti-galling properties, ideal for gears, bearings, and engine components.",
          tags: ["Manganese Phosphate", "Wear Resistant", "Oil Retention"],
          badge: "",
          icon: "⚙",
          bgColor: "vis-slate"
        },
        {
          name: "PRETREAT 10",
          category: "Iron Phosphating",
          description: "Iron phosphate conversion coating for general-purpose metal pretreatment. A cost-effective solution that delivers reliable paint adhesion and moderate corrosion protection for indoor applications.",
          tags: ["Iron Phosphate", "Cost-Effective", "Indoor Use"],
          badge: "",
          icon: "⚙",
          bgColor: "vis-cyan"
        },
        {
          name: "Top Coat DX & EX",
          category: "Surface Coating",
          description: "Premium top coat sealant that enhances the phosphate coating's performance. Provides an additional layer of corrosion protection and improves paint adhesion across multiple substrate types.",
          tags: ["Sealant", "Multi-Substrate", "Enhanced Protection"],
          badge: "Popular",
          icon: "⚗",
          bgColor: "vis-violet"
        },
        {
          name: "Zinc Dust",
          category: "Fine Chemical",
          description: "High-purity zinc dust powder used in anti-corrosion coatings, galvanizing processes, and chemical synthesis. Consistent particle size distribution ensures reliable performance in every batch.",
          tags: ["High Purity", "Anti-Corrosion", "Galvanizing"],
          badge: "",
          icon: "⚙",
          bgColor: "vis-amber"
        },
        {
          name: "Barium Carbonate",
          category: "Fine Chemical",
          description: "Industrial-grade barium carbonate powder used in ceramics, glass manufacturing, and as a flux in metallurgical applications. Manufactured to international quality standards.",
          tags: ["Ceramics", "Glass", "Metallurgy"],
          badge: "",
          icon: "⚗",
          bgColor: "vis-rose"
        },
        {
          name: "Sodium Thiosulphate",
          category: "Fine Chemical",
          description: "Versatile chemical compound used in water treatment, photography, gold extraction, and as an analytical reagent. Available in high-purity crystalline form.",
          tags: ["Water Treatment", "High Purity", "Analytical Grade"],
          badge: "",
          icon: "⚗",
          bgColor: "vis-emerald"
        },
        {
          name: "BILLIONS™ BLR-895",
          category: "Specialty Chemical",
          description: "Advanced specialty formulation for demanding industrial applications. Engineered for consistent performance across variable conditions and high-throughput manufacturing environments.",
          tags: ["Specialty", "High Performance", "Industrial"],
          badge: "",
          icon: "⚗",
          bgColor: "vis-blue"
        },
        {
          name: "Blue Additive + Shiner-Z",
          category: "Additive",
          description: "Specialized additive and surface brightener for enhancing the visual appearance and uniformity of phosphate coatings. Creates a consistent, lustrous finish.",
          tags: ["Additive", "Brightener", "Finish Quality"],
          badge: "",
          icon: "⚙",
          bgColor: "vis-orange"
        },
        {
          name: "Antipit No. 10",
          category: "Process Aid",
          description: "Anti-pitting agent designed to eliminate surface defects during the phosphating process. Ensures smooth, uniform coating formation even on complex geometries.",
          tags: ["Anti-Pitting", "Surface Quality", "Process Aid"],
          badge: "",
          icon: "⚙",
          bgColor: "vis-slate"
        },
        {
          name: "Auroshine 100",
          category: "Brightener",
          description: "Premium surface brightening agent that gives metal surfaces a brilliant, uniform finish. Formulated for compatibility with multiple pretreatment chemistries.",
          tags: ["Brightener", "Universal", "Premium Finish"],
          badge: "",
          icon: "⚙",
          bgColor: "vis-amber"
        },
        {
          name: "Chromax Infixer-199",
          category: "Specialty Chemical",
          description: "Chrome-based surface treatment chemical for applications requiring enhanced corrosion resistance and surface hardness. Delivers consistent, high-quality conversion coating results.",
          tags: ["Chrome Based", "Hardness", "Conversion Coating"],
          badge: "",
          icon: "⚗",
          bgColor: "vis-violet"
        }
      ]
    },
    essentialOils: {
      eyebrow: "02 — Wellness Range",
      title: "Pure Essential Oils",
      description: "100% pure, carefully sourced essential and carrier oils. Organic, free from harmful additives — nature's finest, bottled with integrity. Proudly made in India.",
      color: "teal",
      items: [
        {
          name: "Lavender Essential Oil",
          category: "Essential Oil",
          description: "Premium lavender oil known for its calming and relaxing properties. Perfect for aromatherapy, stress relief, skincare, and promoting restful sleep. Steam-distilled for maximum purity.",
          tags: ["Calming", "Aromatherapy", "100% Pure"],
          badge: "Bestseller",
          icon: "🌻",
          bgColor: "vis-violet"
        },
        {
          name: "Peppermint Essential Oil",
          category: "Essential Oil",
          description: "Invigorating peppermint oil for improved focus, energy, and mental clarity. Also effective for headache relief, muscle relaxation, and respiratory support.",
          tags: ["Energizing", "Focus", "Therapeutic"],
          badge: "",
          icon: "🌿",
          bgColor: "vis-emerald"
        },
        {
          name: "Eucalyptus Essential Oil",
          category: "Essential Oil",
          description: "Refreshing eucalyptus oil with powerful respiratory and immune-boosting benefits. Ideal for steam inhalation, diffusing, and natural cleaning solutions.",
          tags: ["Respiratory", "Immune Boost", "Refreshing"],
          badge: "",
          icon: "🍃",
          bgColor: "vis-teal"
        },
        {
          name: "Tea Tree Essential Oil",
          category: "Essential Oil",
          description: "Powerful antibacterial and antifungal tea tree oil. A natural remedy for skin blemishes, acne, and minor infections. Also excellent as a natural household disinfectant.",
          tags: ["Antibacterial", "Skincare", "Natural Remedy"],
          badge: "",
          icon: "🍂",
          bgColor: "vis-amber"
        },
        {
          name: "Carrier Oil Collection",
          category: "Carrier Oil",
          description: "Premium carrier oils including sweet almond, jojoba, and coconut — perfect for diluting essential oils for safe topical use, massage therapy, and skincare formulations.",
          tags: ["Carrier Oil", "Massage", "Skincare Base"],
          badge: "",
          icon: "☀",
          bgColor: "vis-orange"
        },
        {
          name: "Potassium Permanganate (Wellness Grade)",
          category: "Wellness Chemical",
          description: "Pharmaceutical-grade potassium permanganate for antiseptic and therapeutic applications. Used in dermatological treatments, water purification, and general hygiene solutions.",
          tags: ["Antiseptic", "Pharmaceutical", "Purification"],
          badge: "",
          icon: "🌺",
          bgColor: "vis-rose"
        }
      ]
    },
    ppe: {
      eyebrow: "03 — Safety Range",
      title: "Personal Protective Equipment",
      description: "High-quality protective gear crafted from premium materials. Maximum protection and comfort for healthcare, food processing, and industrial environments.",
      color: "amber",
      items: [
        {
          name: "Surgical Masks",
          category: "Face Protection",
          description: "Medical-grade 3-ply surgical masks providing reliable barrier protection against airborne particles and droplets. Comfortable fit with adjustable nose wire and soft ear loops.",
          tags: ["3-Ply", "Medical Grade", "Breathable"],
          badge: "Essential",
          icon: "😷",
          bgColor: "vis-blue"
        },
        {
          name: "Finger Cots",
          category: "Hand Protection",
          description: "Latex and nitrile finger cots for precision handling and protection. Used in electronics assembly, medical examination, and cleanroom environments where full gloves are impractical.",
          tags: ["Latex", "Nitrile", "Precision"],
          badge: "",
          icon: "✋",
          bgColor: "vis-amber"
        },
        {
          name: "Safety Equipment Kits",
          category: "General Safety",
          description: "Comprehensive safety equipment packages tailored for industrial, healthcare, and food processing environments. Customizable kits to match your specific safety requirements.",
          tags: ["Custom Kits", "Industrial", "Healthcare"],
          badge: "",
          icon: "🛡",
          bgColor: "vis-emerald"
        }
      ]
    },
    household: {
      eyebrow: "04 — Home Range",
      title: "Eco-Friendly Household Products",
      description: "Natural, non-toxic cleaning and household solutions. Safe for your family and the planet — because effective doesn't have to mean harmful.",
      color: "emerald",
      items: [
        {
          name: "All-Purpose Surface Cleaner",
          category: "Cleaning",
          description: "Plant-based all-purpose cleaner that cuts through grease and grime without harsh chemicals. Safe for all surfaces including countertops, glass, and stainless steel. Fresh, natural scent.",
          tags: ["Plant-Based", "All Surfaces", "Non-Toxic"],
          badge: "Eco-Friendly",
          icon: "✨",
          bgColor: "vis-emerald"
        },
        {
          name: "Natural Laundry Detergent",
          category: "Laundry",
          description: "Gentle yet effective laundry detergent made with natural ingredients. Tough on stains, soft on fabrics and skin. Biodegradable formula that's kind to waterways.",
          tags: ["Biodegradable", "Skin-Safe", "Effective"],
          badge: "",
          icon: "👕",
          bgColor: "vis-cyan"
        },
        {
          name: "Activated Carbon Products",
          category: "Specialty",
          description: "High-quality activated carbon for water and air purification, odor removal, and filtration applications. Available in granular and powdered forms for home and industrial use.",
          tags: ["Purification", "Odor Removal", "Filtration"],
          badge: "",
          icon: "🌱",
          bgColor: "vis-teal"
        }
      ]
    }
  }
};

// Make available globally
if (typeof window !== 'undefined') {
  window.SITE_DATA = SITE_DATA;
}
