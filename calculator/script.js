let countOfNumbers = 12;

function input(value){
	let expression = document.getElementById('expression').value;

	if (expression == 'Ошибка ввода'){
		document.getElementById('expression').value = '';
	}
	document.getElementById('expression').value += value;
	
	expression = document.getElementById('expression').value;
	if (expression.length >= countOfNumbers){
		document.getElementById('expression').value = expression.substring(0, expression.length - 1);
	}
}

function deleteOne(){
	let expression = document.getElementById('expression').value;
	document.getElementById('expression').value = expression.substring(0, expression.length - 1);
}

function deleteAll(){
	document.getElementById('expression').value = '';
}

function calculate(){
	let expression = document.getElementById('expression').value;
	try{
		expression = Math.round( (eval(expression) * 100) ) / 100;
	}
	catch(e){
		expression = 'Ошибка ввода';
	}
	document.getElementById('expression').value = expression;

	expression = document.getElementById('expression').value;
	if (expression.length >= countOfNumbers){
		document.getElementById('expression').value = expression.substring(0, expression.length - 1);
	}
}