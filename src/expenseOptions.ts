export const options:any = {
  responsive: true,
  plugins: {
    legend: {
      display: false,//info tags
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




//!Chart Syntax:
// lables:[x axis values]
// dataset:[
//   {
    //first data line or whatever it is on chart
//     label:"Expense",
//     data:...values//these will be printed on y axis as well
//   }
// ]

//!scales/types
// category:when we have lables as string like "ab","bc" e.t.c
// linear: when we have linear data that is continuous and linear e.g 0 10 20 30
//logrithmic: numerical data that is growing according to some order like 0 10 100 1000 100000
//time: when we have dates and times 