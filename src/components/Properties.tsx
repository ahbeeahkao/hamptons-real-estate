import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, BedDouble, Bath, Maximize, Ruler, Building, Car, Shield, Waves, Dumbbell, Trees, Wifi, CheckCircle, Phone } from 'lucide-react';

interface Property {
  name: string;
  nameCn: string;
  location: string;
  type: string;
  price: string;
  psf?: string;
  images: string[];
  description: string;
  beds: string;
  baths: string;
  builtUp: string;
  landArea?: string;
  tenure?: string;
  furnishing?: string;
  listedDate?: string;
  address?: string;
  amenities: string[];
}

const saleProperties: Property[] = [
  {
    name: 'TRX Residences',
    nameCn: 'TRX 住宅',
    location: 'KL City Centre',
    type: 'Service Residence',
    price: 'RM 2,100,000',
    psf: 'RM 2,471 psf',
    images: ['/images/trx-residences-1.jpg', '/images/trx-residences-2.jpg', '/images/trx-residences-3.jpg'],
    description: 'A premium service residence at the iconic Tun Razak Exchange (TRX), Kuala Lumpur\'s new international financial district. This 850 sqft unit features 2 bedrooms and 2 bathrooms with modern layout design. Residents enjoy world-class amenities including infinity pool, sky gym, lounge, and 24-hour security. Walking distance to TRX MRT station, The Exchange TRX mall, and minutes to KLCC.',
    beds: '2',
    baths: '2',
    builtUp: '850 sqft',
    tenure: 'Freehold',
    furnishing: 'Unfurnished',
    listedDate: '3 May 2026',
    address: 'Jalan Tun Razak, KL City Centre, Kuala Lumpur',
    amenities: ['Infinity Pool', 'Sky Gym', 'Lounge & Function Room', '24-Hour Security', 'TRX MRT Access', 'The Exchange TRX Mall'],
  },
  {
    name: 'Taman Senawang Perdana',
    nameCn: '森芙蓉花园',
    location: 'Senawang, Negeri Sembilan',
    type: 'Bungalow',
    price: 'RM 730,000',
    psf: 'RM 182 psf',
    images: ['/images/senawang-1.jpg', '/images/senawang-2.jpg', '/images/bungalow-exterior.jpg'],
    description: 'A spacious bungalow in the established Taman Senawang Perdana neighbourhood. This 2-storey bungalow offers 6 bedrooms and 4 bathrooms across 2,513 sqft of built-up area on a generous 4,004 sqft freehold land. Ideal for large families seeking tranquility with easy access to Senawang town, schools, and the LEKAS highway to Kuala Lumpur.',
    beds: '6',
    baths: '4',
    builtUp: '2,513 sqft',
    landArea: '4,004 sqft',
    tenure: 'Freehold',
    furnishing: 'Unfurnished',
    listedDate: '10 Mar 2026',
    address: 'Taman Senawang Perdana, Senawang, Negeri Sembilan',
    amenities: ['Large Land Area', 'Quiet Neighbourhood', 'Highway Access (LEKAS)', 'Nearby Schools', 'Freehold Title'],
  },
  {
    name: 'CANT @ Taman Warisan Puteri',
    nameCn: 'CANT @ 伟世安公主城',
    location: 'Seremban, Negeri Sembilan',
    type: '1-Storey Terrace House',
    price: 'RM 800,000',
    psf: 'RM 412 psf',
    images: ['/images/warisan-1.jpg', '/images/warisan-2.jpg', '/images/terrace-interior.jpg'],
    description: 'A beautifully designed 1-storey terrace house in the growing township of Taman Warisan Puteri, Seremban. This fully furnished home features 5 bedrooms and 4 bathrooms across 1,939 sqft built-up on a 4,079 sqft freehold land. Modern architecture with quality finishes, spacious living areas, and a well-maintained garden. Conveniently located near amenities, schools, and Seremban town centre.',
    beds: '5',
    baths: '4',
    builtUp: '1,939 sqft',
    landArea: '4,079 sqft',
    tenure: 'Freehold',
    furnishing: 'Fully Furnished',
    listedDate: '23 Jun 2026',
    address: 'Taman Warisan Puteri, Seremban, Negeri Sembilan',
    amenities: ['Fully Furnished', 'Modern Design', 'Spacious Garden', 'Nearby Amenities', 'Freehold Title', 'Growing Township'],
  },
];

