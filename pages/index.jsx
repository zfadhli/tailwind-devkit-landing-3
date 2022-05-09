import Head from 'next/head'
import Image from 'next/image'
import HeroIcon from '../assets/hero.svg'
import LogoBungalowIcon from '../assets/logo-bungalow.svg'
import LogoMonogramaIcon from '../assets/logo-monograma.svg'
import LogoPetskyIcon from '../assets/logo-petsky.svg'
import LogoStackIcon from '../assets/logo-stack.svg'
import LogoUppercutIcon from '../assets/logo-uppercut.svg'
import Video01Image from '../assets/video-01.jpg'
import Video02Image from '../assets/video-02.jpg'
import Avatar01 from '../assets/avatar-01.jpg'
import Avatar02 from '../assets/avatar-02.jpg'
import Avatar03 from '../assets/avatar-03.jpg'
import TestimonialCard from '../components/testimonial-card'
import BlogPost01Image from '../assets/blog-post-01.jpg'
import BlogPost02Image from '../assets/blog-post-02.jpg'
import BlogPostCard from '../components/blog-post-card'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind Devkit Landing 3</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='w-full min-h-screen text-gray-900 bg-green-50 font-inter'>
        <nav className='border-t-8 border-green-200'>
          <div className='container'>
            <div className='flex items-center justify-between h-20 gap-x-8'>
              <div className='text-3xl font-bold'>Devkit</div>
              <ul className='flex items-center font-semibold gap-x-4'>
                <li>Home</li>
                <li>Pages</li>
                <li>Sections</li>
                <li>Template</li>
              </ul>
              <div>
                <button className='px-4 py-2 text-sm font-semibold border-2 rounded-md'>
                  View on Webflow
                </button>
              </div>
            </div>
          </div>
        </nav>

        <section className='section'>
          <div className='container'>
            <div className='text-center'>
              <h1 className='text-6xl font-bold'>
                Build slick <br /> technology sites.
              </h1>
              <p className='pt-6 text-xl text-gray-700'>
                Devkit is a complete UI Kit for SaaS, Technology and Multi-Purpose <br /> Business
                websites.
              </p>
            </div>
            <div className='max-w-2xl pt-10 mx-auto'>
              <form className='flex items-center gap-x-2' onClick={(e) => e.preventDefault()}>
                <div className='flex-1'>
                  <label htmlFor='email'></label>
                  <input
                    className='w-full px-8 py-4 transition border-2 border-transparent rounded-md hover:border-indigo-500 focus:border-indigo-500 focus:outline-none'
                    id='email'
                    type='text'
                    placeholder='Email Address'
                  />
                </div>
                <div>
                  <button
                    className='px-8 py-4 font-semibold text-white bg-indigo-500 border-2 border-indigo-500 rounded-md hover:border-indigo-700 hover:bg-indigo-700'
                    type='submit'
                  >
                    Get Started
                  </button>
                </div>
              </form>
              <div className='pt-3 text-sm text-center text-gray-700'>
                Join 86,000 subscribers. <strong>GDPR</strong> and <strong>CCPA</strong> compliant.
              </div>
            </div>
            <div className='relative z-10 flex items-center justify-center top-40'>
              <HeroIcon className='w-[600px] h-[600px] -mt-20' />
            </div>
          </div>
        </section>

        <section className='section bg-gray-50'>
          <div className='container'>
            <div className='grid grid-cols-3 pt-20'>
              <div className='flex flex-col items-center'>
                <div className='flex items-center justify-center w-20 h-20 text-3xl font-bold bg-green-300 rounded-md'>
                  1
                </div>
                <div className='pt-4 text-xl font-bold'>Choose Blocks</div>
                <div className='pt-1 font-medium text-center text-gray-500'>
                  Easily assemble a page using the <br /> pre-built content blocks.
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <div className='flex items-center justify-center w-20 h-20 text-3xl font-bold bg-yellow-300 rounded-md'>
                  2
                </div>
                <div className='pt-4 text-xl font-bold'>Customise</div>
                <div className='pt-1 font-medium text-center text-gray-500'>
                  A complete UI Kit makes rebranding <br /> the design simple.
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <div className='flex items-center justify-center w-20 h-20 text-3xl font-bold text-white bg-indigo-500 rounded-md'>
                  3
                </div>
                <div className='pt-4 text-xl font-bold'>Publish</div>
                <div className='pt-1 font-medium text-center text-gray-500'>
                  With Webflow it’s easy and instant <br /> to launch your site.
                </div>
              </div>
            </div>
            <div className='relative z-10 text-white bg-gray-900 p-14 rounded-xl top-40'>
              <div className='text-3xl font-bold text-center'>
                The world's leading technology <br /> companies use Devkit.
              </div>
              <ul className='flex items-center justify-center pt-10 gap-x-4'>
                <li>
                  <LogoUppercutIcon className='w-32' />
                </li>
                <li>
                  <LogoMonogramaIcon className='w-32' />
                </li>
                <li>
                  <LogoPetskyIcon className='w-32' />
                </li>
                <li>
                  <LogoBungalowIcon className='w-32' />
                </li>
                <li>
                  <LogoStackIcon className='w-32' />
                </li>
              </ul>

              <div className='pt-10 text-center'>
                <button
                  className='px-8 py-4 font-semibold text-gray-900 bg-yellow-300 border-2 border-yellow-300 rounded-md hover:border-yellow-400 hover:bg-yellow-400'
                  type='submit'
                >
                  Meet Our Customer
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-indigo-600 section'>
          <div className='grid grid-cols-2 pt-20 gap-x-8'>
            <div>
              <div className='relative w-[600px] h-[400px]'>
                <Image
                  className='rounded-r-xl'
                  src={Video01Image}
                  alt='video image'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
            <div className='flex flex-col justify-center text-white'>
              <div className='text-5xl font-bold'>
                We don't just <br /> talk the talk, <br /> we walk the walk.
              </div>
              <div className='pt-4 text-lg font-medium text-gray-100'>
                Let’s talk about some of the more important technical <br /> details on a video
                call.
              </div>
            </div>
          </div>
        </section>

        <section className='-mt-20 bg-indigo-600 section'>
          <div className='container'>
            <div className='grid grid-cols-2 text-white gap-x-8'>
              <div>
                <button className='px-3 py-1 text-sm font-bold text-gray-900 bg-yellow-300 rounded-full'>
                  Facet
                </button>
                <div className='pt-4 text-5xl font-bold'>
                  Build a site for your developer-first tech product.
                </div>
                <ul className='pt-6 text-lg font-medium text-gray-100 list-disc'>
                  <li>
                    Sed venenatis leo ullamcorper aliquet. Donec vivamus nisl, adipiscing risus
                    tortor.
                  </li>
                  <li>Bunc id tincidunt duis faucibus urna adipiscing.</li>
                  <li>
                    Volutpat, eu lectus tortor quisque sed malesuada. Sit eget pellentesque morbi.
                  </li>
                </ul>
              </div>
              <div className='relative w-[600px] h-[400px]'>
                <Image
                  className='rounded-xl'
                  src={Video02Image}
                  alt='video image'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
          </div>
        </section>

        <section className='section bg-gray-50'>
          <div className='max-w-2xl mx-auto text-center'>
            <button className='px-3 py-1 text-sm font-bold text-gray-900 bg-yellow-300 rounded-full'>
              Subtitle
            </button>
            <div className='pt-2 text-5xl font-bold'>
              People enjoy using Devkit to build lovely websites.
            </div>
            <div className='pt-4 text-lg text-gray-700'>
              An optional subheading to provide additional context.
            </div>
          </div>
          <div className='grid max-w-2xl grid-cols-1 pt-20 mx-auto gap-y-8'>
            <TestimonialCard
              avatar={Avatar01}
              content='“Couldn’t have done it without the help of the Devkit team.”'
              description='Jonathan Wilson, Bungalow'
            />
            <TestimonialCard
              avatar={Avatar02}
              content='“The Devkit team were there to help out at every step.”'
              description='Helen Thompson, Monograma'
            />
            <TestimonialCard
              avatar={Avatar03}
              content='“I found their developer support to be best-in-class.”'
              description='Robert Smith, Uppercut'
            />
          </div>
        </section>

        <section className='text-white bg-gray-900 section'>
          <div className='text-center '>
            <div className='text-5xl font-bold'>
              News and business insight from <br /> our expert team.
            </div>
            <div className='pt-6 text-lg text-gray-200'>
              An optional subheading to provide additional context.
            </div>
          </div>
          <div className='container grid grid-cols-2 pt-20 gap-x-8'>
            <BlogPostCard
              image={BlogPost01Image}
              tag='Business'
              tagColor='bg-yellow-300'
              date='March 27, 2020'
              title={`Tips to build meaningful business relationships`}
            />
            <BlogPostCard
              image={BlogPost02Image}
              tag='Growth'
              tagColor='bg-green-200'
              date='March 27, 2020'
              title='Introducing GrowthPod, A business podcast from Devkit'
            />
          </div>
        </section>

        <section className='text-white bg-gray-900 section'>
          <div className='container px-40'>
            <div className='flex justify-between gap-x-8'>
              <nav className='flex flex-col'>
                <a className='text-2xl font-bold' href='#'>
                  Tour
                </a>
                <a className='text-2xl font-bold ' href='#'>
                  Style Guide
                </a>
                <a className='text-2xl font-bold' href='#'>
                  Licenses
                </a>
                <a className='text-2xl font-bold' href='#'>
                  Support
                </a>
              </nav>
              <div className='flex gap-x-8'>
                <div>
                  <div className='font-bold'>Landing Pages</div>
                  <ul className='pt-2 text-sm text-gray-400'>
                    <li>Landing One</li>
                    <li>Landing Two</li>
                    <li>Landing Three</li>
                    <li>Landing Four</li>
                    <li>Landing Five</li>
                  </ul>
                </div>
                <div>
                  <div className='font-bold'>Inner Pages</div>
                  <ul className='pt-2 text-sm text-gray-400'>
                    <li>Company</li>
                    <li>Pricing</li>
                    <li>Account</li>
                    <li>Utility</li>
                  </ul>
                </div>
                <div>
                  <div className='font-bold'>CMS Pages</div>
                  <ul className='pt-2 text-sm text-gray-400'>
                    <li>Blog</li>
                    <li>Case Studies</li>
                    <li>Help Center</li>
                  </ul>
                </div>
                <div>
                  <div className='font-bold'>Template</div>
                  <ul className='pt-2 text-sm text-gray-400'>
                    <li>Getting Started</li>
                    <li>Style Guide</li>
                    <li>Licenses</li>
                    <li>Changelog</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-8 text-center text-white bg-gray-900'>
          <div className='text-sm'>
            Build with ❤ by{' '}
            <a className='font-bold' href='https://github.com/zfadhli'>
              zfadhli
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
