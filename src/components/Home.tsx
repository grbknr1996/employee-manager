import React, { useEffect, useState } from "react";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../redux/sagaActions";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { FormikBag, useFormik } from "formik";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state: any) => state.employees.employees);
  const [edit, setEdit] = useState({ edit: false, id: null as any });
  const [editInfo, setEditInfo] = useState(employees);
  const initialValues = {
    id: "",
    name: "",
    designation: "",
    address: "",
  };

  const formik = useFormik({
    initialValues: initialValues,

    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_EMPLOYEES_SAGA });
  }, []);

  useEffect(() => {
    setInfo();
  }, [employees]);

  const setInfo = () => setEditInfo(employees);
  const handleEdit = (e: React.MouseEvent, index: number) => {
    console.log(index);
    setEdit({ edit: true, id: index });
  };

  const handleDelete = (e: React.MouseEvent, index: number) => {
    dispatch({ type: sagaActions.DELETE_EMPLOYEE_SAGA, id: index });
  };
  const toggleEdit = (e: React.FormEvent) => {
    console.log("edit toggle");
    setEdit({ edit: false, id: null as any });
    dispatch({ type: sagaActions.UPDATE_EMPLOYEE_SAGA });
  };

  const handleEditChange = (e: any, index: number) => {
    setEditInfo(
      employees.map((emp: any) =>
        emp.id === index ? (emp.name = e.target.value) : emp
      )
    );
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

        {editInfo.map((emp: any, index: number) =>
          edit.edit && edit.id === index ? (
            <>
              <form>
                <div className="table-row">
                  <div className="row-item" key={emp.id}>
                    {emp.id}
                  </div>
                  <input
                    className="row-item"
                    name="name"
                    defaultValue={emp.name}
                    onChange={(e) => handleEditChange(e, index)}
                  />
                  <input className="row-item" value={emp.designation} />
                  <input className="row-item" value={emp.address} />
                  <div className="row-item">
                    <button type="submit">
                      <MdDone
                        className="changeColor done"
                        onClick={(e) => toggleEdit(e)}
                      />
                    </button>
                  </div>
                </div>
              </form>
            </>
          ) : (
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
                  onClick={(e) => handleEdit(e, index)}
                />
                <AiOutlineDelete
                  className="changeColor delete"
                  onClick={(e) => handleDelete(e, emp.id)}
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
