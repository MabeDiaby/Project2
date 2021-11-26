import React from 'react';
import {useState} from 'react';


function ClothingShow() {

    return (
        <>
        <div>
            <img src ="https://i.pinimg.com/originals/6c/e3/f5/6ce3f5285a74ae7b2069ff0d8865a3d6.jpg" alt="" />
            <h3 className="description">Dress</h3>
            <h3 className="cost">$30</h3>
        </div>
        <div>
            <img src ="https://i.pinimg.com/originals/6c/e3/f5/6ce3f5285a74ae7b2069ff0d8865a3d6.jpg" alt="" />
            <h3 className="description">Dress 1</h3>
            <h3 className="cost">$30</h3>
        </div>
        <div>
            <img src ="https://i.pinimg.com/originals/6c/e3/f5/6ce3f5285a74ae7b2069ff0d8865a3d6.jpg" alt="" />
            <h3 className="description">Dress 3</h3>
            <h3 className="cost">$30</h3>
        </div>
        </>
    );
}

export default ClothingShow;