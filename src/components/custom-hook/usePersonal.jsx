import { useState } from "react";

const key = 'personal-info';
const defaultPersonalInfo = {
        name: 'Josephine Meyers',
        email: 'josephine.meyers@mail.co.uk',
        phone: '+123 456 789',
        address: 'London, UK',
      }

export default function usePersonalInfo() {
    const [info, setInfo] = useState(() => {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : defaultPersonalInfo;
    });

    function setPersonalInfo(newInfo) {
      setInfo(newInfo);
      localStorage.setItem(key, JSON.stringify(newInfo))
    }

      return [info, setPersonalInfo]
}