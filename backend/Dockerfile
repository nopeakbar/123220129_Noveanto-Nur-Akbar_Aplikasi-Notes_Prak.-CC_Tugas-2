# Gunakan image Node.js sebagai base image
FROM node:16

# Set working directory di dalam container
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh kode aplikasi ke dalam container
COPY . .

# Expose port yang digunakan aplikasi (untuk Cloud Run)
EXPOSE 8080

# Jalankan aplikasi
CMD ["node", "index.js"]
