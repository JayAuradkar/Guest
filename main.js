var student=[];
function submit(){
for(I=1;I<=4;I++){
    student_name = document.getElementById("name_of_the_student_"+I).value;
    student.push(student_name)
}
console.log(student)
document.getElementById("display_name_with_commas").innerHTML=student
document.getElementById("sort_button").style.display="inline-block";
document.getElementById("submit_button").style.display="none";
}
function sorting(){
    student.sort()
    var remove_commas = student.join(" ")
    document.getElementById("display_name_without_commas").innerHTML=remove_commas
}