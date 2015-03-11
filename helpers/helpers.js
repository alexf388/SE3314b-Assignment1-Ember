Ember.HandleBars.helper('eachNum', function (context, options) {
    var ret = "";

    for (var i = 0, j = context.length; i < j; i++) {
        //adds the number
        ret = ret + "<td>" + (i + 1) + "</td>";
        ret = ret + options.fn(context[i]);
    }

    return ret;
});