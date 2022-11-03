var input = document.getElementById("input");
var output = document.getElementById("output");



input.onkeyup = function() {
    document.getElementById("result").innerHTML = input.value.toUpperCase().replaceAll("A", "@").replaceAll("B", "3").replaceAll("C", "(")
                              .replaceAll("D", "}").replaceAll("E", "€").replaceAll("F", "F")
                              .replaceAll("G", "G").replaceAll("H", "#").replaceAll("I", "1")
                              .replaceAll("J", "2").replaceAll("K", "K").replaceAll("L", "[")
                              .replaceAll("M", "^").replaceAll("N", "N").replaceAll("O", "0")
                              .replaceAll("P", "9").replaceAll("Q", "Ø").replaceAll("R", ">")
                              .replaceAll("S", "$").replaceAll("T", "7").replaceAll("U", "U")
                              .replaceAll("V", "V").replaceAll("W", "!").replaceAll("X", "X")
                              .replaceAll("Y", "4").replaceAll("Z", "]").replaceAll(" ", " ")
                              .replaceAll(1, "1").replaceAll(2, "2").replaceAll(3, "3")
                              .replaceAll(4, "4").replaceAll(5, "5").replaceAll(6, "6")
                              .replaceAll(7, "7").replaceAll(8, "8").replaceAll(9, "9")
                              .replaceAll(0, "0")
}

output.onkeyup = function() {
    document.getElementById("result").innerHTML = output.value.toUpperCase().replaceAll( "@","A").replaceAll("3", "B").replaceAll("(", "C")
                            .replaceAll("}", "D").replaceAll("€","E").replaceAll("F", "F")
                            .replaceAll("G", "G").replaceAll( "#","H").replaceAll("1","I")
                            .replaceAll("2","J").replaceAll("K", "K").replaceAll( "[","L")
                            .replaceAll("^","M").replaceAll("N","N").replaceAll("0","O")
                            .replaceAll("9","P").replaceAll("Ø","Q").replaceAll(">","R")
                            .replaceAll("$","S").replaceAll("7","T").replaceAll("U","U")
                            .replaceAll("V", "V").replaceAll("!","W", ).replaceAll("x","X", )
                            .replaceAll("4","Y",).replaceAll( "]","Z").replaceAll(" ", " ")
                        
}