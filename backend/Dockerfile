FROM node:20-alpine

# Tentukan direktori kerja di dalam container
WORKDIR /app

# Salin semua file aplikasi ke dalam container
COPY . .

# Install dependencies
RUN npm install --production

# Expose port 8080 untuk Cloud Run
EXPOSE 8080

# Jalankan aplikasi
CMD ["node", "index.js"]
