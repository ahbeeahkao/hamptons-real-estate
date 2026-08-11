import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Tag, Key, Maximize, BedDouble, Bath, Ruler } from 'lucide-react';

interface Property {
  name: string;
  nameCn: string;
  location: string;
  type: string;
  price: string;
  image: string;
  features: string;
  beds: string;
  baths: string;
  builtUp: string;
  landArea?: string;
  tenure?: string;
  furnishing?: string;
}

const saleProperties: Property[] = [
  {
    name: 'Bungalow @ Taman Tambun Indah',
    nameCn: '独立式洋房',
    location: 'Penang',
    type: '2-Storey Bungalow',
    price: 'RM 950,000',
    image: '/images/taman-senawang.jpg',
    features: 'Spacious landed home, large land area, quiet neighbourhood',
    beds: '3',
    baths: '3',
    builtUp: '2,300 sqft',
    landArea: '6,000 sqft',
  },
  {
    name: 'Datum Jelatek Residence',
    nameCn: '达腾杰乐泰住宅',
    location: 'Kuala Lumpur',
    type: 'Service Residence',
    price: 'RM 850,000',
    image: '/images/trx-residences.jpg',
    features: 'Prime KL location, modern amenities, excellent connectivity',
    beds: '2',
    baths: '2',
    builtUp: '900 sqft',
  },
  {
    name: 'Taman Warisan Puteri',
    nameCn: '伟世安公主城',
    location: 'Seremban',
    type: 'Double-Storey Terrace',
    price: 'RM 700,000',
    image: '/images/cant-seremban.jpg',
    features: 'Growing township, modern design, freehold tenure',
    beds: '5',
    baths: '4',
    builtUp: '1,939 sqft',
    landArea: '4,079 sqft',
    tenure: 'Freehold',
  },
  {
    name: 'The Capers @ Sentul East',
    nameCn: '卡佩斯文良港',
    location: 'Sentul',
    type: 'Condominium',
    price: 'RM 650,000',
    image: '/images/property-1.jpg',
    features: 'YTL development, freehold, Sentul East lifestyle hub',
    beds: '2',
    baths: '2',
    builtUp: '1,050 sqft',
    tenure: 'Freehold',
  },
  {
    name: 'Lumina Residence',
    nameCn: '鲁米娜住宅',
    location: 'Penang',
    type: 'Condominium',
    price: 'RM 330,000',
    image: '/images/property-2.jpg',
    features: 'Penang island living, modern facilities, strategic location',
    beds: '2',
    baths: '1',
    builtUp: '750 sqft',
  },
  {
    name: 'SO Sofitel KL Residences',
    nameCn: '索菲特吉隆坡住宅',
    location: 'KLCC',
    type: 'Service Residence',
    price: 'RM 2,227,500',
    image: '/images/penthouse-interior.jpg',
    features: 'World-class branded residence, KLCC address, hotel services',
    beds: '2',
    baths: '2',
    builtUp: '956 sqft',
  },
  {
    name: 'The Capers @ Sentul East',
    nameCn: '卡佩斯文良港',
    location: 'Sentul',
    type: 'Condominium',
    price: 'RM 650,000',
    image: '/images/property-3.jpg',
    features: 'YTL development, freehold, Sentul East lifestyle hub',
    beds: '2',
    baths: '2',
    builtUp: '1,050 sqft',
    tenure: 'Freehold',
  },
  {
    name: 'Datum Jelatek Residence',
    nameCn: '达腾杰乐泰住宅',
    location: 'Kuala Lumpur',
    type: 'Service Residence',
    price: 'RM 1,280,000',
    image: '/images/luxury-tower.jpg',
    features: 'Premium unit, higher floor, panoramic city views',
    beds: '3',
    baths: '2',
    builtUp: '1,400 sqft',
  },
  {
    name: 'Datum Jelatek Residence',
    nameCn: '达腾杰乐泰住宅',
    location: 'Kuala Lumpur',
    type: 'Service Residence',
    price: 'RM 770,000',
    image: '/images/luxury-bedroom.jpg',
    features: 'Mid-floor unit, well-maintained, excellent condition',
    beds: '2',
    baths: '1',
    builtUp: '800 sqft',
  },
  {
    name: 'Taman Warisan Puteri',
    nameCn: '伟世安公主城',
    location: 'Seremban',
    type: 'Double-Storey Terrace',
    price: 'RM 800,000',
    image: '/images/cant-seremban.jpg',
    features: 'Corner unit, extended layout, freehold tenure',
    beds: '5',
    baths: '4',
    builtUp: '2,000 sqft',
    landArea: '4,079 sqft',
    tenure: 'Freehold',
  },
  {
    name: 'Taman Senawang Perdana',
    nameCn: '森芙蓉花园',
    location: 'Senawang',
    type: 'Bungalow / Semi-D',
    price: 'RM 730,000',
    image: '/images/taman-senawang.jpg',
    features: 'Spacious landed home, large land area, quiet neighbourhood',
    beds: '6',
    baths: '4',
    builtUp: '2,513 sqft',
    landArea: '4,004 sqft',
  },
];

