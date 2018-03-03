FROM node:9.6-alpine AS buildAgent
COPY package.json yarn.lock ./
RUN npm set progress=false && npm config set depth 0 && npm cache clean --force
## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN yarn && mkdir /ng-app && cp -R ./node_modules ./ng-app
WORKDIR /ng-app/
COPY . .
## Build the angular app in production mode and store the artifacts in dist folder
RUN yarn build

FROM nginx:1.13.9-alpine
## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=buildAgent /ng-app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]