import React, { useEffect, useRef } from "react";

function Treasury({ userInfo, recCenterExpenseInfo }) {
  let totalExpenseRef = useRef(0);

  useEffect(() => {
    totalExpenseRef.current = 0;

    for (const expense of recCenterExpenseInfo) {
      totalExpenseRef.current = totalExpenseRef.current + expense.amount;
    }
    console.log(totalExpenseRef.current);
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

      <table style={{ margin: "auto" }}>
        <tbody>
          <tr>
            <th> Expense Type</th> <th> Amount</th>
          </tr>

          {recCenterExpenseInfo.map((expense, i) => {
            return (
              <tr key={i}>
                <td>{expense.type}</td>
                <td>${expense.amount}</td>
              </tr>
            );
          })}
          <tr>
            <td style={{ borderWidth: "2px" }}> Total Expenses: </td>
            <th style={{ borderWidth: "2px" }}>${totalExpenseRef.current}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Treasury;
