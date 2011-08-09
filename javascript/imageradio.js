    var makeImageRadio = function(id, selectCallback) {
        $(id + " img").addClass("img_radio");

        $(id + " img").click(function() {
            //deselect all
            $(id + " img").each(function() {
                var src = $(this).attr("src");
                src = src.replace("-selected", "");
                $(this).attr("src", src);
            });
            
            //select the one that was clicked
            var src = $(this).attr("src");
            src = src.replace(".", "-selected.");
            $(this).attr("src", src);
            
            selectCallback(id, $(this));
            
        });
    }
    
    var setSelectedText = function(id, element) {
        $(id + " .radio_answer").text(element.attr("name")); 
    }

$(function() {
    makeImageRadio("#day_store_question", setSelectedText);
    makeImageRadio("#night_store_question", setSelectedText);
    makeImageRadio("#age_question", setSelectedText);
    makeImageRadio("#gender_question", setSelectedText);
});
$.forDisplay = function(target) {
    if (target == null) return 'null';
    if (typeof target.toSource !== 'undefined' && typeof target.callee === 'undefined') {
      return target.toSource().slice(1, -1);
    }
    switch (typeof target) {
      case 'number':
      case 'boolean':
      case 'function':
        return target;
        break;
      case 'string':
        return '\'' + target + '\'';
        break;
      case 'object':
        var result;
        if (target instanceof Date) {
          result = 'new Date(' + target.getTime() + ')';
        }
        else if (target.constructor === Array || typeof target.callee !== 'undefined') {
          result = '[';
          var i, length = target.length;
          for (i = 0; i < length - 1; i++) {
            result += $.forDisplay(target[i]) + ',';
          }
          result += $.forDisplay(target[i]) + ']';
        }
        else {
          result = '{';
          var key;
          for (key in target) {
            result += key + ':' + $.forDisplay(target[key]) + ',';
          }
          result = result.replace(/\,$/, '') + '}';
        }
        return result;
        break;
      default:
        return '?unsupported-type?';
        break;
    }
  };
