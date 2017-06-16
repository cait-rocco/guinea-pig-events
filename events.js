var changeText = document.getElementById("output-target");
var userInput = document.getElementById("keypress-input")

window.addEventListener("click", function() {
	if (event.target.classList.contains("article-section")){
		changeText.innerHTML = `You clicked on the ${event.target.innerHTML} section`
	}
});
document.getElementById("page-title").addEventListener("mouseenter", function(){
	changeText.innerHTML = `You moved your mouse over the header`
})
document.getElementById("page-title").addEventListener("mouseleave", function(){
	changeText.innerHTML = `You left me!`
})
userInput.addEventListener("keyup", function() {
	changeText.innerHTML = userInput.value;
})
document.getElementById("add-color").addEventListener("click", function() {
	document.getElementById("guinea-pig").classList.toggle("blue"); });
document.getElementById("make-large").addEventListener("click", function() {
	document.getElementById("guinea-pig").classList.toggle("large"); });
document.getElementById("add-border").addEventListener("click", function() {
	document.getElementById("guinea-pig").classList.toggle("border"); });
document.getElementById("add-rounding").addEventListener("click", function() {
	document.getElementById("guinea-pig").classList.toggle("radius"); });
