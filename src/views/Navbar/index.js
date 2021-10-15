import React from 'react';
// import Header from '../../components/section-components/Header';
import PrimaryButton from '../../components/widgets/Buttons/PrimaryButton';
import './style.navbar.css';
// import logo from "../../assets/logoIcon.png";
import home from "../../assets/homeIcon.svg";

export default function Navbar() {
    return (
      <div className="navbar-wrapper">
        <a href="/">
          <PrimaryButton startIcon="fab fa-twitter" />
        </a>
        <PrimaryButton imageIcon={home} value="Home"/>
        <PrimaryButton startIcon="fas fa-hashtag" value="Explore"/>
        <PrimaryButton startIcon="far fa-bell" value="Notifications"/>
        <PrimaryButton startIcon="far fa-envelope" value="Messages"/>
        <PrimaryButton startIcon="far fa-bookmark" value="Bookmarks"/>
        <PrimaryButton startIcon="far fa-bookmark" value="Lists"/>
        <PrimaryButton startIcon="far fa-user" value="Profile"/>
        <PrimaryButton startIcon="far fa-bookmark" value="More"/>
        <PrimaryButton value="Tweet"/>
      </div>
    );
}