// Data contoh (sesuaikan dengan data Anda)
const data = {
  labels: ['Islam', 'Kristen'],
  datasets: [{
    label: 'Persentase Agama',
    data: [99,1],
    backgroundColor: [
      'rgb(255, 0, 0)',
      'rgb(255, 205, 86)',
      
    ],
    hoverOffset: 4
  }]
};

// Konfigurasi pie chart
const configPie = {
  type: 'pie',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.formattedValue + '%';
          }
        }
      }
    },
    animation: {
      duration: 1000,
      easing: 'easeInSine'
    }
  }
};

// Konfigurasi bar chart
const configBar = {
  type: 'bar',
  data: {
    labels: ['Pria', 'Wanita'],
    datasets: [{
      label: 'Jumlah Penduduk',
      data: [520, 320],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y', // Membalik sumbu
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Jumlah Penduduk Berdasarkan Jenis Kelamin'
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    }
  }
};

// Membuat pie chart
const myPieChart = new Chart(
  document.getElementById('myPieChart'),
  configPie
);

// Membuat bar chart
const myBarChart = new Chart(
  document.getElementById('myBarChart'),
  configBar
);
