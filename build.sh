cd frontend
npm run build
cd ..
rm -rf backend/build
mv frontend/build backend/build