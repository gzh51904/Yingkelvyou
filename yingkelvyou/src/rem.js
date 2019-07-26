function resetWidth() {
    var baseWidth = document.documentElement.clientWidth || document.body.clientWidth;
    //            console.log(baseWidth);          
    document.documentElement.style.fontSize = baseWidth / 375 * 37.5 + 'px'
}       
resetWidth();      
 window.addEventListener('resize', function () {
    resetWidth();       
})

