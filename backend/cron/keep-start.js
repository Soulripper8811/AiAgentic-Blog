import nodeCron from "node-cron";
import dotenv from "dotenv";
dotenv.config();

const keepStart = () => {
  nodeCron.schedule("*/10 * * * *", async () => {
    console.log("Keep Start: Running task to keep the server alive");
    const response = await fetch(`${process.env.HOSTED_URL}/api/check`);
    // const response = await fetch(`http://localhost:4000/api/check`);
    const data = await response.json();
    console.log("Keep Start: Response from server:", data);
  });
};
export default keepStart;
