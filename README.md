# RPS Playground - A Rock, Paper, Scissors Simulation

Welcome to the RPS Playground! This is an interactive web application built with Next.js that simulates a game of Rock, Paper, Scissors with moving elements in a physics-based environment.

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
