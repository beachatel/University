import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3001;

app.use(cors());

const baseApiUrl = "https://data.bus-data.dft.gov.uk/api/v1/datafeed/";
const apiKey = process.env.API_KEY;

app.get("/busdata", async (req, res) => {
  try {
    const boundingBox = req.query.boundingBox;
    const apiUrl = `${baseApiUrl}?boundingBox=${boundingBox}&api_key=${apiKey}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      console.error(`API Error: ${response.status} - ${response.statusText}`);
      throw new Error(
        `Failed to fetch data from the external API. Status: ${response.status}`
      );
    }
    res.header("Content-Type", "application/xml").send(await response.text());
  } catch (error) {
    console.error("Error fetching and proxying bus data:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch bus data", message: error.message });
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(path.resolve(), "index.html"));
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
