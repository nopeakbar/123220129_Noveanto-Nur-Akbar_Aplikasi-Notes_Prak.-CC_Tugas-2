# Gunakan image dasar Node.js
FROM node:18

# Buat direktori kerja dalam container
WORKDIR /usr/src/app

# Salin file package.json dan install dependency
COPY package*.json ./
RUN npm install

# Salin seluruh project ke container
COPY . .

# Pastikan Cloud Run bisa tahu kita pakai environment variable PORT
ENV PORT=8080

# Ekspos port (gunakan 8080, bukan 3000)
EXPOSE 8080

# Jalankan aplikasi
CMD ["node", "index.js"]
