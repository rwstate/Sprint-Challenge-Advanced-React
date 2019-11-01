import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const Player = props => {
  let labels = props.data.map(el => el.name)

  let data = props.data.map(el => el.searches)

  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const backgroundColors = [];

  labels.forEach(el => backgroundColors.push(getRandomColor()))

  const datum = {
    labels: labels,
    datasets: [
      {
        label: 'FIFA Women Player Trends',
        backgroundColor: backgroundColors,
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        barThickness: 20,
        data: data
      }
    ]
  };

  return (
    <div>
      <HorizontalBar 
        data={datum} 
        height={600}
        minBarThickness={100}
        />
      {/* <Button>
        Change Page
      </Button> */}
    </div>
    
  )
}

export default Player;