import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Aperture, Clock, Layers } from 'lucide-react';

const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=85',
    title: 'Milky Way Over the Peaks',
    category: 'Night Sky',
    meta: { aperture: 'f/2.8', iso: 'ISO 3200', shutter: '25s' },
    size: 'tall',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=85',
    title: 'Valley at First Light',
    category: 'Landscape',
    meta: { aperture: 'f/8', iso: 'ISO 100', shutter: '1/250s' },
    size: 'wide',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=900&q=85',
    title: 'Starfield — 3 AM',
    category: 'Night Sky',
    meta: { aperture: 'f/1.8', iso: 'ISO 6400', shutter: '15s' },
    size: 'normal',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85',
    title: 'Alpine Silence',
    category: 'Landscape',
    meta: { aperture: 'f/11', iso: 'ISO 200', shutter: '1/500s' },
    size: 'normal',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=900&q=85',
    title: 'Galactic Core Rising',
    category: 'Night Sky',
    meta: { aperture: 'f/2.8', iso: 'ISO 4000', shutter: '20s' },
    size: 'wide',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=85',
    title: 'Golden Hour Aerial',
    category: 'Landscape',
    meta: { aperture: 'f/5.6', iso: 'ISO 100', shutter: '1/800s' },
    size: 'tall',
  },
];

const categories = ['All', 'Landscape', 'Night Sky'];

const sizeClass = {
  normal: '',
  wide: 'md:col-span-2',
  tall: 'md:row-span-2',
};

const heightClass = {
  normal: 'h-56',
  wide: 'h-56',
  tall: 'h-[29rem]',
};

const PhotoCard = ({ photo }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.92 }}
    transition={{ duration: 0.4 }}
    className={`group relative overflow-hidden rounded-2xl ${sizeClass[photo.size]} cursor-pointer`}
  >
    <div className={`w-full ${heightClass[photo.size]} overflow-hidden`}>
      <img
        src={photo.src}
        alt={photo.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
      opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4">
      {/* Category chip */}
      <span className="text-[10px] uppercase tracking-widest font-semibold text-amber-400 mb-1">
        {photo.category}
      </span>
      <p className="text-white font-semibold text-sm mb-3 leading-snug">{photo.title}</p>

      {/* Camera metadata HUD */}
      <div className="flex items-center gap-3 font-mono text-[11px] text-white/70">
        <span className="flex items-center gap-1">
          <Aperture size={10} className="text-amber-400" />
          {photo.meta.aperture}
        </span>
        <span className="flex items-center gap-1">
          <Layers size={10} className="text-indigo-400" />
          {photo.meta.iso}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={10} className="text-rose-400" />
          {photo.meta.shutter}
        </span>
      </div>
    </div>

    {/* Always-visible camera icon badge */}
    <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 backdrop-blur-sm
      border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <Camera size={12} className="text-white" />
    </div>
  </motion.div>
);

const Photography = () => {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? photos : photos.filter(p => p.category === active);

  return (
    <section id="/photography" className="section-padding">
      <div className="container-width">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="section-label">Through the Lens</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="section-heading">
              Landscapes &amp;{' '}
              <span className="bg-gradient-to-r from-amber-400 to-indigo-400 bg-clip-text text-transparent">
                Night Sky
              </span>
            </h2>

            {/* Category filter */}
            <div className="flex gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200
                    ${active === cat
                      ? 'bg-amber-400 text-black'
                      : 'bg-gray-100 dark:bg-[#1A1A1A] text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-[#222]'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-500 dark:text-gray-500 max-w-lg">
            Between compiling code, I chase light — from golden hour mountain ridges to
            30-second exposures under the Milky Way.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map(photo => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Film strip footer decoration */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex items-center gap-3"
        >
          <div className="flex gap-1.5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="w-6 h-8 rounded-sm bg-gray-100 dark:bg-[#111] border border-gray-200 dark:border-[#1F1F1F]
                  flex items-center justify-center"
              >
                <div className="w-3 h-4 rounded-[2px] bg-gray-300/60 dark:bg-white/10" />
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-600 font-mono tracking-widest uppercase ml-2">
            Swap in your own shots — these are placeholders
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Photography;
