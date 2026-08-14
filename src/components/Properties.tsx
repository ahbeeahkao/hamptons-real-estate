import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, BedDouble, Bath, Maximize, Ruler, Building, Car, Shield, Waves, Dumbbell, Trees, CheckCircle, Phone } from 'lucide-react';
import PropertySchemaInjector from './PropertySchemaInjector';

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
    description: 'A premium service residence at the iconic Tun Razak Exchange (TRX), Kuala Lumpur\'s new international financial district. This 850 sqft unit features 2 bedrooms and 2 bathrooms with modern layout design. Residents enjoy world-class amenities including infinity pool, sky gym, lounge, and 24-hour security. Walking distance to TRX MRT station and The Exchange TRX mall.',
    beds: '2', baths: '2', builtUp: '850 sqft',
    tenure: 'Freehold', furnishing: 'Unfurnished', listedDate: '3 May 2026',
    address: 'Jalan Tun Razak, KL City Centre, Kuala Lumpur',
    amenities: ['Infinity Pool', 'Sky Gym', 'Lounge & Function Room', '24-Hour Security', 'TRX MRT Access', 'The Exchange TRX Mall']
  },
  {
    name: 'Datum Jelatek Residence',
    nameCn: 'Datum Jelatek 住宅',
    location: 'KL City Centre',
    type: 'Service Residence',
    price: 'RM 1,280,000',
    psf: 'RM 991 psf',
    images: ['/images/datum-jelatek-1.jpg', '/images/datum-jelatek-2.jpg', '/images/datum-jelatek-3.jpg'],
    description: 'A spacious 2-bedroom service residence at Datum Jelatek, strategically located in the heart of KL City Centre near the PETRONAS Twin Towers and KLCC Park. This 1,291 sqft unit offers a well-designed layout with modern finishes.',
    beds: '2', baths: '2', builtUp: '1,291 sqft',
    tenure: 'Freehold', furnishing: 'Unfurnished', listedDate: '23 Jun 2026',
    address: 'Jalan Ampang, KL City Centre, Kuala Lumpur',
    amenities: ['Swimming Pool', 'Gymnasium', 'BBQ Area', '24-Hour Security', 'KLCC Park Access', 'LRT/MRT Connectivity']
  },
  {
    name: 'Datum Jelatek Residence',
    nameCn: 'Datum Jelatek 住宅',
    location: 'KL City Centre',
    type: 'Service Residence',
    price: 'RM 850,000',
    psf: 'RM 1,102 psf',
    images: ['/images/datum-jelatek-1.jpg', '/images/datum-jelatek-2.jpg'],
    description: 'A well-positioned 1-bedroom service residence at Datum Jelatek in the prestigious KL City Centre area. This 772 sqft unit is ideal for young professionals or investors.',
    beds: '1', baths: '1', builtUp: '772 sqft',
    tenure: 'Freehold', furnishing: 'Unfurnished', listedDate: '28 Jul 2026',
    address: 'Jalan Ampang, KL City Centre, Kuala Lumpur',
    amenities: ['Swimming Pool', 'Gymnasium', 'BBQ Area', '24-Hour Security', 'KLCC Park Access', 'LRT/MRT Connectivity'],
  },
  {
    name: 'Datum Jelatek Residence',
    nameCn: 'Datum Jelatek 住宅',
    location: 'KL City Centre',
    type: 'Service Residence',
    price: 'RM 770,000',
    psf: 'RM 998 psf',
    images: ['/images/datum-jelatek-1.jpg', '/images/datum-jelatek-3.jpg'],
    description: 'An affordable 1-bedroom service residence at Datum Jelatek, KL City Centre. This 772 sqft unit offers smart layout design with efficient use of space. An excellent investment opportunity with strong rental potential.',
    beds: '1', baths: '1', builtUp: '772 sqft',
    tenure: 'Freehold', furnishing: 'Unfurnished', listedDate: '23 Jun 2026',
    address: 'Jalan Ampang, KL City Centre, Kuala Lumpur',
    amenities: ['Swimming Pool', 'Gymnasium', 'BBQ Area', '24-Hour Security', 'KLCC Park Access', 'LRT/MRT Connectivity']
  },
  {
    name: 'The Capers @ Sentul East',
    nameCn: '辣椒园 东 Sentul',
    location: 'Sentul, Kuala Lumpur',
    type: 'Condominium',
    price: 'RM 650,000',
    psf: 'RM 651 psf',
    images: ['/images/capers-1.jpg'],
    description: 'A fully furnished 2-bedroom condominium at The Capers @ Sentul East, a contemporary development by YTL Land. This 999 sqft unit comes move-in ready with quality furnishings.',
    beds: '2', baths: '2', builtUp: '999 sqft',
    tenure: 'Freehold', furnishing: 'Fully Furnished', listedDate: '15 Jul 2026',
    address: 'Lorong Timur, Bandar Baru Sentul, Kuala Lumpur',
    amenities: ['Swimming Pool', 'Gymnasium', 'Playground', '24-Hour Security', 'Jogging Track', 'Near Publika & Solaris Dutamas']
  },
  {
    name: 'CANT @ Taman Warisan Puteri',
    nameCn: 'CANT @ 伟世安公主城',
    location: 'Seremban, Negeri Sembilan',
    type: '1-Storey Terrace House',
    price: 'RM 800,000',
    psf: 'RM 412 psf',
    images: ['/images/warisan-1.jpg', '/images/warisan-2.jpg'],
    description: 'A beautifully designed 1-storey terrace house in Taman Warisan Puteri, Seremban. This fully furnished home features 5 bedrooms and 4 bathrooms across 1,939 sqft built-up on a 4,079 sqft freehold land.',
    beds: '5', baths: '4', builtUp: '1,939 sqft', landArea: '4,079 sqft',
    tenure: 'Freehold', furnishing: 'Fully Furnished', listedDate: '23 Jun 2026',
    address: 'Taman Warisan Puteri, Seremban, Negeri Sembilan',
    amenities: ['Fully Furnished', 'Modern Design', 'Spacious Garden', 'Nearby Amenities', 'Freehold Title', 'Growing Township']
  },
  {
    name: 'Taman Senawang Perdana',
    nameCn: '森芙蓉花园',
    location: 'Senawang, Negeri Sembilan',
    type: 'Bungalow',
    price: 'RM 730,000',
    psf: 'RM 290 psf',
    images: ['/images/senawang-1.jpg', '/images/senawang-2.jpg'],
    description: 'A spacious bungalow in Taman Senawang Perdana. This 2-storey bungalow offers 6 bedrooms and 4 bathrooms across 2,513 sqft on a generous 4,004 sqft freehold land.',
    beds: '6', baths: '4', builtUp: '2,513 sqft', landArea: '4,004 sqft',
    tenure: 'Freehold', furnishing: 'Unfurnished', listedDate: '10 Mar 2026',
    address: 'Taman Senawang Perdana, Senawang, Negeri Sembilan',
    amenities: ['Large Land Area', 'Quiet Neighbourhood', 'Highway Access (LEKAS)', 'Nearby Schools', 'Freehold Title']
  },
  {
    name: 'Green Street Homes',
    nameCn: '绿街家园',
    location: 'Seremban, Negeri Sembilan',
    type: 'Residential Land',
    price: 'RM 950,000',
    psf: 'RM 308 psf',
    images: ['/images/green-street-1.jpg'],
    description: 'A prime bungalow lot at Green Street Homes, Seremban. This 3,089 sqft freehold residential land offers an excellent opportunity to build your dream home.',
    beds: '-', baths: '-', builtUp: '-', landArea: '3,089 sqft',
    tenure: 'Freehold', listedDate: '28 Jul 2026',
    address: 'Green Street Homes, Seremban, Negeri Sembilan',
    amenities: ['Well-Planned Township', 'Landscaped Surroundings', 'Road Access', 'Near Town Centre', 'Freehold Title']
  },
  {
    name: 'Lumina @ Eka Heights',
    nameCn: '光辉 @ Eka 高原',
    location: 'Bandar Sri Sendayan, Negeri Sembilan',
    type: '1-Storey Terrace House',
    price: 'RM 330,000',
    psf: 'RM 314 psf',
    images: ['/images/lumina-1.jpg', '/images/laman-sendayan-1.jpg'],
    description: 'An affordable 1-storey terrace house at Lumina, Eka Heights in Bandar Sri Sendayan. This 3-bedroom, 2-bathroom home offers 1,052 sqft on a 1,300 sqft land.',
    beds: '3', baths: '2', builtUp: '1,052 sqft', landArea: '1,300 sqft',
    tenure: 'Freehold', furnishing: 'Unfurnished', listedDate: '22 Jul 2026',
    address: 'Lumina, Eka Heights, Bandar Sri Sendayan, Negeri Sembilan',
    amenities: ['Affordable Entry', 'Modern Design', 'Growing Township', 'Nearby Amenities', 'Freehold Title']
  },
  {
    name: 'Laman Sendayan',
    nameCn: 'Sendayan 花园',
    location: 'Bandar Sri Sendayan, Negeri Sembilan',
    type: '1-Storey Terrace House',
    price: 'RM 350,000',
    psf: 'RM 322 psf',
    images: ['/images/laman-sendayan-1.jpg', '/images/lumina-1.jpg'],
    description: 'A well-designed 1-storey terrace house at Laman Sendayan in Bandar Sri Sendayan. This 3-bedroom, 2-bathroom home offers 1,088 sqft of comfortable living space.',
    beds: '3', baths: '2', builtUp: '1,088 sqft',
    tenure: 'Freehold', furnishing: 'Unfurnished', listedDate: '8 Mar 2026',
    address: 'Laman Sendayan, Bandar Sri Sendayan, Negeri Sembilan',
    amenities: ['Well-Planned Township', 'Schools Nearby', 'Commercial Area', 'Recreational Facilities', 'Freehold Title']
  },
  {
    name: 'Tiara Sendayan',
    nameCn: 'Sendayan 钻石',
    location: 'Bandar Sri Sendayan, Negeri Sembilan',
    type: '1-Storey Terrace House',
    price: 'RM 380,000',
    psf: 'RM 345 psf',
    images: ['/images/laman-sendayan-1.jpg'],
    description: 'A spacious 1-storey terrace house at Tiara Sendayan. This 4-bedroom, 2-bathroom home offers approximately 1,100 sqft of built-up area.',
    beds: '4', baths: '2', builtUp: '1,100 sqft',
    tenure: 'Freehold', furnishing: 'Unfurnished', listedDate: 'Jul 2026',
    address: 'Tiara Sendayan, Bandar Sri Sendayan, Negeri Sembilan',
    amenities: ['Spacious Layout', 'Family-Friendly', 'Township Amenities', 'Highway Access', 'Freehold Title']
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
    images: ['/images/core-trx-1.jpg', '/images/core-trx-2.jpg'],
    description: 'A fully furnished service residence at Core Residence @ TRX. This 925 sqft unit features 2 bedrooms and 1 bathroom with contemporary furnishings and city views.',
    beds: '2', baths: '1', builtUp: '925 sqft',
    tenure: 'Leasehold', furnishing: 'Fully Furnished', listedDate: '3 Mar 2026',
    address: 'Jalan Tun Razak, Tun Razak Exchange, Kuala Lumpur',
    amenities: ['Swimming Pool', 'Gym', 'Community Garden', '24-Hour Security', 'Covered Parking', 'TRX MRT Access']
  },
  {
    name: 'TRX Residences',
    nameCn: 'TRX 住宅',
    location: 'KL City Centre',
    type: 'Service Residence',
    price: 'RM 4,800/month',
    psf: 'RM 8.92 psf',
    images: ['/images/trx-residences-1.jpg', '/images/trx-residences-2.jpg'],
    description: 'A stylish 1-bedroom service residence at TRX Residences. This 538 sqft unit is well-maintained and offers efficient layout with modern fittings.',
    beds: '1', baths: '1', builtUp: '538 sqft',
    tenure: 'Freehold', furnishing: 'Fully Furnished', listedDate: '8 Jun 2026',
    address: 'Jalan Tun Razak, KL City Centre, Kuala Lumpur',
    amenities: ['Infinity Pool', 'Sky Gym', 'Lounge', '24-Hour Security', 'TRX MRT Access', 'The Exchange TRX Mall']
  },
  {
    name: 'Mitsui Serviced Suites',
    nameCn: '三井服务公寓',
    location: 'Bukit Bintang, KL',
    type: 'Service Residence',
    price: 'RM 7,000/month',
    psf: 'RM 7.24 psf',
    images: ['/images/mitsui-1.jpg', '/images/mitsui-2.jpg'],
    description: 'A spacious 2-bedroom serviced suite at Mitsui Serviced Suites, Bukit Bintang. This 967 sqft unit comes fully furnished with hotel-grade amenities.',
    beds: '2', baths: '2', builtUp: '967 sqft',
    tenure: 'Freehold', furnishing: 'Fully Furnished', listedDate: '3 May 2026',
    address: 'Jalan Hang Tuah, Bukit Bintang, Kuala Lumpur',
    amenities: ['Hotel-Grade Amenities', 'Housekeeping Service', 'Concierge', 'Swimming Pool', 'Gym', 'Pavilion KL Access']
  },
  {
    name: 'Mitsui Serviced Suites',
    nameCn: '三井服务公寓',
    location: 'Bukit Bintang, KL',
    type: 'Service Residence',
    price: 'RM 4,300/month',
    psf: 'RM 8.37 psf',
    images: ['/images/mitsui-2.jpg', '/images/mitsui-1.jpg'],
    description: 'A compact 1-bedroom serviced suite at Mitsui Serviced Suites, Bukit Bintang. This 514 sqft unit is fully furnished with quality fittings.',
    beds: '1', baths: '1', builtUp: '514 sqft',
    tenure: 'Freehold', furnishing: 'Fully Furnished', listedDate: '3 May 2026',
    address: 'Jalan Hang Tuah, Bukit Bintang, Kuala Lumpur',
    amenities: ['Hotel-Grade Amenities', 'Housekeeping Service', 'Concierge', 'Swimming Pool', 'Gym', 'Pavilion KL Access']
  },
  {
    name: 'Mitsui Serviced Suites',
    nameCn: '三井服务公寓',
    location: 'Bukit Bintang, KL',
    type: 'Service Residence',
    price: 'RM 7,000/month',
    psf: 'RM 7.24 psf',
    images: ['/images/mitsui-1.jpg'],
    description: 'Another well-appointed 2-bedroom serviced suite at Mitsui Serviced Suites, Bukit Bintang. This 967 sqft unit offers premium hotel-style living.',
    beds: '2', baths: '2', builtUp: '967 sqft',
    tenure: 'Freehold', furnishing: 'Fully Furnished', listedDate: '28 Jan 2026',
    address: 'Jalan Hang Tuah, Bukit Bintang, Kuala Lumpur',
    amenities: ['Hotel-Grade Amenities', 'Housekeeping Service', 'Concierge', 'Swimming Pool', 'Gym', 'Pavilion KL Access']
  },
  {
    name: 'Pavilion Residences',
    nameCn: '柏威年住宅',
    location: 'Bukit Bintang, KL',
    type: 'Condominium',
    price: 'RM 9,000/month',
    psf: 'RM 7.29 psf',
    images: ['/images/pavilion-1.jpg'],
    description: 'A luxurious 2-bedroom condominium at Pavilion Residences, directly connected to Pavilion Kuala Lumpur shopping mall. This 1,234 sqft fully furnished unit offers premium city living.',
    beds: '2', baths: '2', builtUp: '1,234 sqft',
    tenure: 'Freehold', furnishing: 'Fully Furnished', listedDate: '28 Jul 2026',
    address: '77 Jalan Bukit Bintang, Bukit Bintang, Kuala Lumpur',
    amenities: ['Direct Mall Access', 'Concierge Service', 'Infinity Pool', 'Gym & Spa', 'City Views', '24-Hour Security']
  },
  {
    name: 'Lucentia Residences',
    nameCn: 'Lucentia 住宅',
    location: 'Bukit Bintang, KL',
    type: 'Service Residence',
    price: 'RM 3,600/month',
    psf: 'RM 6.50 psf',
    images: ['/images/lucentia-1.jpg'],
    description: 'A modern 1-bedroom service residence at Lucentia Residences, Bukit Bintang. This 554 sqft unit offers efficient layout with contemporary design.',
    beds: '1', baths: '1', builtUp: '554 sqft',
    tenure: 'Freehold', furnishing: 'Fully Furnished', listedDate: '3 Jun 2026',
    address: 'Bukit Bintang, Kuala Lumpur',
    amenities: ['Swimming Pool', 'Gym', '24-Hour Security', 'MRT Access', 'Bukit Bintang Shopping', 'Modern Design']
  },
  {
    name: 'Dorsett Residences',
    nameCn: '帝诗住宅',
    location: 'Bukit Bintang, KL',
    type: 'Service Residence',
    price: 'RM 4,800/month',
    psf: 'RM 7.36 psf',
    images: ['/images/dorsett-1.jpg'],
    description: 'A well-appointed 1-bedroom service residence at Dorsett Residences, Bukit Bintang. This 652 sqft unit comes fully furnished with hotel-style services.',
    beds: '1', baths: '1', builtUp: '652 sqft',
    tenure: 'Freehold', furnishing: 'Fully Furnished', listedDate: '4 Jul 2026',
    address: 'Bukit Bintang, Kuala Lumpur',
    amenities: ['Hotel-Style Services', 'Swimming Pool', 'Gym', '24-Hour Security', 'Monorail Access', 'Near Berjaya Times Square']
  },
  {
    name: 'Flat PKNS Seksyen 8',
    nameCn: 'PKNS 第八区公寓',
    location: 'Shah Alam, Selangor',
    type: 'Flat',
    price: 'RM 850/month',
    psf: 'RM 1.44 psf',
    images: ['/images/pkns-1.jpg', '/images/pkns-2.jpg'],
    description: 'An affordable flat in PKNS Seksyen 8, Shah Alam. This 592 sqft unit offers 2 bedrooms and 1 bathroom.',
    beds: '2', baths: '1', builtUp: '592 sqft',
    furnishing: 'Unfurnished', listedDate: '15 Jul 2026',
    address: '22 Jalan Liku 8/1, Seksyen 8, 40000 Shah Alam, Selangor',
    amenities: ['Affordable Living', 'Well-Connected', 'Nearby Schools', 'Public Transport Access', 'Established Neighbourhood']
  },
  {
    name: 'Flat Taman Alam Megah',
    nameCn: '阿拉姆花园公寓',
    location: 'Shah Alam, Selangor',
    type: 'Flat',
    price: 'RM 900/month',
    psf: 'RM 1.50 psf',
    images: ['/images/alam-megah-1.jpg', '/images/pkns-2.jpg'],
    description: 'A comfortable flat in Taman Alam Megah, Shah Alam. This 600 sqft unit offers 2 bedrooms and 1 bathroom.',
    beds: '2', baths: '1', builtUp: '600 sqft',
    furnishing: 'Unfurnished', listedDate: '15 Jul 2026',
    address: 'Taman Alam Megah, Shah Alam, Selangor',
    amenities: ['Affordable Living', 'Established Neighbourhood', 'Nearby Schools', 'Shops Nearby', 'Federal Highway Access']
  },
];

