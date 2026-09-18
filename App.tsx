import React, { useState, useEffect } from 'react';

const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(number);
};

const ShoppingBag = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

const Star = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const Clock = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const X = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
);

const Plus = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14"/><path d="M12 5v14"/>
  </svg>
);

const Minus = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14"/>
  </svg>
);

const ChevronDown = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const ChevronUp = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m18 15-6-6-6 6"/>
  </svg>
);

const Search = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
);

const MapPin = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const Bike = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"/>
  </svg>
);

const CheckCircle2 = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
  </svg>
);

const Utensils = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V2"/><path d="M12 2v20"/><path d="M20 15v7"/>
  </svg>
);

const Award = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);

const Flame = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z"/>
  </svg>
);

const Smile = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
  </svg>
);

const Zap = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const Bell = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
  </svg>
);

const FastForward = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 19 22 12 13 5 13 19"/><polygon points="2 19 11 12 2 5 2 19"/>
  </svg>
);

const Trophy = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
  </svg>
);

const BedDouble = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M12 4v6"/><path d="M2 18h20"/>
  </svg>
);

const PhoneCall = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14 2a6 6 0 0 1 6 6"/><path d="M14 6a2 2 0 0 1 2 2"/>
  </svg>
);

const PhoneOff = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"/><line x1="2" y1="2" x2="22" y2="22"/>
  </svg>
);

const Phone = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const COURIERS_DATABASE = [
  { id: 1, name: "Pak Agus", species: "Penguin", emoji: "🐧", quirk: "Meluncur dengan perut di atas trotoar untuk kecepatan maksimal", speed: "Super Cepat" },
  { id: 2, name: "Pak Bambang", species: "Harimau", emoji: "🐯", quirk: "Berlari secepat kilat menembus kemacetan lalu lintas", speed: "Kilat" },
  { id: 3, name: "Pak Jaka", species: "Jerapah", emoji: "🦒", quirk: "Melangkahi deretan mobil macet tanpa perlu berhenti", speed: "Tinggi" },
  { id: 4, name: "Bu Sisi", species: "Kucing", emoji: "🐱", quirk: "Sering berhenti 10 detik untuk melamun menatap daun", speed: "Santai" },
  { id: 5, name: "Pak Budi", species: "Beruang", emoji: "🐻", quirk: "Jalan santai penuh kepastian sambil minum es teh", speed: "Pasti" },
  { id: 6, name: "Pak Joko", species: "Kanguru", emoji: "🦘", quirk: "Melompat tinggi membawa kantong pesanan aman di perut", speed: "Lompat" },
  { id: 7, name: "Pak Dedi", species: "Panda", emoji: "🐼", quirk: "Ngacir naik Vespa matic sambil ngemil bambu renyah", speed: "Sedang" },
  { id: 8, name: "Bu Tina", species: "Kelinci", emoji: "🐰", quirk: "Melompat zig-zag menghindari jalanan berlubang", speed: "Lincah" },
  { id: 9, name: "Pak Rudi", species: "Serigala", emoji: "🐺", quirk: "Mengaung ganti suara klakson motor Vario balap", speed: "Gahar" },
  { id: 10, name: "Pak Gani", species: "Gajah", emoji: "🐘", quirk: "Membuka rute tol khusus imajinasi dengan belalainya", speed: "Tangguh" },
  { id: 11, name: "Bu Maya", species: "Rubah", emoji: "🦊", quirk: "Ngebut lewat jalan pintas rahasia di dalam gang sempit", speed: "Cerdik" },
  { id: 12, name: "Pak Hendra", species: "Elang", emoji: "🦅", quirk: "Terbang menembus awan langsung mendarat di teras", speed: "Udara" },
  { id: 13, name: "Bu Rina", species: "Hamster", emoji: "🐹", quirk: "Mengayuh roda sepeda mini dengan putaran 1000 RPM", speed: "Turbo" },
  { id: 14, name: "Pak Anton", species: "Koala", emoji: "🐨", quirk: "Jalan pelan tapi penuh kasih sayang & kehangatan", speed: "Pelan Saja" },
  { id: 15, name: "Pak Cecep", species: "Ayam", emoji: "🐔", quirk: "Berkokok keras membuka jalanan dari hambatan pedagang", speed: "Semangat" },
  { id: 16, name: "Bu Dewi", species: "Lumba-lumba", emoji: "🐬", quirk: "Berenang anggun di atas genangan air hujan kota", speed: "Mulus" },
  { id: 17, name: "Pak Surya", species: "Singa", emoji: "🦁", quirk: "Raja jalanan dengan knalpot halu bergetar dahsyat", speed: "Gagah" },
  { id: 18, name: "Pak Doni", species: "Kuda", emoji: "🐴", quirk: "Meringkik kencang melompati lampu merah imajiner", speed: "Kencang" },
  { id: 19, name: "Bu Lisa", species: "Tupai", emoji: "🐿️", quirk: "Melompat cepat dari kabel listrik ke kabel telepon", speed: "Akrobatik" },
  { id: 20, name: "Pak Edi", species: "Burung Hantu", emoji: "🦉", quirk: "Navigasi malam hari tanpa takut nyasar di perumahan", speed: "Presisi" },
  { id: 21, name: "Pak Tono", species: "Penyu", emoji: "🐢", quirk: "Paling lambat se-dunia tapi tidak pernah menyerah", speed: "Sabar" },
  { id: 22, name: "Bu Santi", species: "Bebek", emoji: "🦆", quirk: "Berjalan megang-megot rapi membawa tas delivery", speed: "Lucu" },
  { id: 23, name: "Pak Benny", species: "Anjing", emoji: "🐶", quirk: "Ekornya bergoyang gembira sepanjang perjalanan", speed: "Ceria" },
  { id: 24, name: "Pak Wahyu", species: "Badak", emoji: "🦏", quirk: "Menerabas semua kemacetan tanpa rem sama sekali", speed: "Badai" },
  { id: 25, name: "Bu Fitri", species: "Bunglon", emoji: "🦎", quirk: "Bisa berubah warna ikuti warna lampu lalu lintas", speed: "Unik" },
  { id: 26, name: "Pak Gilang", species: "Rusa", emoji: "🦌", quirk: "Melompat anggun melewati pagar perumahan warga", speed: "Anggun" },
  { id: 27, name: "Pak Iman", species: "Babi Hutan", emoji: "🐗", quirk: "Terabas rute off-road terjal demi pesanan halu", speed: "Gass" },
  { id: 28, name: "Bu Nita", species: "Landak", emoji: "🦔", quirk: "Ekstra hati-hati membawa tas agar tidak tertusuk duri", speed: "Hati-hati" },
  { id: 29, name: "Pak Farhan", species: "Flamingo", emoji: "🦩", quirk: "Berdiri satu kaki sambil menyetir Vespa merah matic", speed: "Stylis" },
  { id: 30, name: "Pak Tejo", species: "Gorilla", emoji: "🦍", quirk: "Gendong motor sambil lari marathon melintasi kota", speed: "Monster" }
];

