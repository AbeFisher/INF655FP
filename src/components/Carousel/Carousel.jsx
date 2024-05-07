import React from 'react';
import { useState } from 'react';
import imgData from '../Carousel/ImageData';

const maxID = imgData.length-1;
let img1 = -1;
let img2 = -1;
let img3 = -1;

let picToChange = 1;

const Carousel = () => {
    //  get 3 different, random images from dataset
    img1 = Math.floor((Math.random() * maxID) + 1);

    while (img2 < 0 || img2 === img1) {
        img2 = Math.floor((Math.random() * maxID) + 1);
    }

    while (img3 < 0 || img3 === img1 || img3 === img2) {
        img3 = Math.floor((Math.random() * maxID) + 1);
    }

    const img_l = imgData.find((img) => img.id === img1);
    const img_m = imgData.find((img) => img.id === img2);
    const img_r = imgData.find((img) => img.id === img3);

    const [image1, setImage1] = useState(require(`../../Media/Images/${img_l.name}`));
    const [image2, setImage2] = useState(require(`../../Media/Images/${img_m.name}`));
    const [image3, setImage3] = useState(require(`../../Media/Images/${img_r.name}`));

    setTimeout(() => {
        //  Get new random pic
        const imgID = getRandomPic();
        const i = imgData.find((img) => img.id === imgID);
        const imgSrc = `../../Media/Images/${i.name}`;

        //  rotate which img element to change
        if (picToChange < 3) {picToChange += 1;}
        else {picToChange = 1;}
        switch (picToChange) {
            case 1:
                setImage1(imgSrc);
                break;
            case 2:
                setImage2(imgSrc); 
                break;
            case 3:
                setImage3(imgSrc);
                break;
        }
    }, 5000);

    return (
        <div className="bg-gray-900 w-full h-[300px] flex border-gray-200 border-t-2 border-b-2">
            <img src={require(`../../Media/Images/${img_l.name}`)} alt="image1" className="w-1/3 p-4"></img>
            <img src={require(`../../Media/Images/${img_m.name}`)} alt="image2" className="w-1/3 p-4"></img>
            <img src={require(`../../Media/Images/${img_r.name}`)} alt="image3" className="w-1/3 p-4"></img>
        </div>
    );

};

function getRandomPic() {
    let newImg = -1

    //  Get a random image that is not already displayed
    while (newImg < 0 || newImg === img1 || newImg === img2 || newImg === img3) {
        newImg = Math.floor((Math.random() * maxID) + 1);
    }

    return newImg;
}

export default Carousel
