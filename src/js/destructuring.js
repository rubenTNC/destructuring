export const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

export default function destructuring(obj) {
  const result = [];
  let item;
  for (const element of obj.special) {
    if (!Object.prototype.hasOwnProperty.call(element, 'description')) {
      item = element;
      item.description = 'Описание не доступно';
    } else {
      item = element;
    }
    result.push(item);
  }
  return result;
}
