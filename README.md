# To properly run aplication you should follow this steps:

## Requirements
To run this project you should have:
- [node js](https://nodejs.org/en/download/)
- [git](https://git-scm.com/downloads)
- [docker](https://www.docker.com/get-started)

## Clone project
- Clone throught HTTPS.
```shell
    $ cd ~/Desktop
    $ git clone https://github.com/jotthyr/playbook.git playbook
```
## Running up the project
> After installation required [software](https://nodejs.org/) and cloning the project you should choose way:

# Docker way

### Starting docker container

- Open console. Make sure that you are in the project folder:
```shell
    $ docker build -t mumin .

```

```shell
    $ docker run -p 8080:8080 mumin

```

# Straight way

### Install dependencies

- Open console. Make sure that you are in the project folder
```shell
    $ npm i

```
### Running and building client

- To spinup the client you should:
```shell
    $ npm start
```
>After executing all mandatory things, application should work on the browser after typing localhost:8080

### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```
