var values = (function() {
    var premium = 750,
        excess = 500,
        insuredValue = 10000,
        MIN_PREM = 100,
        MIN_DISCOUNT = 10,
        MAX_DISCOUNT = 30;
        
    return {
        setPremium : function(newPrem) {
            var slider2 = $("#slider2");
            
            premium = newPrem;
            $("#premium").text("$" + premium);
        },
        setValue : function(newValue, fromSlider) {
                var min, 
                    max;
                    
                if (fromSlider) {    
                    this.setPremium(Math.round(newValue/insuredValue * premium));
                }
                    
                insuredValue = newValue;
                $("#value").text("$" + insuredValue);                                                                 
        },   
        //change insured value by a small random amount
        varyValue : function() {
            var min, max;
        
            insuredValue += -400 + Math.round(Math.random() * 800);
            min = Math.round(0.8 * insuredValue);
            max = Math.round(1.2 * insuredValue);
            
            $("#value").text(translations.getTranslation("calculating.new.insured.value.text")).delay(2000).fadeOut("slow", function() {
                $("#value").text("$" + insuredValue).fadeIn("slow");                          
                $("#slider2").slider("option", "min", min).slider("option", "max", max)
                    .slider("option", "step", Math.round((max - min)/16)).slider("value", insuredValue);
            });                       
        },
        //reduce premium by a small random amount
        discountPremium : function() {
            var newPrem = 0;
            if (premium > 0) {
                newPrem = premium - (MIN_DISCOUNT + Math.floor(Math.random() * (MAX_DISCOUNT - MIN_DISCOUNT)));
            }
            this.setPremium(newPrem > MIN_PREM ? newPrem : MIN_PREM);
            return premium;
        },
        getPremium : function() {
            return premium;
        },
        setPremiumForExcess : function(newExcess) {
            this.setPremium(Math.round(excess/newExcess * premium));
            excess = newExcess;
        },
        calculateAndDisplayNewPremium : function(callback) {
            var premiumTag = $("#premium"),
                bubble = $("#bubble");
            bubble.hide();
            
            var oldPremium = values.getPremium(),
                newPremium = values.discountPremium();
                
            premiumTag.text(translations.getTranslation("calculating.new.premium.text")).css("font-size", "2em");
            
            premiumTag.fadeOut('slow', function() {
                premiumTag.text("$" + premium);
                premiumTag.css("font-size", "6em").fadeIn("slow", function() {
                    if (callback) {
                        callback();
                    }
                });
                bubble.html(translations.getTranslation("you.saved.text") + "<br/>$" + (oldPremium - newPremium) + "!").show()
                    .delay(3000).fadeOut('slow');
            });   
        }        
    };
}());