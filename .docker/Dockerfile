FROM node:18.16.0-alpine 

RUN apk add --no-cache \
  bash \
  busybox-extras \
  fzf \
  git \
  htop \
  libc6-compat \
  ncdu \ 
  wget

RUN apk update && apk add --no-cache libc6-compat

RUN corepack enable && corepack prepare pnpm@7.4.1 --activate 

WORKDIR /var/www/fscn-website/current

USER node

CMD ["sh", "run-dev"]
