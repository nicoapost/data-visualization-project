function transition(element) {
    $('.dataVisualization').fadeOut();
    $(element).delay(400).fadeIn();
}

function bubbleFilter(toThis) {
    console.log('here');
    $('#bubbles').attr('src', `./images/${toThis}.png`).css('max-height', '100%').css('max-width', '100%').css('margin', 'auto');
}