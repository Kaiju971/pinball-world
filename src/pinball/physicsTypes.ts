
export interface PinballPhysicsData {
    world: Matter.World;
    engine: Matter.Engine;
    runner: Matter.Runner;
    render: Matter.Render;
}

export interface PhysicsElement {
    body: Matter.Body;
    type: 'wall' | 'flipper' | 'ball' | 'bumper' | 'sensor';
    score?: number;
}
