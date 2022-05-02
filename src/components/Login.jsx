import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [form, setForm] = useState({})
    const [user, setUser] = useState()
    const navigate = useNavigate();

    const handleChange = (elem) => {
        const {id, value} = elem.target;

        setForm({
            ...form,
            [id] : value
        })
    }

    const handleSubmit = async (elem) => {
        const res = await fetch("http://localhost:8080/users");

        const data = await res.json();

        data.map((ele) => {
            if(ele.username == form.username && ele.pass == form.pass) {
                setUser(ele);
                // console.log(user)
            }
        })

        console.log(user)

        if(user.role == "admin") {
            navigate("/orders")
        }
        else {
            navigate("/new_order")
        }

    }

  return (
    <div>
      <input
        className="username"
        id="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={handleChange}
      />
      <input
        className="password"
        id="pass"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button onClick={handleSubmit} className="submit">Login</button>
    </div>
  );
};