const rentProperties: Property[] = [
  {
    name: 'Core Residence @ TRX',
    nameCn: 'TRX 核心住宅',
    location: 'KL City Centre',
    type: 'Service Residence',
    price: 'RM 7,000/month',
    psf: 'RM 7.57 psf',
    images: ['/images/core-trx-1.jpg', '/images/core-trx-2.jpg', '/images/condo-living.jpg'],
    description: 'A fully furnished service residence at Core Residence @ TRX, located at the prestigious Tun Razak Exchange on Jalan Tun Razak. This 925 sqft unit features 2 bedrooms and 1 bathroom with contemporary furnishings and city views. Residents enjoy premium facilities including swimming pool, gym, community garden, 24-hour security, and covered parking. Walking distance to TRX MRT station and The Exchange TRX mall.',
    beds: '2',
    baths: '1',
    builtUp: '925 sqft',
    tenure: 'Leasehold',
    furnishing: 'Fully Furnished',
    listedDate: '3 Mar 2026',
    address: 'Jalan Tun Razak, Tun Razak Exchange, Kuala Lumpur',
    amenities: ['Swimming Pool', 'Gym', 'Community Garden', '24-Hour Security', 'Covered Parking', 'TRX MRT Access'],
  },
  {
    name: 'Flat PKNS Seksyen 8',
    nameCn: 'PKNS 第八区公寓',
    location: 'Shah Alam, Selangor',
    type: 'Flat',
    price: 'RM 850/month',
    psf: 'RM 1.44 psf',
    images: ['/images/pkns-1.jpg', '/images/pkns-2.jpg'],
    description: 'An affordable flat in the established PKNS Seksyen 8 area of Shah Alam. This 592 sqft unit offers 2 bedrooms and 1 bathroom, ideal for small families or working professionals. Located at 22 Jalan Liku 8/1, the flat is well-connected to Shah Alam city centre, industrial areas, and major highways. Basic amenities, schools, and public transport are within easy reach.',
    beds: '2',
    baths: '1',
    builtUp: '592 sqft',
    furnishing: 'Unfurnished',
    listedDate: '15 Jul 2026',
    address: '22 Jalan Liku 8/1, Seksyen 8, 40000 Shah Alam, Selangor',
    amenities: ['Affordable Living', 'Well-Connected', 'Nearby Schools', 'Public Transport Access', 'Established Neighbourhood'],
  },
];

const amenityIconMap: Record<string, typeof Waves> = {
  'Infinity Pool': Waves,
  'Swimming Pool': Waves,
  'Sky Gym': Dumbbell,
  'Gym': Dumbbell,
  'Community Garden': Trees,
  'Large Land Area': Trees,
  'Spacious Garden': Trees,
  '24-Hour Security': Shield,
  'Covered Parking': Car,
  'TRX MRT Access': Building,
};