const CATEGORIES = [
  { id: 'all', name: 'Semua Negara', flag: '🌐' },
  { id: 'Nusantara', name: 'Indonesia', flag: '🇮🇩' },
  { id: 'Korea', name: 'Korea', flag: '🇰🇷' },
  { id: 'Jepang', name: 'Jepang', flag: '🇯🇵' },
  { id: 'Amerika', name: 'Amerika', flag: '🇺🇸' },
  { id: 'Prancis', name: 'Prancis', flag: '🇫🇷' },
  { id: 'Italia', name: 'Italia', flag: '🇮🇹' },
  { id: 'Meksiko', name: 'Meksiko', flag: '🇲🇽' },
  { id: 'India', name: 'India', flag: '🇮🇳' },
];

const FOOD_ITEMS = [
  {
    id: 1,
    name: "BBQ Ribs Super Smoked",
    country: "Amerika",
    flag: "🇺🇸",
    portion: "Regular • Hanya Hidangan",
    desc: "Iga sapi panggang lambat 12 jam dengan saus BBQ manis gurih yang menempel di tulang.",
    price: 145000,
    originalPrice: 290000,
    rating: 4.9,
    reviews: "1.8k+",
    time: "35-50 mnt",
    tag: "50% OFF",
    image: "https://images.unsplash.com/photo-1544025162-83112c2a07c3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "French Butter Crepe",
    country: "Prancis",
    flag: "🇫🇷",
    portion: "1 Porsi • Klasik",
    desc: "Kue crepe tipis khas Paris dengan mentega Normandy lembut dan taburan gula halus.",
    price: 73000,
    originalPrice: 146000,
    rating: 4.8,
    reviews: "950+",
    time: "15-25 mnt",
    tag: "Terlaris",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Halo-Halo Special",
    country: "Nusantara",
    flag: "🇮🇩",
    portion: "1 Porsi • Segar",
    desc: "Es serut komplit dengan kelapa muda, nangka, kacang merah, ubi ungu, dan es krim vanila.",
    price: 85000,
    originalPrice: 120000,
    rating: 4.7,
    reviews: "1.2k+",
    time: "10-20 mnt",
    tag: "Segar",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Ramen Tonkotsu Chashu",
    country: "Jepang",
    flag: "🇯🇵",
    portion: "Mangkuk Jumbo • Pedas Sedang",
    desc: "Mie ramen kenyal dengan kuah kaldu gurih pekat, telur ajitsuke, dan irisan daging chashu empuk.",
    price: 115000,
    originalPrice: 180000,
    rating: 4.9,
    reviews: "3.4k+",
    time: "20-30 mnt",
    tag: "Favorit Chef",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Tteokbokki Cheese Melt",
    country: "Korea",
    flag: "🇰🇷",
    portion: "2 Porsi • Keju Melimpah",
    desc: "Kue beras Korea pedas manis disiram keju mozzarella leleh dan odeng segar.",
    price: 92000,
    originalPrice: 150000,
    rating: 4.8,
    reviews: "2.1k+",
    time: "20-35 mnt",
    tag: "Viral",
    image: "https://images.unsplash.com/photo-1583224964978-2257b960c3d3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Rendang Daging Tokoh Padang",
    country: "Nusantara",
    flag: "🇮🇩",
    portion: "Porsi Keluarga • Daging Sapi",
    desc: "Rendang sapi resep warisan leluhur dimasak 8 jam hingga bumbu hitam meresap sempurna.",
    price: 125000,
    originalPrice: 200000,
    rating: 5.0,
    reviews: "5k+",
    time: "25-40 mnt",
    tag: "Khas Minang",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Tacos Birria & Consomé",
    country: "Meksiko",
    flag: "🇲🇽",
    portion: "3 Pcs Tacos + Kuah Kaldu",
    desc: "Tacos renyah berisi daging sapi cincang pedas dengan keju leleh dan kuah celupan gurih.",
    price: 105000,
    originalPrice: 160000,
    rating: 4.8,
    reviews: "880+",
    time: "20-30 mnt",
    tag: "Laris",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Pizza Truffle & Mushroom",
    country: "Italia",
    flag: "🇮🇹",
    portion: "Medium 8 Slices",
    desc: "Pizza adonan tipis panggang kayu dengan minyak truffle aromatik dan jamur pilihan.",
    price: 155000,
    originalPrice: 220000,
    rating: 4.9,
    reviews: "1.5k+",
    time: "30-45 mnt",
    tag: "Premium",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    name: "Butter Chicken & Naan Garlic",
    country: "India",
    flag: "🇮🇳",
    portion: "1 Porsi Kari + 2 Roti Naan",
    desc: "Ayam panggangan tandoori dalam kuah kari tomat bermentega creamy nan kaya rempah.",
    price: 110000,
    originalPrice: 175000,
    rating: 4.7,
    reviews: "670+",
    time: "25-35 mnt",
    tag: "Kaya Rasa",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80"
  }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showPassport, setShowPassport] = useState(false);
  const [showBadges, setShowBadges] = useState(false);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
  
  // Unlocked courier achievements state
  const [unlockedCouriers, setUnlockedCouriers] = useState([1]);
  const [newlyUnlocked, setNewlyUnlocked] = useState(null);

  // Active tracking & modal states
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [showNotificationAlert, setShowNotificationAlert] = useState(true);
  const [alertsEnabled, setAlertsEnabled] = useState(false);
  
  // Active Courier for current order
  const [activeCourier, setActiveCourier] = useState(COURIERS_DATABASE[0]);
  
  // 3-Minute Timer Simulation
  const TOTAL_SIMULATION_TIME = 180;
  const [countdown, setCountdown] = useState(TOTAL_SIMULATION_TIME);
  const [isSpeedUp, setIsSpeedUp] = useState(false);
  const [orderId, setOrderId] = useState("FNC4859");

  // Fake Call simulation states
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isCallAnswered, setIsCallAnswered] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  
  // Status messages ticker
  const [currentTickerMessage, setCurrentTickerMessage] = useState("");
  const [dopamineCount, setDopamineCount] = useState(2823321);

  const getDialogueLines = () => {
    const foodName = cart.length > 0 ? cart[0].name : "makanan lezat";
    return [
      `Halo! Saya punya ${foodName} Anda di sini bersama saya...`,
      `Saya sedang di luar rumah Anda... atau di jalan... atau di luar kota... Hahaha!`,
      `Karena makanannya memang tidak pernah ada...`,
      `Tapi Anda kan tidak pernah membayar, jadi ya sudah lah! Hahaha 😄`,
      `Terima kasih sudah berhalusinasi bersama DopamineEats!`
    ];
  };

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'id-ID';
      utterance.rate = 0.95;
      utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Trigger call when countdown reaches 0
  useEffect(() => {
    if (isCheckoutModalOpen && countdown === 0 && !isCallModalOpen) {
      triggerIncomingCall();
    }
  }, [countdown, isCheckoutModalOpen]);

  // Handle call timer and dialogues
  useEffect(() => {
    let callTimerInterval = null;
    let dialogueInterval = null;

    if (isCallModalOpen && isCallAnswered) {
      callTimerInterval = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);

      const dialogues = getDialogueLines();
      speakText(dialogues[0]);

      dialogueInterval = setInterval(() => {
        setDialogueIndex((prevIdx) => {
          const nextIdx = prevIdx + 1;
          if (nextIdx < dialogues.length) {
            speakText(dialogues[nextIdx]);
            return nextIdx;
          }
          return prevIdx;
        });
      }, 4200);
    }

    return () => {
      if (callTimerInterval) clearInterval(callTimerInterval);
      if (dialogueInterval) clearInterval(dialogueInterval);
    };
  }, [isCallModalOpen, isCallAnswered]);

  const triggerIncomingCall = () => {
    setIsCallModalOpen(true);
    setIsCallAnswered(false);
    setCallDuration(0);
    setDialogueIndex(0);
  };

  const answerCall = () => {
    setIsCallAnswered(true);
    setCallDuration(0);
    setDialogueIndex(0);
  };

  const endCall = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsCallModalOpen(false);
    setIsCallAnswered(false);
  };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    setDopamineCount(prev => prev + 1);
  };

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = cart.length > 0 ? 36000 : 0;
  const taxAndCharges = cart.length > 0 ? 15000 : 0;
  const totalToPay = subtotal + deliveryFee + taxAndCharges;
  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const uniqueCountriesCount = new Set(cart.map((i) => i.country)).size;

  const filteredFoods = FOOD_ITEMS.filter((food) => {
    const matchesCategory = selectedCategory === 'all' || food.country === selectedCategory;
    const matchesSearch = food.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          food.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          food.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const startCheckout = () => {
    setIsCartOpen(false);
    
    // Pick random courier from 30 animals
    const randomIndex = Math.floor(Math.random() * COURIERS_DATABASE.length);
    const chosenCourier = COURIERS_DATABASE[randomIndex];
    setActiveCourier(chosenCourier);

    // Check if new achievement unlocked
    if (!unlockedCouriers.includes(chosenCourier.id)) {
      setUnlockedCouriers((prev) => [...prev, chosenCourier.id]);
      setNewlyUnlocked(chosenCourier);
    } else {
      setNewlyUnlocked(null);
    }

    setOrderId(`FNC${Math.floor(1000 + Math.random() * 9000)}`);
    setShowNotificationAlert(true);
    setCountdown(TOTAL_SIMULATION_TIME);
    setIsSpeedUp(false);
    setIsCheckoutModalOpen(true);
  };

  useEffect(() => {
    let interval = null;
    if (isCheckoutModalOpen && countdown > 0) {
      const step = isSpeedUp ? 15 : 1;
      interval = setInterval(() => {
        setCountdown((prev) => Math.max(0, prev - step));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCheckoutModalOpen, countdown, isSpeedUp]);

  useEffect(() => {
    if (!activeCourier) return;

    const messages = [
      `📍 ${activeCourier.name} si ${activeCourier.species} ${activeCourier.quirk}`,
      `📍 ${activeCourier.name} mendengarkan radio dapur memainkan lagu bangers 📻`,
      `📍 ${activeCourier.name} mengamankan paket sambal ekstra & bumbu rahasia 🎒`,
      `📍 ${activeCourier.name} melintasi jalan imajinasi tanpa hambatan 🚴‍♂️`,
      `📍 ${activeCourier.name} akan tiba dengan tangan kosong — itulah hiburannya! 🎁`
    ];

    let index = 0;
    setCurrentTickerMessage(messages[0]);

    const msgInterval = setInterval(() => {
      index = (index + 1) % messages.length;
      setCurrentTickerMessage(messages[index]);
    }, 4000);

    return () => clearInterval(msgInterval);
  }, [activeCourier]);

  const progressPercent = Math.min(
    100,
    Math.max(0, ((TOTAL_SIMULATION_TIME - countdown) / TOTAL_SIMULATION_TIME) * 100)
  );

  const currentStep = progressPercent < 15 ? 1 : progressPercent < 45 ? 2 : progressPercent < 80 ? 3 : 4;

  const formatMinutesSeconds = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const closeCheckoutModal = () => {
    setIsCheckoutModalOpen(false);
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] font-sans text-gray-800 antialiased selection:bg-[#f05a5b] selection:text-white pb-28">
      
      {/* Top Banner Header */}
      <header className="sticky top-0 z-30 bg-white border-b border-orange-100 shadow-xs">
        <div className="bg-[#f05a5b] text-white text-xs sm:text-sm py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
          <Zap size={14} className="animate-bounce" />
          <span>Situs Pengiriman Makanan Halu #1 Indonesia • <b>{dopamineCount.toLocaleString('id-ID')}</b> Keinginan Terpuaskan Tanpa Keluar Uang!</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#f05a5b] rounded-2xl flex items-center justify-center text-white shadow-md shadow-[#f05a5b]/20 transform -rotate-3">
              <Utensils size={22} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="font-extrabold text-xl tracking-tight text-[#3a3541]">DopamineEats</h1>
                <span className="bg-orange-100 text-[#f05a5b] text-[10px] font-extrabold px-1.5 py-0.5 rounded-md uppercase">Halu 100%</span>
              </div>
              <p className="text-[11px] text-gray-500 hidden sm:block">Pesan makanan impianmu, gratis selamanya!</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 bg-gray-100/80 px-3 py-1.5 rounded-full text-xs text-gray-600 border border-gray-200/60">
            <BedDouble size={14} className="text-[#f05a5b]" />
            <span className="font-semibold text-gray-700">Kirim ke:</span>
            <span className="truncate max-w-[180px]">Kamar Tidur Utama 🛏️</span>
          </div>

          <div className="flex-1 max-w-xs relative hidden sm:block">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Cari ramen, ribs, crepe..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 text-xs text-gray-800 pl-9 pr-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-[#f05a5b]/30 focus:bg-white transition-all border border-transparent focus:border-[#f05a5b]"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAchievementsOpen(true)}
              className="bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300/80 px-3 py-2 rounded-full font-extrabold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-xs"
              title="Lihat Koleksi Achievement Kurir"
            >
              <Trophy size={16} className="text-amber-600" />
              <span className="hidden sm:inline">Koleksi Kurir</span>
              <span className="bg-amber-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">
                {unlockedCouriers.length}/30
              </span>
            </button>

            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative bg-[#3a3541] hover:bg-[#2a2630] text-white px-4 py-2 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition-transform active:scale-95 shadow-md"
            >
              <ShoppingBag size={18} className="text-[#f05a5b]" />
              <span>Nampan</span>
              {totalItemsCount > 0 && (
                <span className="bg-[#f05a5b] text-white text-xs font-black px-2 py-0.5 rounded-full animate-pulse">
                  {totalItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="px-4 pb-3 sm:hidden">
          <div className="relative w-full">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Cari makanan favoritmu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 text-xs text-gray-800 pl-9 pr-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-[#f05a5b]/30"
            />
          </div>
        </div>
      </header>

      {/* Category Pills Bar */}
      <div className="bg-white border-b border-gray-100 py-3 px-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-[#3a3541] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span>{cat.flag}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Banner Hero */}
        <div className="bg-gradient-to-r from-[#fff3ed] via-[#fffbf5] to-[#ffeef0] border border-orange-200/60 rounded-3xl p-6 mb-6 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xs">
          <div className="z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#f05a5b] font-extrabold text-xs px-3 py-1 rounded-full mb-3">
              <Flame size={14} /> 30 Kurir Hewan Random Siap Mengantar Halu
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#3a3541] leading-tight mb-2">
              Bebas Kalori, Bebas Tagihan, Kumpulkan Semua Lencana!
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Pilih makanan impianmu, masukkan ke nampan, dan dapatkan 1 dari 30 Kurir Hewan Unik saat checkout! Kumpulkan semua lencananya.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-gray-600">
              <span className="flex items-center gap-1"><CheckCircle2 size={15} className="text-green-500"/> Gratis 100%</span>
              <span className="flex items-center gap-1"><CheckCircle2 size={15} className="text-green-500"/> 30 Achievement Kurir</span>
              <span className="flex items-center gap-1"><CheckCircle2 size={15} className="text-green-500"/> Simulasi Real-Time</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white p-2 shadow-xl border-4 border-orange-100 transform rotate-6 flex items-center justify-center text-6xl">
              🦁
            </div>
          </div>
        </div>

        {/* Courier Progress Banner */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-amber-200/80 shadow-xs mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center shadow-md shrink-0">
              <Trophy size={26} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-gray-900 text-base">Koleksi Kurir Hewan Anda</h3>
                <span className="bg-amber-100 text-amber-800 text-xs font-black px-2 py-0.5 rounded-full">
                  {unlockedCouriers.length} dari 30 Terbuka
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">
                Setiap kali checkout, Anda mendapatkan 1 kurir acak. Kumpulkan kelengkapan koleksi hewan!
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAchievementsOpen(true)}
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs px-5 py-3 rounded-full shadow-md transition-all active:scale-95 whitespace-nowrap flex items-center justify-center gap-2"
          >
            <span>Buka Album Achievement</span>
            <Award size={16} />
          </button>
        </div>

        {/* Food Section Title */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg sm:text-xl font-black text-[#3a3541] flex items-center gap-2">
            <span>Daftar Kuliner Pilihan</span>
            <span className="text-xs font-bold text-gray-400 bg-gray-200/60 px-2 py-0.5 rounded-full">
              {filteredFoods.length} Menu
            </span>
          </h3>
        </div>

        {/* Food Grid */}
        {filteredFoods.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-100">
            <Smile size={48} className="mx-auto text-gray-300 mb-3" />
            <h4 className="font-bold text-gray-700 text-lg mb-1">Makanan tidak ditemukan</h4>
            <p className="text-xs text-gray-400">Coba cari kata kunci lain atau ubah filter negara.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFoods.map((food) => (
              <div 
                key={food.id}
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={food.image} 
                    alt={food.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-[#f05a5b] text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow-md">
                      {food.tag}
                    </span>
                    <span className="bg-white/90 backdrop-blur-md text-gray-800 text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                      {food.flag} {food.country}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <span className="flex items-center text-amber-500 font-bold">
                      <Star size={14} className="fill-amber-400 mr-1" />
                      {food.rating} ({food.reviews})
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock size={13} className="mr-1 text-gray-400" />
                      {food.time}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-gray-900 text-base mb-1 group-hover:text-[#f05a5b] transition-colors">
                    {food.name}
                  </h4>
                  <p className="text-xs text-gray-400 font-medium mb-2">{food.portion}</p>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">
                    {food.desc}
                  </p>

                  <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400 line-through">
                        {formatRupiah(food.originalPrice)}
                      </div>
                      <div className="text-lg font-black text-[#3a3541]">
                        {formatRupiah(food.price)}
                      </div>
                    </div>

                    <button 
                      onClick={() => addToCart(food)}
                      className="bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white border border-emerald-200 hover:border-emerald-600 font-black text-xs px-4 py-2.5 rounded-full transition-all duration-200 flex items-center gap-1 active:scale-95 shadow-xs"
                    >
                      <Plus size={15} />
                      <span>TAMBAH</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Floating Bottom Cart Trigger Bar */}
      {cart.length > 0 && !isCartOpen && (
        <div className="fixed bottom-4 left-0 right-0 z-30 px-4 max-w-2xl mx-auto">
          <div className="bg-[#f05a5b] text-white p-3 sm:p-4 rounded-3xl shadow-2xl flex items-center justify-between gap-4 border-2 border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center font-black text-lg">
                {totalItemsCount}
              </div>
              <div>
                <div className="text-[11px] text-white/80 uppercase tracking-wider font-bold">Total Nampan</div>
                <div className="text-lg font-black leading-tight">{formatRupiah(totalToPay)}</div>
              </div>
            </div>

            <button 
              onClick={() => setIsCartOpen(true)}
              className="bg-white text-[#f05a5b] hover:bg-orange-50 font-black text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-md transition-all active:scale-95 flex items-center gap-2"
            >
              <span>Lihat Nampan Anda</span>
              <ShoppingBag size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Slide-over Cart Modal Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end">
          <div className="bg-[#fffbf5] w-full max-w-md h-full flex flex-col shadow-2xl relative border-l border-orange-100">
            
            {/* Header */}
            <div className="p-5 bg-white border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-[#f05a5b]" />
                <h3 className="font-extrabold text-lg text-[#3a3541]">Nampan Makanan Halu</h3>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500"
              >
                <X size={18} />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="p-5 flex-1 overflow-y-auto space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <Utensils size={40} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm font-bold">Nampan Anda masih kosong.</p>
                  <p className="text-xs mt-1">Pilih beberapa hidangan lezat di atas!</p>
                </div>
              ) : (
                <>
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div key={item.id} className="bg-white p-3 rounded-2xl border border-gray-100 shadow-xs flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover" />
                          <div>
                            <h4 className="font-extrabold text-xs text-gray-800">{item.name}</h4>
                            <p className="text-[10px] text-gray-400">{item.flag} {item.portion}</p>
                            <span className="font-extrabold text-[#3a3541] text-xs">
                              {formatRupiah(item.price * item.quantity)}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200"
                          >
                            <Minus size={13} />
                          </button>
                          <span className="font-black text-xs w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200"
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Passport Accordion */}
                  <div className="border-t border-dashed border-gray-300 pt-4">
                    <button 
                      onClick={() => setShowPassport(!showPassport)}
                      className="w-full flex items-center justify-between text-left font-extrabold text-[#3a3541] text-xs py-1"
                    >
                      <span>🎒 Paspor Kuliner</span>
                      <div className="flex items-center gap-1 text-[#f05a5b]">
                        <span>{uniqueCountriesCount} Negara</span>
                        {showPassport ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </button>
                    {showPassport && (
                      <div className="mt-2 bg-white rounded-xl p-3 border border-orange-100 text-xs text-gray-600">
                        <p className="font-bold text-[#f05a5b]">Petualangan Cita Rasa:</p>
                        <p className="mt-1">Anda sudah memasukkan hidangan dari {uniqueCountriesCount} negara ke dalam nampan ini!</p>
                      </div>
                    )}
                  </div>

                  {/* Badges Accordion */}
                  <div className="border-t border-dashed border-gray-300 pt-3">
                    <button 
                      onClick={() => setShowBadges(!showBadges)}
                      className="w-full flex items-center justify-between text-left font-extrabold text-[#3a3541] text-xs py-1"
                    >
                      <span>🏅 Koleksi 30 Kurir Hewan</span>
                      <div className="flex items-center gap-1 text-[#f05a5b] font-black">
                        <span>{unlockedCouriers.length}/30</span>
                        {showBadges ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </button>

                    {showBadges && (
                      <div className="mt-3 bg-white rounded-xl p-3 border border-orange-100 text-xs text-gray-600 space-y-2 max-h-48 overflow-y-auto">
                        <div className="grid grid-cols-5 gap-2">
                          {COURIERS_DATABASE.map((courier) => {
                            const isUnlocked = unlockedCouriers.includes(courier.id);
                            return (
                              <div 
                                key={courier.id} 
                                className={`flex flex-col items-center justify-center p-1.5 rounded-xl border text-center ${
                                  isUnlocked 
                                    ? 'bg-orange-50 border-orange-200 text-gray-800' 
                                    : 'bg-gray-100 border-gray-200 opacity-40 grayscale'
                                }`}
                              >
                                <span className="text-lg">{isUnlocked ? courier.emoji : '❓'}</span>
                                <span className="text-[8px] font-bold truncate w-full">
                                  {isUnlocked ? courier.species : '???'}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Footer Calculation */}
            {cart.length > 0 && (
              <div className="p-5 bg-[#fffbf5] border-t border-dashed border-gray-300">
                <div className="space-y-1.5 mb-4 text-xs font-semibold text-gray-500">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatRupiah(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Biaya pengiriman</span>
                    <span>{formatRupiah(deliveryFee)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pajak & biaya</span>
                    <span>{formatRupiah(taxAndCharges)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200 text-base font-black text-[#3a3541]">
                    <span>Total bayar</span>
                    <span>{formatRupiah(totalToPay)}</span>
                  </div>
                </div>

                <button 
                  onClick={startCheckout}
                  className="w-full bg-[#f05a5b] hover:bg-[#e04a4b] text-white font-black text-sm py-3.5 rounded-full shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Lanjut ke Checkout · {formatRupiah(totalToPay)}</span>
                  <span>🚀</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Achievements Album Modal */}
      {isAchievementsOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-[#fffbf5] rounded-3xl max-w-2xl w-full p-5 sm:p-7 shadow-2xl relative border border-orange-100 my-auto">
            
            <button 
              onClick={() => setIsAchievementsOpen(false)}
              className="absolute top-4 right-4 z-20 w-9 h-9 bg-white hover:bg-gray-100 text-gray-500 rounded-full flex items-center justify-center shadow-xs transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-amber-500 text-white rounded-2xl flex items-center justify-center shadow-md">
                <Trophy size={22} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#3a3541]">Koleksi 30 Kurir Hewan</h3>
                <p className="text-xs text-gray-500 font-semibold">
                  Progres: <span className="text-amber-600 font-bold">{unlockedCouriers.length} / 30 Terbuka</span> ({Math.round((unlockedCouriers.length / 30) * 100)}%)
                </p>
              </div>
            </div>

            <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden mb-5 mt-3">
              <div 
                className="bg-amber-500 h-full transition-all duration-500"
                style={{ width: `${(unlockedCouriers.length / 30) * 100}%` }}
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[60vh] overflow-y-auto p-1">
              {COURIERS_DATABASE.map((courier) => {
                const isUnlocked = unlockedCouriers.includes(courier.id);
                return (
                  <div 
                    key={courier.id}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      isUnlocked 
                        ? 'bg-white border-amber-200 shadow-xs hover:shadow-md' 
                        : 'bg-gray-100/70 border-gray-200 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl">{isUnlocked ? courier.emoji : '🔒'}</span>
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                        isUnlocked ? 'bg-amber-100 text-amber-800' : 'bg-gray-200 text-gray-500'
                      }`}>
                        {isUnlocked ? courier.speed : 'Terkunci'}
                      </span>
                    </div>

                    <h4 className="font-extrabold text-sm text-gray-900 leading-tight">
                      {isUnlocked ? courier.name : '???'}
                    </h4>
                    <p className="text-xs font-bold text-amber-600 mb-1">
                      {isUnlocked ? `Si ${courier.species}` : 'Kurir Rahasia'}
                    </p>
                    <p className="text-[11px] text-gray-500 line-clamp-2 leading-snug">
                      {isUnlocked ? courier.quirk : 'Lakukan pesanan di nampan untuk membuka kurir ini!'}
                    </p>
                  </div>
                );
              })}
            </div>

            <button 
              onClick={() => setIsAchievementsOpen(false)}
              className="mt-6 w-full bg-[#f05a5b] hover:bg-[#e04a4b] text-white font-black text-sm py-3.5 rounded-full shadow-md active:scale-95 transition-all"
            >
              Tutup & Kembali Belanja
            </button>
          </div>
        </div>
      )}

      {isCheckoutModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <div className="bg-[#fffbf5] rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl relative border border-orange-100 my-auto">
            
            <button 
              onClick={closeCheckoutModal}
              className="absolute top-4 right-4 z-20 w-8 h-8 bg-white hover:bg-gray-100 text-gray-500 rounded-full flex items-center justify-center shadow-xs transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{activeCourier.emoji}</span>
              <h3 className="text-xl font-black text-[#3a3541]">On the way!</h3>
            </div>
            <p className="text-xs text-gray-500 font-semibold mb-4">
              Order #{orderId} • <span className="text-gray-700 font-extrabold">"paid" {formatRupiah(totalToPay)}</span>
            </p>

            {/* Map Canvas Visualizer */}
            <div className="relative w-full h-56 bg-[#e8ecef] rounded-2xl overflow-hidden border border-gray-200/80 mb-4 shadow-inner">
              
              <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none" fill="none">
                <path d="M0 40 Q 100 20, 200 60 T 400 30 L 400 0 L 0 0 Z" fill="#b1d4e0" />
                <rect x="280" y="80" width="100" height="90" rx="15" fill="#c8e6c9" />

                <path d="M 40 40 L 40 180" stroke="#ffffff" strokeWidth="12" strokeLinecap="round" />
                <path d="M 130 40 L 130 180" stroke="#ffffff" strokeWidth="12" strokeLinecap="round" />
                <path d="M 250 40 L 250 180" stroke="#ffffff" strokeWidth="12" strokeLinecap="round" />
                <path d="M 20 100 L 380 100" stroke="#ffffff" strokeWidth="12" strokeLinecap="round" />
                <path d="M 20 160 L 380 160" stroke="#ffffff" strokeWidth="12" strokeLinecap="round" />

                <path 
                  d="M 50 60 L 130 60 L 130 100 L 250 100 L 250 130 L 320 130" 
                  stroke="#f05a5b" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeDasharray="4 4"
                />
              </svg>

              {/* Restaurant Pin */}
              <div 
                className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
                style={{ left: '12.5%', top: '30%' }}
              >
                <div className="w-10 h-10 bg-[#3a3541] rounded-2xl border-2 border-white shadow-lg flex items-center justify-center text-lg">
                  🏪
                </div>
                <div className="bg-white text-[#3a3541] font-black text-[10px] px-2 py-0.5 rounded-md shadow-xs border border-gray-200 mt-1 whitespace-nowrap">
                  Dapur Halu 🍽️
                </div>
              </div>

              {/* Bedroom Pin */}
              <div 
                className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
                style={{ left: '80%', top: '65%' }}
              >
                <div className="w-10 h-10 bg-emerald-600 rounded-2xl border-2 border-white shadow-lg flex items-center justify-center text-lg">
                  🛏️
                </div>
                <div className="bg-white text-emerald-800 font-black text-[10px] px-2 py-0.5 rounded-md shadow-xs border border-emerald-200 mt-1 whitespace-nowrap">
                  Kamar Tidur 🏠
                </div>
              </div>

              {/* Courier Marker */}
              {(() => {
                let posX = 12.5;
                let posY = 30;
                const p = progressPercent;

                if (p <= 20) {
                  posX = 12.5 + (32.5 - 12.5) * (p / 20);
                  posY = 30;
                } else if (p <= 40) {
                  posX = 32.5;
                  posY = 30 + (50 - 30) * ((p - 20) / 20);
                } else if (p <= 70) {
                  posX = 32.5 + (62.5 - 32.5) * ((p - 40) / 30);
                  posY = 50;
                } else if (p <= 85) {
                  posX = 62.5;
                  posY = 50 + (65 - 50) * ((p - 70) / 15);
                } else {
                  posX = 62.5 + (80 - 62.5) * ((p - 85) / 15);
                  posY = 65;
                }

                return (
                  <div 
                    className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300 ease-linear pointer-events-none"
                    style={{ left: `${posX}%`, top: `${posY}%` }}
                  >
                    <div className="relative">
                      <div className="absolute -inset-1 bg-[#f05a5b] rounded-2xl animate-ping opacity-75"></div>
                      <div className="relative w-12 h-12 bg-white border-2 border-[#f05a5b] rounded-2xl shadow-xl flex items-center justify-center text-2xl">
                        {activeCourier.emoji}
                      </div>
                    </div>
                    <div className="bg-[#f05a5b] text-white font-black text-[10px] px-2 py-0.5 rounded-full shadow-md border border-white mt-1 whitespace-nowrap">
                      {activeCourier.name}
                    </div>
                  </div>
                );
              })()}

              {/* Notification Overlay Alert */}
              {showNotificationAlert && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-2xs flex items-center justify-center p-3 z-30">
                  <div className="bg-white rounded-3xl p-5 max-w-xs w-full text-center shadow-xl border border-orange-100">
                    <div className="w-14 h-14 bg-[#3b82f6] rounded-2xl mx-auto flex items-center justify-center text-amber-300 shadow-md mb-3 transform -rotate-3">
                      <Bell size={28} className="animate-bounce" />
                    </div>

                    <h4 className="font-extrabold text-gray-900 text-base leading-snug mb-2">
                      Ingin Notifikasi Saat Tiba?
                    </h4>

                    <p className="text-xs text-gray-500 leading-relaxed mb-4">
                      Kurir {activeCourier.species} Anda butuh waktu 3 menit asli. Tutup tab ini dan lakukan hal lain — kami akan memberi tahu saat mereka tiba dengan <b>tangan kosong</b>. Itulah inti leluconnya!
                    </p>

                    <div className="space-y-2">
                      <button 
                        onClick={() => {
                          setAlertsEnabled(true);
                          setShowNotificationAlert(false);
                        }}
                        className="w-full bg-[#f05a5b] hover:bg-[#e04a4b] text-white font-black text-xs py-2.5 rounded-full shadow-md active:scale-95"
                      >
                        Nyalakan Notifikasi
                      </button>
                      <button 
                        onClick={() => setShowNotificationAlert(false)}
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-extrabold text-xs py-2 rounded-full"
                      >
                        Tidak, Terima Kasih
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Achievement Toast Banner */}
            {newlyUnlocked && (
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-2xl p-3 mb-3 flex items-center justify-between shadow-md animate-bounce">
                <div className="flex items-center gap-2">
                  <Trophy size={20} className="text-yellow-100" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-black tracking-wider text-yellow-100">Lencana Baru Terbuka!</div>
                    <div className="text-xs font-black">{newlyUnlocked.emoji} {newlyUnlocked.name} Si {newlyUnlocked.species}</div>
                  </div>
                </div>
                <span className="text-xs bg-white/20 font-bold px-2 py-1 rounded-full">30 Badges</span>
              </div>
            )}

            {/* Live Ticker Status Pill Badge */}
            <div className="bg-amber-50/90 border border-amber-200/80 rounded-2xl p-3 mb-4 text-xs font-bold text-amber-900 flex items-center justify-start gap-2 shadow-2xs">
              <span className="leading-snug">{currentTickerMessage}</span>
            </div>

            {/* Order Status Timeline List */}
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs mb-4 space-y-3.5">
              {/* Step 1: Order Confirmed */}
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  currentStep >= 1 ? 'bg-red-500 text-white shadow-xs' : 'bg-gray-100 text-gray-400'
                }`}>
                  <CheckCircle2 size={18} className={currentStep >= 1 ? 'text-white' : 'text-gray-400'} />
                </div>
                <span className={`text-xs font-extrabold transition-colors ${
                  currentStep >= 1 ? 'text-[#f05a5b]' : 'text-gray-400'
                }`}>
                  Pesanan dikonfirmasi
                </span>
              </div>

              {/* Step 2: Kitchen Cooking */}
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  currentStep > 2 
                    ? 'bg-red-500 text-white' 
                    : currentStep === 2 
                      ? 'bg-orange-100 text-[#f05a5b] ring-2 ring-[#f05a5b]/40' 
                      : 'bg-gray-100 text-gray-400'
                }`}>
                  <Utensils size={15} />
                </div>
                <span className={`text-xs font-extrabold transition-colors ${
                  currentStep >= 2 ? (currentStep === 2 ? 'text-[#f05a5b]' : 'text-gray-700') : 'text-gray-400'
                }`}>
                  Dapur sedang memasak makananmu
                </span>
              </div>

              {/* Step 3: Rider Picked Up Order */}
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  currentStep > 3 
                    ? 'bg-red-500 text-white' 
                    : currentStep === 3 
                      ? 'bg-orange-100 text-[#f05a5b] ring-2 ring-[#f05a5b]/40' 
                      : 'bg-gray-100 text-gray-400'
                }`}>
                  <Bike size={15} />
                </div>
                <span className={`text-xs font-extrabold transition-colors ${
                  currentStep >= 3 ? (currentStep === 3 ? 'text-[#f05a5b]' : 'text-gray-700') : 'text-gray-400'
                }`}>
                  Kurir mengambil pesananmu
                </span>
              </div>

              {/* Step 4: Almost at your door */}
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  currentStep === 4 
                    ? 'bg-[#f05a5b] text-white ring-2 ring-[#f05a5b]/40 animate-pulse' 
                    : 'bg-gray-100 text-gray-400'
                }`}>
                  <MapPin size={15} />
                </div>
                <span className={`text-xs font-extrabold transition-colors ${
                  currentStep === 4 ? 'text-[#f05a5b]' : 'text-gray-400'
                }`}>
                  Hampir sampai di depan pintumu
                </span>
              </div>
            </div>

            {/* Divider WHILE YOU WAIT */}
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-[11px] font-black text-gray-400 tracking-wider uppercase">WHILE YOU WAIT</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Courier Info Card */}
            <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-xs mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{activeCourier.emoji}</div>
                <div>
                  <div className="font-extrabold text-gray-900 text-sm">{activeCourier.name}</div>
                  <div className="text-xs text-gray-500">Si {activeCourier.species} • <span className="text-[#f05a5b] font-bold">{activeCourier.speed}</span></div>
                </div>
              </div>
              <span className="bg-green-100 text-green-700 font-extrabold text-[10px] px-2.5 py-1 rounded-full">
                Active
              </span>
            </div>

            {/* Countdown Timer and Controls */}
            <div className="bg-gray-100 p-4 rounded-2xl text-center mb-4">
              <div className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">
                {countdown > 0 ? "Perkiraan Waktu Tiba Halu" : "Pesanan Telah Tiba!"}
              </div>
              <div className="text-3xl font-black text-[#3a3541]">
                {countdown > 0 ? formatMinutesSeconds(countdown) : "🎉 Waktu Habis!"}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
                {countdown > 0 && (
                  <button
                    onClick={() => setIsSpeedUp(!isSpeedUp)}
                    className={`px-4 py-2 rounded-full font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 ${
                      isSpeedUp 
                        ? 'bg-amber-500 text-white shadow-md' 
                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <FastForward size={14} />
                    <span>{isSpeedUp ? "Turbo 15x Aktif!" : "Percepat Simulasi (15x)"}</span>
                  </button>
                )}

                <button
                  onClick={triggerIncomingCall}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
                >
                  <PhoneCall size={14} className="animate-bounce" />
                  <span>Telepon Pura-pura Kurir</span>
                </button>
              </div>
            </div>

            <button
              onClick={closeCheckoutModal}
              className="w-full bg-[#f05a5b] hover:bg-[#e04a4b] text-white font-black text-sm py-3.5 rounded-full shadow-md active:scale-95 transition-all"
            >
              Tutup & Buat Pesanan Baru
            </button>
          </div>
        </div>
      )}

      {isCallModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#1c171a] text-white flex flex-col items-center justify-between p-6 sm:p-10 animate-fade-in font-sans">
          
          {/* Top Status Header */}
          <div className="w-full text-center pt-4">
            {isCallAnswered ? (
              <div className="text-emerald-400 font-mono font-bold text-lg tracking-widest animate-pulse">
                0:{callDuration < 10 ? `0${callDuration}` : callDuration}
              </div>
            ) : (
              <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider animate-bounce">
                Panggilan Masuk Halu...
              </div>
            )}
          </div>

          {/* Courier Avatar & Info */}
          <div className="flex flex-col items-center justify-center my-auto text-center space-y-4 max-w-sm">
            <div className="relative">
              {!isCallAnswered && (
                <div className="absolute -inset-4 rounded-full bg-emerald-500/20 animate-ping"></div>
              )}
              <div className="w-32 h-32 rounded-full bg-[#a2e0c1] text-6xl flex items-center justify-center shadow-2xl border-4 border-white/10 relative z-10">
                {activeCourier.emoji}
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {activeCourier.name}
              </h2>
              <p className="text-xs text-gray-400 mt-1 font-medium">
                mobile • Si {activeCourier.species} (DopamineEats)
              </p>
            </div>

            {/* Pulse dots indicator */}
            <div className="flex items-center justify-center gap-1.5 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse delay-100"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse delay-200"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse delay-300"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse delay-400"></span>
            </div>

            {/* Live Subtitle / Speech Bubble */}
            {isCallAnswered ? (
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl shadow-xl mt-4 max-w-xs transition-all">
                <p className="text-sm sm:text-base font-black text-emerald-300 leading-snug">
                  "{getDialogueLines()[dialogueIndex]}"
                </p>
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl max-w-xs mt-2">
                <p className="text-xs text-gray-300 font-medium">
                  Kurir {activeCourier.species} sedang memanggil Anda tentang pesanan Anda!
                </p>
              </div>
            )}
          </div>

          {/* Action Call Buttons */}
          <div className="w-full max-w-xs pb-8">
            {!isCallAnswered ? (
              <div className="flex items-center justify-around gap-6">
                {/* Reject Call */}
                <button
                  onClick={endCall}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-lg transform group-active:scale-90 transition-all">
                    <PhoneOff size={28} />
                  </div>
                  <span className="text-xs text-gray-400 font-bold">Tolak</span>
                </button>

                {/* Accept Call */}
                <button
                  onClick={answerCall}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg transform group-active:scale-90 transition-all animate-bounce">
                    <Phone size={28} />
                  </div>
                  <span className="text-xs text-emerald-400 font-bold">Angkat</span>
                </button>
              </div>
            ) : (
              /* End Call Button */
              <div className="flex items-center justify-center">
                <button
                  onClick={endCall}
                  className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-2xl transform active:scale-90 transition-all"
                  title="Matikan Telepon"
                >
                  <X size={32} />
                </button>
              </div>
            )}
          </div>

        </div>
      )}

    </div>
  );
}