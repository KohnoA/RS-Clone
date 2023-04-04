## Технологии используемые на проекте: 
- React
- React router
- Axios
- Redux(Redux toolkit)
- Typescript
- SCSS(modules)
- Firebase
- Swiper.js
- Eslint, prettier 

## Установка
- Склонировать репозиторий: git clone https://github.com/KohnoA/rs-clone.git
- Перейти в папку с проектом: cd rs-clone
- Перейти в ветку develop: git checkout develop
- Установить зависимости: npm install
- Запустить проект: npm run start

## Функционал приложения:
### Main
- Бесконечный слайдер с предложениями рецептов попадающих под категорию здорового питания. Слайдер реализован при помощи библиотеки Swiper.js
- Блок с информацией о приложении, рассказывающая какой функционал мы предоставляем
- Группы с предложениями рецептов, по приемам пищи
### Calculator
- Реализован функционал, при котором пользователь может ввести свои ингредиенты в форму и получить суммарную информацию о своем рецепте. Такую как: общая калорийность, общее содержание белков, жиров, углеводов, витаминов и т. д. 
- Обработка ошибок сервера и клиента
### Constructor
- Форма для данных о пользователя
- Расчёт количества калорий на день в зависимости от данных введенных пользователем 
- Секция с предложением вариантов блюд подходящих к дневной норме калорий
- Сохранение данных формы при помощи sessionStorage 
### About
- Реализована страница с информацией о разработчиках приложения
### Catalog Recipes 
- Реализован поиск рецепта через инпут в хедере. (При вводе значения на другой странице, перебрасывает на страницу Recipes с искомыми рецептами).
- Реализована возможность добавления рецепта в избранное, при помощи Redux и LocalStorage (для каждого пользователя)
- Динамическая подгрузка рецептов.
- Кнопка "вернуться к началу страницы"
- Обработка ошибок сервера 
- Реализована фильтрация рецептов
- Карточка рецепта содержит картинку и краткую информацию о себе
### Recip
- Реализована страница отдельного рецепта с подробной информацией о себе
### Modal (Sign in / Sign up) 
- Реализовано модальное окно
- Форма регистрации / Форма входа
- Валидация форм
- Авторизация при помощи Firebase / Redux
- Обработка ошибок формы
### Personal Area
- Отображение рецептов добавленных в избранное
- Настройки профиля пользователя
- Список покупки продуктов
- Сохранение профиля и списка покупок в localStorage
### General
- Реализован роутинг по страницам приложения, страница 404, обработка приватных роутов