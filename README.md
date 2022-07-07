# NewGen Vision
Задание: https://newgen-it.github.io/tests/front  
***npm i && npm start***  
***npm i && npm run start***  
## Решение   
Алгоритм действия функции, которая осуществляет выборку:  
Вход: 
> 1. массив value (диапазон цены курса)
> 2. массив condition (диапазон фильтра)

Действия:
> 1. Нормализация значений (приведение их к типу number)
> 2. Выполняется сравнение двух интервалов (value.start <= condition.end) && (value.end >= condition.start)

Выход:
> результат сравнеие (boolean)  

Далее переберираем курсы и формируем результирующие массивы
