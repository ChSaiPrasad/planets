import Slider from 'react-slick'


import './index.css'

const PlanetItem = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <h1>PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(each => (
          <div>
            <img src={each.imageUrl} alt={`planet ${each.name}`} />
            <h1>{each.name}</h1>
            <p>{each.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PlanetItem
