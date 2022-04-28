import React, { useEffect } from "react";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../redux/sagaActions";
import { Employee } from "../models/model";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state: any) => state.employees.employees);
  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_EMPLOYEES_SAGA });
  }, [dispatch]);
  console.log(employees);
  return (
    <div className="main-container">
      <div className="table-container">
        <div className="table-row heading">
          <div className="row-item">ID</div>
          <div className="row-item">NAME</div>
          <div className="row-item">DESIGNATION</div>
          <div className="row-item">ADDRESS</div>
        </div>

        {employees.map((emp: any) => (
          <div className="table-row">
            <div className="row-item" key={emp.id}>
              {emp.id}
            </div>
            <div className="row-item" key={emp.name}>
              {emp.name}
            </div>
            <div className="row-item" key={emp.designation}>
              {emp.designation}
            </div>
            <div className="row-item" key={emp.address}>
              {emp.address}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
