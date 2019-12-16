# Stage 1
FROM node:8 as react-build
WORKDIR /app
COPY . ./
RUN npm install

# Stage 2 - the production environment
# FROM nginx:latest
# COPY --from=react-build /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
