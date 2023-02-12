import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card';

const Logements = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("logements.json")
        .then((res)=> setData(res.data));
    }, []);

    return (
       <div className="logements">
            {data.map((props, index) => (
                <Card key={index} props={props}/>
            ))}
        </div>
    );
};

export default Logements;