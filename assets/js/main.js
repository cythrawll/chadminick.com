/**
 * Created by cythrawll on 4/26/14.
 */
$(document).ready(function() {
    $(".sicons").tooltip();
    $(".pager .disabled").click(function(e) { event.preventDefault(); return false });
});