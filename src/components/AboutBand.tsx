import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

interface BandMember {
  name: string
  role: string
  photo: string
  gear: string[]
}

export const AboutBand = () => {
  const members: BandMember[] = [
    {
      name: 'Денис/Страшное погоняло',
      role: 'Вокал/Гитара',
      photo: '/images/Band_members/Denis.jpg',
      gear: ['Guitar', 'Mic', 'Misc']
    },
    {
      name: 'Саша/Страшное погоняло',
      role: 'Гитара',
      photo: '/images/Band_members/Alexander.jpg',
      gear: ['Guitar', 'Misc']
    },
    {
      name: 'Ваня/Страшное погоняло',
      role: 'B\'Ass',
      photo: '/images/Band_members/Ivan.jpg',
      gear: ['Guitar', 'Misc']
    },
  ]

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      id='about'
      className='relative bg-cover bg-center py-12 md:py-20'
      style={{ backgroundImage: "url('/images/Backgrounds/AboutBand_bg.jpg')" }}
    >
      {/* Затемнение фона */}
      <div className='absolute inset-0 bg-black/60' />
      
      <div className='container mx-auto px-4 sm:px-6 relative z-10'>
        <h2 className='text-2xl sm:text-3xl text-white font-cinzel font-bold text-left mb-8 sm:mb-12 px-2 sm:px-0'>О группе</h2>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start'>
          {/* Левая колонка - история группы */}
          <div className='text-white px-2 sm:px-0'>
            <p className='text-sm sm:text-base leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vel modi reiciendis odit minima, obcaecati debitis ut cumque animi blanditiis repellat ipsum, cupiditate hic incidunt molestias, atque dicta maiores quod. Temporibus repellat non accusantium recusandae laborum odit unde expedita nostrum fuga eum iure, saepe aliquam dolores voluptas earum dignissimos necessitatibus, distinctio officia dolorum! Dolorum veritatis quam mollitia inventore? Magni nemo alias ipsam quidem id ea ad repellendus ab natus et non molestiae sint, veritatis iusto amet! Modi excepturi debitis repellat provident autem, molestiae veniam laboriosam cupiditate aliquam, eos ipsa vero. Quo mollitia magni veniam quisquam excepturi nesciunt, quis at similique, provident vel pariatur molestias illum quos repellendus quod porro nam suscipit est nihil veritatis, nemo minima hic ad? Quod impedit quidem est velit sed veritatis. Quo nam animi corporis explicabo totam, veniam enim error voluptates quas molestias ad fugiat eligendi debitis officia veritatis repellendus tenetur quod, ut at maxime deleniti exercitationem facilis commodi. Temporibus molestias tempore ipsum. Dolorem obcaecati dolorum doloremque numquam dolore, dolores debitis non impedit saepe aliquam officiis animi expedita, omnis ipsam aspernatur sapiente accusantium. Incidunt laudantium id tempora excepturi repellat sint molestiae, quas ipsam? Iure beatae officia accusamus numquam dolor saepe asperiores non, dolores incidunt, sequi pariatur, fugit animi debitis facere harum. Debitis fugiat, facilis totam sequi reprehenderit magni, similique harum velit tempora dignissimos provident labore. Reprehenderit delectus architecto natus voluptas voluptates, quos vel nihil esse qui? Harum expedita, id nulla ratione quibusdam necessitatibus sit magni in quos odio delectus tempora pariatur molestias recusandae esse ut nisi distinctio voluptas soluta? Quas odit recusandae pariatur assumenda quae debitis vitae nam illum. Fugit suscipit incidunt, assumenda doloribus repellat sed sunt! Voluptatum veniam fugiat ex culpa rem nostrum voluptas! Recusandae iure aperiam earum dolorum doloremque et tenetur esse facilis voluptas porro sint voluptate illo eligendi officiis, distinctio praesentium velit aspernatur inventore rem quia ex excepturi ad? Nam vero explicabo quam, possimus ipsum veniam tempore optio veritatis autem placeat soluta maiores ullam voluptatem saepe molestiae maxime quo reprehenderit praesentium? Ullam vero ratione vitae, alias voluptatem magni commodi velit excepturi illo blanditiis eum ab eveniet, nobis, enim ipsum delectus! Recusandae, reiciendis aut inventore, nulla minima expedita, sit natus possimus totam reprehenderit asperiores voluptatem? Officiis sapiente nam, impedit tempora blanditiis ipsum aperiam nulla illo vitae? Magnam dicta atque, cupiditate alias tenetur distinctio vero voluptas possimus cum eius consequatur reprehenderit consectetur quis inventore libero repudiandae, minima corrupti hic voluptatibus suscipit dolore aut optio eligendi.
            </p>
          </div>

          {/* Правая колонка - карусель */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className='w-full max-w-xl mx-auto lg:mx-0'>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.about-swiper-next',
                prevEl: '.about-swiper-prev',
              }}
              pagination={{ 
                clickable: true,
                el: '.about-swiper-pagination'
              }}
              loop
              className='rounded-lg overflow-hidden shadow-lg'
            >
              {members.map((member) => (
                <SwiperSlide key={member.name}>
                  <div className='bg-gray-900/80 p-4 sm:p-6 rounded-lg border border-yellow-400/20 h-full'>
                    <div className='aspect-square relative mb-4'>
                      <Image 
                        src={member.photo}
                        alt={member.name}
                        fill
                        className='object-cover rounded'
                        sizes='(max-width: 768px) 100vw, 50vw, (max-width: 1024px) 50vw, 33vw'
                      />
                    </div>
                    <h4 className='text-sm sm:text-xl font-bold text-white'>{member.name}</h4>
                    <p className='text-xs sm:text-base text-gray-400'>{member.role}</p>
                    <div className='mt-2 sm:mt-3'>
                      <h5 className='text-sm sm:text-base font-semibold text-yellow-400'>Инструменты и оборудование:</h5>
                      <ul className='list-disc list-inside text-gray-300 text-xs sm:text-base'>
                        {member.gear.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
               <div className="about-swiper-next absolute top-1/2 right-2 z-10 -translate-y-1/2 text-yellow-400 w-10 h-10 flex items-center justify-center cursor-pointer bg-black/30 rounded-full hover:bg-black/50 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                </svg>
              </div>
              
              <div className="about-swiper-prev absolute top-1/2 left-2 z-10 -translate-y-1/2 text-yellow-400 w-10 h-10 flex items-center justify-center cursor-pointer bg-black/30 rounded-full hover:bg-black/50 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                </svg>
              </div>

              <div className="about-swiper-pagination flex justify-center mt-4 space-x-2"></div>
            </Swiper>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}