// blog page add
document.getElementById("blog-button").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// 1 measurement manupulate triangle
document.getElementById("triangle").addEventListener("click", function () {
  const triangleText = document.getElementById("triangle-text").innerText;
  const triangleNumberString =
    document.getElementById("triangle-number").innerText;
  const triangleNumber = parseFloat(triangleNumberString);
  const triangleInputBase = document.getElementById("triangle-b").value;
  const triangleInputHight = document.getElementById("triangle-h").value;
  console.log(
    triangleText,
    triangleNumber,
    triangleInputBase,
    triangleInputHight
  );
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${1}</td> `;
  container.appendChild(tr);
});
