$(function() {
    var a = location.search.substring(1).split(/[=,&]/);
    var para = a[1];
    console.log(para);
    
switch (para) {
 case "1":
 $('.buttonList button:nth-of-type(1)').css('background-color','#6084af');
break;   
 case "5":
 $('.buttonList button:nth-of-type(2)').css('background-color','#6084af');
break;   
 case "9":
 $('.buttonList button:nth-of-type(3)').css('background-color','#6084af');
break;   
 case "13":
 $('.buttonList button:nth-of-type(4)').css('background-color','#6084af');
break;   
 case "17":
 $('.buttonList button:nth-of-type(5)').css('background-color','#6084af');
break;   
 case "21":
 $('.buttonList button:nth-of-type(6)').css('background-color','#6084af');
break;   
 default:
 $('.buttonList button:nth-of-type(1)').css('background-color','#6084af');
break;
}
    
})