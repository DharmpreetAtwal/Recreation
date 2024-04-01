import React, { useEffect, useRef } from "react";

function Treasury({ userInfo, recCenterExpenseInfo }) {
  let totalExpenseRef = useRef(0);
  let totalUnpaidExpenseRef = useRef(0);

  useEffect(() => {
    totalExpenseRef.current = 0;
    totalUnpaidExpenseRef.current = 0;

    for (const expense of recCenterExpenseInfo) {
      if (expense.status === "paid") {
        totalExpenseRef.current = totalExpenseRef.current + expense.amount;
      } else {
        totalUnpaidExpenseRef.current =
          totalUnpaidExpenseRef.current + expense.amount;
      }
    }
  }, []);

  return (
    <>
      <h1> Welcome to the Treasury! </h1>
      <div>
        <h2> Income Statement: </h2>
        <table style={{ margin: "auto" }}>
          <tbody>
            <tr>
              <th> Revenue Type </th>
              <th> Amount </th>
            </tr>
            {userInfo.map((user) => {
              return (
                <tr key={user.email}>
                  <td>Members Payment</td>
                  <td> $12 </td>
                </tr>
              );
            })}
            <tr style={{ borderWidth: "2px" }}>
              <td style={{ borderWidth: "2px" }}>Total Revenue:</td>
              <th>${userInfo.length * 12}</th>
            </tr>
          </tbody>
        </table>
      </div>
      <br></br>
      <table style={{ margin: "auto" }}>
        <tbody>
          <tr>
            <th> Expense Type</th> <th> Amount</th>
          </tr>

          {recCenterExpenseInfo.map((expense, i) => {
            if (expense.status === "paid") {
              return (
                <tr key={i}>
                  <td>{expense.type}</td>
                  <td>${expense.amount}</td>
                </tr>
              );
            }
          })}
          <tr>
            <td style={{ borderWidth: "2px" }}> Total Expenses: </td>
            <th style={{ borderWidth: "2px" }}>${totalExpenseRef.current}</th>
          </tr>
        </tbody>
      </table>
      <br></br>

      <table style={{ margin: "auto" }}>
        <tbody>
          <tr>
            <th style={{ borderWidth: "2px" }}>Unpaid Expense Type</th>{" "}
            <th style={{ borderWidth: "2px" }}> Amount </th>
          </tr>

          {recCenterExpenseInfo.map((expense, i) => {
            if (expense.status === "unpaid") {
              return (
                <tr key={i}>
                  <td>{expense.type}</td>
                  <td> ${expense.amount}</td>
                </tr>
              );
            }
          })}

          <tr>
            <td style={{ borderWidth: "2px" }}> Total Unpaid</td>
            <td style={{ borderWidth: "2px" }}>
              ${totalUnpaidExpenseRef.current}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Treasury;
