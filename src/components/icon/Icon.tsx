import React from 'react';
import iconsSprite from "assets/images/icons-sprite.svg"

type IconPropsType = {
    IconId:string
    width?:string
    height?:string
    viewBox?:string
}

export const Icon:React.FC<IconPropsType> = ({IconId,width,height,viewBox,...props}) => {
    return (
        <svg width={width? width :  "50"} height={height ? height :"50"} viewBox={viewBox ? viewBox : "0 0 50 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${IconId}`}/>
            </svg>
    );
};

