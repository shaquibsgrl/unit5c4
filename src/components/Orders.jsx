import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../Redux/newOrders/action";

export const Orders = () => {
  //  Get all data when admin logs in and populate it
  // store it in redux

  const dispatch = useDispatch();

  const orders = useSelector((store) => store.order.order);

  useEffect(() => {
      getData();
  }, [])

const getData = () => {
    fetch("http://localhost:8080/orders")
    .then((res) => res.json())
    .then(data => {
        // console.log(data)
        dispatch(addOrder(data));
    })
}

  return (
    <div>
      <div>
        <div>
          <select className="controls" name="progress" id="progress">
            <option value="id">ID</option>
            <option value="status">Status</option>
            <option value="cost">Cost</option>
          </select>
        </div>
        <table className="orders">
          <thead>
            <tr>
              <th>ID</th>
              <th>Problem</th>
              <th>Client Name</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Change Status</th>
              <th>Accept</th>
            </tr>
          </thead>
          <tbody>
              {orders.map ((elem) => {

              
                return <tr className="orders-row">
              <td className="id">{elem.id}</td>
              <td className="problem">{elem.problem}</td>
              <td className="owner">{elem.owner_name}</td>
              <td className="status">{elem.status}</td>
              <td className="cost">{elem.status === "Not Accepted" ? "-" : elem.cost}</td>
              <td className="change-status">
                {/* Show select dropdown only if status is Not Accepted */}
                {elem.status === "Not Accepted" ? null :
                <select className="changeStatus" name="changeStatus">
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                    <option value="Not Accepted">Not Accepted</option>
                </select>
                }
              </td>
              <td className="accept">
                {/* Show this button only if status is Not Accepted */}
                {/* on change make request to update it in db, and show changed status in table */}
                {elem.status == "Not Accepted" ?  <button>Accept</button> : null}
              </td>
            </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};