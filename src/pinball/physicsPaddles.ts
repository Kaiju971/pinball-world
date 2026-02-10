import Matter from "matter-js";

export interface Paddles {
    leftPaddle: Matter.Body;
    rightPaddle: Matter.Body;
}

export const createPaddles = (width: number, height: number): Paddles => {
    const paddleWidth = 120;
    const paddleHeight = 20;
    const paddleY = height - 100;
    const paddleXOffset = width / 4; // Ajustement de la position X

    const leftPaddlePosition = { x: width / 2 - paddleXOffset, y: paddleY };
    const rightPaddlePosition = { x: width / 2 + paddleXOffset, y: paddleY };

    const leftPaddle = Matter.Bodies.rectangle(leftPaddlePosition.x, leftPaddlePosition.y, paddleWidth, paddleHeight, {
        isStatic: true, // Pour l'instant static pour tester, ensuite on mettra des contraintes
        angle: Math.PI / 6,
        render: { fillStyle: '#ff0000' }
    });

    const rightPaddle = Matter.Bodies.rectangle(rightPaddlePosition.x, rightPaddlePosition.y, paddleWidth, paddleHeight, {
        isStatic: true,
        angle: -Math.PI / 6,
        render: { fillStyle: '#ff0000' }
    });

    // TODO: Implement revolute constraints for actual flipper mechanics

    return { leftPaddle, rightPaddle };
};

export const createFlipper = (x: number, y: number, isLeft: boolean): { body: Matter.Body, pivot: Matter.Constraint, stopper: Matter.Body } => {
    const width = 120;
    const height = 20;

    // TODO: Implement proper flipper physics with constraints
    // This is a placeholder for now
    const body = Matter.Bodies.rectangle(x, y, width, height, {
        render: { fillStyle: '#ff0000' }
    });
    const pivot = Matter.Constraint.create({
        pointA: { x: x, y: y },
        bodyB: body,
        length: 0,
        stiffness: 0.9,
    });

    // We need a stopper to prevent the flipper from rotating 360 degrees
    const stopper = Matter.Bodies.circle(x, y + 20, 10, { isStatic: true, render: { visible: false } });

    return { body, pivot, stopper };
}
