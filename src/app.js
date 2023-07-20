const scores = {
  Natalia: 15,
  Artem: 11,
  Mikhail: 7,
}

/**
 * Функция принимает на вход объект с уcпеваемостью студентов и получает сумму всех баллов.
 * @param scores объект с успеваемостью студентов.
 * @returns сумма всех баллов.
 */
export const getScore = (scores) => {
  const values = Object.values(scores);
  const sum = values.reduce(function (sum, number) {
    return sum + number;
  });
  console.log(sum);
  return sum;
}

getScore(scores);