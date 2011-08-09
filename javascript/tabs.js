$(function() {  
    var tabEverSelected = {};
    
    tabIndex = {
        car : 0,
        drivers : 1,
        address : 2,
        quote : 3,
        extras : 4,
        sliders : 5,
        purchase: 6
    };
       
    $("#tabs").tabs({disabled: [tabIndex.quote, tabIndex.extras, tabIndex.sliders, tabIndex.purchase]}).tabs({
        selected: 0,
        select: function(event, ui) {
            var id = $("#tabs").tabs("option", "selected");
            tabEverSelected[id] = true
        }});
                            
    $("#purchaseButton").click(function() {
        $("#tabs").tabs({
            disabled: [tabIndex.purchase],
            selected: tabIndex.extras
        });
    });
    
    $(".nextButton").click(function() {
        var selected = $("#tabs").tabs("option", "selected");
        $("#tabs").tabs("select", selected + 1);
        values.calculateAndDisplayNewPremium();
    });
    
    $("#toBuyButton").click(function() {
        $("#finalPremiumAmount").text("$" + values.getPremium());
        $("#tabs").tabs({
            disabled: [],
            selected: tabIndex.purchase
        });
    });
    
    $("#getQuoteButton").click(function () {
        values.calculateAndDisplayNewPremium(function () {
            $("#quickQuoteAmount").text("$" + values.getPremium());
            $("#tabs").tabs({
                disabled: [tabIndex.extras, tabIndex.sliders, tabIndex.purchase],
                selected: tabIndex.quote
            });
        });     
    });
   
    $("#tabs-car-header").hover(function() {
        var car = $("#carSelectedText").text(),
            tabSelected = $("#tabs").tabs("option", "selected");
        if (car && tabSelected !== tabIndex.car) {
            $("#tabs-car-hover").html(car).show();
        }
    }, function() {
        $("#tabs-car-hover").hide();
    });
    
    $("#tabs-address-header").hover(function() {
        var address = $("#addressSelectedText").text(),
            tabSelected = $("#tabs").tabs("option", "selected");
        if (address && tabSelected !== tabIndex.address) {
            $("#tabs-address-hover").html(address).show();
        }
    }, function() {
        $("#tabs-address-hover").hide();
    });
    
    $("#tabs-quote-header").hover(function() {
        var quote = values.getPremium(),
            tabSelected = $("#tabs").tabs("option", "selected");
        if (quote && tabSelected !== tabIndex.quote) {
            $("#tabs-quote-hover").html("Quote: $" + quote).show();
        }
    }, function() {
        $("#tabs-quote-hover").hide();
    });
    
    $("#tabs-extras-header").hover(function() {
        var text = "", tabSelected = $("#tabs").tabs("option", "selected"), extras;
        extras = $(".extrasCheckbox:checked");
        
        if (tabSelected !== tabIndex.extras && tabEverSelected[tabIndex.extras]) {
            if (extras.length > 0 ) {
                extras.each(function() {
                    text += $(this).next().children().first().text() + "<br>";
                });
                $("#tabs-extras-hover").html("You selected these extras:<br>" + text).show();
            }
            else {
                $("#tabs-extras-hover").html("You haven't selected any extras").show();
            }
        }  
    }, function() {
        $("#tabs-extras-hover").hide();
    });
        
    $("#tabs-sliders-header").hover(function() {
        var excess, value, tabSelected;
        excess = $("#slider").slider("option", "value");
        value = $("#slider2").slider("option", "value");
        tabSelected = $("#tabs").tabs("option", "selected");
        if (excess && value && tabSelected !== tabIndex.sliders && tabEverSelected[tabIndex.sliders]) {
            $("#tabs-sliders-hover").html("Excess: $" + excess + "<br/>Insured Value: $" + value).show();
        }
    }, function() {
        $("#tabs-sliders-hover").hide();
    });
    
    $("#tabs-drivers-header").hover(function() {
        var html = "", ageText, genderText, tabSelected, checked, numOtherDrivers = 0, i = 0;
        ageText = $("#age_question .radio_answer").text();
        genderText = $("#gender_question .radio_answer").text();
        tabSelected = $("#tabs").tabs("option", "selected");
        checked = $("#otherDriversButtons").children().filter(function() {
            return ($(this).hasClass("otherDriversButton") && $(this).next().attr("aria-pressed") === "true");
        });
        if (checked.length > 0) {
            numOtherDrivers = parseInt(checked.first().attr("rel"));
        }
        
        if ((ageText || genderText || numOtherDrivers > 0) && tabSelected !== tabIndex.drivers) {
            html += "Main driver age: " + $("#age_question .radio_answer").text();
            html += "<br/>"
            html += "Main driver gender: " + $("#gender_question .radio_answer").text();
            for (i = 1; i <= numOtherDrivers; i++) {
                html += "<br/>Driver " + i + " age: " + $("#age_question" + i + " .radio_answer").text();
                html += "<br/>Driver " + i + " gender: " + $("#gender_question" + i + " .radio_answer").text();
            }
            $("#tabs-drivers-hover").html(html).show();
        }       
    }, function() {
        $("#tabs-drivers-hover").hide();
    });
});
        