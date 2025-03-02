document.addEventListener("DOMContentLoaded", chart);

async function chart() {
  const ctx = document.getElementById("myChart");

  //   const data = getData(); // fetch our data from csv

  const data = await getData();
  new Chart(ctx, {
    type: "line",
    data: {
      labels: data.dateArray,
      datasets: [
        {
          label: "Forecast",
          data: data.forecastArray,
          borderWidth: 0.5,
          tension: "0.9",
          borderColor: "red",
          backgroundColor: "yellow",
        },
        {
          label: "Actual",
          data: data.actualArray,
          borderWidth: 0.5,
          borderColor: "blue",
          backgroundColor: "red",
        },
      ],
    },
    options: {
      scales: {
        x: {
          type: "time",
          time: {
            unit: "day",
            displayFormats: {
              day: "dd--mm--yyyy",
            },
          },
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

async function getData() {
  const dateArray = [];
  const forecastArray = [];
  const actualArray = [];
  //   const indexArray = [];

  //step 1 fetch csv data
  const response = await fetch("data/gb_carbon_intensity.csv");
  const data = await response.text();

  //step 2 parse data into rows
  const table = data.split("\n").slice(1, 30000);

  //step 3 parse rows into columns
  table.forEach((row) => {
    const columns = row.split(",");
    const dateTime = columns[0];
    dateArray.push(columns[0]);
    const forecast = columns[1];
    forecastArray.push(columns[1]);
    const actual = columns[2];
    actualArray.push(columns[2]);
    const index = columns[3];
    // indexArray.push(columns[3]);
    // console.log(dateTime, forecast, actual, index);
  });
  //step 4 average data
  const averagedData = await averageData(dateArray, forecastArray, actualArray);
  return averagedData;
}

async function averageData(dates, forecasts, actuals) {
  const averagedDates = [];
  const averagedForecasts = [];
  const averagedActuals = [];

  for (let i = 0; i < dates.length; i += 48) {
    const dateSlice = dates.slice(i, i + 48);
    const forecastSlice = forecasts.slice(i, i + 48);
    const actualSlice = actuals.slice(i, i + 48);

    const averageForecast =
      forecastSlice.reduce((sum, value) => sum + parseFloat(value), 0) /
      forecastSlice.length;

    const averageActual =
      actualSlice.reduce((sum, value) => sum + parseFloat(value), 0) /
      actualSlice.length;
    //for each element of forecast slice format in to floating point and add it to the sum
    //divide the sum by the length of the array to average it

    averagedDates.push(dateSlice[0]);
    averagedForecasts.push(averageForecast);
    averagedActuals.push(averageActual);
  }
  return {
    dateArray: averagedDates,
    forecastArray: averagedForecasts,
    actualArray: averagedActuals,
  };
}
