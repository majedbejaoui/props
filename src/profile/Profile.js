import React, { Children } from 'react';
import './profile.css';


const Profile = ({ fullName, bio, profession,PhotoProfil,Children }) => {
    return (
        <div>
            <span> {fullName}</span> <br />
            <span> {bio}</span>  <br />
            <span> {profession}</span>  <br />
            <img src={PhotoProfil} alt="PhotoProfil" />

{Children}
        </div>
    );
};

export default Profile;