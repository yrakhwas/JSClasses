class CssClass {
    constructor(className) {
        this.className = className;
        this.styles = {};
    }

    setStyle(property, value) {
        this.styles[property] = value;
    }

    removeStyle(property) {
        if (this.styles.hasOwnProperty(property)) {
            delete this.styles[property];
        }
    }

    getCSS() {
        let cssCode = `.${this.className} {\n`;
        for (const property in this.styles) {
            if (this.styles.hasOwnProperty(property)) {
                cssCode += `    ${property}: ${this.styles[property]};\n`;
            }
        }
        cssCode += `}`;
        return cssCode;
    }
}

class Button {
    constructor(width, height, text) {
        this.width = width;
        this.height = height;
        this.text = text;
    }

    showBtn() {
        const btnElement = `<button style="width:${this.width}px; height:${this.height}px;">${this.text}</button>`;
        document.write(btnElement);
    }
}

class BootstrapButton extends Button {
    constructor(width, height, text, color) {
        super(width, height, text);
        this.color = color;
    }

    showBtn() {
        const btnElement = `<button style="width:${this.width}px; height:${this.height}px; background-color:${this.color};">${this.text}</button>`;
        document.write(btnElement);
    }
}

class ExtendedDate extends Date {
    constructor(...args) {
        super(...args);
    }

    formatDate() {
        const day = this.getDate();
        const month = this.getMonth() + 1; // Місяці у класі Date починаються з 0
        return `${day}/${month}`;
    }

    isFuture() {
        const currentDate = new Date();
        return this > currentDate;
    }

    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    getNextDate() {
        const nextDay = new Date(this);
        nextDay.setDate(this.getDate() + 1);
        return nextDay;
    }
}

const currentDate = new ExtendedDate();
console.log("Formatted Date:", currentDate.formatDate());
console.log("Is Future Date:", currentDate.isFuture());
console.log("Is Leap Year:", currentDate.isLeapYear());

const nextDate = currentDate.getNextDate();
console.log("Next Date:", nextDate);


const normalButton = new Button(100, 50, 'Normal Button');
normalButton.showBtn();

const bootstrapButton = new BootstrapButton(120, 60, 'Bootstrap Button', 'blue');
bootstrapButton.showBtn();

const myClass = new CssClass('my-class');
myClass.setStyle('color', 'blue');
myClass.setStyle('font-size', '16px');
myClass.setStyle('background-color', 'yellow');

console.log(myClass.getCSS());