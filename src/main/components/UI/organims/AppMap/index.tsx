import * as React from "react";
import "./index.css";

declare global {
    interface Window {
        google: any;
    }
}
function initMap(lat: string, long: string): void {
    // The location of Uluru
    const uluru = { lat: parseFloat(lat), lng: parseFloat(long) };
    // The map, centered at Uluru
    const map = new window.google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
            zoom: 4,
            center: uluru,
        }
    );

    // The marker, positioned at Uluru
    new window.google.maps.Marker({
        position: uluru,
        map: map,
    });
}

interface DisplayMapDef {
    latitude: string;
    longitude: string;
}

export const DisplayMap = (props: DisplayMapDef) => {
    React.useEffect(() => {
        initMap(props.latitude, props.longitude);
    }, [props.latitude]);
    return (
        <section className="dispmap">
            <div className="map" id="map"></div>
        </section>
    );
};