const amenityIconMap: Record<string, typeof Waves> = {
  'Infinity Pool': Waves, 'Swimming Pool': Waves, 'Sky Gym': Dumbbell, 'Gym': Dumbbell, 'Gymnasium': Dumbbell,
  'Community Garden': Trees, 'Large Land Area': Trees, 'Spacious Garden': Trees, '24-Hour Security': Shield,
  'Covered Parking': Car, 'TRX MRT Access': Building, 'MRT Access': Building, 'Monorail Access': Building, 'LRT/MRT Connectivity': Building,
};

function PropertyCard({ property, index, onClick }: { property: Property; index: number; onClick: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: index * 0.05 }} onClick={onClick}
      className="group cursor-pointer relative bg-charcoal-800/50 border border-gold-500/5 hover:border-gold-500/20 overflow-hidden transition-all duration-500">
      <div className="relative h-52 overflow-hidden">
        <img src={property.images[0]} alt={property.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-charcoal-950/80 backdrop-blur-sm px-2.5 py-1 border border-gold-500/20">
          <MapPin size={10} className="text-gold-500" /><span className="text-[10px] text-gold-500 tracking-wider uppercase">{property.location}</span>
        </div>
        {property.tenure && <div className="absolute top-3 right-3 bg-charcoal-950/80 backdrop-blur-sm px-2 py-0.5 border border-gold-500/15"><span className="text-[9px] text-gold-500/70 tracking-wider uppercase">{property.tenure}</span></div>}
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg text-beige-100 mb-0.5 group-hover:text-gold-500 transition-colors duration-300">{property.name}</h3>
        <span className="text-[10px] text-beige-100/30 block mb-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>{property.nameCn}</span>
        <p className="text-[11px] text-beige-100/40 mb-2">{property.type}{property.furnishing ? ` · ${property.furnishing}` : ''}</p>
        <div className="flex items-center gap-3 mb-3 text-beige-100/40">
          <span className="flex items-center gap-1 text-xs"><BedDouble size={11} className="text-gold-500/50" />{property.beds}</span>
          <span className="flex items-center gap-1 text-xs"><Bath size={11} className="text-gold-500/50" />{property.baths}</span>
          <span className="flex items-center gap-1 text-xs"><Maximize size={11} className="text-gold-500/50" />{property.builtUp}</span>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-gold-500/10">
          <div><span className="text-gold-500 text-sm font-serif font-medium block">{property.price}</span>{property.psf && <span className="text-[9px] text-beige-100/30">{property.psf}</span>}</div>
          <span className="text-[9px] text-gold-500/60 tracking-wider uppercase">View →</span>
        </div>
      </div>
    </motion.div>
  );
}

