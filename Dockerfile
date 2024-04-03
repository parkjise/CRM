## 공식 Node.js 런타임을 기본 이미지로 사용
#FROM node:21-alpine
##FROM node:20.10-alpine
#
## 작업 디렉토리 설정
#WORKDIR /usr/app
##WORKDIR /usr/root/frontend/src/app
#
## PM2 전역 설치
#RUN npm install --global pm2
#
## "package.json"과 "package-lock.json" 파일을 다른 파일보다 먼저 복사
## Docker 캐시 활용하여 의존성 재설치 방지
#COPY ./package*.json ./
#
## 의존성 설치
#RUN npm install
#
## 루트 사용자로부터 비-루트 사용자에게 파일/디렉토리 소유권 변경
#RUN chown -R node:node /usr/app
##RUN chown -R node:node /usr/root/frontend/src/app
#
## 모든 파일 복사하기
#COPY ./ ./
#
## 앱 빌드
##RUN npm run build
#
## 리스닝 포트 공개하기
#EXPOSE 2900
#
## 비-루트(비특권) 사용자로 실행하기
## Node.js Alpine 기본 이미지에는 "node"라는 비-루트(비특권) 사용자가 포함
##USER node
#
## PM2를 사용하여 앱 실행하기
#CMD [ "pm2-runtime", "start", "npm", "--", "run", "dev" ]
#
FROM node:alpine

WORKDIR /usr/src/app

#COPY package.json ./
COPY ./package*.json ./

RUN npm install

COPY ./ ./

#ENV NODE_ENV production

#CMD ["npm", "run", "start"]
CMD ["npm", "run", "dev"]
