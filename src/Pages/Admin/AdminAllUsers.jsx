import React from "react";
import { AdminTable } from "../../components/Admin";
import { useUserContext } from "../../context/user_context";

const AdminAllUsers = () => {
  const { allUsers } = useUserContext();

  return (
    <div className="p-5 w-[95%] ma-uto">
      <div className="div bg-white text-center p-5 font-bold w-[90%] text-2xl">
        <h1>See All Users</h1>
      </div>
      <AdminTable data={{ users: allUsers }} />
    </div>
  );
};

export default AdminAllUsers;
