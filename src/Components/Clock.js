import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Alarm from "../assets/alarm.wav";

const MAXAMOUNT = 60;
const MINAMOUNT = 1;

export default function Clock() {
  const [breakAmount, setBreakAmount] = useState(5);
  const [sessionAmount, setSessionAmount] = useState(25);
  const [breakLength, setBreakLength] = useState(300);
  const [sessionLength, setSessionLength] = useState(1500);
  const [running, setRunning] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const displayTime = {
    minutes: !onBreak
      ? Math.floor(sessionLength / 60) < 10
        ? "0" + Math.floor(sessionLength / 60)
        : Math.floor(sessionLength / 60)
      : Math.floor(breakLength / 60) < 10
      ? "0" + Math.floor(breakLength / 60)
      : Math.floor(breakLength / 60),
    seconds: !onBreak
      ? Math.floor((sessionLength % 3600) % 60) < 10
        ? "0" + Math.floor((sessionLength % 3600) % 60)
        : Math.floor((sessionLength % 3600) % 60)
      : Math.floor((breakLength % 3600) % 60) < 10
      ? "0" + Math.floor((breakLength % 3600) % 60)
      : Math.floor((breakLength % 3600) % 60),
  };

  useEffect(() => {
    if (running && !onBreak) {
      const intervalId = setInterval(() => {
        if (sessionLength === 0) {
          document.getElementById("beep").play();
          setOnBreak(true);
          setSessionLength(sessionAmount * 60);
        }
        setSessionLength((prevSessionLength) => prevSessionLength - 1);
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [running, onBreak, sessionAmount, sessionLength]);

  useEffect(() => {
    if (running && onBreak) {
      const intervalId = setInterval(() => {
        if (breakLength === 0) {
          document.getElementById("beep").play();
          setOnBreak(false);
          setBreakLength(breakAmount * 60);
        }
        setBreakLength((prevBreakLength) => prevBreakLength - 1);
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [running, onBreak, breakAmount, breakLength]);

  function decrement(value) {
    if (value === "B") {
      if (breakAmount > MINAMOUNT) {
        setBreakAmount((prevBreakAmount) => prevBreakAmount - 1);
        setBreakLength((prevBreakLength) => prevBreakLength - 60);
      }
    }
    if (value === "S") {
      if (sessionAmount > MINAMOUNT) {
        setSessionAmount((prevSessionAmount) => prevSessionAmount - 1);
        setSessionLength((prevSessionLength) => prevSessionLength - 60);
      }
    }
  }

  function increment(value) {
    if (value === "B") {
      if (breakAmount < MAXAMOUNT) {
        setBreakAmount((prevBreakAmount) => prevBreakAmount + 1);
        setBreakLength((prevBreakLength) => prevBreakLength + 60);
      }
    }
    if (value === "S") {
      if (sessionAmount < MAXAMOUNT) {
        setSessionAmount((prevSessionAmount) => prevSessionAmount + 1);
        setSessionLength((prevSessionLength) => prevSessionLength + 60);
      }
    }
  }

  function reset() {
    setRunning(false);
    setOnBreak(false);
    setBreakAmount(5);
    setSessionAmount(25);
    setBreakLength(300);
    setSessionLength(1500);
    document.getElementById("beep").load();
  }

  function toggleRunning() {
    setRunning((prevRunning) => !prevRunning);
  }

  return (
    <Card body className="text-center" style={{ backgroundColor: "#3B4252" }}>
      <h1>25 + 5 Clock</h1>
      <div
        id="length-box"
        className="d-flex align-items-center justify-content-around"
      >
        <div>
          <h2 id="break-label">Break Length</h2>
          <Button
            id="break-decrement"
            style={{ border: "none", backgroundColor: "#3B4252" }}
            onClick={() => {
              decrement("B");
            }}
          >
            &#8595;
          </Button>
          <span
            id="break-length"
            style={{ marginLeft: "15px", marginRight: "15px" }}
          >
            {breakAmount}
          </span>
          <Button
            id="break-increment"
            style={{ border: "none", backgroundColor: "#3B4252" }}
            onClick={() => {
              increment("B");
            }}
          >
            &#8593;
          </Button>
        </div>
        <div>
          <h2 id="session-label">Session Length</h2>
          <Button
            id="session-decrement"
            style={{ border: "none", backgroundColor: "#3B4252" }}
            onClick={() => {
              decrement("S");
            }}
          >
            &#8595;
          </Button>
          <span
            id="session-length"
            style={{ marginLeft: "15px", marginRight: "15px" }}
          >
            {sessionAmount}
          </span>
          <Button
            id="session-increment"
            style={{ border: "none", backgroundColor: "#3B4252" }}
            onClick={() => {
              increment("S");
            }}
          >
            &#8593;
          </Button>
        </div>
      </div>
      <div
        id="session-box"
        style={{
          margin: "15px auto",
          padding: "10px",
          maxWidth: "200px",
          border: "7px solid #2E3440",
          borderRadius: "30px",
        }}
      >
        <h2 id="timer-label">{!onBreak ? "Session" : "Break"}</h2>
        <h2 id="time-left">
          {displayTime.minutes}:{displayTime.seconds}
        </h2>
      </div>
      <Button
        id="start_stop"
        style={{
          marginRight: "10px",
          border: "none",
          backgroundColor: "#3B4252",
        }}
        onClick={toggleRunning}
      >
        &#10151;
      </Button>
      <Button
        id="reset"
        style={{ border: "none", backgroundColor: "#3B4252" }}
        onClick={reset}
      >
        &#10227;
      </Button>
      <audio id="beep" preload="auto" src={Alarm}></audio>
    </Card>
  );
}
