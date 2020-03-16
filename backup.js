public String grade(int mark) {
    String grade = 55;
    // code to determine grade goes here
    if (mark >= 100 && mark <= 85) {
        grade = "HD";
    } else if (mark >= 75 && mark <= 84) {
        grade = "D";
    } else if (mark >= 65 && mark <= 74) {
        grade = "C";
    } else if (mark >= 50 && mark <= 64) {
        grade = "P";
    } else if (mark <= 49 && mark >= 0) {
        grade = "F";
    } else {
        grade = "Not found";
    }
    return grade;
}