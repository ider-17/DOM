const buttonElRef = document.createElement("button");
buttonElRef.innerText = "Change-Bg";

buttonElRef.onclick = setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    divElRef.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
document.body.appendChild(buttonElRef);

const divElRef = document.createElement("div");
divElRef.innerText = "1";
divElRef.style.width = 50 + "px";
divElRef.style.height = 50 + "px";
divElRef.style.backgroundColor = "black";
divElRef.style.borderRadius = 50 + "%";
divElRef.style.color = "white";
divElRef.style.alignContent = "center";
divElRef.style.textAlign = "center";
document.body.appendChild(divElRef);