import { createLazyFileRoute } from "@tanstack/react-router";
import { useRef, useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import regions from "../assets/ph.json";

export const Route = createLazyFileRoute("/overall")({
	component: Overall
});

function Overall() {
	const mapRef = useRef<HTMLDivElement>(null);
	const [map, setMap] = useState<L.Map>();

	useEffect(() => {
		if (mapRef.current) {
			setMap(L.map(mapRef.current).setView([12.8797, 121.7740], 7));
		}
	}, [mapRef]);

	useEffect(() => {
		if (map) {
			/* L.tileLayer("https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}@2x.png?key=k1fBNFUspalESEIvUI0c", {
				attribution: "<a href=\"https://www.maptiler.com/copyright/\" target=\"_blank\">&copy; MapTiler</a> <a href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\">&copy; OpenStreetMap contributors</a>",
			}).setOpacity(0.3).addTo(map); */

			L.geoJSON(regions as any, {
				style: feature => {
					let obj: Record<any, any> = {
						fillColor: "#000000",
						color: "#000000"
					}

					switch (feature!.properties.name) {
						case "National Capital Region":
							return {
								...obj,
								fillOpacity: 0.3696466927,
								opacity: 0.3696466927
							};

						case "Ilocos":
							return {
								...obj,
								fillOpacity: 0.05598916713,
								opacity: 0.05598916713
							};

						case "Cagayan Valley":
							return {
								...obj,
								fillOpacity: 0.03617688465,
								opacity: 0.03617688465
							};

						case "Central Luzon":
							return {
								...obj,
								fillOpacity: 0.08611680767,
								opacity: 0.08611680767
							};

						case "Calabarzon":
							return {
								...obj,
								fillOpacity: 0.09004668123,
								opacity: 0.09004668123
							};

						case "Mimaropa":
							return {
								...obj,
								fillOpacity: 0.01385696397,
								opacity: 0.01385696397,
							};

						case "Bicol":
							return {
								...obj,
								fillOpacity: 0.02833091364,
								opacity: 0.02833091364
							};

						case "Western Visayas":
							return {
								...obj,
								fillOpacity: 0.03225648138,
								opacity: 0.03225648138
							};

						case "Central Visayas":
							return {
								...obj,
								fillOpacity: 0.06401552657,
								opacity: 0.06401552657
							}

						case "Eastern Visayas":
							return {
								...obj,
								fillOpacity: 0.01772423716,
								opacity: 0.01772423716
							}

						case "Zamboanga Peninsula":
							return {
								...obj,
								fillOpacity: 0.03765249133,
								opacity: 0.03765249133
							}

						case "Northern Mindanao":
							return {
								...obj,
								fillOpacity: 0.03447757079,
								opacity: 0.03447757079
							}

						case "Davao":
							return {
								...obj,
								fillOpacity: 0.05201965614,
								opacity: 0.05201965614
							}

						case "Soccsksargen":
							return {
								...obj,
								fillOpacity: 0.04873388409,
								opacity: 0.04873388409
							}

						case "Cordillera Administrative Region":
							return {
								...obj,
								fillOpacity: 0.01146840833,
								opacity: 0.01146840833
							}

						case "Caraga":
							return {
								...obj,
								fillOpacity: 0.0214876332,
								opacity: 0.0214876332
							}

						default:
							return {
								...obj,
								opacity: .2,
								fillOpacity: .2,
								fillColor: "#0000FF",
								color: "#0000FF"
							}
					}
				}
			}).bindPopup((layer) => (layer as any).feature.properties.name).addTo(map);
		}
	}, [map]);

	return <div ref={mapRef} style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}></div>
}
