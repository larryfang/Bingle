$(function() {
    $("#slider").slider({
		orientation: "horizontal",
        range : "min",
		min: 250,
		max: 1000,
		value: 500,
		step: 50,
        slide: function(event, ui) {
            $("#excess").html("$" + ui.value);
        },
		change: function(event, ui) {
            values.setPremiumForExcess(ui.value);
        }
	});
    
    $("#slider2").slider({
        orientation : "horizontal",
        range : "min",
		min: 8000,
		max: 12000,
		value: 10000,
		step: 250,
        slide: function(event, ui) {
            $("#value").text("$" + ui.value);
        },
		change: function(event, ui) {
            values.setValue(ui.value, true);
        }
	});
});