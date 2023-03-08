

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return <PlanetItem planetsList={planetsList} />
}

export default PlanetsSlider
