type Element = {
    div: HTMLElement;
}

type Font = {
    weight: string;
    size: number;
    color: string;
}

type TextOpts = {
    text: string;
    top: number;
    left: number;
    font: Font;
};

type MultiTextOpts = {
    texts: string[];
    top: number;
    left: number;
    jump: number;
    font: Font;
};

function pixels(num: number) {
    return `${num}px`;
}

class MultiText {
    div: HTMLElement;

    constructor(opts: MultiTextOpts) {
        const div = document.createElement("div");

        let top = opts.top;

        let text_opts = {
            text: "",
            top,
            left: opts.left,
            font: opts.font,
        }

        for (const text of opts.texts) {
            text_opts.text = text;
            const text_widget = new TextWidget(text_opts);
            div.append(text_widget.div);
            text_opts.top += opts.jump;
        }

        this.div = div;
    }
}

class TextWidget {
    div: HTMLElement;

    constructor(opts: TextOpts) {
        const div = document.createElement("div");

        div.innerText = opts.text;
        div.style.top = pixels(opts.top);
        div.style.left = pixels(opts.left);
        div.style.position = "absolute";

        div.style.fontWeight = opts.font.weight;
        div.style.fontSize = pixels(opts.font.size);
        div.style.color = opts.font.color;

        this.div = div;
    }
}

class Page {
    div: HTMLElement;

    constructor() {
        const div = document.createElement("div");
        div.style.border = "1px solid black";
        div.style.height = "792px";
        div.style.width = "612px";
        div.style.position = "relative";

        this.div = div;
    }

    add(elem: Element) {
        const div = this.div;

        div.append(elem.div);
    }
}

function page_one(): Page {
    const page = new Page();

    const duke_color = "#012169";

    const name = new TextWidget({
        text: "Steve Howell",
        top: 30,
        left: 30,
        font: {
            weight: "bold",
            size: 27,
            color: duke_color,
        },
    });

    const contact_info = new MultiText({
        texts: ["showell285@gmail.com", "202-213-7553", "Rockledge, FL", "work anywhere in US (or remote)"],
        top: 70,
        left: 45,
        jump: 20,
        font: {
            weight: "normal",
            size: 13,
            color: "black",
        },
    });


    page.add(name);
    page.add(contact_info);

    const duke = new TextWidget({
        text: "Duke University",
        top: 50,
        left: 390,
        font: {
            weight: "bold",
            size: 20,
            color: duke_color,
        },
    });

    const duke_details = new MultiText({
        texts: [
            "graduated in 1989 (three years)",
            "BS Computer Science",
            "BS Electrical Engineering",
            "straight A's in EE, CS, and math",
            "3.7 overall GPA",
            "Phi Beta Kappa",
        ],
        top: 80,
        left: 410,
        jump: 20,
        font: {
            weight: "normal",
            size: 13,
            color: "black",
        },
    });

    page.add(duke);
    page.add(duke_details);


    return page;
}

export function run() {
    document.title = "Hello World";

    document.body.style.backgroundColor = "rgb(246, 246, 255)";

    const page = page_one();

    const body_div = document.createElement("div");
    body_div.style.display = "flex";
    body_div.style.justifyContent = "center";

    body_div.append(page.div);
    document.body.append(body_div);
}

run();
