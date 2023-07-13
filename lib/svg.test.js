const { SVG, LogoText } = require("./Svg");
const { Square } = require("./shapes");

test("should render a 300 x 200 svg element", () => {
  const color = "red";
  const expectedSvg = ``;
  const square = new Square(color);
  const logoText = new LogoText("Hello World", color);

  const svg = new SVG(square, logoText);
  expect(svg.render()).toEqual(expectedSvg);
});
