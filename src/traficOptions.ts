export const options:any = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
        mode: 'index',// we have different values for this as well check gpt or documentation
        intersect: false,//if true then only show tooltip when hover over dot
     
      }
    },
    scales: {
      //what do display on x and y chart lines 
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Months'
        },
        grid:{
          display: false
        }
      },
      y: {
        type: 'linear',
        display: false,
        title: {
          display: false,
          
        },
        grid: {
          display: false
        }
      }
    },
    animation: {
      duration: 1000, // duration of the animation in milliseconds
      easing: 'easeInOutQuad' // easing function to use for the animation
    }
  };
  
  
  
  
