import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [{
        id: "u1",
        name: "Joseph Boadi",
        image: "https://orthostudio.ca/wp-content/uploads/2016/11/image-3.jpg",
        place: 3,
    }, ];
    return <UsersList items = { USERS }
    />;
};

export default Users;