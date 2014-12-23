function convert(number, radix) {
    return number.toString(radix);
}
var targetRadix = [2, 8, 10, 16];
var tpl = baidu.template('t:result');
document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();      
    var radix = parseInt($('#radix').val(), 10);
    var number = parseInt($('#number').val(), radix);
    var $result = $('#result');

    $result.empty();
    for (var i = 0; i < targetRadix.length; i++) {
        var html = tpl({
            number: convert(number, targetRadix[i]),
            radix: targetRadix[i]
        });
        $result.append(html);
    }
}, false);