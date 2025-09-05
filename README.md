# Projects and Teams Collaboration Platform

A modern web platform for managing workspaces, projects, tasks, meetings, and team collaboration. Built with Next.js, TypeScript, Appwrite, and shadcn/ui.

---

## 🚀 Features

- **Authentication:** Email/password, Google, and GitHub OAuth login/signup.
- **Workspaces:** Create and manage multiple workspaces for different teams or clients.
- **Projects:** Organize work into projects within workspaces.
- **Tasks:** Kanban board, table, and calendar views for tasks. Assign tasks, set due dates, and track status.
- **Meetings:** Schedule, join, and manage meetings with calendar integration.
- **Members:** Invite, manage, and assign roles to workspace members.
- **Analytics:** Project and task analytics for productivity insights.
- **Responsive UI:** Mobile-friendly design with sidebar navigation and modals.
- **AI Chatbot:** Zapier AI chatbot available on all pages for instant help and automation.
- **Notifications:** Toast notifications for actions and errors.
- **Role-based Access:** Secure endpoints and UI based on user roles.
- **Appwrite Backend:** Secure, scalable backend for data, storage, and authentication.
- **Custom UI:** Built with shadcn/ui and Tailwind CSS for fast, accessible components.

---

## 🛠️ Getting Started

### 1. **Clone the repository**

```bash
git clone https://github.com/your-username/Projects-and-Teams-Collaboration-Platform.git
cd Projects-and-Teams-Collaboration-Platform
```

### 2. **Install dependencies**

Using **bun** (recommended):

```bash
bun install
```

Or with **npm**:

```bash
npm install
```

Or with **yarn**:

```bash
yarn install
```

### 3. **Configure environment variables**

Create a `.env.local` file in the root directory and add your Appwrite credentials:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your-appwrite-project-id
NEXT_PUBLIC_APPWRITE_DATABASE_ID=your-appwrite-database-id
NEXT_PUBLIC_APPWRITE_WORKSPACES_ID=your-workspaces-collection-id
NEXT_PUBLIC_APPWRITE_MEMBERS_ID=your-members-collection-id
NEXT_PUBLIC_APPWRITE_PROJECTS_ID=your-projects-collection-id
NEXT_PUBLIC_APPWRITE_TASKS_ID=your-tasks-collection-id
NEXT_PUBLIC_APPWRITE_IMAGES_BUCKET_ID=your-images-bucket-id
```

> **Note:** You must set up your Appwrite project, database, collections, and OAuth providers (Google/GitHub) before running the app.

### 4. **Run the development server**

Using **bun**:

```bash
bun run dev
```

Or with **npm**:

```bash
npm run dev
```

Or with **yarn**:

```bash
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 🧑‍💻 Project Structure

- `src/app/` — Next.js app router pages and layouts
- `src/components/` — Shared UI components
- `src/features/` — Feature modules (auth, meetings, members, projects, tasks, workspaces)
- `src/lib/` — Utility libraries and Appwrite integration
- `public/` — Static assets (logo, images, icons)

---

## 🤖 AI Chatbot

The Zapier AI chatbot is available on all pages. You can interact with it for help, automation, and support.

---

## 📦 Scripts

- `bun run dev` — Start development server
- `bun run build` — Build for production
- `bun run start` — Start production server

---

## 📝 License

MIT

---

## 💡 Contributing

Pull requests and issues are welcome!

---

## 📚 More

- [Appwrite Documentation](https://appwrite.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
