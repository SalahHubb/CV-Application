
import { useState } from "react";

const key = 'education-info';

const defaultEducationInfo = {
        eduLevel: 'London City University',
        field: 'Bachelors in Economics',
        startDate: '08/2020',
        endDate: 'present',
        location: 'New York City, US'
      }

export default function useEducationInfo() {
    const [info, setInfo] = useState(() => {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : defaultEducationInfo;
    });

    function setEducationInfo(newInfo) {
      setInfo(newInfo);
      localStorage.setItem(key, JSON.stringify(newInfo))
    }

      return [info, setEducationInfo];
}