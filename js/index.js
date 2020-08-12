function onDragStart(e) {
	event
	.dataTransfer
	.setData("text", event.target.id)

	event.currentTarget.style.backgroundColor = "yellow"
}


function onDragOver(event) {
	event.preventDefault();

}

function onDrop(event){
	const id = event.dataTransfer.getData('text')
	const draggableElemnt = document.getElementById(id)

	const dropzone = event.target;

	dropzone.appendChild(draggableElemnt)
	event.dataTransfer.clearData();
}