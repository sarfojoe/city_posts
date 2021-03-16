import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [{
        id: "u1",
        name: "Joseph Boadi",
        image: "https://unsplash.com/photos/OD9EOzfSOh0",
        place: 3,
    }, ];
    return <UsersList items = { USERS }
    />;
};

export default Users;