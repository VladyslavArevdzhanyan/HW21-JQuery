// // console.log('5.1 - 5.6')
$(".test").css("color", "red");
$("h2.test").css("color", "red");
$("p + p").css("color", "red")
$("li.www + li").css("color", "red")
$("h2").find("i").css("color", "red")
$("h2 > i").css("color", "red")

// // console.log('6.1 - 6.4')
$("h2:not(.test)").css("color", "red");
$(":header:not(.test)").css("color", "red");
$(":header + :header").css("color", "red")
$(":header.test + :header.test").css("color", "red")