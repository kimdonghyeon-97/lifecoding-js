
var Body = {
    setColor:function(color){
        /* 
        var target = document.querySelector('body')
        target.style.color= color;
        */
        $('body').css('color', color);
    }
    ,
    setBackGroundColor:function(color){
        /*
        var target = document.querySelector('body')
        target.style.backgroundColor= color;
        */
        $('body').css('backgroundColor', color);
    }

}

var Links = {
    setColor:function(color){
        /* var lilist = document.querySelectorAll('li');
        var i = 0;
        while(i<lilist.length){
            lilist[i].style.color = color;
            i = i + 1;
        }
        */
        $('li').css('color', color);
    }

}

function nightDayHandler(self){
    if (self.value === 'night') {
        Body.setBackGroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('powderblue');

    } else {
        Body.setBackGroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor('blue');
    }
}
