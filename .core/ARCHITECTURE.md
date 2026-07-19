# Durozen Website Architecture

## Architectural Changes Log
*Note: Each time the architecture changes, append the change in this section with a timestamp. NEVER overwrite the historical architecture.*

### [2026-07-08 10:50:00] Initial Duro POS Architecture Tracking

### [2026-07-08 13:15:00] Migrated configuration to Durozen Website

## Code Files & Folders Structure

```text
Durozen Website (Root)
├── public/                 # Static assets (images, icons)
├── src/                    # Application source code
│   ├── components/         # Reusable React components
│   ├── pages/              # Page-level components
│   ├── index.css           # Global Tailwind styles
│   ├── main.tsx            # React application entry point
│   └── App.tsx             # Main router configuration
├── package.json            # Node dependencies
├── tailwind.config.js      # Tailwind configuration
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript configuration
```
