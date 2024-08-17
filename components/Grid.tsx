import React from 'react'
import { BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id='about'>
        {[{ title: 'title1', description: 'Desc1', id:1}].map((item) => (
            <BentoGridItem
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
            />
         ))}
    </section>
  )
}

export default Grid