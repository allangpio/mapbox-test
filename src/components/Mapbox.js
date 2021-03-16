import React, { useRef, useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
//import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import Geocoder from 'react-mapbox-gl-geocoder';

const mapboxApiKey = 'pk.eyJ1IjoiZ3Bpb2FsbGFuIiwiYSI6ImNrbWNkbHcxdDFvOTQyd3A5ejV6c3dtdDUifQ.-lHwEqgzETYh0DybVDjFOQ';

const mapStyle = {
    width: '100%',
    height: 600
}

const Mapbox = () => {
    const mapContainer = useRef();
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    const [state, setState] = useState({
        viewport: {
            latitude: 45.50884,
            longitude: -73.58781,
            zoom: 15
        }
    })

    const onSelected = (viewport, item) => {
        setState({ viewport });
        console.log(state, 'view')
        console.log(item, 'item')
    }

    const { viewport } = state;

    // useEffect(() => {
    //     const map = new mapboxgl.Map({
    //         container: mapContainer.current,
    //         style: 'mapbox://styles/mapbox/streets-v11',
    //         center: [lng, lat],
    //         zoom: zoom
    //     });
    //     return () => map.remove();
    // }, []);

    return (
        <div>
            <div>
                <Geocoder
                    mapboxApiAccessToken={mapboxApiKey}
                    onSelected={onSelected}
                    viewport={viewport}
                    hideOnSelect={true}
                    value=""
                //queryParams={params}
                />

            </div>
            <ReactMapGL
                mapboxApiAccessToken={mapboxApiKey}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                {...viewport}
                {...mapStyle}
                onViewportChange={(viewport) => setState({ viewport })}
            >
            </ReactMapGL>
        </div>
    )
}

export default Mapbox;