function PropertyCard({ property, index, onClick }: { property: Property; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer relative bg-charcoal-800/50 border border-gold-500/5 hover:border-gold-500/20 overflow-hidden transition-all duration-500"
    >
      <div className="relative h-56 overflow-hidden">
        <img src={property.images[0]} alt={property.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-charcoal-950/80 backdrop-blur-sm px-2.5 py-1 border border-gold-500/20">
          <MapPin size={10} className="text-gold-500" />
          <span className="text-[10px] text-gold-500 tracking-wider uppercase">{property.location}</span>
        </div>
        {property.tenure && (
          <div className="absolute top-3 right-3 bg-charcoal-950/80 backdrop-blur-sm px-2 py-0.5 border border-gold-500/15">
            <span className="text-[9px] text-gold-500/70 tracking-wider uppercase">{property.tenure}</span>
          </div>
        )}
        {property.images.length > 1 && (
          <div className="absolute bottom-3 right-3 bg-charcoal-950/80 backdrop-blur-sm px-2 py-1 border border-gold-500/15 text-[9px] text-beige-100/50">
            📷 {property.images.length} Photos
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl text-beige-100 mb-0.5 group-hover:text-gold-500 transition-colors duration-300">{property.name}</h3>
        <span className="text-[11px] text-beige-100/30 block mb-3" style={{ fontFamily: "'Noto Serif SC', serif" }}>{property.nameCn}</span>
        <p className="text-xs text-beige-100/50 mb-1">{property.type}</p>
        <div className="flex items-center gap-3 mb-4 text-beige-100/40">
          <span className="flex items-center gap-1 text-xs"><BedDouble size={12} className="text-gold-500/50" />{property.beds} Bed</span>
          <span className="flex items-center gap-1 text-xs"><Bath size={12} className="text-gold-500/50" />{property.baths} Bath</span>
          <span className="flex items-center gap-1 text-xs"><Maximize size={12} className="text-gold-500/50" />{property.builtUp}</span>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-gold-500/10">
          <div>
            <span className="text-gold-500 text-base font-serif font-medium block">{property.price}</span>
            {property.psf && <span className="text-[10px] text-beige-100/30">{property.psf}</span>}
          </div>
          <span className="text-[10px] text-gold-500/60 hover:text-gold-500 tracking-wider uppercase transition-colors flex items-center gap-1">
            View Details →
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function PropertyModal({ property, onClose }: { property: Property; onClose: () => void }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-charcoal-950/95 backdrop-blur-md overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl mx-auto my-8 bg-charcoal-900 border border-gold-500/20"
      >
        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 bg-charcoal-950/80 backdrop-blur-sm border border-gold-500/20 flex items-center justify-center hover:bg-gold-500/10 transition-colors">
          <X size={18} className="text-beige-100/70" />
        </button>

        {/* Image Gallery */}
        <div className="relative h-64 sm:h-96 overflow-hidden">
          <img src={property.images[activeImage]} alt={`${property.name} - Photo ${activeImage + 1}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent" />
          {property.images.length > 1 && (
            <div className="absolute bottom-4 left-4 right-4 flex gap-2 justify-center">
              {property.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-12 overflow-hidden border-2 transition-all ${activeImage === i ? 'border-gold-500 opacity-100' : 'border-transparent opacity-50 hover:opacity-80'}`}
                >
                  <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={14} className="text-gold-500/60" />
                <span className="text-xs text-gold-500/60 tracking-wider uppercase">{property.location}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-beige-100 mb-1">{property.name}</h2>
              <span className="text-sm text-beige-100/30" style={{ fontFamily: "'Noto Serif SC', serif" }}>{property.nameCn}</span>
            </div>
            <div className="text-right">
              <span className="text-gold-500 text-2xl sm:text-3xl font-serif font-medium block">{property.price}</span>
              {property.psf && <span className="text-xs text-beige-100/40">{property.psf}</span>}
            </div>
          </div>

          {/* Key Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { icon: BedDouble, label: 'Bedrooms', value: property.beds },
              { icon: Bath, label: 'Bathrooms', value: property.baths },
              { icon: Maximize, label: 'Built-up', value: property.builtUp },
              { icon: Building, label: 'Type', value: property.type },
            ].map((spec, i) => (
              <div key={i} className="bg-charcoal-800/50 border border-gold-500/10 p-4 text-center">
                <spec.icon size={20} className="text-gold-500/60 mx-auto mb-2" />
                <p className="text-beige-100/80 text-sm font-medium">{spec.value}</p>
                <p className="text-beige-100/30 text-[10px] tracking-wider uppercase mt-0.5">{spec.label}</p>
              </div>
            ))}
          </div>

          {/* Additional Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {property.landArea && (
              <div className="flex items-center gap-3 py-2 border-b border-gold-500/5">
                <Ruler size={14} className="text-gold-500/50" />
                <span className="text-beige-100/40 text-xs">Land Area</span>
                <span className="text-beige-100/80 text-sm ml-auto">{property.landArea}</span>
              </div>
            )}
            {property.tenure && (
              <div className="flex items-center gap-3 py-2 border-b border-gold-500/5">
                <Shield size={14} className="text-gold-500/50" />
                <span className="text-beige-100/40 text-xs">Tenure</span>
                <span className="text-beige-100/80 text-sm ml-auto">{property.tenure}</span>
              </div>
            )}
            {property.furnishing && (
              <div className="flex items-center gap-3 py-2 border-b border-gold-500/5">
                <CheckCircle size={14} className="text-gold-500/50" />
                <span className="text-beige-100/40 text-xs">Furnishing</span>
                <span className="text-beige-100/80 text-sm ml-auto">{property.furnishing}</span>
              </div>
            )}
            {property.listedDate && (
              <div className="flex items-center gap-3 py-2 border-b border-gold-500/5">
                <CheckCircle size={14} className="text-gold-500/50" />
                <span className="text-beige-100/40 text-xs">Listed Date</span>
                <span className="text-beige-100/80 text-sm ml-auto">{property.listedDate}</span>
              </div>
            )}
            {property.address && (
              <div className="flex items-center gap-3 py-2 border-b border-gold-500/5 sm:col-span-2">
                <MapPin size={14} className="text-gold-500/50" />
                <span className="text-beige-100/40 text-xs">Address</span>
                <span className="text-beige-100/80 text-sm ml-auto text-right">{property.address}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="font-serif text-lg text-gold-500 mb-3">Description <span className="text-beige-100/20 text-sm" style={{ fontFamily: "'Noto Serif SC', serif" }}>详情</span></h3>
            <p className="text-beige-100/60 text-sm leading-relaxed">{property.description}</p>
          </div>

          {/* Amenities */}
          <div className="mb-8">
            <h3 className="font-serif text-lg text-gold-500 mb-4">Amenities & Features <span className="text-beige-100/20 text-sm" style={{ fontFamily: "'Noto Serif SC', serif" }}>设施与特色</span></h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.amenities.map((amenity, i) => {
                const Icon = amenityIconMap[amenity] || CheckCircle;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-gold-500/60" />
                    </div>
                    <span className="text-beige-100/70 text-sm">{amenity}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Agent Info */}
          <div className="bg-charcoal-800/50 border border-gold-500/10 p-5 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                <span className="font-serif text-gold-500 text-lg font-bold">BC</span>
              </div>
              <div className="flex-1">
                <p className="text-beige-100/80 text-sm font-medium">Bernice Chan</p>
                <p className="text-beige-100/30 text-xs">REN 81580 · Hamptons Real Estate [E (3) 2124]</p>
              </div>
              <a
                href="https://wa.me/60123515121"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-4 py-2 text-xs tracking-wider transition-all duration-300"
              >
                <Phone size={12} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#enquiry" onClick={onClose} className="flex-1 bg-gold-500 hover:bg-gold-400 text-charcoal-950 py-4 text-sm tracking-wider uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2">
              Enquire About This Property
            </a>
            <a href="https://wa.me/60123515121" target="_blank" rel="noopener noreferrer" className="flex-1 border border-gold-500/40 text-gold-500 hover:bg-gold-500/10 py-4 text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2">
              <Phone size={14} />
              WhatsApp Agent
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Properties() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  return (
    <section id="properties" className="relative py-24 sm:py-32 bg-charcoal-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }} className="text-center mb-16 sm:mb-20">
          <span className="text-gold-500/60 text-xs tracking-[0.4em] uppercase block mb-4">Curated Portfolio</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-beige-100 mb-4">Signature Properties</h2>
          <p className="text-beige-100/50 text-base sm:text-lg max-w-xl mx-auto" style={{ fontFamily: "'Noto Serif SC', serif" }}>精选标志性物业</p>
          <div className="luxury-divider-wide mx-auto mt-8" />
        </motion.div>

        {/* FOR SALE */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="font-serif text-2xl text-gold-500">For Sale</h3>
            <span className="text-beige-100/30 text-sm" style={{ fontFamily: "'Noto Serif SC', serif" }}>出售</span>
            <div className="flex-1 h-px bg-gradient-to-r from-gold-500/20 to-transparent" />
            <span className="text-xs text-beige-100/30 tracking-wider">{saleProperties.length} Listings</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {saleProperties.map((property, i) => (
              <PropertyCard key={i} property={property} index={i} onClick={() => setSelectedProperty(property)} />
            ))}
          </div>
        </div>

        {/* FOR RENT */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="font-serif text-2xl text-gold-500">For Rent</h3>
            <span className="text-beige-100/30 text-sm" style={{ fontFamily: "'Noto Serif SC', serif" }}>出租</span>
            <div className="flex-1 h-px bg-gradient-to-r from-gold-500/20 to-transparent" />
            <span className="text-xs text-beige-100/30 tracking-wider">{rentProperties.length} Listings</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rentProperties.map((property, i) => (
              <PropertyCard key={i} property={property} index={i} onClick={() => setSelectedProperty(property)} />
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-8">
          <p className="text-beige-100/30 text-sm">
            * Click any property for full details. Off-market properties available upon private consultation.
            <span className="block text-xs mt-1" style={{ fontFamily: "'Noto Serif SC', serif" }}>点击查看完整详情 · 私密物业请预约咨询</span>
          </p>
        </motion.div>
      </div>

      {/* Property Detail Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
