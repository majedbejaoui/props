import React, { Component } from 'react';
import Profile from "./profile/Profile";
import PhotoProfil from "./PhotoProfil.jpg";
import propTyoes from "prop-types";
import './App.css';

const data = [
  {
    fullName: "majd",
    bio: "a",
    profession: "ing",
    PhotoProfil: PhotoProfil
  }, {
    fullName: "ala",
    bio: "a",
    profession: "dr",
    PhotoProfil: PhotoProfil
  }, {
    fullName: "walid",
    bio: "a",
    profession: "mec",
    PhotoProfil: PhotoProfil
  },
];

function App() {

  return (
    <div>
      {data.map((profile) => (
        <Profile
          fullName={profile.fullName}
          bio={profile.bio}
          profession={profile.profession}
          PhotoProfil={profile.PhotoProfil}
        />
      ))
      }

    </div>
    
  );
}
Profile.prototype ={
  fullName: propTyoes.string,
  bio: propTyoes.string,
  profession: propTyoes.string,
  PhotoProfil: propTyoes.string,

    };
export default App;
