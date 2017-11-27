// Call of all the function
window.onload = function() {
    myFunction();
    openMenu();
    showPortfolioFromSkills()
    showPortfolio();
    showSkills();
    showHeaderFromSkills();
};
// Open burger Menu
function openMenu() {
  document.getElementById("nav-icon1").onclick = function() {
    if ( document.getElementById("onClickShow").className == "close") {
      document.getElementById("onClickShow").className = "openMenu";
      // Add responsiveness to the menu animation
      if (screen.width < 768) {
        $("#onClickShow").animate({width: 180}, {duration: "slow"});
      } else {
        $("#onClickShow").animate({width: 640}, {duration: "slow"});
      }
    } else {
      $("#onClickShow").animate({width: 0}, {duration: 500});
      document.getElementById("onClickShow").className = "close";
    }
  };
}
// Animate burger Menu
$(document).ready(function(){
	$('#nav-icon1').click(function() {
		$(this).toggleClass('open');
	});
});
// Header Menu
//_________________________________
// Show skills from menu
function showSkills() {
  document.getElementById("openSkills").onclick = function() {
    if ( document.getElementById("skills").className == "close") {
        // Close the burger menu before changing the page
        $('#nav-icon1').removeClass('open');
        $('#onClickShow').removeClass('openMenu');
        $("#onClickShow").addClass('close');
        $("#onClickShow").animate({width: 0}, {duration: "slow"});
        //Animation for the page when showing
        $("#hideHeader").hide(300);
        $("#skills").fadeIn(1000);
        $("#html5").show(1400);
        $("#js").show(1700);
        $("#css3").show(1900);
        $(".skillbar").fadeIn(1900);
        $("#skillsHeader").fadeIn(1700);
        $("#textSkills").fadeIn(1800);
    } else {
        $("#skills").hide(500);
        $("#hideHeader").show(500);
    }
  };
}
// Show the about page from menu
(function showAbout() {
  document.getElementById("openAbout").onclick = function() {
        $('#nav-icon1').removeClass('open');
        $('#onClickShow').removeClass('openMenu');
        $("#onClickShow").addClass('close');
        $("#onClickShow").animate({width: 0}, {duration: "slow"});
        //Animation for the page when showing
        $("#hideHeader").hide(300);
        $("#about").fadeIn(1000);
  };
}());
// Show Portfolio from menu
function showPortfolio() {
    document.getElementById("openPortfolio").onclick = function() {
      $('#nav-icon1').removeClass('open');
      $('#onClickShow').removeClass('openMenu');
      $("#onClickShow").addClass('close');
      $("#onClickShow").animate({width: 0}, {duration: "slow"});
      // Gotta add and hide the div to fadeIn in Flex
      $("#Portfolio").css("display", "flex").hide().fadeIn(1000);
      $("#hideHeader").hide(500);
  };
};
// Menu from Portfolio page
//_________________________________
(function showHeaderFromPortfolio() {
    document.getElementById("logo-portfolio").onclick = function() {
      $("#hideHeader").fadeIn(1000);
      $("#Portfolio").hide(500);
  };
}());
(function showHomeFromPortfolio() {
    document.getElementById("homeFromPortfolio").onclick = function() {
      $("#hideHeader").fadeIn(1000);
      $("#Portfolio").hide(500);
  };
}());
(function showSkillsFromPortfolio() {
    document.getElementById("skillsFromPortfolio").onclick = function() {
      $("#Portfolio").hide(500);
      $("#skills").fadeIn(1000);
      $("#html5").show(1400);
      $("#js").show(1700);
      $("#css3").show(1900);
      $(".skillbar").fadeIn(1900);
      $("#skillsHeader").fadeIn(1700);
      $("#textSkills").fadeIn(1800);
  };
}());
(function showHomeFromPortfolio() {
    document.getElementById("aboutFromPortfolio").onclick = function() {
      $("#about").fadeIn(1000);
      $("#Portfolio").hide(500);
  };
}());
// Menu from skills page
//_________________________________
function showHeaderFromSkills() {
    document.getElementById("logo-skills").onclick = function() {
      $("#hideHeader").fadeIn(1000);
      $("#skills").hide(500);
  };
}
(function showHomeFromSkills() {
    document.getElementById("homeFromSkills").onclick = function() {
      $("#skills").hide(500);
      $("#hideHeader").fadeIn(1000);
  };
}());
function showPortfolioFromSkills() {
    document.getElementById("openPortfolioSkills").onclick = function() {
      $("#Portfolio").css("display", "flex").hide().fadeIn(1000);
      $("#skills").hide(500);
  };
}
(function showAboutFromSkills() {
    document.getElementById("aboutFromSkills").onclick = function() {
      $("#skills").hide(500);
      $("#about").fadeIn(1000);
  };
}());
// Menu from About page
//_________________________________
(function showHeaderFromAbout() {
    document.getElementById("logo-about").onclick = function() {
      $("#hideHeader").fadeIn(1000);
      $("#about").hide(500);
  };
}());
(function homeFromAbout() {
    document.getElementById("homeFromAbout").onclick = function() {
      $("#hideHeader").css("display", "flex").hide().fadeIn(1000);
      $("#about").hide(500);
  };
}());
(function portfolioFromAbout() {
    document.getElementById("portfolioFromAbout").onclick = function() {
      $("#Portfolio").css("display", "flex").hide().fadeIn(1000);
      $("#about").hide(500);
  };
}());
(function skillsFromAbout() {
    document.getElementById("skillsFromAbout").onclick = function() {
      $("#about").hide(500);
      $("#skills").fadeIn(1000);
      $("#html5").show(1400);
      $("#js").show(1700);
      $("#css3").show(1900);
      $(".skillbar").fadeIn(1900);
      $("#skillsHeader").fadeIn(1700);
      $("#textSkills").fadeIn(1800);
  };
}());
// Fonction pour l'animation des bars de skills
function loadanim () {
  jQuery(document).ready(function(){
    jQuery('.skillbar').each(function(){
      jQuery(this).find('.skillbar-bar').animate({
      width:jQuery(this).attr('data-percent')
      },2000);
    });
  });
}
// Loader before front page
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
  $("#loader").fadeOut();
  if (screen.width > 768) {
    $("#hideHeader").fadeIn();
  } else {
    $("#mobile").fadeIn();
  }
}
