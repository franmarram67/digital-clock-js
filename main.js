class ClockElement {
    constructor(currentDate, clock) {
        this.currentDate = currentDate;
        this.clock = clock;
        this.clockH1 = clock.getElementsByTagName('h1')[0];
        this.clockH2 = clock.getElementsByTagName('h2')[0];
        this.dateTimeFormatTime = new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
        this.dateTimeFormatDate = new Intl.DateTimeFormat("en-US", { weekday: "long", day: "numeric", month: "long"});
    }

    updateClock() {
        this.displayClock();
        setInterval(() => {
            this.currentDate = Date.now();
            this.displayClock();
        }, 100);
    }

    displayClock() {
        let clockCurrentHours = this.dateTimeFormatTime.formatToParts(this.currentDate)[0].value;
        let clockPreviousHours = this.clockH1.getElementsByClassName('hours')[0].innerText;
        if (clockCurrentHours !== clockPreviousHours) {
            this.clockH1.getElementsByClassName('hours')[0].innerText = clockCurrentHours;
        }

        let clockCurrentMinutes = this.dateTimeFormatTime.formatToParts(this.currentDate)[2].value;
        let clockPreviousMinutes = this.clockH1.getElementsByClassName('minutes')[0].innerText;
        if (clockCurrentMinutes !== clockPreviousMinutes) {
            this.clockH1.getElementsByClassName('minutes')[0].innerText = clockCurrentMinutes;
        }

        let clockCurrentSeconds = this.dateTimeFormatTime.formatToParts(this.currentDate)[4].value;
        let clockPreviousSeconds = this.clockH1.getElementsByClassName('seconds')[0].innerText;
        if (clockCurrentSeconds !== clockPreviousSeconds) {
            this.clockH1.getElementsByClassName('seconds')[0].innerText = clockCurrentSeconds;
        }
        
        let clockCurrentDate = this.dateTimeFormatDate.format(this.currentDate);
        let clockPreviousDate = this.clockH2.innerText;
        if (clockCurrentDate !== clockPreviousDate) {
            this.clockH2.innerText = clockCurrentDate;
        }
    }
}

var clockElement = new ClockElement(new Date(), document.getElementById('clock'));
clockElement.updateClock();
