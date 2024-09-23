import React from 'react'

 const University = ({universityTitle, courses}) => {
  return (
    <div className='flex flex-col gap-2'>
            <h2 className='font-mono font-bold text-2xl'>{universityTitle}</h2>
            <ul className='flex flex-col list-disc list-inside gap-1'>
                {courses && (
                  <>
                    {courses.map((course, index) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: course }} />
                    ))}
                  </>
                )}
            </ul>
        </div>
  )
}

export default University