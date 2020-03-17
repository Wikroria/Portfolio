/*new fullpage('#fullpage',{
    anchors: ['firstPage'],
    autoScrolling: true,
    scrollOverflow: true,
})*/

var myFullpage = new fullpage('#fullpage', {
    anchors: ['firstPage', 'secondPage', '3rdPage',],
    scrollOverflow: true,
    navigation: true,
    navigationPosition: 'right',
    easingcss3: 'ease',
});