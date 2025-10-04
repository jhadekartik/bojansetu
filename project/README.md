
bhojansetu
# BhojanSetu

Responsive web platform connecting surplus food providers (restaurants, individuals) with people in need.  
**Demo:** [https://bhojansetu.netlify.app/demo](https://bhojansetu.netlify.app/demo)

---

## Table of Contents


## Table of Contents
## About  
## Features  
## Tech Stack  
## Architecture & Workflow  
## Getting Started  
## Usage  
## Screenshots / Demo  
## Contributing  
## License  
## Contact  

---

## About
## About
BhojanSetu is a social impact-driven web platform designed to address one of the most pressing issues in urban and rural areas: food wastage and hunger. Every day, restaurants, households, and event organizers end up with surplus food that often goes to waste, while millions of people still struggle to get a single proper meal. BhojanSetu creates a bridge between those who have surplus food and those who need it.  

The platform provides a simple, responsive, and accessible interface where:  
- Donors (restaurants, individuals, or organizations) can quickly list surplus food items along with details like quantity, type of food, pickup location, and availability window.  
- Receivers (NGOs, individuals, or communities in need) can browse available donations, request food items, and track the status of their requests in real-time.  

The solution is designed with **ease of use, transparency, and scalability** in mind. With its mobile-first responsive design, BhojanSetu ensures accessibility for all kinds of users, even with limited digital literacy. The platform also aims to integrate notification systems, request tracking, and future scalability features like **AI-driven demand prediction** and **location-based donor–receiver matching**.  

BhojanSetu is not just a project; it is an initiative to encourage community collaboration and responsible resource sharing. By connecting surplus food providers with people in need, it contributes toward **zero hunger

BhojanSetu bridges the gap between those who have surplus food and those who need it.  
Users can donate, request, and track food availability through a simple, responsive interface.

Use cases:

- Individuals or organizations with surplus food can list donation offers.  
- People in need can request food based on availability.  
- Real-time tracking and status updates.  
- Clean UI/UX with mobile responsiveness.  

---

## Features

- User-friendly interface for donating and requesting food  
- Real-time availability updates  
- Request tracking and status updates  
- Search and filter for nearby donations  
- Responsive design for mobile and desktop  
- Notifications or alerts for new food items (optional)  

---

## Tech Stack

| Layer | Technologies |
|-------|---------------|
| Frontend | React (Vite), Tailwind CSS |
| Backend / API | Node.js, Express (if used) |
| Database | Firebase Firestore (or MongoDB if used) |
| Hosting | Netlify (frontend), optional backend hosting |
| Tools | Git, GitHub, PostCSS, Vite |

---

## Architecture & Workflow

1. **Frontend** calls backend API endpoints to fetch and update data (donations, requests).  
2. **Backend** handles business logic: create, update, delete, approve requests.  
3. **Database** stores users, donation items, requests, and statuses.  
4. Optionally, notifications or mail alerts are triggered when new donations or requests appear.  

---

## Getting Started

### Prerequisites

- Node.js (v14 or above)  
- npm or yarn  
- Git  
- (If using Firebase) Firebase CLI  

### Installation

```bash
git clone https://github.com/yourusername/bhojansetu.git
cd bhojansetu
npm install
