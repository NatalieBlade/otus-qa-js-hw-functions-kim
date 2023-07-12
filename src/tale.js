export const kolobok = (name) => {
  switch(name) {
    case 'Дедушка':
        console.log('Я от дедушки ушёл');
        break;
    case 'Заяц':
        console.log('Я от зайца ушёл');
        break;
    case 'Лиса':
        console.log('Меня съели');
        break;
  }
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

  console.log(`${resultName}! ${resultName}! ${resultName}!`);
}
