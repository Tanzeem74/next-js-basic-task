# 🌿 GreenParadise - Premium Plant E-Commerce

A modern, premium e-commerce web application for plants and trees built with Next.js 15 and Tailwind CSS.

## ✨ Features

### 🏠 Landing Page
- **7 Premium Sections:**
  - Hero Section with gradient background and CTA
  - Features Section (Why Choose Us)
  - How It Works (4-step process)
  - Stats Section (Impact numbers)
  - Benefits Section (Transform Your Space)
  - Testimonials (Customer reviews)
  - Call-to-Action Section

### 🛍️ Shop Page
- Product grid with premium card design
- Category filtering
- Sort functionality
- Responsive layout (up to 4 columns)
- Hover effects and animations

### 📄 Product Detail Page
- Detailed product information
- Premium card-based layout
- Feature highlights
- Contact seller option

### 🔐 Authentication
- Mock login system
- Login/Logout functionality
- Cookie-based session management
- Demo credentials included

### 🎨 Design Features
- Modern, premium UI/UX
- Gradient backgrounds and effects
- Glassmorphism elements
- Smooth animations and transitions
- Fully responsive design
- No external images (icon-based design)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nextshop
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔑 Demo Credentials

Use these credentials to test the login functionality:

- **Email:** admin@example.com
- **Password:** 123456

## 📁 Project Structure

```
nextshop/
├── app/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with auth
│   │   ├── Footer.jsx          # Footer component
│   │   └── ItemCard.jsx        # Product card component
│   ├── data/
│   │   └── items.json          # Product data (30 items)
│   ├── items/
│   │   ├── page.jsx            # Shop page
│   │   └── [id]/
│   │       └── page.jsx        # Product detail page
│   ├── login/
│   │   └── page.jsx            # Login page
│   ├── layout.jsx              # Root layout
│   ├── page.jsx                # Landing page
│   └── globals.css             # Global styles
├── public/                     # Static assets
├── package.json
└── README.md
```

## 🛠️ Technologies Used

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** JavaScript (React)
- **Icons:** SVG & Emoji
- **Fonts:** System fonts

## 📦 Product Categories

The application includes 30+ products across various categories:
- 🌳 Fruit Trees
- 🌸 Flowering Trees
- 🌲 Shade Trees
- 💊 Medicinal Trees
- 🪵 Timber Trees
- 🌲 Evergreen Trees
- 🎋 Bamboo
- 🌿 Ornamental Plants
- 🧗 Climbers
- 💧 Aquatic Plants

## 🎨 Color Palette

- **Primary:** Emerald/Green gradients
- **Secondary:** Slate/Gray tones
- **Accent:** Various gradient combinations
- **Background:** White, Slate-50, Dark gradients

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px
- **Large Desktop:** > 1280px

## 🔧 Key Components

### Navbar
- Dynamic Login/Logout button
- Responsive navigation
- Premium gradient styling
- Authentication state management

### Footer
- 4-column layout
- Quick links and categories
- Contact information
- Social links ready

### ItemCard
- Image with hover zoom
- Price badge overlay
- Category badge
- 5-star rating
- Gradient CTA button

## 🌟 Features Highlights

1. **No External Images:** All designs use gradients, colors, and icons
2. **Premium Aesthetics:** Modern, sophisticated design language
3. **Smooth Animations:** Hover effects, transitions, and transforms
4. **Glassmorphism:** Backdrop blur effects throughout
5. **Gradient Mastery:** Strategic use of color gradients
6. **Responsive Design:** Mobile-first approach

## 📝 Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🚧 Future Enhancements

- [ ] Add shopping cart functionality
- [ ] Implement real authentication
- [ ] Add product search
- [ ] Integrate payment gateway
- [ ] Add user profile page
- [ ] Implement wishlist feature
- [ ] Add product reviews
- [ ] Multi-language support



## 👨‍💻 Author

Created with 💚 by Shah Tanzeem Afsar

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Note:** This is a demo project with mock authentication. For production use, implement proper backend authentication and security measures.
