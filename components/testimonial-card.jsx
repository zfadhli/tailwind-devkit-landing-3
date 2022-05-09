import Image from 'next/image'

export default function TestimonialCard({ avatar, content, description }) {
  console.log({ avatar })
  return (
    <>
      <div className='flex items-center justify-center p-20 bg-green-100 rounded-xl gap-x-8'>
        <div className='relative w-20 h-20'>
          <Image
            className='rounded-full'
            src={avatar}
            alt='video image'
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            blurDataURL={avatar}
          />
        </div>
        <div>
          <div className='text-lg font-semibold text-gray-700'>{content}</div>
          <div className='pt-2 text-sm text-gray-700'>{description}</div>
        </div>
      </div>
    </>
  )
}
