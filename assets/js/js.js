document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('cart-hplus').addEventListener('submit', estimateTotal);

    function estimateTotal(event) {
        event.preventDefault();
        var x = parseInt(document.getElementById("myBtn").value, 10) || 0
            , y = parseInt(document.getElementById("myBtn2").value, 10) || 0
            , z = parseInt(document.getElementById("myBtn3").value, 10) || 0
            , state = document.getElementById('bezorging').value;
        var totalQty = Number(x) + Number(y) + Number(z);
        var kosten = 0;
        var estimate = 0;
        var check = 0;
        if (state == 'postnl') {
            kosten = 12.44;
        }
        if (state == 'dhl') {
            kosten = 28.50;
        }
        if (state == 'rascal') {
            kosten = 122.40;
        }
        estimate = kosten + ((18.35 * x) + (55.12 * y) + (27.35 * z));
        if (document.getElementById("myCheck1").checked) {
            //check = totalQty * 3.25;
            //estimate += check;
            estimate += (3.25 * totalQty);
        }
        if (document.getElementById("myCheck2").checked) {
            //check = totalQty * 1.85;
            //estimate += check;
            estimate += (1.85 * totalQty);
        }
        document.getElementById('txt-estimate').value = estimate.toFixed(2);
    }
});