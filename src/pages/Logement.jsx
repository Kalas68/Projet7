import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import starFull from "../assets/starFull.svg";
import starEmpty from "../assets/starEmpty.svg";
import Header from '../common/Header';
import Footer from '../common/Footer';
import Caroussel from '../components/Caroussel';
import Collapse from '../components/Collapse';
import NotFound from './NotFound';

const Logement = () => {
        const {id} = useParams('id');
        const [data, setData] = useState([])
        const [title, setTitle] = useState("");
        const [location, setLocation] = useState("");
        const [picturesArray, setPicturesArray] = useState([]);
        const [clickCount, setClickCount] = useState(0);
        const [hostName, setHostName] = useState("");
        const [hostImg, setHostImg] = useState("");
        const [tags, setTags] = useState([]);
        const [rating, setRating] = useState(0);
        const [description, setDescription] = useState("");
        const [equipements, setEquipements] = useState([]);
        const [isIdInUrl, setIsIdInUrl] = useState(false);
        const stars = [1, 2, 3, 4, 5];
        useEffect(() => {
            axios.get("logements.json")
            .then((res)=> setData(res.data));
            for (let i = 0; i < data.length; i++) {
                if ({id}.id === data[i].id) {
                  setPicturesArray(data[i].pictures);
                  setTitle(data[i].title);
                  setLocation(data[i].location);
                  setRating(data[i].rating);
                  setHostName(data[i].host.name);
                  setHostImg(data[i].host.picture);
                  setTags(data[i].tags);
                  setDescription(data[i].description);
                  setEquipements(data[i].equipments);
                    return setIsIdInUrl(true);
                } else {
                    setIsIdInUrl(false);
                }
              }
        }, [data, id]);

        function collapseContentArray() {
            let collapseArray = [description];
            collapseArray.push(equipements);
            return collapseArray;
          }

        for (let i=0; i<data.length; i++){
                return(
                    <>
                     {isIdInUrl ? (
                    <div>
                        <Header/>
                        <Caroussel
                            clickCount={clickCount} 
                            picturesArray={picturesArray}
                            setClickCount={setClickCount} 
                        />
                        <div className="infos">
                            <div className="colonne1">
                                <h2>{title}</h2>
                                <span>{location}</span>
                                <div className="tags">
                                    {tags.map((item, index)=>
                                    <span key={index} className='tag'>{item}</span>)}
                                </div>
                            </div>
                            <div className="colonne2">
                                <div className="host">
                                    <span className='hostName'>{hostName}</span>
                                    <img src={hostImg} className='hostPicture' alt={hostName}></img>
                                </div>
                                <div className="stars">
                                {stars.map((rangeElem, index) =>
                                    rating >= rangeElem ? (
                                    <li key={rangeElem + index}>
                                        <img src={starFull} alt="star full" />
                                    </li>
                                    ) : (
                                    <li key={rangeElem + index}>
                                        <img src={starEmpty} alt="star empty" />
                                    </li>
                                    )
                                )}
                                </div>
                            </div>
                        </div>
                        <div className="descriptionEquipements">
                        {collapseContentArray().map((element, index) => (
                            <Collapse
                                key={element + index}
                                header={
                                    typeof element === "string" ? "Description" : "Equipements"
                                }
                                content={element}
                                addClass={null}
                            />
                            ))}
                        </div> 
                        <Footer />      
                    </div>
                    ) : (
                        <NotFound/>
                      )}
                </> 
                )

        }
};

export default Logement;