# RPS Playground - A Rock, Paper, Scissors Simulation

Welcome to the RPS Playground! This is an interactive web application built with Next.js that simulates a game of Rock, Paper, Scissors with moving elements in a physics-based environment.

## 📸 Screenshots

Here's a glimpse of the RPS Playground in action:

**Main Simulation View:**
*A dynamic view of the elements interacting on the canvas.*
<img src="https://placehold.co/800x450.png" alt="Main Simulation" data-ai-hint="simulation game" />
*Caption: The main simulation area where rocks, papers, and scissors move and collide.*

**Controls Panel:**
*A close-up of the user controls for the simulation.*
<img src="https://placehold.co/800x200.png" alt="Controls Panel" data-ai-hint="ui controls" />
*Caption: The control panel allows users to adjust element count, speed, and manage the simulation state (start, pause, reset).*


## ✨ Features

- **Interactive Simulation:** Watch as Rock, Paper, and Scissor elements move around the screen and interact with each other.
- **Dynamic Rules:** When two different elements collide, one transforms into the other based on the classic rules (Rock beats Scissors, Scissors beats Paper, Paper beats Rock).
- **Full Control:**
  - **Start/Pause:** Begin and pause the simulation at any time.
  - **Reset:** Reset the simulation to its initial state with the current settings.
  - **Element Count:** Customize the number of elements for each type (Rock, Paper, Scissors).
  - **Simulation Speed:** Adjust the movement speed of the elements.
- **Real-time Counter:** Keep track of the number of each element type as the simulation progresses.
- **Responsive Design:** The simulation and controls work seamlessly on both desktop and mobile devices.

## 🏗️ Architecture

The application is built with a simple and modern component-based architecture using Next.js and React. The core logic is encapsulated within React components, promoting reusability and separation of concerns.

```
/src
├── app/
│   ├── page.tsx       # Main entry point of the application
│   └── layout.tsx     # Root layout
│   └── globals.css    # Global styles and Tailwind directives
├── components/
│   ├── rps/
│   │   ├── RpsPlayground.tsx  # Main stateful component managing the simulation logic
│   │   ├── RpsElement.tsx     # Renders a single element (rock, paper, or scissor)
│   │   ├── RpsControls.tsx    # UI for controlling simulation parameters
│   │   ├── RpsCounter.tsx     # Displays the count of each element type
│   │   └── types.ts           # TypeScript types for the simulation
│   └── ui/
│       └── ... (ShadCN UI Components)
└── lib/
    └── utils.ts       # Utility functions (e.g., cn for classnames)
```

-   **`RpsPlayground.tsx`**: This is the heart of the application. It's a stateful component that manages the array of all elements, the simulation status (running, paused, finished), and the animation loop using `requestAnimationFrame`. It contains the physics logic for movement, wall collisions, and element interactions.
-   **`RpsElement.tsx`**, **`RpsControls.tsx`**, **`RpsCounter.tsx`**: These are primarily "dumb" or presentational components. They receive state and callback functions as props from `RpsPlayground` and are responsible for rendering the UI. This pattern keeps the application logic centralized in `RpsPlayground` and makes the UI components reusable and easy to test.
-   **`types.ts`**: This file defines the core data structures, like the `Element` and `ElementType` types, ensuring type safety across the different components.
-   **`app/page.tsx`**: The main page that assembles the application, rendering the header and the `RpsPlayground`.

This component structure ensures a clear data flow, where the state flows down from `RpsPlayground` to its children, and events flow up from the children (e.g., a button click in `RpsControls`) to the parent to update the state.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (with React)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript

## 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd <project-directory>
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:9002](http://localhost:9002) (or the port specified in your terminal) with your browser to see the result.

## 🎮 How to Play

1.  Use the controls at the bottom of the screen to set up your desired simulation.
2.  Adjust the "Elements per type" to set how many rocks, papers, and scissors start on the board.
3.  Click the **"Start"** button to begin the simulation.
4.  Use the **"Pause"** button to stop the action, and **"Start"** again to resume.
5.  Control the **Simulation Speed** with the slider while it's running.
6.  Click **"Reset"** at any time to start over with new elements based on your settings.
7.  The simulation ends when only one type of element remains.
