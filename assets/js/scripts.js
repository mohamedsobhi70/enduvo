
if ($(".dark-switch").length > 0) {

    const bodyCont = $("body");
    let darkMode = localStorage.getItem("dark-mode");
    const enableDarkMode = () => {
        bodyCont.addClass("dark");
        localStorage.setItem("dark-mode", "enabled");
    };

    const disableDarkMode = () => {
        bodyCont.removeClass("dark");
        localStorage.setItem("dark-mode", "disabled");
    };

    if (darkMode === "enabled") {
        enableDarkMode(); // set state of darkMode on page load
    }

    $(".dark-switch").on("click", function () {
        darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
        if (darkMode === "disabled") {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    })
}


// ===================================================== 
if ($(".play-overlay").length > 0) {
    $(".play-overlay button").on("click", function () {
        let vid = $(this).closest(".play-overlay").siblings("video");
        $(this).closest(".play-overlay").addClass("hidden")
        vid.trigger('play');
        vid.attr('controls', "true");
    })
}


// ===================================================== 
if ($(".popup").length > 0) {
    $(".popup-btn").on("click", function () {
        $(".popup").addClass("active")
    })
    $(".popup-close-btn").on("click", function () {
        $(".popup").removeClass("active")
        let vid = $(".popup video");
        vid.trigger('pause');
    })
}

if ($(".demo-popup").length > 0) {
    $(".demo-popup-btn").on("click", function () {
        $(".demo-popup").addClass("active")
    })
    $(".demo-popup-close-btn").on("click", function () {
        $(".demo-popup").removeClass("active")
    })
}