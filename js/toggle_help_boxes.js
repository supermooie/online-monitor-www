//Toggle Help boxes
function ShowHelpBoxes() {

  $('.help-link').click(function() {

    linkId = this.id;

    $('#' + linkId + '-text').fadeIn();
    get_help_text(linkId);
    return false;
    });

}

function HideHelpBoxes() {

  $('.close-div a').click(function() {
    divId = $(this).parents('.help-toggle');
    $(divId).hide();
    return false;
    });

}

//function to load help text into appropriate p element
function get_help_text(linkID) {

  switch (linkId) {

    case 'help-time':
      helpString = '<h2>Lorem ipsum</h2><br /> dolor sit amet, consectetur adipiscing elit. Nullam nec mauris leo, eleifend consequat nulla. Nunc consequat fringilla lorem ac condimentum. Phasellus non dolor et nisi aliquam sollicitudin. Nullam consectetur ultricies mollis. Etiam lobortis arcu enim, ac auctor lorem. Donec vel lacus et felis eleifend vulputate. Integer non risus quis tortor convallis hendrerit et vitae ipsum. Mauris venenatis varius vulputate. Vestibulum risus sapien, aliquam sit amet congue quis, pellentesque sit amet nibh. Nunc pulvinar tincidunt risus ac fringilla. Nulla eget lorem eget augue molestie pellentesque. Nam id nisi purus, id egestas ipsum. Quisque dignissim orci a risus pharetra eu vulputate nulla dapibus. Aliquam laoreet porttitor ipsum, vitae consequat tortor facilisis eget. Fusce convallis enim et augue vehicula eu lobortis purus pretium.';
      break;
 
    case 'help-status':
      helpString = '<h2>Lorem ipsum</h2><br /> dolor sit amet, consectetur adipiscing elit. Nullam nec mauris leo, eleifend consequat nulla. Nunc consequat fringilla lorem ac condimentum. Phasellus non dolor et nisi aliquam sollicitudin. Nullam consectetur ultricies mollis. Etiam lobortis arcu enim, ac auctor lorem. Donec vel lacus et felis eleifend vulputate. Integer non risus quis tortor convallis hendrerit et vitae ipsum. Mauris venenatis varius vulputate. Vestibulum risus sapien, aliquam sit amet congue quis, pellentesque sit amet nibh. Nunc pulvinar tincidunt risus ac fringilla. Nulla eget lorem eget augue molestie pellentesque. Nam id nisi purus, id egestas ipsum. Quisque dignissim orci a risus pharetra eu vulputate nulla dapibus. Aliquam laoreet porttitor ipsum, vitae consequat tortor facilisis eget. Fusce convallis enim et augue vehicula eu lobortis purus pretium.';
      break;

    case 'help-today':
      helpString = '<h2>Lorem ipsum</h2><br /> dolor sit amet, consectetur adipiscing elit. Nullam nec mauris leo, eleifend consequat nulla. Nunc consequat fringilla lorem ac condimentum. Phasellus non dolor et nisi aliquam sollicitudin. Nullam consectetur ultricies mollis. Etiam lobortis arcu enim, ac auctor lorem. Donec vel lacus et felis eleifend vulputate. Integer non risus quis tortor convallis hendrerit et vitae ipsum. Mauris venenatis varius vulputate. Vestibulum risus sapien, aliquam sit amet congue quis, pellentesque sit amet nibh. Nunc pulvinar tincidunt risus ac fringilla. Nulla eget lorem eget augue molestie pellentesque. Nam id nisi purus, id egestas ipsum. Quisque dignissim orci a risus pharetra eu vulputate nulla dapibus. Aliquam laoreet porttitor ipsum, vitae consequat tortor facilisis eget. Fusce convallis enim et augue vehicula eu lobortis purus pretium.';
      break;

    case 'help-tomorrow':
      helpString = '<h2>Lorem ipsum</h2><br /> dolor sit amet, consectetur adipiscing elit. Nullam nec mauris leo, eleifend consequat nulla. Nunc consequat fringilla lorem ac condimentum. Phasellus non dolor et nisi aliquam sollicitudin. Nullam consectetur ultricies mollis. Etiam lobortis arcu enim, ac auctor lorem. Donec vel lacus et felis eleifend vulputate. Integer non risus quis tortor convallis hendrerit et vitae ipsum. Mauris venenatis varius vulputate. Vestibulum risus sapien, aliquam sit amet congue quis, pellentesque sit amet nibh. Nunc pulvinar tincidunt risus ac fringilla. Nulla eget lorem eget augue molestie pellentesque. Nam id nisi purus, id egestas ipsum. Quisque dignissim orci a risus pharetra eu vulputate nulla dapibus. Aliquam laoreet porttitor ipsum, vitae consequat tortor facilisis eget. Fusce convallis enim et augue vehicula eu lobortis purus pretium.';
      break;

    default:
      helpString = 'No information currently available.';
      break;

  }

  $('#' + linkId + '-text > p').html(helpString);

}


$(document).ready(function() {

  ShowHelpBoxes();
  HideHelpBoxes();

});
