// js
// wow start
wow = new WOW(
{
       boxClass:     'wow',      // default
       animateClass: 'animated', // default
       offset:       0,          // default
       mobile:       true,       // default
       live:         true        // default
                  }
                  )
wow.init();

// wow end

// aos start

      AOS.init({
        easing: 'ease-in-out-sine'
      });

      setInterval(addItem, 300);

      var itemsCounter = 1;
      var container = document.getElementById('aos-demo');

      function addItem () {
        if (itemsCounter > 10) return;
        var item = document.createElement('div');
        item.classList.add('aos-item');
        item.setAttribute('data-aos', 'zoom-out-left');
        item.innerHTML = '<div class="aos-item__inner"><h3>' + itemsCounter + '</h3></div>';
        container.appendChild(item);
        itemsCounter++;
      }

// aos end

// lightbox




// jq

$(document).ready(function(){


//counter_up
$('.counter').counterUp({
    delay: 10,
    time: 1000
});


//counter_360

var countdown =  $("#countdown").countdown360({
       	 	radius      : 60,
         	seconds     : 60,
         	fontColor   : '#FFFFFF',
         	autostart   : false,
         	onComplete  : function () { console.log('done') }
		   });
			countdown.start();
			console.log('countdown360 ',countdown);
		 	$(document).on("click","button",function(e){
		 		e.preventDefault();
		 		var type = $(this).attr("data-type");
		 		if(type === "time-remaining")
		 		{
		 			var timeRemaining = countdown.getTimeRemaining();
		 			alert(timeRemaining);
		 		}
		 		else
		 		{
		 			var timeElapsed = countdown.getElapsedTime();
		 			alert(timeElapsed);
		 		}
		 	});


})

// wowdown

$(document).ready(function(){
     $('#basic').wowdown();
     $('#custom').wowdown({
      background: "#0f37a9",
    active_background:"rgb(149, 211, 255)",
    placeholder_color: "#97bce0",
    placeholder_active_color: "#0f37a9",
    option_color:"#405463",
    vertical_padding: "15px",
    horizontal_padding: "20px",
        intense: false
  });
     $('#intense').wowdown({
                background: "#1d456f",
                active_background: "rgb(135, 142, 144)",
                placeholder_color: "rgb(169, 232, 169)",
                placeholder_active_color: "rgb(169, 232, 169)",
                option_color: "#fff",
                vertical_padding: "15px",
                horizontal_padding: "20px",
                intense: true
            })


});
  function my_callback(value) {
            alert("The value selected is " + value)
        }

// story start

SSG.run({
  imgs: [
    {
      href:'1.jpg',
      alt:'Img caption 1'
    },
    {
      href:'2.jpg',
      alt:'Img caption 2'
    },{
      href:'3.jpg',
      alt:'Img caption 3'
    }

  ],

  imgsPos:'start',

  initImgID: 12

});

