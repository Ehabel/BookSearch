# docker build -t book-search .
# docker run -dp 3000:3000  book-search

FROM node:18
WORKDIR /app
RUN mkdir -p /opt/node_modules
COPY ./package.json /app
COPY ./package-lock.json /app
RUN npm i
COPY ./ /app
EXPOSE 5173
CMD ["npm", "run", "dev"]