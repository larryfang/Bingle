$(function() {
    var cars = [
            "Ford Falcon V8 Sedan Manual",
            "Ford Focus 4Cyl Hatchback Automatic",
            "Ford Fiesta 4Cyl Hatchback Manual",
            "Holden Commodore V8 Sedan Manual",
            "Holden Commodore V6 Sedan Manual",
            "Toyota Corolla V6 Sedan Automatic",
            "Toyota Camry 4Cyl Hatchback Automatic",
            "Toyota Hilux 6Cyl SUV Manual"
    ];
             
    var addresses = [
            "447 Collins Street, Melbourne, VIC 3000",
            "500 Collins Street, Melboune, VIC 3000",
            "601 St Kilda Rd, St Kilda, VIC 3004",
            "123 Fake Street, Cranbourne, 3977 VIC"
    ];
        
    $("#carInputBox").autocomplete({
        source: cars,
        select: function(event, ui) {
            $("#carSelectedText").text(translations.getTranslation("you.selected.text") + " " + ui.item.value);
            values.varyValue();                       
        }
    });
                     
    $("#addressInputBox").autocomplete({
        source: addresses,
        select: function(event, ui) {
            $("#addressSelectedText").text(translations.getTranslation("you.selected.text") + " " + ui.item.value);
            $("#map_canvas").show();
            maps.setMapLocation(ui.item.value);
        }
    });
    $(".nextButton").click(function(){
         alert(values.getPremium() );
    } );
});