export function run() {
    document.title = "Hello World";

    document.body.style.backgroundColor = "rgb(246, 246, 255)";

    const hello = document.createElement("div");
    hello.style.backgroundColor = "white";
    hello.innerText = "hello";

    document.body.append(hello);
}

run();
