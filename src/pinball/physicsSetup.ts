import Matter from "matter-js";

export const createPinballPhysics = (containerOrCanvas: HTMLElement, width: number, height: number, debug = true) => {
    const engine = Matter.Engine.create();
    const world = engine.world;

    // Disable gravity for top-down view if needed, but for pinball usually we want Y gravity
    engine.gravity.y = 0.8; // Adjust gravity as needed
    engine.gravity.x = 0;

    const render = Matter.Render.create({
        element: containerOrCanvas,
        engine: engine,
        options: {
            width,
            height,
            wireframes: debug, // Set to false for final look if we use Matter.Render, usually we use Three.js
            background: 'transparent'
        },
    });

    const runner = Matter.Runner.create();

    return { engine, world, render, runner };
};

export const createBoundaries = (width: number, height: number) => {
    const wallOptions = { isStatic: true, render: { fillStyle: '#fff' } };
    const walls = [
        Matter.Bodies.rectangle(width / 2, -50, width, 100, wallOptions), // Top
        Matter.Bodies.rectangle(width / 2, height + 50, width, 100, wallOptions), // Bottom (sensor or kill zone?)
        Matter.Bodies.rectangle(-50, height / 2, 100, height, wallOptions), // Left
        Matter.Bodies.rectangle(width + 50, height / 2, 100, height, wallOptions), // Right
    ];
    return walls;
};
