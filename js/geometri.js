// blog page add
document.getElementById("blog-button").addEventListener("click", function () {
  window.location.href = "blog.html";
});
let serial = 0;
// 1 measurement manupulate triangle
document.getElementById("triangle").addEventListener("click", function () {
  serial = serial + 1;
  // step 1
  const triangleText = document.getElementById("triangle-text").innerText;
  // step 2
  const triangleNumberString =
    document.getElementById("triangle-number").innerText;
  const triangleNumber = parseFloat(triangleNumberString);
  // step 3
  const triangleInputBaseString = document.getElementById("triangle-b").value;
  const triangleInputBase = parseFloat(triangleInputBaseString);
  triangleInputBaseString.value = "";
  // step 4
  const triangleInputHightString = document.getElementById("triangle-h").value;
  const triangleInputHight = parseFloat(triangleInputHightString);
  triangleInputHightString.value = "";
  // step 5
  const triangleAreaMultiple =
    triangleInputBase * triangleInputHight * triangleNumber;
  const triangleArea = triangleAreaMultiple.toFixed(2) + "cm";

  displayData(triangleText, triangleArea);
});

// function 1
function displayData(triangleText, triangleArea) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${serial}</td>
  <td>${triangleText}</td> 
  <td>${triangleArea}</td>
 `;

  container.appendChild(tr);
}

// 2 measurement manupulate Rectangular
document.getElementById("rectangle-btn").addEventListener("click", function () {
  serial += 1;
  const rectangleText = document.getElementById("rectangle-text").innerText;
  const rectangleInputWidthString =
    document.getElementById("rectangle-w").value;
  const rectangleInputWidth = parseFloat(rectangleInputWidthString);
  // input clear
  rectangleInputWidthString.value = "";

  const rectangleInputLengthString =
    document.getElementById("rectangle-l").value;
  const rectangleInputLength = parseFloat(rectangleInputLengthString);
  const rectangleAreaMultiple = rectangleInputWidth * rectangleInputLength;
  // input clear
  rectangleInputLengthString.value = "";

  const rectangleArea = rectangleAreaMultiple.toFixed(2) + " cm";
  displayData(rectangleText, rectangleArea);
});

// 3 measurement manupulate Parallelogram
document
  .getElementById("Parallelogram-btn")
  .addEventListener("click", function () {
    serial += 1;

    const parallelogramText =
      document.getElementById("Parallelogram-text").innerText;

    const parallelogramBaseString =
      document.getElementById("Parallelogram-b").innerText;
    const parallelogramBase = parseFloat(parallelogramBaseString);

    const parallelogramHightString =
      document.getElementById("Parallelogram-h").innerText;
    const parallelogramHight = parseFloat(parallelogramHightString);

    const parallelogramAreaMultiple = parallelogramBase * parallelogramHight;
    const parallelogramArea = parallelogramAreaMultiple.toFixed(2) + "cm";
    displayData(parallelogramText, parallelogramArea);
  });

// 4 measurement manupulate Parallelogram
document.getElementById("rhombos").addEventListener("click", function () {
  serial = serial + 1;
  const RhombosText = document.getElementById("Rhombus-text").innerText;
  const RhombusNumberString =
    document.getElementById("Rhombus-number").innerText;
  const RhombusNumber = parseFloat(RhombusNumberString);
  const RhombusNumberD1String = document.getElementById("Rhombus-d1").innerText;
  const RhombusNumberD1 = parseFloat(RhombusNumberD1String);
  const RhombusNumberD2String = document.getElementById("Rhombus-d2").innerText;
  const RhombusNumberD2 = parseFloat(RhombusNumberD2String);
  const RhombusAreaMultiple = RhombusNumberD1 * RhombusNumberD2 * RhombusNumber;
  const RhombusArea = RhombusAreaMultiple.toFixed(2) + "cm";

  displayData(RhombosText, RhombusArea);
});

// 5 measurement manupulate pentagon
document.getElementById("pentagon-btn").addEventListener("click", function () {
  serial = serial + 1;

  const pentagonText = document.getElementById("pentagon-text").innerText;
  const pentagonNumberString =
    document.getElementById("pentagon-number").innerText;
  const pentagonNumber = parseFloat(pentagonNumberString);
  const pentagonNumberPString = document.getElementById("pentagon-p").innerText;
  const pentagonNumberP = parseFloat(pentagonNumberPString);
  const pentagonNumberBString = document.getElementById("pentagon-b").innerText;
  const pentagonNumberB = parseFloat(pentagonNumberBString);
  const pentagonAreaMultiple =
    pentagonNumberP * pentagonNumberB * pentagonNumber;
  const pentagonArea = pentagonAreaMultiple.toFixed(2) + "cm";

  displayData(pentagonText, pentagonArea);
});

// 5 measurement manupulate ellipse

document.getElementById("ellipse-btn").addEventListener("click", function () {
  serial = serial + 1;
  const ellipseText = document.getElementById("ellipse-text").innerText;
  const ellipseNumberAString = document.getElementById("ellipse-a").innerText;
  const ellipseNumberA = parseFloat(ellipseNumberAString);
  const ellipseNumberBString = document.getElementById("ellipse-b").innerText;
  const ellipseNumberB = parseFloat(ellipseNumberBString);
  const ellipseAreaMultiple = ellipseNumberA * ellipseNumberB * 3.1416;
  const ellipseArea = ellipseAreaMultiple.toFixed(2) + "cm";

  displayData(ellipseText, ellipseArea);
});
