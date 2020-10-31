const daysEl = document.querySelector('span[data-value="days"]');
const hoursEl = document.querySelector('span[data-value="hours"]');
const minsEl = document.querySelector('span[data-value="mins"]');
const secsEl = document.querySelector('span[data-value="secs"]');


class CountdownTimer {
    constructor ({selector, targetDate}){
    this.selector = selector;
    this.targetDate = targetDate;
 }




    start() {
        
        
       this.timer = setInterval(() => {
            const currentTime = Date.now();
            const time = this.targetDate - currentTime;
            console.log(time);
        },1000)

};
    
    
    
 } 

const timer1 =new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 31, 2020'),
});
document.addEventListener("DOMContentLoaded", timer1.start());