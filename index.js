var height = parseFloat(prompt("Nhap chieu cao")) ;
var weight = parseFloat(prompt("Nhap can nang"));

var bmi = weight/(height*height);

if (bmi < 18)
    document.write("Underweight");
else if (bmi < 25.0)
    document.write("Normal");
else if (bmi < 30.0)
    document.write("Overweight");
else
    document.write("Obese");
