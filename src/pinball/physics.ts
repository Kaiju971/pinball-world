// src/pinball/physics.ts
import * as CANNON from "cannon-es";

export function createWorld() {
  const world = new CANNON.World();
  world.gravity.set(0, -9.82 * 0.9, 0);

  const solver = new CANNON.GSSolver();
  solver.iterations = 10; // OK avec GSSolver
  solver.tolerance = 0.001;

  world.solver = solver;

  world.broadphase = new CANNON.NaiveBroadphase();
  return world;
}

/** Create a dynamic ball */
export function createBall(radius = 0.12, mass = 0.45) {
  const shape = new CANNON.Sphere(radius);
  const body = new CANNON.Body({ mass, shape });
  body.linearDamping = 0.02;
  body.angularDamping = 0.02;
  return body;
}

/** Create static bumper (sphere-like) */
export function createBumper(x: number, y: number, z: number, r = 0.18) {
  const shape = new CANNON.Sphere(r);
  const body = new CANNON.Body({ mass: 0 });
  body.addShape(shape);
  body.position.set(x, y, z);
  // increase restitution by contact material config later
  return body;
}

/** Create flipper using hinge constraint
 *  anchor = hinge position, length = length of flipper, isLeft true flips direction
 */
export function createFlipper(
  world: CANNON.World,
  anchor: CANNON.Vec3,
  length = 0.8,
  isLeft = true
) {
  // create flipper body (thin box)
  const box = new CANNON.Box(new CANNON.Vec3(length * 0.5, 0.06, 0.06));
  const flipper = new CANNON.Body({ mass: 1 });
  flipper.addShape(box);
  // place flipper so hinge at anchor; set position offset
  flipper.position.set(
    anchor.x + (isLeft ? -length / 2 : length / 2),
    anchor.y,
    anchor.z
  );
  // static pivot (small sphere mass 0)
  const pivot = new CANNON.Body({ mass: 0 });
  pivot.addShape(new CANNON.Sphere(0.01));
  pivot.position.copy(anchor);

  world.addBody(flipper);
  world.addBody(pivot);

  // hinge axis: along Z
  const hinge = new CANNON.HingeConstraint(flipper, pivot, {
    pivotA: new CANNON.Vec3(isLeft ? -length / 2 : length / 2, 0, 0),
    pivotB: new CANNON.Vec3(0, 0, 0),
    axisA: new CANNON.Vec3(0, 0, 1),
    axisB: new CANNON.Vec3(0, 0, 1),
  });

  // enable motor but motor speed controlled externally
  hinge.enableMotor();
  hinge.setMotorSpeed(0);
  hinge.setMotorMaxForce(60);


  world.addConstraint(hinge);

  return { flipper, pivot, hinge };
}


// import * as CANNON from "cannon-es";

// export function createWorld() {
//   const world = new CANNON.World();
//   world.gravity.set(0, -9.82 * 1.1, 0);
//   world.broadphase = new CANNON.SAPBroadphase(world);
//   world.defaultContactMaterial.friction = 0.1;
//   world.defaultContactMaterial.restitution = 0.7;

//   const ballMaterial = new CANNON.Material("ball");
//   const flipperMaterial = new CANNON.Material("flipper");
//   const bumperMaterial = new CANNON.Material("bumper");

//   world.addContactMaterial(
//     new CANNON.ContactMaterial(ballMaterial, flipperMaterial, {
//       friction: 0.1,
//       restitution: 0.8,
//     })
//   );
//   world.addContactMaterial(
//     new CANNON.ContactMaterial(ballMaterial, bumperMaterial, {
//       friction: 0.1,
//       restitution: 1.5,
//     })
//   );

//   return { world, ballMaterial, flipperMaterial, bumperMaterial };
// }

// export function createBall(radius = 0.12, mass = 0.45) {
//   const shape = new CANNON.Sphere(radius);
//   const body = new CANNON.Body({ mass, shape });
//   body.linearDamping = 0.02;
//   body.angularDamping = 0.02;
//   return body;
// }

// export function createBumper(x: number, y: number, z: number, r = 0.18) {
//   const shape = new CANNON.Sphere(r);
//   const body = new CANNON.Body({ mass: 0 });
//   body.addShape(shape);
//   body.position.set(x, y, z);
//   return body;
// }

// export function createFlipper(
//   world: CANNON.World,
//   anchor: CANNON.Vec3,
//   length = 0.8,
//   isLeft = true
// ) {
//   const box = new CANNON.Box(new CANNON.Vec3(length * 0.5, 0.06, 0.06));
//   const flipper = new CANNON.Body({ mass: 0.5 });
//   flipper.addShape(box);
//   flipper.position.set(
//     anchor.x + (isLeft ? -length / 2 : length / 2),
//     anchor.y,
//     anchor.z
//   );
//   flipper.linearDamping = 0.5;
//   flipper.angularDamping = 0.8;

//   const pivot = new CANNON.Body({ mass: 0 });
//   pivot.addShape(new CANNON.Sphere(0.01));
//   pivot.position.copy(anchor);
//   world.addBody(flipper);
//   world.addBody(pivot);

//   const hinge = new CANNON.HingeConstraint(flipper, pivot, {
//     pivotA: new CANNON.Vec3(isLeft ? -length / 2 : length / 2, 0, 0),
//     pivotB: new CANNON.Vec3(0, 0, 0),
//     axisA: new CANNON.Vec3(0, 0, 1),
//     axisB: new CANNON.Vec3(0, 0, 1),
//   });
//   hinge.enableMotor();
//   hinge.setMotorSpeed(0);
//   hinge.setMotorMaxForce(50);
//   world.addConstraint(hinge);

//   return { flipper, pivot, hinge };
// }

// export function createHole(x: number, y: number, r = 0.2) {
//   const shape = new CANNON.Cylinder(r, r, 0.1, 8);
//   const body = new CANNON.Body({ mass: 0, shape });
//   body.position.set(x, y, 0);
//   body.material = new CANNON.Material({ restitution: 0 });
//   return body;
// }
