# Gunakan image dasar Node.js
FROM node:18

# Buat direktori kerja dalam container
WORKDIR /usr/src/app

# Salin file package.json dan install dependency
COPY package*.json ./
RUN npm install

# Salin seluruh project ke container
COPY . .

# Ekspos port aplikasi
EXPOSE 3000

# Jalankan aplikasi
CMD ["node", "index.js"]
