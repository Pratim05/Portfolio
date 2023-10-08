import React from 'react'
import Resume from '../../assets/Resume_Pratim.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={Resume} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA