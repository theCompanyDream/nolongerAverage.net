module.exports = processSafeError;

function processSafeError(status) {
  var message = '';
  if(typeof status === 'number')
  {
    switch(status)
    {
      case 404:
        message = 'Well this is embarrassing you\'re either not supposed to be here or I made a mistake I\'ll fix this right away';
        break;
      case 500:
        message = "Hey woah this is just not working out this page needs to see other people I'm going to have to leave."
        break;
      case 401:
        message = "Restricted Access you're not allowed to be here"
        break;
      default:
        message = "Yea I don't know what to tell you can't be here";
        break;
    }
  }
  return message;
}
