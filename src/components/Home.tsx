import React, { useEffect } from "react";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../redux/sagaActions";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state: any) => state.employees.employees);

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_EMPLOYEES_SAGA });
  }, []);

  const handleEdit = (e: React.MouseEvent, index: number) => {};

  const handleDelete = (e: React.MouseEvent, index: number) => {
    dispatch({ type: sagaActions.DELETE_EMPLOYEE_SAGA, id: index });
  };

  return (
    <div className="main-container">
      <div className="table-container">
        <div className="table-row heading">
          <div className="row-item">ID</div>
          <div className="row-item">NAME</div>
          <div className="row-item">DESIGNATION</div>
          <div className="row-item">ADDRESS</div>
          <div className="row-item">ACTIONS</div>
        </div>

        {employees.map((emp: any, index: number) => (
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
            <div className="row-item">
              <AiOutlineEdit
                className="changeColor edit"
                onClick={(e) => handleEdit(e, emp.id)}
              />
              <AiOutlineDelete
                className="changeColor delete"
                onClick={(e) => handleDelete(e, emp.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
