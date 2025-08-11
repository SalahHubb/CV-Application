
import { useState } from "react";

const key = 'experience-info';
const defaultExperienceInfo = {
        company: 'Umbrella Inc.',
        position: 'UX & UI Designer',
        startDate: '08/2020',
        endDate: 'present',
        location: 'New York City, US',
        description: 'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android'
      }

export default function useExperienceInfo() {
    const [info, setInfo] = useState(() => {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : defaultExperienceInfo;
    });

    function setExperienceInfo(newInfo) {
      setInfo(newInfo);
      localStorage.setItem(key, JSON.stringify(newInfo))
    }

      return [info, setExperienceInfo];
}