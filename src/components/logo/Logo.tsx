import React from 'react';
import {Icon} from "components/icon/Icon";
import {animateScroll} from "react-scroll";

export const Logo :React.FC= () => {
    return (
        <a onClick={()=>animateScroll.scrollToTop()}><Icon IconId={"css"} /></a>
    );
};

