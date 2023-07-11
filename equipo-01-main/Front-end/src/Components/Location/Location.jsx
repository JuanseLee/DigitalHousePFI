import React from "react";

import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = (props) => {
  const mapURL = "https://maps.googleapis.com/maps/api/js?v=3.exp&key=YOUR_API_KEY";

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -34.61315, lng:-58.37723 }}
    />
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

class Location extends React.Component {
  render() {
    const mapURL =
      "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyB0P0fY110vQvQFD2M51h51rwv1LdXhYG8";

    return (
      <div>
        <WrappedMap
          googleMapURL={mapURL}
          containerElement={<div style={{ height: "400px" }} />}
          mapElement={<div style={{ height: "100%" }} />}
          loadingElement={<p>Cargando</p>}
        />
      </div>
    );
  }
}

export default Location;