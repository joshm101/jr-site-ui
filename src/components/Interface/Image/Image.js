import React from 'react'

const Image = ({ src, alt, className }) => {
  const styles = {
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }

  return (
    <div
      src={src}
      title={alt}
      className={className}
      style={styles}
    />
  )
}

export default Image
