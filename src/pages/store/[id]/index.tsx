import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useRouter} from 'next/router';
import Medicine from '../../../modules/medicine/components/MedicineScreen';

function index() {
  const router = useRouter();
  const {id} = router.query;
  const [medicine, setMedicine] = useState([]);

  useEffect(() => {
    const fetchMedicine = async () => {
      if (id) {
        const {data} = await axios.get(
          `http://localhost:5000/api/medicine/store/${id}`
        );
        setMedicine(data);
      }
    };
    fetchMedicine();
  }, [id]);

  console.log(medicine);
  console.log(id);

  return (
    <div>
      <Medicine medicineData={medicine} />
    </div>
  );
}

export default index;
