import React from 'react'
import './cars.scss'
import { useGetCarsQuery } from '../../context/api/carApi'
import { Link } from 'react-router-dom'
import Loading from '../../components/loading/Loading'

const Cars = () => {
  let {data} = useGetCarsQuery({limit:4})
  if (!data) return <Loading />;

  return (
    <div className='cars container'>
      {
        data?.products?.map((car) => (
          <Link to={`/car/${car.id}`} key={car.id} className="car">
            <img src={car.thumbnail} alt="" />
            <div className="car__info">
              <h3>{car.title}</h3>
              <p>{car.description}</p>
            </div>
          </Link>
        ))  
      }
    </div>
  )
}

export default Cars