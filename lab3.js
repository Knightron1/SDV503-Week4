
 const mark = 100;
    switch (mark){

        case (100>=mark>=85):
            grade="A+";
            console.log( "High Distinction!");
            break;
        case 84>=mark>=80:
            grade="A";
            console.log( "High Distinction!");
            break;
        case 79>=mark>=75:
            grade="A-";
            console.log( "High Distinction!");  
            break;
        case 74>=mark>=70:
            grade="B+";
            console.log('B+');
            break;
        case 69>=mark>=65:
            grade="B";
            console.log(grade);
            break;
        case (64>=mark>=60):
            grade="B-";
            console.log(grade);
            break;
        case (mark>=55 && mark<=59):
            grade="C+";
            console.log(grade);
            break;
        case (mark>=50 && mark<=54):
            grade="C";
            console.log(grade);
            break;
        case (mark>=40 && mark<=49):
            grade="D";
            console.log(grade);
            break;
        case (mark>=39 && mark<=0):
            grade="E";
            console.log(grade);
            break;
        default:
            console.log('You did not complete the course')
            break;
        
    }

