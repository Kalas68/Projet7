import React from 'react';

const BannerHome = () => {
    return (
            <div className="banner">
                <img src={require('../assets/bannerHome.png')} alt="" />
                <p className="banner_txt">Chez vous, partout et ailleurs</p>
            </div>
    );
};

export default BannerHome;