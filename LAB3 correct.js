var mark = 57;
var grade;

if (mark > 100) {console.log('Please choose a mark between 0 and 100')}

if(mark >= 75){
 grade = 1;
} 
else if(mark >= 60){
  grade = 2;
}
else if(mark >= 50){
  grade = 3;
} 
else{
  grade = 4;
}

switch (grade) {
  case(1):
   console.log("Pass with Distinction");
   if( mark >= 85){
     console.log("A+");
   } else if(mark >= 80){
     console.log("A");
   } else {
     console.log("A-");
   }
   break;  
   
   case(2):
   console.log("Pass with Merit");
   if(mark >= 70){
     console.log("B+");
   } else if(mark >= 65){
     console.log("B");
   }else {
     console.log("B-");
   }
   break;
  
   case(3):
    console.log("Pass");
    if(mark >= 55){
      console.log("C+");
    } else{
      console.log("c");
    }
    break;    
    
    case(4):
     console.log("Fail Grades");
     if(mark >= 40){
       console.log("D");
     } else{
       console.log("E");
     }
    break;    
    default:
       console.log("please write a number from 0 to 100")
}