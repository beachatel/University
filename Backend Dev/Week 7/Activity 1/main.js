document.addEventListener("DOMContentLoaded", chart);

async function chart() {
  const ctx = document.getElementById("myChart");

  const data = await getData();
  console.log(data);

  new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Male",
          data: data.mData,
          borderWidth: 1,
          borderColor: "red",
          pointBackgroundColor: "lightblue",
        },
        {
          label: "Female",
          data: data.fData,
          borderWidth: 1,
          borderColor: "blue",
          pointBackgroundColor: "lightgreen",
        },
      ],
    },
    options: {
      scales: {
        x: {
          type: "category",
        },
      },
    },
  });
}

async function getData() {
  const mData = [];
  const fData = [];
  const xData = document.getElementById("xaxis-data").value;
  const yData = document.getElementById("yaxis-data").value;
  console.log(xData, yData);

  const response = await fetch("Data/sleep_health.csv");
  const data = await response.text();

  const table = data.split("\n").slice(1);

  table.forEach((row) => {
    const columns = row.split(",");
    if (columns[1] === "Male") {
      mData.push({
        x: columns[xData],
        y: columns[yData],
      });
    } else {
      fData.push({
        x: columns[xData],
        y: columns[yData],
      });
    }
  });
  return { mData, fData };
}

async function updateChart() {
  const data = await getData();
  const chart = Chart.getChart("myChart");
  chart.data.datasets[0].data = data.mData;
  chart.data.datasets[1].data = data.fData;
  chart.update();
}
