FROM public.ecr.aws/docker/library/node:18.16.0-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    libssl3 \
    && rm -rf /var/lib/apt/lists/*

ADD prisma/migrations/ ./prisma/migrations/
ADD prisma/schema.prisma ./prisma/
ADD public/ ./public/
ADD src/ ./src/
ADD bootstrap.sh next.config.js postcss.config.cjs tailwind.config.cjs tsconfig.json \
  package.json yarn.lock \
  ./
RUN yarn install && yarn build

EXPOSE 80
CMD ["./bootstrap.sh"]
