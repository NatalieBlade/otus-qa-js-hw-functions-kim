export const kolobok = (name) => {
  let resultPhrase;
  switch(name) {
    case 'Дедушка':
      resultPhrase = 'Я от дедушки ушёл';
      break;
    case 'Заяц':
      resultPhrase = 'Я от зайца ушёл';
      break;
    case 'Лиса':
      resultPhrase = 'Меня съели';
      break;
  }
  return resultPhrase;
}

export const newYear = (name) => {
  let resultName;
  switch(name) {
    case 'Дед Мороз':
      resultName = 'Дед Мороз';
      break;
    case 'Снегурочка':
      resultName = 'Снегурочка';
      break;
    }

  return `${resultName}! ${resultName}! ${resultName}!`;
}
