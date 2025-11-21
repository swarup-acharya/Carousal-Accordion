import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';


const slides = [
  {
    id: 1,
    image: "./public/flower_1.avif",
    title: 'The Guardians',
    description: 'An elite team of superheroes must unite to save the world from an ancient threat that could destroy humanity forever.',
  },
  {
    id: 2,
    image: "./public/flower_2.avif",
    title: 'Cyber City',
    description: 'In a neon-lit metropolis of the future, one hacker discovers a conspiracy that will change the fate of civilization.',
  },
  {
    id: 3,
    image: "./public/flower_3.avif",
    title: 'Realm of Dragons',
    description: 'A young warrior embarks on an epic quest through mystical lands to reclaim the stolen crown and restore peace to the kingdom.',
  },
  {
    id: 4,
    image: "./public/flower_4.avif",
    title: 'Final Strike',
    description: 'When time runs out, a rogue agent must race against the clock to prevent a catastrophic attack on the city.',
  },
  {
    id: 5,
    image: "./public/flower_2.avif",
    title: 'Cosmic Odyssey',
    description: 'A crew of brave astronauts ventures into the unknown depths of space to discover the secrets of a mysterious signal.',
  },
  {
    id: 5,
    image: "./public/flower_6.avif",
    title: 'Cosmic Odyssey',
    description: 'A crew of brave astronauts ventures into the unknown depths of space to discover the secrets of a mysterious signal.',
  },
  {
    id: 5,
    image: "./public/flower_7.avif",
    title: 'Cosmic Odyssey',
    description: 'A crew of brave astronauts ventures into the unknown depths of space to discover the secrets of a mysterious signal.',
  },


];

const MovieCarousel = () => {
  return (
    <div className="movie-carousel">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
       slidesPerView={3}
        // spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
    1200: { slidesPerView: 3 },
    990: { slidesPerView: 3 },
    760: { slidesPerView: 2 },
    600: { slidesPerView: 1 },
    0: { slidesPerView: 1 },
  }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <img
                src={slide.image}
                alt={slide.title}
                className="slide-image"
              />
              <div className="slide-overlay">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-description">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieCarousel;
