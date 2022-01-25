#!/bin/sh

echo "sleeping for 10 secs to allow postgres to start..."
sleep 10

echo "executing script..."
npx prisma migrate deploy;
npm run dev