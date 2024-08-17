# ใช้ base image ที่เหมาะสม
FROM node:14

# ตั้งค่า working directory
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกโค้ดทั้งหมดไปที่ working directory
COPY . .

# ตั้งค่า port ที่ container จะเปิด
EXPOSE 8080

# รันแอพพลิเคชั่น
CMD ["node", "server.js"]
