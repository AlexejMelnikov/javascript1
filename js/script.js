let chooseBtn = document.getElementById('choose'), 
	receveBtn = document.getElementById('receive'),
	heading =document.getElementsByTagName('h2')[0],
	nameInput = document.getElementsByClassName("contactform_name")[0],
	phoneInput = document.querySelector('.contactform_phone'),
	mailInput = document.querySelectorAll('.contactform_mail')[0],
	modal = document.querySelector('.modal'),
	closeBtn = document.querySelector('.close'),
	text = document.getElementsByName('message')[0];
	function hover() {
		heading.textContent="Действительно ВСЁ!" //innerHTML необдходимо попробовать
	}
	function out() {
		heading.textContent="Всё включено!" //innerHTML необдходимо попробовать
	}
	heading.addEventListener("mouseenter", hover);
	heading.addEventListener("mouseleave", out);
	console.log(modal);
	receveBtn.addEventListener('click',function(){
		modal.style.display = "block"
	}); 
	closeBtn.addEventListener('click', function(){
		modal.style.display="none"
	});
nameInput.addEventListener("input", function(){
	text.value = "Меня зовут " + nameInput.value +". И я хочу спросить :"
	if(nameInput.value == "" ){
		text.value =""
	}
})