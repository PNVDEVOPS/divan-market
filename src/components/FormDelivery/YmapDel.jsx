import React from 'react'
import { YMaps, Map, Placemark, FullscreenControl, GeolocationControl  } from '@pbe/react-yandex-maps';

const Ymap = () => {
  return (
<YMaps>
    <div className='w-full items-center justify-center flex row'>
      <Map  className='text-[24px] my-5 font-semibold max-w-[100vw] h-[500px]' defaultState={{ center: [62.034427, 129.731280], zoom: 15,}}>
      <Placemark geometry={[62.064088, 129.714859]}/>
        </Map>
        <FullscreenControl />
        <GeolocationControl options={{ float: "left" }} />
    </div>
  </YMaps>
  )
}

export default Ymap;