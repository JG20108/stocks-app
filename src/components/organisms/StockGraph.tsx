import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TooltipItem } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Graph component for displaying stock price history using Chart.js
interface StockGraphProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      fill: boolean;
      backgroundColor: string;
      borderColor: string;
    }[];
  };
}

const StockGraph: React.FC<StockGraphProps> = ({ data }) => {
  // Configures graph options including tooltips and legend
  const options = {
    plugins: {
      tooltip: {
        enabled: true,
        mode: 'index' as const, 
        intersect: false,
        callbacks: {
          label: function(context: TooltipItem<'line'>) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += `$${context.parsed.y.toFixed(2)}`;
            }
            return label;
          }
        }
      },
      legend: {
        labels: {
          color: 'black'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: 'black'
        },
        title: {
          display: true,
          text: 'Time',
          color: 'black'
        }
      },
      y: {
        ticks: {
          color: 'black'
        },
        title: {
          display: true,
          text: 'Stock Price',
          color: 'black'
        }
      }
    },
    layout: {
      padding: 20
    },
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 0, 
        hoverRadius: 5 
      }
    },
    maintainAspectRatio: false,
    backgroundColor: 'white'
  };

  // Renders a line graph with dynamic data and options
  return (
    <div className="bg-white p-2" style={{ height: '30vh', width: '40vw' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default StockGraph;