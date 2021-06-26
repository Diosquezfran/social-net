import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '{APP_ID}';

const TagList = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`${BASE_URL}/tag`, { headers: { 'app-id': APP_ID } })
            .then(({ data }) => setData(data))
            .catch(console.error)
    }, []);
    console.log(data)
}
export default TagList
