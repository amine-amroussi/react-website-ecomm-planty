import React from "react";
import moment from "moment";


const AdminTable = ({ data = {} }) => {
  const { users } = data;

  return (
    <table className="border-collapse border border-slate-500 mt-5 text-center drop-shadow-md">
      <thead className="bg-white p-3" >
        <tr className="p-3">
          <th className="border border-slate-600 " >user ID</th>
          <th className="border border-slate-600" >Name</th>
          <th className="border border-slate-600" >E-mail</th>
          <th className="border border-slate-600" >Joined At</th>
        </tr>
      </thead>
      <tbody className="bg-white" >
        {users?.map((user) => (
          <tr key={user._id} >
            <td className="border border-slate-700 bg-white" >{user._id}</td>
            <td className="border border-slate-700" >{user.name}</td>
            <td className="border border-slate-700" >{user.email}</td>
            <td className="border border-slate-700" >{moment(user.createdAt).format('DD-MM-YYYY')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminTable;
