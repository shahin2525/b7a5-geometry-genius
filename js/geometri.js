// blog page add
document.getElementById("blog-button").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// 1 measurement manupulate triangle
document.getElementById("triangle").addEventListener("click", function () {
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
  const triangleArea = triangleAreaMultiple.toFixed(2);

  // console.log(
  //   triangleText,
  //   triangleNumber,
  //   triangleInputBase,
  //   triangleInputHight
  // );
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${1}</td>
  <td>${triangleText}</td> 
  <td>${triangleArea}</td>
 `;

  container.appendChild(tr);
});

// 2 measurement manupulate Rectangular
document.getElementById("rectangle-btn").addEventListener("click", function () {
  const rectangleText = document.getElementById("rectangle-text").innerText;
  const rectangleInputWidthString =
    document.getElementById("rectangle-w").value;
  const rectangleInputWidth = parseFloat(rectangleInputWidthString);
  const rectangleInputLengthString =
    document.getElementById("rectangle-l").value;
  const rectangleInputLength = parseFloat(rectangleInputLengthString);
  const rectangleArea = rectangleInputWidth * rectangleInputLength;

  // console.log(rectangleText, rectangleInputWidth, rectangleInputLength);

  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
<td>${2}</td>
 <td>${rectangleText}</td>
 <td>${rectangleArea}</td>`;
  container.appendChild(tr);
});

// 3 measurement manupulate Parallelogram
document
  .getElementById("Parallelogram-btn")
  .addEventListener("click", function () {
    //  step 1
    const parallelogramText =
      document.getElementById("Parallelogram-text").innerText;
    // step 2
    const parallelogramBaseString =
      document.getElementById("Parallelogram-b").innerText;
    const parallelogramBase = parseFloat(parallelogramBaseString);
    // step 3
    const parallelogramHightString =
      document.getElementById("Parallelogram-h").innerText;
    const parallelogramHight = parseFloat(parallelogramHightString);
    // step 4
    const parallelogramArea = parallelogramBase * parallelogramHight;

    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${3}</td>
    <td>${parallelogramText}</td>
    <td>${parallelogramArea}</td>`;
    container.appendChild(tr);
  });
