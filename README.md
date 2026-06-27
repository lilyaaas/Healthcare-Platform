# 🏥 Healthcare Platform

A comprehensive full-stack healthcare management system built with modern web technologies. This platform enables seamless interaction between patients, doctors, and administrators for efficient healthcare service delivery.

## 🎯 Overview

Healthcare Platform is a full-stack web application designed to streamline healthcare operations. It provides a robust backend API with a modern, responsive frontend that allows users to manage appointments, access healthcare services, and maintain their medical information efficiently.

## ✨ Features

### 👤 User Management
- **User Authentication**: Secure login and registration with JWT tokens
- **Role-Based Access Control**: Different access levels for patients, doctors, and administrators
- **User Profiles**: Manage personal and professional information
- **Password Security**: Industry-standard encryption with bcryptjs

### 📅 Appointment Management
- **Schedule Appointments**: Patients can book appointments with doctors
- **Appointment Tracking**: Real-time appointment status monitoring
- **Calendar Integration**: View available time slots
- **Appointment History**: Track past and upcoming appointments

### 👨‍⚕️ Doctor Management
- **Doctor Profiles**: Detailed doctor information including specialization
- **Availability Management**: Manage working hours and availability
- **Doctor Discovery**: Find doctors by specialty or location
- **Patient Reviews**: Feedback and ratings system

### 🩺 Patient Management
- **Patient Records**: Comprehensive patient information storage
- **Medical History**: Track patient medical background
- **Prescription Management**: Digital prescription handling
- **Health Dashboard**: Personal health overview

### 🔐 Admin Features
- **User Management**: Monitor and manage all platform users
- **System Analytics**: Platform usage and performance metrics
- **Content Management**: Manage platform content and categories
- **Audit Logs**: Track important system activities

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19.2.6
- **Build Tool**: Vite 8.0.12
- **Styling**: TailwindCSS 4.3.1
- **Routing**: React Router DOM 7.17.0
- **HTTP Client**: Axios 1.18.0
- **Forms**: React Hook Form 7.79.0
- **Icons**: Lucide React 1.18.0
- **Linting**: ESLint 10.3.0

### Backend
- **Runtime**: Node.js
- **Server**: Express 5.2.1
- **Database**: MongoDB with Mongoose 9.6.2
- **Authentication**: JWT (jsonwebtoken 9.0.3)
- **Security**: bcryptjs 3.0.3
- **CORS**: Enabled for cross-origin requests
- **Development**: Nodemon for hot-reload
- **Environment**: dotenv 17.4.2

### Shared
- Configuration and utilities shared across frontend and backend