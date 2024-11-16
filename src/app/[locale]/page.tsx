import { useTranslations } from 'next-intl'
import Button from './components/Button'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          {t('Hi👋,')}{' '}
          <br />
          {t('I am Full Stack Dev. Mohit Walia')}
        </h1>
        <div className='my-6 px-20 text-left text-2xl text-text-secondary'>
        As a Full Stack Developer, I specialize in crafting efficient, scalable web solutions with a blend of backend and frontend expertise. I excel in backend development using Node.js and PHP, building reliable, secure applications tailored to diverse needs. My frontend skills include React and Next.js, enabling the creation of interactive, high-performance web apps optimized for SEO and user experience. I write clean, maintainable code and follow best practices to ensure sustainability. Passionate about collaboration, I contribute effectively to team projects and stay updated with the latest technologies to deliver modern, impactful solutions. </div>
        <div className='mt-4 flex flex-row gap-4'>
          <a
            href='mailto:mohitwalia5490@gmail.com'
            target='_blank'
          >
            <Button rounded size='large'>
               Hire Me
            </Button>
          </a>
          <a
            href='https://github.com/iammohitwalia/'
            target='_blank'
          >
            <Button rounded size='large' variant='secondary'>
              {t('Learn_More')}
            </Button>
          </a>
        </div>
      </section>
      <section className='flex flex-col items-center justify-center py-24 bg-gray-900 text-white'>
  <h2 className='text-3xl font-bold mb-10'>Services</h2>
  <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
    <div className='text-center bg-gray-800 p-6 rounded-lg shadow-md'>
      <h2 className='mb-3 text-xl font-semibold'>"Custom Web Application Development"</h2>
      <div className='flex justify-center mb-2'>
      </div>
      <p className='text-text-secondarsy max-lg:max-w-[500px]'>
      I build bespoke web applications from the ground up, tailored to meet specific business requirements. Using my full stack expertise, I ensure your application is fast, scalable, and secure, providing a seamless user experience from start to finish.      </p>
    </div>
    <div className='text-center bg-gray-800 p-6 rounded-lg shadow-md'>
      <h2 className='mb-3 text-xl font-semibold'>"Backend Architecture and API Development"</h2>
      <div className='flex justify-center mb-2'>
      </div>
      <p className='text-text-secondarsy max-lg:max-w-[500px]'>
      With deep knowledge in Node.js and PHP, I design and develop robust backend solutions that power your applications. I create secure and efficient RESTful APIs that enable seamless communication between your client interfaces and servers, ensuring smooth data handling and performance.      </p>
    </div>
    <div className='text-center bg-gray-800 p-6 rounded-lg shadow-md'>
      <h2 className='mb-3 text-xl font-semibold'>"Responsive Frontend Development!"</h2>
      <div className='flex justify-center mb-2'>
      </div>
      <p className='text-text-secondarsy max-lg:max-w-[500px]'>
      Leveraging React and Next.js, I craft engaging and high-performance frontends that are optimized for both desktop and mobile experiences. My work prioritizes clean, maintainable code and SEO best practices, ensuring your web presence stands out and functions flawlessly on all devices.      </p>
    </div>
  </div>
</section>
<section className='flex flex-col items-center justify-center py-24 bg-white-900 text-white'>
  <h2 className='text-3xl font-bold mb-10'>Reviews</h2>
  <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
    <div className='text-center bg-gray-800 p-6 rounded-lg shadow-md'>
      Hello 
    </div>
</div>
</section>


      <section className='flex flex-col items-center justify-center py-24 bg-gray-900 text-white'>
  <h2 className='text-3xl font-bold mb-10'>Reviews</h2>
  <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
    <div className='text-center bg-gray-800 p-6 rounded-lg shadow-md'>
      <h2 className='mb-3 text-xl font-semibold'>"Exceptional Service and Expertise!"</h2>
      <div className='flex justify-center mb-2'>
        <span className='text-yellow-500'>★★★★★</span>
      </div>
      <p className='text-text-secondarsy max-lg:max-w-[500px]'>
        "The team delivered a custom web application that exceeded our expectations. The project was handled with the utmost professionalism and met all our unique requirements. Highly recommend!"
      </p>
      <p className='mt-3 font-medium'>- Alex Johnson, CEO of TechWave</p>
    </div>
    <div className='text-center bg-gray-800 p-6 rounded-lg shadow-md'>
      <h2 className='mb-3 text-xl font-semibold'>"Top-notch Backend Solutions!"</h2>
      <div className='flex justify-center mb-2'>
        <span className='text-yellow-500'>★★★★★</span>
      </div>
      <p className='text-text-secondarsy max-lg:max-w-[500px]'>
        "Their backend development skills are unparalleled. They designed a robust architecture that supports our large-scale applications seamlessly. Communication was excellent throughout the project."
      </p>
      <p className='mt-3 font-medium'>- Maria Lopez, CTO of InnovateX</p>
    </div>
    <div className='text-center bg-gray-800 p-6 rounded-lg shadow-md'>
      <h2 className='mb-3 text-xl font-semibold'>"Responsive and Engaging Frontend!"</h2>
      <div className='flex justify-center mb-2'>
        <span className='text-yellow-500'>★★★★★</span>
      </div>
      <p className='text-text-secondarsy max-lg:max-w-[500px]'>
        "The frontend they built was visually stunning and highly responsive. It provided an excellent user experience and followed all modern best practices for performance and SEO."
      </p>
      <p className='mt-3 font-medium'>- Liam Chen, Product Manager at DevCore</p>
    </div>
  </div>
</section>

    </div>
  )
}
