const charts = [
  {
    src: "chart1.png",
    alt: "Pet ownership by type in 2019-2021",
    caption: "Pet ownership by type in 2019-2021"
  },
  {
    src: "chart2.png",
    alt: "Pet ownership by type in 2019-2021 (%)",
    caption: "Pet ownership by type in 2019-2021 (%)"
  },
  {
    src: "chart3.png",
    alt: "Pet ownership by type in 2019-2021 (Growth %)",
    caption: "Pet ownership by type in 2019-2021 (Growth %)"
  }
];

function showChart(index) {
  const image = document.getElementById("chartImage");
  const caption = document.getElementById("chartCaption");

  image.src = charts[index].src;
  image.alt = charts[index].alt;
  caption.textContent = charts[index].caption;
}
