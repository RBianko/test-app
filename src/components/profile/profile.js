import React from 'react'
import "./profile.css"
import { selectUser } from "../redux/reducers/userSlice"
import { useSelector } from "react-redux"

const Profile = () => {
    const user = useSelector(selectUser);

    return (
        <div className="profile__content">
            <div className="profile__content__header">
                <div className="profile__content__header--title">
                    <h2>Profile Page</h2>
                </div>
            </div>
            <div className="profile__content__list">
                <div className="item__image personal">
                    <img src="https://conservation-innovations.org/wp-content/uploads/2019/09/Dummy-Person.png" alt="profile" />
                </div>
                <div className="profile__content__list--profile">
                    <ul className="full__info">
                        <div className="title">Your  Info</div>
                        <li>Name: <span className="highlight">{user.user.username}</span></li>
                        <li>Surname: </li>
                        <li>Date of Birth: </li>
                        <li>Phone: </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile