import Head from 'next/head';
import { useRouter } from "next/router";
import {Time} from "@/types/times";
import {useEffect, useState} from "react";
import { differenceInSeconds } from 'date-fns';

/**
  Calculates the time difference between the server time and client time.
  @param {Date} serverTime - The server time.
  @param {Date} clientTime - The client time.
  @function: {differenceInSeconds} is a fonction import by an extern library to calculate the difference between two time.
  @returns {string} The time difference in the format "{days} days, {hours} hours, {minutes} minutes, {seconds} seconds".
*/
const calculateTimeDifference: String = (server: Date, client: Date) => {
  return differenceInSeconds(server, client).toLocaleString();
};

let outServerTime: Date;

export async function getServerSideProps(){
  const serverTime = new Date().toLocaleString();
  outServerTime = new Date();
  return {
    props: {
      serverTime,
    },
  };
}

export default function Home({serverTime}: Time) {
  const [time, setTime] = useState<Date>();
  const router = useRouter();
  const moveToTaskManager = () => {
    router.push("/tasks");
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      let now = new Date();
      setTime(now);
      console.log(time)
    }, 1000);
  }, []);


  return (
    <>
      <Head>
        <title>Web 2 - Exam TD</title>
        <meta name="description" content="Just an exam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>The easiest exam you will ever find</h1>
        <div>
          {/* Display here the server time (DD-MM-AAAA HH:mm)*/}
          <p>
            Server time: {serverTime}
            <span className="serverTime">{/* Replace with the value */}</span>
          </p>

          {/* Display here the time difference between the server side and the client side */}
          <p>
            Time diff: {calculateTimeDifference(outServerTime, time)}
            <span className="serverTime">{/* Replace with the value */}</span>
          </p>
        </div>

        <div>
          <button onClick={moveToTaskManager}>Go to task manager</button>
        </div>
      </main>
    </>
  );
}
