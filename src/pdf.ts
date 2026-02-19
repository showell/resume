const fs = require('fs');
import { readFile } from 'node:fs/promises';

import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

let normal_font: any;
let bold_font: any;

function draw_contact_info(page: any) {
    let color: any;
    let size: number;

    let x: number;
    let y: number;

    function draw(text: string) {
        page.drawText(text, {
            color,
            size,
            x,
            y,
        });
    }

    {
        page.setFont(bold_font);

        color = rgb(0, 0, 0);
        size = 25;

        x = 30;
        y = 790;

        draw("Steve Howell");

        page.setFont(normal_font);
        color = rgb(0, 0.4, 0.2);
        size = 9;
        y -= 5;
        x += 85;

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
            y -= 12;
            draw(line);
        }
    }

    {
        color = rgb(0, 0, 0)
        size = 18;
        x = 30;
        y -= 40;
        page.setFont(bold_font);

        draw("Full-stack Developer");

        page.setFont(normal_font);
        color = rgb(0, 0.4, 0.2);
        size = 10;
        y -= 5;
        x += 17;

        const lines = [
            "25+ years Python",
            "25+ years JavaScript/TypeScript",
            "C/C++ since 80s/90s",
            "Oracle/SqlServer/mysql/postgres",
            "Django/Rails",
        ];

        for (const line of lines) {
            y -= 12;
            draw(line);
        }
    }

    {
        y = 790;
        x = 230;
        size = 22;
        color = rgb(0, 0.1, 0.1);

        draw("40 years of experience:");

        y -= 5;
        x += 15;
        size = 10;
        color = rgb(0, 0.4, 0.2);

        const lines = [
            "1980s:",
            "      TI 99/4A BASIC 1982",
            "      Computer Sciences Corporation",
            "      Noise Cancellation Technolgies",
            "      Duke University BS EE/CS 1989",
            "",
            "1990s:",
            "      Oracle Corporation",
            "      Watson Wyatt Worldwide",
            "      American Management Systems",
            "      NXT credit card services",
            "      RealNetworks",
            "",
            "2000s:",
            "      ATAC Tutoring",
            "      Guido van Robot (Yorktown High School)",
            "      NXT/MerchantLink Chase Paymentech",
            "      Amazon Fresh team, Amazon",
            "",
            "Recent:",
            "      2013: Domaintools",
            "      2014: Zulip startup",
            "      2015: Dropbox (acquisition)",
            "      2016-present: Zulip free software project",
        ];

        for (const line of lines) {
            y -= 13;
            draw(line);
        }
    }


    {
        y = 780;
        x = 450;
        size = 7;
        color = rgb(0.5, 0, 1);

        const lines = [
            "5 BC Calculus, 800 Math SAT",
            "dBase, government contracting",
            "Turbo Pascal, Karel the Robot",
            "8086 assembly",
            "Combinatorics",
            "Linear Algebra",
            "Eight queens in C",
            "800 Math GRE",
            "REXX programming language",
            "Karnaugh maps",
            "Kernighan + Ritchie C",
            "PL/SQL",
            "MFC, Windows NT, Visual Basic",
            "two-tier client/server architecture",
            "Effective C++",
            "FD_SET(STDIN_FILENO, &read_fds);",
            "home-grown HTML templates in C",
            "Y2K audits",
            "Perl, YAML, MoinMoin, Ward's wiki",
            "Test-first development",
            "Asynchronous file handling with asyncore",
            "Surprise and delight",
            "CoffeeScript",
            "PHP isn't so bad",
            "I forgot how fast C is!",
            "Oh, yes it is",
            "jQuery? seriously?",
            "IE will not die",
            "Elm model/view/update",
        ];

        for (const line of lines) {
            y -= 11;
            draw(line);
        }
    }
}

async function get_image(doc: PDFDocument, fn: string): Promise<any> {
    const buffer = await readFile(fn);

    const image = await doc.embedJpg(buffer);

    return image;
}

async function test() {
    const doc = await PDFDocument.create()

    const image = await get_image(doc, "steve.jpeg");

    normal_font = await doc.embedFont(StandardFonts.TimesRoman);
    bold_font = await doc.embedFont(StandardFonts.TimesRomanBold);

    const page = doc.addPage()

    page.drawImage(image, {
        x: 30,
        y: 700,
    });

    draw_contact_info(page);

    const uint8arr = await doc.save();
    const buffer = Buffer.from(uint8arr);
    fs.writeFile("steve.pdf", buffer, () => {});
    console.log("saved!");
}

test();
