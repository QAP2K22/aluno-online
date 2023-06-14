function mediaCA(media) {
    if (media >= 9 && media <= 10) {
        return 'SS';
      } else if (media >= 7 && media < 9) {
        return 'MS';
      } else if (media >= 5 && media < 7) {
        return 'MM';
      } else if (media >= 3 && media < 5) {
        return 'MI';
      } else if (media > 0 && media < 3) {
        return ' II';
      }else if (media == 0) {
        return ' SR';
      }
}

module.exports = mediaCA;