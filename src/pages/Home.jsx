import React, { useEffect, useState } from "react";

function Home({ firstName, lastName, email, role, userInfo }) {
  const [sortBy, setSortBy] = useState("paid");
  const [orderBy, setOrderBy] = useState(1);
  const [user, setUser] = useState({});

  useEffect(() => {
    for (var user of userInfo) {
      if (user.email === email) {
        setUser(user);
      }
    }
  }, []);

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
    sort(e.target.value, orderBy);
  };

  const handleOrderBy = (e) => {
    setOrderBy(parseInt(e.target.value));
    sort(sortBy, e.target.value);
  };

  const sort = (sort, order) => {
    if (sort === "paid") {
      userInfo.sort((a, b) => (a.paidCount > b.paidCount ? order : -1 * order));
    } else {
      userInfo.sort((a, b) =>
        a.attendanceCount - a.paidCount > b.attendanceCount - b.paidCount
          ? order
          : -1 * order
      );
    }
  };

  return (
    <>
      {role == "member" ? (
        <div>
          <h1> Welcome Member !</h1>
          <div>First Name: {firstName}</div>
          <div>Last Name: {lastName}</div>
          <div>Email: {email}</div>
          <div>Role: {role}</div>
          <div> You Have Visted the Club: {user.attendanceCount} Times</div>
          <div>
            You Have {user.attendanceCount - user.paidCount} Missed Payments
            {user.attendanceCount - user.paidCount > 0 && (
              <div>
                {" "}
                <h1>
                  BEWARE, missing more than one payment will result in a penalty
                  fee and possible exclusion from the group.
                </h1>
                <h1> THIS IS A REMINDER TO PAY UP !!!</h1>
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          <h1> Welcome Coach! </h1>
          <form>
            <div>
              Sort By:
              <label> Paid Count </label>
              <input
                type="radio"
                name="paid"
                id="paid"
                value={"paid"}
                checked={sortBy === "paid"}
                onChange={(e) => handleSortBy(e)}
              />
              <label> Missed Payment Counts</label>
              <input
                type="radio"
                name="missed"
                id="missed"
                value={"missed"}
                checked={sortBy === "missed"}
                onChange={(e) => handleSortBy(e)}
              />
            </div>
            <div>
              Ordering:
              <label> Ascending </label>
              <input
                type="radio"
                value={1}
                checked={orderBy === 1}
                onChange={(e) => handleOrderBy(e)}
              />
              <label> Descending </label>
              <input
                type="radio"
                value={-1}
                checked={orderBy === -1}
                onChange={(e) => handleOrderBy(e)}
              />
            </div>
          </form>
          <div>
            {userInfo
              .filter((user) => user.role == "member")
              .map((user) => {
                return (
                  <div>
                    <p>
                      First Name: {user.firstName} <br></br>
                      Last Name: {user.lastName} <br></br>
                      Phone: {user.phone} <br></br>
                      Address: {user.address} <br></br>
                      Paid Count: {user.paidCount} <br></br>
                      Current/Planned Attendance Count: {
                        user.attendanceCount
                      }{" "}
                      <br></br>
                    </p>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </>
  );
}

export default Home;
