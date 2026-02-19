const fs = require('fs');

import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

let normal_font: any;
let bold_font: any;

function draw_contact_info(page: any) {
    page.setFont(bold_font);
    let color = rgb(0, 0, 0);
    let size = 25;

    let x = 30;
    let y = 790;

    function draw(text: string) {
        page.drawText(text, {
            color,
            size,
            x,
            y,
        });
    }

    {
        draw("Steve Howell");

        page.setFont(normal_font);
        color = rgb(0, 0.4, 0.2);
        size = 15;
        y -= 5;
        x += 20;

        const lines = [
            "202-213-7553",
            "showell285@gmail.com",
            "showell on github",
            "Rockledge, FL, USA",
            "can relocate",
            "can work remotely",
            "available immediately",
        ];

        for (const line of lines) {
            y -= 20;
            draw(line);
        }
    }

    {
        y = 790;
        x = 280;
        size = 22;
        color = rgb(0, 0.1, 0.1);

        draw("40 years of experience:");

        y -= 5;
        x += 16;
        size = 11;
        color = rgb(0, 0.4, 0.2);

        const lines = [
            "Computer Sciences Corporation",
            "Noise Cancellation Technolgies",
            "Duke University BS EE/CS 1989",
            "Oracle Corporation",
            "Watson Wyatt Worldwide",
            "American Management Systems",
            "NXT credit card services",
            "RealNetworks",
            "ATAC Tutoring",
            "Guido van Robot (Yorktown High School)",
            "YAML and MoinMoin open source",
            "NXT/MerchantLink Chase Paymentech",
            "Amazon Fresh team, Amazon",
            "Domaintools",
            "Zulip startup",
            "Dropbox",
            "Zulip free software project (Kandra Systems)",
        ];

        for (const line of lines) {
            y -= 20;
            draw(line);
        }
    }
}

async function test() {
    const doc = await PDFDocument.create()

    normal_font = await doc.embedFont(StandardFonts.TimesRoman);
    bold_font = await doc.embedFont(StandardFonts.TimesRomanBold);

    const page = doc.addPage()

    draw_contact_info(page);

    const uint8arr = await doc.save();
    const buffer = Buffer.from(uint8arr);
    fs.writeFile("steve.pdf", buffer, () => {});
    console.log("saved!");
}

test();
