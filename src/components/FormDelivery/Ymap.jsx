import React from 'react'
import { YMaps, Map, Placemark, FullscreenControl, GeolocationControl  } from '@pbe/react-yandex-maps';

const Ymap = () => {
  return (
<YMaps>
    <div className='w-full items-center justify-center flex row'>
      <Map  className='text-[24px] gap-5 my-5 font-semibold max-w-[100vw] h-[500px]' defaultState={{ center: [62.034427, 129.731280], zoom: 11,}}>
      <Placemark geometry={[62.064088, 129.714859]}/>
      <Placemark geometry={[62.005122, 129.716206]}></Placemark>
        </Map>
        <FullscreenControl />
        <GeolocationControl options={{ float: "left" }} />
    </div>
  </YMaps>
  )
}

export default Ymap;