const rentProperties: Property[] = [
  {
    name: 'Pavilion Residences',
    nameCn: '柏威年住宅',
    location: 'Bukit Bintang',
    type: 'Service Residence',
    price: 'RM 9,000/mo',
    image: '/images/penthouse-interior.jpg',
    features: 'Pavilion KL connected, fully furnished, Bukit Bintang prestige',
    beds: '2',
    baths: '2',
    builtUp: '1,509 sqft',
    furnishing: 'Fully Furnished',
  },
  {
    name: 'RYAN & MIHO',
    nameCn: '瑞安米禾',
    location: 'Petaling Jaya',
    type: 'Serviced Residence',
    price: 'RM 3,800/mo',
    image: '/images/property-2.jpg',
    features: 'Section 13 PJ, modern serviced living, MRT accessible',
    beds: '1',
    baths: '1',
    builtUp: '550 sqft',
    furnishing: 'Fully Furnished',
  },
  {
    name: 'Seventeen Mall & Residences',
    nameCn: '十七商场住宅',
    location: 'Petaling Jaya',
    type: 'Service Residence',
    price: 'RM 2,000/mo',
    image: '/images/property-1.jpg',
    features: 'Section 17 PJ, MRT connected, retail below',
    beds: 'Studio',
    baths: '1',
    builtUp: '550 sqft',
    furnishing: 'Fully Furnished',
  },
  {
    name: 'Union Suites',
    nameCn: '联合套房',
    location: 'Bandar Sunway',
    type: 'Duplex Apartment',
    price: 'RM 6,500/mo',
    image: '/images/luxury-bedroom.jpg',
    features: 'Sunway township, duplex layout, resort facilities',
    beds: '4',
    baths: '3',
    builtUp: '1,310 sqft',
    furnishing: 'Fully Furnished',
  },
  {
    name: 'Mitsui Serviced Suites',
    nameCn: '三井服务式套房',
    location: 'Bukit Bintang',
    type: 'Serviced Suite',
    price: 'RM 3,900/mo',
    image: '/images/core-residence-trx.jpg',
    features: 'Japanese-managed, Bukit Bintang, hotel-style services',
    beds: '1',
    baths: '1',
    builtUp: '541 sqft',
    furnishing: 'Fully Furnished',
  },
  {
    name: 'Flat PKNS Seksyen 8',
    nameCn: 'PKNS 第八区公寓',
    location: 'Shah Alam',
    type: 'Flat',
    price: 'RM 850/mo',
    image: '/images/pkns-seksyen-8.jpg',
    features: 'Affordable living, well-connected, established neighbourhood',
    beds: '2',
    baths: '1',
    builtUp: '592 sqft',
    furnishing: 'Unfurnished',
  },
  {
    name: 'MOF Inc Tower',
    nameCn: 'MOF 大厦',
    location: 'KLCC',
    type: 'Office Space',
    price: 'RM 39,500/mo',
    image: '/images/luxury-tower.jpg',
    features: 'Grade-A office, Platinum Park, Persiaran KLCC',
    beds: '—',
    baths: '—',
    builtUp: '6,000 sqft',
  },
  {
    name: 'RYAN & MIHO',
    nameCn: '瑞安米禾',
    location: 'Petaling Jaya',
    type: 'Serviced Residence',
    price: 'RM 2,900/mo',
    image: '/images/property-3.jpg',
    features: 'Section 13 PJ, modern serviced living, MRT accessible',
    beds: 'Studio',
    baths: '1',
    builtUp: '450 sqft',
    furnishing: 'Fully Furnished',
  },
  {
    name: 'MOF Inc Tower',
    nameCn: 'MOF 大厦',
    location: 'KLCC',
    type: 'Office Space',
    price: 'RM 95,775/mo',
    image: '/images/luxury-tower.jpg',
    features: 'Grade-A office, fitted unit, Platinum Park',
    beds: '—',
    baths: '—',
    builtUp: '13,700 sqft',
  },
  {
    name: 'MOF Inc Tower',
    nameCn: 'MOF 大厦',
    location: 'KLCC',
    type: 'Office Space',
    price: 'RM 105,984/mo',
    image: '/images/luxury-tower.jpg',
    features: 'Grade-A office, whole floor, Platinum Park',
    beds: '—',
    baths: '—',
    builtUp: '14,700 sqft',
  },
];

