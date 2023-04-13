import React, { useEffect } from "react";
import EquipmentBar from "../../bars/equipmentBar/EquipmentBar";
import data from "../../../data/data.json";

export default function BarsSection({ locations, setLocations }) {
  useEffect(() => {
    setLocations(data);
  }, [setLocations]);

  const id = window.location.pathname.split('/').pop();
  const filteredLocation = locations.filter((location) => location.id === id)

  return (
    <div className="barsSection">
      <div className="bars">
        <EquipmentBar
          location={filteredLocation[0]}
        />
      </div>
    </div>
  );
}
