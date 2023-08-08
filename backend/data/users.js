import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin",
        email: "admin@gmail.com",
        password: bcrypt.hashSync("admin12345", 10),
        isAdmin: true
    },
    {
        name: "John Doe",
        email: "john@gmail.com",
        password: bcrypt.hashSync("12345", 10),
        isAdmin: false
    },
    {
        name: "Jane Doe",
        email: "jane@gmail.com",
        password: bcrypt.hashSync("12345", 10),
        isAdmin: true
    },
];

export default users;