function PropertyCard({ property, index }: { property: Property; index: number }) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
      className="group relative overflow-hidden bg-charcoal-800 border border-gold-500/5 hover:border-gold-500/20 transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <img src={property.image} alt={property.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-charcoal-950/80 backdrop-blur-sm px-2.5 py-1 border border-gold-500/20">
          <MapPin size={10} className="text-gold-500" />
          <span className="text-[10px] text-gold-500 tracking-wider uppercase">{property.location}</span>
        </div>
        <a href="#enquiry" className="absolute top-3 right-3 w-8 h-8 bg-gold-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <ArrowUpRight size={14} className="text-charcoal-950" />
        </a>
        {property.tenure && (
          <div className="absolute bottom-3 right-3 bg-charcoal-950/80 backdrop-blur-sm px-2 py-0.5 border border-gold-500/15">
            <span className="text-[9px] text-gold-500/70 tracking-wider uppercase">{property.tenure}</span>
          </div>
        )}
        {property.furnishing && (
          <div className="absolute bottom-3 left-3 bg-charcoal-950/80 backdrop-blur-sm px-2 py-0.5 border border-gold-500/15">
            <span className="text-[9px] text-gold-500/70 tracking-wider uppercase">{property.furnishing}</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl text-beige-100 mb-0.5 group-hover:text-gold-500 transition-colors duration-300">{property.name}</h3>
        <span className="text-[11px] text-beige-100/30 block mb-3" style={{ fontFamily: "'Noto Serif SC', serif" }}>{property.nameCn}</span>
        <p className="text-xs text-beige-100/50 mb-1">{property.type}</p>
        <p className="text-xs text-beige-100/35 mb-4">{property.features}</p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4 text-beige-100/40">
          <span className="flex items-center gap-1 text-xs"><BedDouble size={12} className="text-gold-500/50" />{property.beds} Bed</span>
          <span className="flex items-center gap-1 text-xs"><Bath size={12} className="text-gold-500/50" />{property.baths} Bath</span>
          <span className="flex items-center gap-1 text-xs"><Maximize size={12} className="text-gold-500/50" />{property.builtUp}</span>
          {property.landArea && (
            <span className="flex items-center gap-1 text-xs"><Ruler size={12} className="text-gold-500/50" />Land: {property.landArea}</span>
          )}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gold-500/10">
          <span className="text-gold-500 text-base font-serif font-medium">{property.price}</span>
          <a href="#enquiry" className="text-[10px] text-beige-100/40 hover:text-gold-500 tracking-wider uppercase transition-colors flex items-center gap-1">
            Enquire <ArrowUpRight size={10} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

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
            <span className="text-beige-100/30 text-xs">{saleProperties.length} listings</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {saleProperties.map((property, i) => (
              <PropertyCard key={`sale-${i}`} property={property} index={i} />
            ))}
          </div>
        </div>

        {/* FOR RENT */}
        <div className="mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 px-4 py-2">
              <Key size={14} className="text-gold-500" />
              <span className="text-gold-500 text-sm tracking-wider uppercase font-medium">For Rent</span>
              <span className="text-gold-500/50 text-xs ml-1" style={{ fontFamily: "'Noto Serif SC', serif" }}>出租</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-gold-500/20 to-transparent" />
            <span className="text-beige-100/30 text-xs">{rentProperties.length} listings</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rentProperties.map((property, i) => (
              <PropertyCard key={`rent-${i}`} property={property} index={i} />
            ))}
          </div>
        </div>

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