function PropertyModal({ property, onClose }: { property: Property; onClose: () => void }) {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[100] bg-charcoal-950/95 backdrop-blur-md overflow-y-auto">
      <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} transition={{ duration: 0.3 }} onClick={(e) => e.stopPropagation()} className="relative max-w-4xl mx-auto my-8 bg-charcoal-900 border border-gold-500/20">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 bg-charcoal-950/80 backdrop-blur-sm border border-gold-500/20 flex items-center justify-center hover:bg-gold-500/10 transition-colors"><X size={18} className="text-beige-100/70" /></button>
        <div className="relative h-64 sm:h-96 overflow-hidden">
          <img src={property.images[activeImage]} alt={`${property.name} - Photo ${activeImage + 1}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent" />
          {property.images.length > 1 && (
            <div className="absolute bottom-4 left-4 right-4 flex gap-2 justify-center">
              {property.images.map((img, i) => (<button key={i} onClick={() => setActiveImage(i)} className={`w-16 h-12 overflow-hidden border-2 transition-all ${activeImage === i ? 'border-gold-500 opacity-100' : 'border-transparent opacity-50 hover:opacity-80'}`}><img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" /></button>))}
            </div>
          )}
        </div>
        <div className="p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2"><MapPin size={14} className="text-gold-500/60" /><span className="text-xs text-gold-500/60 tracking-wider uppercase">{property.location}</span></div>
              <h2 className="font-serif text-3xl sm:text-4xl text-beige-100 mb-1">{property.name}</h2>
              <span className="text-sm text-beige-100/30" style={{ fontFamily: "'Noto Serif SC', serif" }}>{property.nameCn}</span>
           @            </div>
            <div className="text-right"><span className="text-gold-500 text-2xl sm:text-3xl font-serif font-medium block">{property.price}</span>{property.psf && <span className="text-xs text-beige-100/40">{property.psf}</span>}</div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[{ icon: BedDouble, label: 'Bedrooms', value: property.beds }, { icon: Bath, label: 'Bathrooms', value: property.baths }, { icon: Maximize, label: 'Built-up', value: property.builtUp }, { icon: Building, label: 'Type', value: property.type }].map((spec, i) => (
              <div key={i} className="bg-charcoal-800/50 border border-gold-500/10 p-3 text-center"><spec.icon size={18} className="text-gold-500/60 mx-auto mb-1.5" /><p className="text-beige-100/80 text-sm font-medium">{spec.value}</p><p className="text-beige-100/30 text-[9px] tracking-wider uppercase mt-0.5">{spec.label}</p></div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {property.landArea && <div className="flex items-center gap-3 py-2 border-b border-gold-500/5"><Ruler size={14} className="text-gold-500/50" /><span className="text-beige-100/40 text-xs">Land Area</span><span className="text-beige-100/80 text-sm ml-auto">{property.landArea}</span></div>}
            {property.tenure && <div className="flex items-center gap-3 py-2 border-b border-gold-500/5"><Shield size={14} className="text-gold-500/50" /><span className="text-beige-100/40 text-xs">Tenure</span><span className="text-beige-100/80 text-sm ml-auto">{property.tenure}</span></div>}
            {property.furnishing && <div className="flex items-center gap-3 py-2 border-b border-gold-500/5"><CheckCircle size={14} className="text-gold-500/50" /><span className="text-beige-100/40 text-xs">Furnishing</span><span className="text-beige-100/80 text-sm ml-auto">{property.furnishing}</span></div>}
            {property.listedDate && <div className="flex items-center gap-3 py-2 border-b border-gold-500/5"><CheckCircle size={14} className="text-gold-500/50" /><span className="text-beige-100/40 text-xs">Listed Date</span><span className="text-beige-100/80 text-sm ml-auto">{property.listedDate}</span></div>}
            {property.address && <div className="flex items-center gap-3 py-2 border-b border-gold-500/5 sm:col-span-2"><MapPin size={14} className="text-gold-500/50" /><span className="text-beige-100/40 text-xs">Address</span><span className="text-beige-100/80 text-sm ml-auto text-right">{property.address}</span></div>}
          </div>
          <div className="mb-8"><h3 className="font-serif text-lg text-gold-500 mb-3">Description</h3><p className="text-beige-100/60 text-sm leading-relaxed">{property.description}</p></div>
          <div className="mb-8"><h3 className="font-serif text-lg text-gold-500 mb-4">Amenities & Features</h3><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{property.amenities.map((amenity, i) => { const Icon = amenityIconMap[amenity] || CheckCircle; return (<div key={i} className="flex items-center gap-3"><div className="w-7 h-7 border border-gold-500/20 flex items-center justify-center flex-shrink-0"><Icon size={12} className="text-gold-500/60" /></div><span className="text-beige-100/70 text-sm">{amenity}</span></div>); })}</div></div>
          <div className="bg-charcoal-800/50 border border-gold-500/10 p-4 mb-6"><div className="flex items-center gap-4"><div className="w-10 h-10 border border-gold-500/30 flex items-center justify-center flex-shrink-0"><span className="font-serif text-gold-500 text-base font-bold">BC</span></div><div className="flex-1"><p className="text-beige-100/80 text-sm font-medium">Bernice Chan</p><p className="text-beige-100/30 text-xs">REN 81580 · Hamptons Real Estate [E (3) 2124]</p></div><a href="https://wa.me/60123515121" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-3 py-2 text-xs tracking-wider transition-all duration-300"><Phone size={12} />WhatsApp</a></div></div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#enquiry" onClick={onClose} className="flex-1 bg-gold-500 hover:bg-gold-400 text-charcoal-950 py-3 text-sm tracking-wider uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2">Enquire About This Property</a>
            <a href="https://wa.me/60123515121" target="_blank" rel="noopener noreferrer" className="flex-1 border border-gold-500/40 text-gold-500 hover:bg-gold-500/10 py-3 text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"><Phone size={14} />WhatsApp Agent</a>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Properties() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Prepare schema data for AEO
  const schemaProps = useMemo(() =>
    [...saleProperties, ...rentProperties].map((p) => ({
      name: p.name,
      description: p.description,
      price: p.price,
      address: p.address || p.location,
      beds: p.beds,
      baths: p.baths,
      builtUp: p.builtUp,
      images: p.images,
    })),
    []
  );

  return (
    <section id="properties" className="relative py-24 sm:py-32 bg-charcoal-900" aria-label="Property listings">
      <PropertySchemaInjector properties={schemaProps} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }} className="text-center mb-16 sm:mb-20">
          <span className="text-gold-500/60 text-xs tracking-[0.4em] uppercase block mb-4">Curated Portfolio</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-beige-100 mb-4">Signature Properties</h2>
          <p className="text-beige-100/50 text-base sm:text-lg max-w-xl mx-auto" style={{ fontFamily: "'Noto Serif SC', serif" }}>精选标志性物业</p>
          <div className="luxury-divider-wide mx-auto mt-8" />
        </motion.div>
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10"><h3 className="font-serif text-2xl text-gold-500">For Sale</h3><span className="text-beige-100/30 text-sm" style={{ fontFamily: "'Noto Serif SC', serif" }}>出售</span><div className="flex-1 h-px bg-gradient-to-r from-gold-500/20 to-transparent" /><span className="text-xs text-beige-100/30 tracking-wider">{saleProperties.length} Listings</span></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">{saleProperties.map((property, i) => (<PropertyCard key={`sale-${i}`} property={property} index={i} onClick={() => setSelectedProperty(property)} />))}</div>
        </div>
        <div>
          <div className="flex items-center gap-4 mb-10"><h3 className="font-serif text-2xl text-gold-500">For Rent</h3><span className="text-beige-100/30 text-sm" style={{ fontFamily: "'Noto Serif SC', serif" }}>出租</span><div className="flex-1 h-px bg-gradient-to-r from-gold-500/20 to-transparent" /><span className="text-xs text-beige-100/30 tracking-wider">{rentProperties.length} Listings</span></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">{rentProperties.map((property, i) => (<PropertyCard key={`rent-${i}`} property={property} index={i} onClick={() => setSelectedProperty(property)} />))}</div>
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-10"><p className="text-beige-100/30 text-sm">* Click any property for full details. All listings by Bernice Chan (REN 81580), Hamptons Real Estate.</p></motion.div>
      </div>
      <AnimatePresence>{selectedProperty && (<PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />)}</AnimatePresence>
    </section>
  );
}