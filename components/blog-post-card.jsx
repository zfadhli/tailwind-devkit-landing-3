import Image from 'next/image'

export default function BlogPostCard({ image, tag, date, title, tagColor }) {
  return (
    <div className='relative group'>
      <div className='relative w-[600px] h-[400px] rounded-xl'>
        <Image
          className='transition duration-500 transform rounded-xl group-hover:scale-110'
          src={image}
          alt='video image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='absolute bottom-0 z-10 p-8'>
        <div className='flex items-center gap-x-4'>
          <button
            className={`px-3 py-1 text-sm font-semibold text-gray-900 ${tagColor} rounded-md`}
          >
            {tag}
          </button>
          <span className='text-sm'>{tag}</span>
        </div>
        <div className='pt-2 text-xl font-semibold'>{title}</div>
      </div>
      <div className='absolute bottom-0 bg-gradient-to-t from-gray-900 to-transparent opacity-90 w-[600px] h-[70%] group-hover:h-full transition-[height] duration-500'></div>
    </div>
  )
}
