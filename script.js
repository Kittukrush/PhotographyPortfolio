(function($) { "use strict";

	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px",
		t.style.top = n.clientY + "px",
		e.style.left = n.clientX + "px",
		e.style.top = n.clientY + "px",
		i.style.left = n.clientX + "px",
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }


	//About page

	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
	});


	//Contact page

	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
	});


	//Wedding portfolio page

	$(".Wedding").on('click', function () {
		$("body").addClass("Wedding-on");
	});
	$(".Wedding-close").on('click', function () {
		$("body").removeClass("Wedding-on");
	});


	//Model portfolio page

	$(".Model").on('click', function () {
		$("body").addClass("Model-on");
	});
	$(".Model-close").on('click', function () {
		$("body").removeClass("Model-on");
	});


	//Nature portfolio page

	$(".nature").on('click', function () {
		$("body").addClass("nature-on");
	});
	$(".nature-close").on('click', function () {
		$("body").removeClass("nature-on");
	});

	
	// <!-- JavaScript for Responsiveness -->
	// <script>
	//   function adjustFooter() {
	// 	const footer = document.getElementById("responsiveFooter");
	
	// 	if (window.innerWidth <= 768) {
	// 	  // For small screens (tablets and phones)
	// 	  footer.style.fontSize = "0.8rem";
	// 	  footer.style.padding = "10px";
	// 	  footer.style.textAlign = "center";
	// 	} else if (window.innerWidth <= 1024) {
	// 	  // For medium screens (small laptops)
	// 	  footer.style.fontSize = "0.9rem";
	// 	  footer.style.padding = "15px";
	// 	  footer.style.textAlign = "center";
	// 	} else {
	// 	  // For large screens (desktops)
	// 	  footer.style.fontSize = "1rem";
	// 	  footer.style.padding = "20px";
	// 	  footer.style.textAlign = "center";
	// 	}
	//   }
	
	//   // Initial adjustment when the page loads
	//   adjustFooter();
	
	//   // Adjust on window resize
	//   window.addEventListener("resize", adjustFooter);
	// </script>
	


	window.addEventListener('resize', function () {
		const footer = document.getElementById("responsiveFooter");
		if (window.innerWidth <= 768) {
			footer.style.fontSize = "0.8rem";
			footer.style.padding = "10px";
		} else if (window.innerWidth <= 1024) {
			footer.style.fontSize = "0.9rem";
			footer.style.padding = "15px";
		} else {
			footer.style.fontSize = "1rem";
			footer.style.padding = "20px";
		}
	});
	

})(jQuery);