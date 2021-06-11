// This is for able to see chart. We are using Apex Chart. U can check the documentation of Apex Charts too..
var options = {
  series: [
    {
      name: "Mouse",
      data: [10, 0, 10, 0, 0,0,0,0,0,0,0,0],
    },
    {
      name: "Keyboard",
      data: [15, 0, 0, 10, 20,0,0,0,0,0,0,0],
    },
    {
      name: "Desktop",
      data: [10, 25, 0, 0, 0,10,0,0,0,0,0,0],
    },
    {
      name: "Charger",
      data: [0, 0, 0, 0, 0,0,15,10,20,12,0,0],
    },

    {
      name: "Webcam",
      data: [10, 0, 0, 0, 0,0,0,0,0,0,15,20],
    },
  ],
  chart: {
    type: "bar",
    height: 250, // make this 250
    sparkline: {
      enabled: false, // make this true
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "100%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 0,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["HP", "Lenovo", "Asus", "CosmicByte", "Zebronics","Dell","Xiaomi","OnePlus","Samsung","Vivo","Intel","Logitech"],
  },
  yaxis: {
    title: {
      text: "Quantity",
    },
  },
  fill: {
    opacity: 3,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return+ val ;
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#apex1"), options);
chart.render();

// Sidebar Toggle Codes;

var sidebarOpen = true;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

function toggleSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar_responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar_responsive");
    sidebarOpen = false;
  }
}
