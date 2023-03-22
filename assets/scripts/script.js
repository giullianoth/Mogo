$(function () {

    // MOBILE MENU
    $(".j_menu_icon").on("click", function () {
        if ($(".j_menu:hidden").length) {
            $(".j_menu").css("display", "block");
        } else {
            $(".j_menu").css("display", "none");
        }
    })

    // SLIDES PROGRESSION
    var sliderBar = $(".j_progressbar");
    var slideTime = 4000;
    var slideTimeTransition = 300;
    var slideControl = 0;

    document.onload = function () {
        $(sliderBar[slideControl]).find(".j_progression").animate({
            width: "100%"
        }, slideTime - slideTimeTransition);
        slideControl++;
    }

    var slideInterval = setInterval(function () {
        
        slideControl = (slideControl == sliderBar.length ? 0 : slideControl);
        sliderBar.find(".j_progression").css("width", "0");

        $(sliderBar[slideControl]).find(".j_progression").animate({
            width: "100%"
        }, slideTime - slideTimeTransition);

        slideControl++;
    }, slideTime);

    // BOX COLLAPSE
    var collapseParagraph = $(".j_collapse_paragraph");
    var collapseClickable = $(".j_collapse_clickable");

    var collapseBoxTotalHeight = (window.outerWidth < 1024 ? $(".j_collapse_image")[0].offsetHeight * 1.5 : $(".j_collapse_image")[0].offsetHeight);
    var collapseClickableTotalHeight = collapseClickable[0].offsetHeight * collapseClickable.length;
    var marginHeight = 14 * (collapseClickable.length - 2);
    var paddingHeight = 24 * 2;

    var collapseParagraphTotalHeight = collapseBoxTotalHeight - collapseClickableTotalHeight - marginHeight - paddingHeight;

    collapseParagraph.css("height", String(collapseParagraphTotalHeight) + "px");

    window.onresize = function () {
        collapseBoxTotalHeight = (window.outerWidth < 1024 ? $(".j_collapse_image")[0].offsetHeight * 1.5 : $(".j_collapse_image")[0].offsetHeight);
        collapseParagraphTotalHeight = collapseBoxTotalHeight - collapseClickableTotalHeight - marginHeight - paddingHeight;
        collapseParagraph.css("height", String(collapseParagraphTotalHeight) + "px");
    };

    collapseClickable.on("click", function () {
        if ($(this).siblings(".j_collapse_textbox:hidden").length) {
            collapseClickable.find(".j_collapse_toggle").addClass("fa-angle-down");
            collapseClickable.find(".j_collapse_toggle").removeClass("fa-angle-up");
            $(this).find(".j_collapse_toggle").addClass("fa-angle-up");
            $(this).find(".j_collapse_toggle").removeClass("fa-angle-down");
            collapseParagraph.parent(".j_collapse_textbox").slideUp();
            $(this).siblings(".j_collapse_textbox:hidden").slideDown();
        }
    })
})