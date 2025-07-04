# 🛍️ Full Stack Product Catalog

A modern full-stack web application showcasing a product catalog, built with:

- **React TypeScript** + **Tailwind CSS** for the frontend UI
- **Apollo Client** + **GraphQL Gateway (Go)** for API querying
- **C# ASP.NET Core** for backend data serving
- Connected via a custom GraphQL Gateway that unifies backend services

---

## 📸 Screenshot

![Fullstack](https://github.com/user-attachments/assets/3fd8d8ee-4b7a-4800-aa1f-cba8a75a4c1b)

---

## 🧩 Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Frontend  | React + TypeScript + Tailwind CSS   |
| GraphQL   | Apollo Client + gqlgen (Go)         |
| Backend   | C# .NET Web API                     |
| Styling   | Tailwind CSS                        |
| Transport | GraphQL HTTP Queries                |
| Data      | In-memory (demo) or SQL-based (ext.)|

---

## 🚀 Features

- 💡 Clean UI with responsive Tailwind styling
- 🔎 Dynamic product listing using Apollo GraphQL queries
- 🌐 GraphQL Gateway written in Go to decouple client and services
- 🧱 Modular C# backend with route-based product data endpoints

---

## 🛠️ Getting Started

### 📦 Prerequisites

- Node.js 18+
- Go 1.21+
- .NET 8 SDK
- PostgreSQL (optional, if adding persistence)

---

### 📁 Project Structure

```bash
.
├── react-frontend         # React app (TS, Tailwind, Apollo)
├── go-graphql-gateway
├── CatalogService         # C# API to pre-load and provide the data to the Go microservice
