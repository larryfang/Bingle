var translations = (function() {
    var currentLang = "english";

    $(function() {             
        var switchLangTo = function(lang) {
            currentLang = lang;
            $(".i18n").each(function() {
                $(this).text(translations[lang][$(this).attr("name")]);
            });
        };

        $("#english_link").click(function() {
            switchLangTo("english");
        });

        $("#chinese_link").click(function() {
            switchLangTo("chinese");
        });
    });

    return {
        getTranslation : function(string) {
            return this[currentLang][string];
        },
        english : {
            "car.header" : "Car",
            "value.header" : "Insured Value & Flexi Excess",
            "address.header" : "Address",
            "drivers.header" : "Drivers",
            "more.questions.header" : "More Questions",
            "main.driver.age.question" : "Age of main driver:",
            "main.driver.gender.question" : "Gender of main driver:",
            "user.selected.indicator" : "You selected:",
            "car.storage.day.question" : "Where do you store the car during the day?",
            "car.storage.night.question" : "Where do you store the car at night?",
            "car.year" : "Year:",
            "car.make" : "Make:",
            "car.model" : "Model:",
            "car.body" : "Body Type:",
            "car.transmission" : "Transmission:",
            "motor.quote.header" : "Motor Quote",
            "social.networks.header" : "Share these with your friends and get more discounts!",
            "language.menu.header" : "Languages:",
            "flexi.excess.header" : "Flexi-Excess:",
            "current.excess.header" : "Current Excess:",
            "insured.value.question" : "Insured value:",
            "insured.value.header" : "Insured Value:",
            "more.questions.link" : "Show more questions to purchase a policy",
            "calculating.new.premium.text" : "Calculating new premium...",
            "calculating.new.insured.value.text" : "Calculating new insured value...",
            "you.saved.text" : "You Saved",
            "collapse.all.link" : "Collapse all",
            "show.quote.questions.link" : "Show Quote questions only",
            "you.selected.text" : "You selected:"
        },      
        chinese : {
            "car.header" : "汽车",
            "value.header" : "保险额",
            "address.header" : "地址",
            "drivers.header" : "驾驶员",
            "more.questions.header" : "更多问题",
            "main.driver.age.question" : "主驾驶员的年龄:",
            "main.driver.gender.question" : "主驾驶员性别:",
            "user.selected.indicator" : "你选择了:",
            "car.storage.day.question" : "白天你的车停放在哪里？",
            "car.storage.night.question" : "晚上你的车停放在哪里",
            "car.year" : "汽车的年份",
            "car.make" : "汽车制作:",
            "car.model" : "汽车型号:",
            "car.body" : "汽车款式:",
            "car.transmission" : "汽车:",
            "motor.quote.header" : "车的价格",
            "social.networks.header" : "和您的朋友分享，获得更多优惠!",
            "language.menu.header" : "语言:",
            "flexi.excess.header" : "价钱:",
            "current.excess.header" : "目前价钱",
            "insured.value.question" : "更多问题购买保险:",
            "insured.value.header" : "保险金额:",
            "more.questions.link" : "更多问题购买保险",
            "calculating.new.premium.text" : "计算新的保险费用..",
            "calculating.new.insured.value.text" : "计算新的保险金额...",
            "you.saved.text" : "你省了",
            "collapse.all.link" : "打开所有",
            "show.quote.questions.link" : "展示询问问题",
            "you.selected.text" : "你选择了:"
        }
    };
}());