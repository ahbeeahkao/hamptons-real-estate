import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Tag, Key, Maximize, BedDouble, Bath } from 'lucide-react';

interface Property {
  name: string;
  nameCn: string;
  location: string;
  type: string;
  price: string;
  image: string;
  features: string;
  link: string;
  beds: string;
  baths: string;
  size: string;
  tenure?: string;
}

const saleProperties: Property[] = [
  {
    name: 'TRX Residences',
    nameCn: 'TRX 住宅',
    location: 'KL City Centre',
    type: 'Service Residence',
    price: 'RM 2,100,000',
    image: '/images/trx-residences.jpg',
    features: 'Iconic TRX address, world-class amenities, panoramic city views',
    link: 'https://www.iproperty.com.my/property/kl-city-centre/trx-residences/sale-500868944/',
    beds: '2',
    baths: '2',
    size: '850 sqft',
    tenure: 'Leasehold',
  },
  {
    name: 'Taman Senawang Perdana',
    nameCn: '森芙蓉花园',
    location: 'Senawang',
    type: 'Bungalow / Semi-D',
    price: 'RM 730,000',
    image: '/images/taman-senawang.jpg',
    features: 'Spacious landed home, large land area, quiet neighbourhood',
    link: 'https://www.iproperty.com.my/property/senawang/taman-senawang-perdana/sale-500867873/',
    beds: '6',
    baths: '4',
    size: '2,513 sqft (Land: 4,004 sqft)',
    tenure: 'Freehold',
  },
  {
    name: 'CANT @ Taman Warisan Puteri',
    nameCn: 'CANT 伟世安公主城',
    location: 'Seremban',
    type: 'Double-Storey Terrace',
    price: 'RM 800,000',
    image: '/images/cant-seremban.jpg',
    features: 'Modern design, freehold tenure, growing township with amenities',
    link: 'https://www.iproperty.com.my/property/seremban/cant/sale-500858515/',
    beds: '5',
    baths: '4',
    size: '1,939 sqft (Land: 4,079 sqft)',
    tenure: 'Freehold',
  },
];

const rentProperties: Property[] = [
  {
    name: 'Core Residence @ TRX',
    nameCn: 'TRX 核心住宅',
    location: 'KL City Centre',
    type: 'Service Residence (Fully Furnished)',
    price: 'RM 7,000/mo',
    image: '/images/core-residence-trx.jpg',
    features: 'Prime TRX location, fully furnished, iconic Tun Razak Exchange address',
    link: 'https://www.iproperty.com.my/property/kuala-lumpur/core-residence-trx/rent-500820922/',
    beds: '2',
    baths: '1',
    size: '925 sqft',
  },
  {
    name: 'Flat PKNS Seksyen 8',
    nameCn: 'PKNS 第八区公寓',
    location: 'Shah Alam',
    type: 'Flat (Unfurnished)',
    price: 'RM 850/mo',
    image: '/images/pkns-seksyen-8.jpg',
    features: 'Affordable city living, well-connected, established neighbourhood',
    link: 'https://www.iproperty.com.my/property/shah-alam/flat-pkns-seksyen-8/rent-500859422/',
    beds: '2',
    baths: '1',
    size: '592 sqft',
  },
];

