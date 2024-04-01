import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Treasury from "./pages/Treasury";
import Announce from "./pages/Announce";
import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [announcements, setAnnouncements] = useState([]);

  const userInfo = [
    {
      email: "fakeemail@gmail.com",
      password: "abcde",
      firstName: "FakeName",
      lastName: "FakeSurname",
      phone: "8571984955",
      address: "Bloor Street 909",
      role: "member",
      attendanceCount: 3,
      paidCount: 3,
    },
    {
      email: "jane.doe@gmail.com",
      password: "54321",
      firstName: "Jane",
      lastName: "Doe",
      phone: "8471974927",
      address: "Bay Street 420",
      role: "member",
      attendanceCount: 5,
      paidCount: 1,
    },
    {
      email: "justin@gmail.com",
      password: "54321",
      firstName: "Justin",
      lastName: "Bieber",
      phone: "1234567890",
      address: "MadeUPStreet 123",
      role: "member",
      attendanceCount: 7,
      paidCount: 5,
    },
    {
      email: "vmisic@torontomu.ca",
      password: "54321",
      firstName: "Vojislav",
      lastName: "Misic",
      phone: "3846401475",
      address: "Victoria Street 69",
      role: "member",
      attendanceCount: 12,
      paidCount: 0,
    },
    {
      email: "another@gmail.com",
      password: "12345",
      firstName: "John",
      lastName: "Smith",
      role: "coach",
    },
    {
      email: "rec.treasury@gmail.com",
      password: "123456",
      firstName: "Mr. Treasurer",
      lastName: "Smith",
      role: "treasurer",
    },
  ];

  const recCenterExpenseInfo = [
    { type: "coachExpense", status: "paid", amount: 3 },
    { type: "coachExpense", status: "paid", amount: 3 },
    { type: "coachExpense", status: "unpaid", amount: 3 },
    { type: "coachExpense", status: "unpaid", amount: 3 },
    { type: "hallExpense", status: "paid", amount: 2 },
    { type: "hallExpense", status: "paid", amount: 2 },
    { type: "hallExpense", status: "unpaid", amount: 2 },
    { type: "miscellaneousExpense", status: "paid", amount: 4 },
    { type: "miscellaneousExpense", status: "paid", amount: 7 },
  ];

  let announcementInfo = [
    {
      title: "Practice Reminder",
      author: "John Smith",
      datetime: "3/18/24 @ 3:00pm",
      message:
        "I hope this message finds you well. This is a friendly reminder from Coach John  regarding our upcoming practice session on: 3/24/24 @ 10:00am. Please ensure your availability and readiness for the scheduled practice session. Let's come together with enthusiasm and focus, ready to make the most of our time together. If there are any concerns or questions regarding the practice, feel free to reach out to me directly.",
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route
            path="login"
            element={
              <Login
                setFirstName={setFirstName}
                setLastName={setLastName}
                setEmail={setEmail}
                setRole={setRole}
                userInfo={userInfo}
              />
            }
          />
          <Route
            path="register"
            element={
              <Register
                setFirstName={setFirstName}
                setLastName={setLastName}
                setEmail={setEmail}
                setRole={setRole}
              />
            }
          />
          <Route
            path="home"
            element={
              <Home
                firstName={firstName}
                lastName={lastName}
                email={email}
                role={role}
                userInfo={userInfo}
                announcements={announcementInfo}
              />
            }
          />
          <Route
            path="treasurer"
            element={
              <Treasury
                userInfo={userInfo}
                recCenterExpenseInfo={recCenterExpenseInfo}
              />
            }
          />
          <Route
            path="announce"
            element={
              <Announce
                firstName={firstName}
                lastName={lastName}
                email={email}
                role={role}
                userInfo={userInfo}
                announcements={announcements}
                setAnnouncements={setAnnouncements}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
