export const isIOS = () => {
  var userAgent = navigator?.userAgent || navigator?.vendor;

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return true;
  }

  return false;
};
