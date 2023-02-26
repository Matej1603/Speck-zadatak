var brojac = 0;
const deleteAll = document.getElementById('delete');
function add() {
	const boxName = document.getElementById('textbox').value;
    const containerLijevi = document.getElementById("container_lijevi");
    const containerDesni = document.getElementById("container_desni");
    if(boxName){
        brojac++;
        if(brojac%2 === 0){
            const box = document.createElement("div");
            box.classList.add("box");
            box.textContent = boxName;
            containerDesni.appendChild(box);
            inputBox.value = "";
        }
        else{
            const box = document.createElement("div");
            box.classList.add("box");
            box.textContent = boxName;
            containerLijevi.appendChild(box);
            inputBox.value = "";
        }
    }
}
deleteAll.addEventListener("click", function() {
    const containerLijevi = document.getElementById("container_lijevi");
    const containerDesni = document.getElementById("container_desni");
	containerLijevi.innerHTML = "";
    containerDesni.innerHTML = "";
    brojac = 0;
});