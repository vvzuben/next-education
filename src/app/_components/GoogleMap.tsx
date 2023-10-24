'use client'
import React, { useMemo } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { ACF } from '@app/_wordpress/Types';

export default function Map(props: ACF.Type.GoogleMap.Array) {
  const center = useMemo(() => {
    return {
      lat: props.lat,
      lng: props.lng,
      zoom: 5
    };
  }, [props.lat, props.lng]);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  })

  const [map, setMap] = React.useState<google.maps.Map | null>(null)

  const onLoad = React.useCallback((map: google.maps.Map) => {
    setMap(map);

    const marker = new google.maps.Marker({
      position: center,
      map,
      title: props.address
    });

    // marker.setIcon({
    //   url: '/png/marker.png',
    //   scaledSize: new google.maps.Size(30, 40),
    //   origin: new google.maps.Point(0, 0),
    //   anchor: new google.maps.Point(0, 0)
    // })

  }, [props.address, center, props.zoom]);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={
        {
          width: '100%',
          height: '100%'
        }
      }
      zoom={props.zoom}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        disableDefaultUI: true,
        zoomControl: true,
      }}
    >
    </GoogleMap>
  ) : <Skeleton count={1} height="100%" width="100%" />

}
