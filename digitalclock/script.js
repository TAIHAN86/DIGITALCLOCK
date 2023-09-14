class Digitalclock {
    constructor(element) {
        this.element = element;
    }


    start() {
        this.update();

        setInterval() => {
            this.update();

        }, 500);
    }

    update() {
        const now =new Date();
        const minuteformatted = parts.minutes.tostring().padstart(2,"0");
        const timeformatted ='$ {parts.hour}:${minuteformatted}';
        const ampm =parts.isAm ? "AM" : "pm";

        this.elements.querySelector(".clock-time").textcontent =timeformatted;
        this.element.querySelector(".clock-ampm").textcontent =ampm;

         
    }



gettimeparts()  {
    const now = new Date();

    return {
        hour: now.getHours() % 12 || 12,
        minute: now.getMinutes(),
        isam: now.getHours() < 12
    };


}

}
const clockElement = document.querySelector(".clock");
const clockobject =new Digitalclock(clockElement);

console.log(clockobject.gettimeparts());


clockobject,start();