export default function Properties() {
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
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 px-4 py-2">
              <Tag size={14} className="text-gold-500" />
              <span className="text-gold-500 text-sm tracking-wider uppercase font-medium">For Sale</span>
              <span className="text-gold-500/50 text-xs ml-1" style={{ fontFamily: "'Noto Serif SC', serif" }}>出售</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-gold-500/20 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {saleProperties.map((property, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative overflow-hidden bg-charcoal-800 border border-gold-500/5 hover:border-gold-500/20 transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img src={property.image} alt={property.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-charcoal-950/80 backdrop-blur-sm px-2.5 py-1 border border-gold-500/20">
                    <MapPin size={10} className="text-gold-500" />
                    <span className="text-[10px] text-gold-500 tracking-wider uppercase">{property.location}</span>
                  </div>
                  <a href={property.link} target="_blank" rel="noopener noreferrer" className="absolute top-3 right-3 w-8 h-8 bg-gold-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight size={14} className="text-charcoal-950" />
                  </a>
                  {property.tenure && (
                    <div className="absolute bottom-3 right-3 bg-charcoal-950/80 backdrop-blur-sm px-2 py-0.5 border border-gold-500/15">
                      <span className="text-[9px] text-gold-500/70 tracking-wider uppercase">{property.tenure}</span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-beige-100 mb-0.5 group-hover:text-gold-500 transition-colors duration-300">{property.name}</h3>
                  <span className="text-[11px] text-beige-100/30 block mb-3" style={{ fontFamily: "'Noto Serif SC', serif" }}>{property.nameCn}</span>
                  <p className="text-xs text-beige-100/50 mb-1">{property.type}</p>
                  <p className="text-xs text-beige-100/35 mb-4">{property.features}</p>

                  {/* Specs row */}
                  <div className="flex items-center gap-3 mb-4 text-beige-100/40">
                    <span className="flex items-center gap-1 text-xs"><BedDouble size={12} className="text-gold-500/50" />{property.beds} Bed</span>
                    <span className="flex items-center gap-1 text-xs"><Bath size={12} className="text-gold-500/50" />{property.baths} Bath</span>
                    <span className="flex items-center gap-1 text-xs"><Maximize size={12} className="text-gold-500/50" />{property.size}</span>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gold-500/10">
                    <span className="text-gold-500 text-base font-serif font-medium">{property.price}</span>
                    <a href={property.link} target="_blank" rel="noopener noreferrer" className="text-[10px] text-beige-100/40 hover:text-gold-500 tracking-wider uppercase transition-colors flex items-center gap-1">
                      View Listing <ArrowUpRight size={10} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FOR RENT */}
        {rentProperties.length > 0 && (
          <div className="mb-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-10">
              <div className="flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 px-4 py-2">
                <Key size={14} className="text-gold-500" />
                <span className="text-gold-500 text-sm tracking-wider uppercase font-medium">For Rent</span>
                <span className="text-gold-500/50 text-xs ml-1" style={{ fontFamily: "'Noto Serif SC', serif" }}>出租</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-gold-500/20 to-transparent" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rentProperties.map((property, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative overflow-hidden bg-charcoal-800 border border-gold-500/5 hover:border-gold-500/20 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img src={property.image} alt={property.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-charcoal-950/80 backdrop-blur-sm px-2.5 py-1 border border-gold-500/20">
                      <MapPin size={10} className="text-gold-500" />
                      <span className="text-[10px] text-gold-500 tracking-wider uppercase">{property.location}</span>
                    </div>
                    <a href={property.link} target="_blank" rel="noopener noreferrer" className="absolute top-3 right-3 w-8 h-8 bg-gold-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <ArrowUpRight size={14} className="text-charcoal-950" />
                    </a>
                    {property.tenure && (
                      <div className="absolute bottom-3 right-3 bg-charcoal-950/80 backdrop-blur-sm px-2 py-0.5 border border-gold-500/15">
                        <span className="text-[9px] text-gold-500/70 tracking-wider uppercase">{property.tenure}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-xl text-beige-100 mb-0.5 group-hover:text-gold-500 transition-colors duration-300">{property.name}</h3>
                    <span className="text-[11px] text-beige-100/30 block mb-3" style={{ fontFamily: "'Noto Serif SC', serif" }}>{property.nameCn}</span>
                    <p className="text-xs text-beige-100/50 mb-1">{property.type}</p>
                    <p className="text-xs text-beige-100/35 mb-4">{property.features}</p>
                    <div className="flex items-center gap-3 mb-4 text-beige-100/40">
                      <span className="flex items-center gap-1 text-xs"><BedDouble size={12} className="text-gold-500/50" />{property.beds} Bed</span>
                      <span className="flex items-center gap-1 text-xs"><Bath size={12} className="text-gold-500/50" />{property.baths} Bath</span>
                      <span className="flex items-center gap-1 text-xs"><Maximize size={12} className="text-gold-500/50" />{property.size}</span>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-gold-500/10">
                      <span className="text-gold-500 text-base font-serif font-medium">{property.price}</span>
                      <a href={property.link} target="_blank" rel="noopener noreferrer" className="text-[10px] text-beige-100/40 hover:text-gold-500 tracking-wider uppercase transition-colors flex items-center gap-1">
                        View Listing <ArrowUpRight size={10} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom note */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-8">
          <p className="text-beige-100/30 text-sm">
            * Off-market and pre-launch properties available upon private consultation.
            <span className="block text-xs mt-1" style={{ fontFamily: "'Noto Serif SC', serif" }}>私密及预售物业请预约私人咨询</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
