var main = function () {
    var toDos = ["Get groceries",
        "Make up some new ToDos",
        "Prep for Monday's class",
        "Answer emails",
        "Take Gracie to the park",
        "Finish writing this book"];

    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);

        // create a click handler for this element
        $element.on("click", function () {
            var $content,
                $input,
                $button,
                i;

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                // newest first, so we have to go through
                // the array backwards
                $content = $("<ul>");
                for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                // oldest first, so we go through the array forwards
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
            } else if ($element.parent().is(":nth-child(3)")) {
                // input a new to-do
                $input = $("<input>"),
                $button = $("<button>").text("+");

                $button.on("click", function () {
                    if ($input.val() !== "") {
                        toDos.push($input.val());
                        $input.val("");
                    }
                });

                $content = $("<div>").append($input).append($button);
                /* Alternatively append() allows multiple arguments so the above
                can be done with $content = $("<div>").append($input, $button); */
            } else if ($element.parent().is(":nth-child(4)")) {

                var screenshots = [{"href": "images/screenshot1.png", "text": "Newest Screenshot", "title": "Newest Tab Screenshot"},
                    {"href": "images/screenshot2.png", "text": "Oldest Screenshot", "title": "Oldest Tab Screenshot"},
                    {"href": "images/screenshot3.png", "text": "Add Screenshot", "title": "Add Tab Screenshot"},
                    {"href": "images/screenshot4.png", "text": "Demostration Screenshot", "title": "Demonstration Tab Screenshot"}];

                /* list of images */
                $content = $("<ul>");

                screenshots.forEach(function (screenshot) {
                    $content.append($("<li>").append( $('<a class="group1 cboxElement">').text(screenshot.text).attr("href", screenshot.href).attr("title", screenshot.title) ));
                });
            }

            $("main .content").append($content);

            /* Activate Colorbox - This must be activated after $content is appened */
            if ($element.parent().is(":nth-child(4)")) {
                $(".group1").colorbox({opacity:0.5,rel:'group1',slideshow:true});
            }

            return false;
        });
    });

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(function() {
    main();
});   