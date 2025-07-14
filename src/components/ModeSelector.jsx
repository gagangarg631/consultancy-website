import React, { useState } from "react";
import { Video, MapPin } from "lucide-react";

const SessionModeSelector = ({ onSelect, sessionMode }) => {

  const options = [
    {
      value: "online",
      label: "Online Session",
      Icon: Video,
      description: "Join via video call",
    },
    {
      value: "clinic",
      label: "Clinic Visit",
      Icon: MapPin,
      description: "Visit our health center",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {options.map(({ value, label, Icon, description }) => {
        const selected = sessionMode === value;

        return (
          <label
            key={value}
            className={`cursor-pointer border rounded-xl p-2 flex items-start gap-4 transition-all
              ${selected ? "border-blue-500 bg-blue-50 shadow-md" : "border-gray-300 hover:bg-gray-50"}`}
          >
            <input
              type="radio"
              name="sessionMode"
              value={value}
              checked={selected}
              onChange={() => onSelect(value)}
              className="sr-only"
            />
            <Icon className={`mt-1 ${selected ? "text-blue-600" : "text-gray-500"}`} size={24} />
            <div>
              <h4 className={`text-md font-medium ${selected ? "text-blue-700" : "text-gray-800"}`}>{label}</h4>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default SessionModeSelector;
