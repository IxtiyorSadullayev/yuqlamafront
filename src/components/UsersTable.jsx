import React from "react";

const UsersTable = () => {
  return (
    <div className="card shadow-sm mt-4">
      <div className="card-body">
        <h5 className="card-title">Foydalanuvchilar ro‘yxati</h5>

        <table className="table table-bordered mt-3">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Ism</th>
              <th>Guruh</th>
              <th>Holat</th>
              <th>Vaqt</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Akmal Karimov</td>
              <td>1A</td>
              <td className="text-success">Keldi</td>
              <td>10:30</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Shahzoda Aliyeva</td>
              <td>1A</td>
              <td className="text-danger">Kelmagan</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
