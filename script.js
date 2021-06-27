

function btnSubmit(){

    fName = document.getElementById("fName");
    lName = document.getElementById("lName");

    sub1 = document.getElementById("sub1");
    sub2 = document.getElementById("sub2");
    sub3 = document.getElementById("sub3");

    mark1 = parseFloat(document.getElementById("mark1").value);
    mark2 = parseFloat(document.getElementById("mark2").value);
    mark3 = parseFloat(document.getElementById("mark3").value);

    tmark1 = parseFloat(document.getElementById("tmark1").value);
    tmark2 = parseFloat(document.getElementById("tmark2").value);
    tmark3 = parseFloat(document.getElementById("tmark3").value);

    pmark1 = parseFloat(document.getElementById("pmark1").value);
    pmark2 = parseFloat(document.getElementById("pmark2").value);
    pmark3 = parseFloat(document.getElementById("pmark3").value);

    totalMarksScored = mark1+mark2+mark3;
    totalMarks = tmark1+tmark2+tmark3;
    averageMarks = totalMarksScored/3;

    r1 = passOrFail(mark1,pmark1);
    r2 = passOrFail(mark2,pmark2);
    r3 = passOrFail(mark3,pmark3);

    g1 = giveGrade(mark1,tmark1);
    g2 = giveGrade(mark2,tmark2);
    g3 = giveGrade(mark3,tmark3);
    console.log(typeof g1);

    console.log(averageMarks);
    console.log(totalMarksScored);
    console.log(totalMarks);

    printResults();
   
}

function printResults(){
    console.log(averageMarks);
    console.log(totalMarksScored);
    console.log(totalMarks);
    htmlCode = "<h2> Name : "+fName.value+" "+lName.value+"</h2>"+"<p><br>"
                +"<table style=\"text-align : center\";"+
                    "<tr><th>Subjects</th><th>Marks</th><th>Total Marks</th><th>Result</th><th>Grade</th></tr>"+
                    "<tr>"+
                        "<td>"+sub1.value+"</td>"+"<td>"+mark1+"</td>"+"<td>"+tmark1+"</td>"+"<td>"+r1+"</td>"+"<td>"+g1+"</td>"+
                    "</tr>"+
                    "<tr>"+
                        "<td>"+sub2.value+"</td>"+"<td>"+mark2+"</td>"+"<td>"+tmark2+"</td>"+"<td>"+r2+"</td>"+"<td>"+g2+"</td>"+
                    "</tr>"+
                    "<tr>"+
                        "<td>"+sub3.value+"</td>"+"<td>"+mark3+"</td>"+"<td>"+tmark3+"</td>"+"<td>"+r3+"</td>"+"<td>"+g3+"</td>"+
                    "</tr>"
                +"</table>"+
                "<h3> Average Marks = "+averageMarks+"<br></h3>";
    document.getElementById("mark-form").innerHTML = htmlCode;
    document.getElementById("grade-form").innerHTML ="<h1> Results </h1>";
}

function passOrFail(marks,pmarks){
    if(marks>=pmarks){
        return "Pass";
    }
    else{
        return "Fail";
    }
}

function giveGrade(marks,tmarks){
    var gradeAplus = document.getElementById("gradeA+").value;
    gradeAplusi = document.getElementById("gradeA+-i").value;
    gradeAplusf =document.getElementById("gradeA+-f").value;

    var gradeA = document.getElementById("gradeA").value;
    gradeAi = document.getElementById("gradeA-i").value;
    gradeAf = document.getElementById("gradeA-f").value;

    var gradeBplus = document.getElementById("gradeB+").value;
    gradeBplusi = document.getElementById("gradeB+-i").value;    
    gradeBplusf = document.getElementById("gradeB+-f").value;

    var gradeB = document.getElementById("gradeB").value;
    gradeBi = document.getElementById("gradeB-i").value;
    gradeBf = document.getElementById("gradeB-f").value;

    var gradeCplus = document.getElementById("gradeC+").value;
    gradeCplusi = document.getElementById("gradeC+-i").value;
    gradeCplusf = document.getElementById("gradeC+-f").value;
    
    var gradeC = document.getElementById("gradeC").value;
    gradeCi = document.getElementById("gradeC-i").value;
    gradeCf = document.getElementById("gradeC-f").value;

    var gradeD = document.getElementById("gradeD").value;
    gradeDi = document.getElementById("gradeD-i").value;
    gradeDf = document.getElementById("gradeD-f").value;

    var gradeF = document.getElementById("gradeF").value;
    gradeFi = document.getElementById("gradeF-i").value;
    gradeFf = document.getElementById("gradeF-f").value;

    p = getPercentage(marks,tmarks)
    if(p>gradeAplusi && p<=gradeAplusf){
        return String(gradeAplus);
    }
    if(p>gradeAi && p<=gradeAf){
        return String(gradeA);
    }
    if(p>gradeBplusi && p<=gradeBplusf){
        return String(gradeBplus);
    }
    if(p>gradeBi && p<=gradeBf){
        return String(gradeB);
    }
    if(p>gradeCplusi && p<=gradeCplusf){
        return String(gradeCplus);
    }
    if(p>gradeCi && p<=gradeCf){
        return String(gradeC);
    }
    if(p>gradeDi && p<=gradeDf){
        return String(gradeD);
    }
    if(p>=gradeFi && p<=gradeFf){
        return String(gradeF);
    }
}

function getPercentage(marks,tmarks){
    console.log(marks/tmarks);
    return marks/tmarks * 100;
}