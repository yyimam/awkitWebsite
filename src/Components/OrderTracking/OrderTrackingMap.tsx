import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"

export const MyMapComponent = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCy01pkNrLkG7-nKtFL6zGiwidRxwok48Q&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `100%` }} />,
      mapElement: <div className="map-height-container"  />,
      isMakerShown : true
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={15}
    
      defaultCenter={{ lat: 24.921172, lng: 67.088431 }}
    >
      <Marker position={{ lat: 24.921172, lng: 67.088431 }} />
      <Marker position={{ lat: 24.920759, lng:  67.088959 }} />

    </GoogleMap>
  )