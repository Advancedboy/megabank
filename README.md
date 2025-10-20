# 🏦 MegaBank

**MegaBank** — это фулл-стэк банковская платформа, созданная на **Next.js** и **Express**, с использованием **PostgreSQL**, **MongoDB** и **Redis**.  
Проект демонстрирует архитектуру современного банковского приложения: авторизация, управление пользователями, транзакции, кеширование и интеграция нескольких БД.

---

## 🚀 Технологический стек

### **Frontend**

- [Next.js 15+](https://nextjs.org) (React, App Router)
- TypeScript
- Tailwind CSS / shadcn/ui

### **Backend**

- [Express.js](https://expressjs.com)
- TypeScript
- Prisma ORM (PostgreSQL)
- Mongoose (MongoDB)
- ioredis (Redis)
- JWT + bcrypt для авторизации

### **Базы данных**

- PostgreSQL — основная база (пользователи, транзакции)
- MongoDB — вторичные данные (логи, история операций)
- Redis — кеширование и хранение сессий

### **Инфраструктура**

- Docker + Docker Compose
- Node.js 20+
- .env конфигурация для гибкой настройки

---

## 📁 Структура проекта

megabank/
│
├── backend/
│ ├── src/
│ │ ├── index.ts # Точка входа Express API
│ │ ├── routes/ # Маршруты (users, auth, payments)
│ │ ├── controllers/ # Логика обработки запросов
│ │ ├── db/ # Подключения к PostgreSQL, MongoDB, Redis
│ │ ├── middleware/ # Middleware (auth, error handling)
│ │ └── config/ # env и конфигурации
│ ├── prisma/schema.prisma # Схема БД PostgreSQL
│ └── Dockerfile
│
├── frontend/
│ ├── app/ # Next.js App Router
│ ├── components/ # UI-компоненты
│ ├── lib/ # API-клиент
│ ├── public/
│ └── Dockerfile
│
├── docker-compose.yml # Запуск всех сервисов
├── .env.example # Образец переменных окружения
├── .gitignore
└── README.md

## ⚙️ Установка и запуск

### 1️⃣ Клонирование проекта

```bash
git clone https://github.com/Advancedboy/megabank.git
cd megabank
```
