export function dateFormatter(timestamps){
  let date = timestamps.getFullYear() + "-" +
    ("00" + (timestamps.getMonth() + 1)).slice(-2) + "-" +
    ("00" + timestamps.getDate()).slice(-2) + " " +
    ("00" + timestamps.getHours()).slice(-2) + ":" +
    ("00" + timestamps.getMinutes()).slice(-2) + ":" +
    ("00" + timestamps.getSeconds()).slice(-2)

    return date
}

export function getFullDate(dateString){
  return new Date(dateString.replace(' ', 'T'));
}
