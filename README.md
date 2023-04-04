# Vue-laravel-docker-template

## Предварительные требования

### Установите docker и docker compose

### Заполните файлы переменных окружения в папке configs 

1) Для клиента в папке /configs/client создайте файл .env (В режиме разработки .env.dev) и заполните по аналогии с файлом .env.example

2) Сделайте по аналогии в папке сервера (/configs/server) и в папке общих конфигов (/configs)

### Необходимо устанавить либо сгенерировать переменную окружения API_KEY для сервера (/configs/server). Чтобы сгенерировать (после запуска проекта т.к sail не работает пока проект не запущен):

1) Перейдите в терминале в папку сервера:

```bash
cd server
```

2) Cгенерируйте:

```bash
./sail php artisan key:generate
```

В режиме разработки замените sail на sail-dev в вышеуказанной команде

Если не получается сгенерировать переменную окружения API_KEY через вышеуказанные команды, тогда вы можете попробовать сгенерировать ключ онлайн, введя в гугле что-нибудь такое "laravel generate api key online"




## Запуск 

```bash
./restart-dev.sh # dev mode
```

<br/>

```bash
./restart.sh # prod mode
```

## Инструменты разработки

Для облегчения работы с Mysql в режиме разработки - phpmyadmin доступен в http://localhost:DOCKER_PORT/pma/:

Для облегчения работы с Laravel (https://laravel.com/docs/sail) в docker контейнере:

1) Перейдите в терминале в папку сервера:

```bash
cd server
```

2) Пропишете нужную команду для сервера:

```bash
./sail your_command # например ./sail php artisan make:controller YourController
```

В режиме разработки замените sail на sail-dev в вышеуказанной команде

Также для облегчения работы с Vue (только в режиме разработки) в docker контейнере:

1) Перейдите в терминале в папку клиента:

```bash
cd client
```

2) Пропишете нужную команду для клиента:

```bash
./cli your_command # например ./cli npm i axios
```

