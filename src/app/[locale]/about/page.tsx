import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('')
  return (
    <div className='px-32 py-24 text-center text-2xl'>
     As a Full Stack Developer, I specialize in crafting efficient, scalable web solutions with a blend of backend and frontend expertise. I excel in backend development using Node.js and PHP, building reliable, secure applications tailored to diverse needs. My frontend skills include React and Next.js, enabling the creation of interactive, high-performance web apps optimized for SEO and user experience. I write clean, maintainable code and follow best practices to ensure sustainability. Passionate about collaboration, I contribute effectively to team projects and stay updated with the latest technologies to deliver modern, impactful solutions.
<br />
<br/>
<b>
Custom Web Application Development</b>
I build bespoke web applications from the ground up, tailored to meet specific business requirements. Using my full stack expertise, I ensure your application is fast, scalable, and secure, providing a seamless user experience from start to finish.
<br/>
<br/>
<i>Review: "The custom web application developed was exactly what our business needed. It was fast, secure, and exceeded our expectations." – Alex M., 5 Stars</i>
<br/>
<br/>
Backend Architecture and API Development
With deep knowledge in Node.js and PHP, I design and develop robust backend solutions that power your applications. I create secure and efficient RESTful APIs that enable seamless communication between your client interfaces and servers, ensuring smooth data handling and performance.

Review: "The backend architecture was perfectly designed and the APIs were seamless. It greatly improved our workflow and user experience." – Jordan S., 5 Stars

Responsive Frontend Development
Leveraging React and Next.js, I craft engaging and high-performance frontends that are optimized for both desktop and mobile experiences. My work prioritizes clean, maintainable code and SEO best practices, ensuring your web presence stands out and functions flawlessly on all devices.

Review: "The frontend development was exceptional, with a responsive design that looks great on any device. Highly recommended!" – Mia L., 5 Stars
    </div>
  )
}
