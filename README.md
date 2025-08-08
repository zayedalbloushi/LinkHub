# 🌐 LinkHub — Modern Personal Links Page

A beautifully designed, responsive, and animated **personal links page** built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.  
Perfect for creators, developers, and professionals who want to share their most important links in one place.

---

## ✨ Features

- 🎨 **Minimal & Modern UI** — Sleek glassmorphism card design
- 🌈 **Animated Backgrounds** — Aurora effects & smooth gradients
- ⚡ **Interactive Animations** — Built with Framer Motion
- 📱 **Fully Responsive** — Works on all devices
- 🛠 **Easy Customization** — Update links directly in the code
- 🔒 **Privacy-Friendly** — No tracking or analytics by default

---

## 📸 Preview

![Preview Screenshot](public/preview.png)

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/linkhub.git
cd linkhub
````

### 2️⃣ Install dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### 3️⃣ Run the development server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Then open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## ⚙️ Customization

Links are defined directly in the `LinksPage` component.
To change them, open:

```
app/links/page.tsx
```

Find the `links` array:

```ts
const links: LinkItem[] = [
  {
    title: 'Instagram',
    url: 'https://instagram.com/johndoe',
    icon: <Instagram className="h-5 w-5" />,
    className: 'from-pink-500 via-red-500 to-amber-400 text-white',
    subtitle: '@johndoe',
  },
  {
    title: 'GitHub',
    url: 'https://github.com/johndoe',
    icon: <Github className="h-5 w-5" />,
    className: 'from-neutral-900 to-neutral-800 text-white border border-neutral-700/60',
    subtitle: 'Open Source',
  },
];
```

Replace URLs, subtitles, and colors with your own.

You can also replace the profile image in:

```
/public/profile.jpg
```

---

## 🛠 Tech Stack

* **Next.js 14**
* **Tailwind CSS**
* **Framer Motion**
* **Lucide Icons**

---

## 📦 Deployment

Easily deploy with [Cloudflare Pages](https://pages.cloudflare.com/), [Vercel](https://vercel.com/), or any static hosting service.

Example (Cloudflare Pages):

1. Push to GitHub
2. Connect repo to Cloudflare Pages
3. Select `Next.js` as framework
4. Set build command to `npm run build`
5. Output directory: `.next`

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙌 Credits

Made with ❤️ by **Zayed Albloushi**
