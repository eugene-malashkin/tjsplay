import "./styles.css";

const lines = [];
const addLine = (text, color) => {
  const line = {
    colorClass: color ?? "black",
    text
  };
  lines.push(line);
};

const expect = actual => ({
  toBe(expected) {
    if (actual !== expected) {
      addLine(`Actual value ${actual} is not an expected ${expected}`, "red");
    } else {
      addLine("Passed");
    }
  }
});

expect(2).toBe(2);

document.getElementById("app").innerHTML = lines
  .map(line => `<div class="${line.colorClass}">${line.text}</div>`)
  .join("");
