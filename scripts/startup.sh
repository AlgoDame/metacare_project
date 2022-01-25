#!/bin/sh

echo "Sleeping for 10 seconds to allow postgres to start..."

sleep 10

echo "Executing script..."

npx prisma migrate deploy
npm run dev